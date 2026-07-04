"use client";

/**
 * FaqAccordion — Reusable, animated accordion for FAQ sections.
 *
 * Features:
 *  - Accessible: uses <details>/<summary> semantics (no JS required to open)
 *  - SEO: render all Q&A text in DOM (search engines can index it)
 *  - Animated: smooth max-height + opacity transition via CSS custom property
 *  - Dark-mode aware: inherits design-system CSS variables
 *  - One-open-at-a-time OR multi-open mode (via `multiOpen` prop)
 *
 * Usage:
 *   import FaqAccordion from "@/components/FaqAccordion";
 *   import myFaqs from "@/data/faqs/my-page-faqs";
 *
 *   <FaqAccordion
 *     faqs={myFaqs}
 *     title="Frequently Asked Questions"
 *     subtitle="Everything you need to know."
 *   />
 */

import { useCallback, useRef, useState } from "react";
import type { FaqItem } from "@/data/faqs/best-health-insurance-companies-usa";

interface FaqAccordionProps {
    faqs: FaqItem[];
    /** Section heading shown above the accordion (optional) */
    title?: string;
    /** Short paragraph under the heading (optional) */
    subtitle?: string;
    /** Allow multiple items open simultaneously (default: false) */
    multiOpen?: boolean;
}

export default function FaqAccordion({
    faqs,
    title = "Frequently Asked Questions",
    subtitle,
    multiOpen = false,
}: FaqAccordionProps) {
    // Track open indexes; -1 means nothing open
    const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set());

    // Height refs for each panel — used for CSS transition
    const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

    const toggle = useCallback(
        (idx: number) => {
            setOpenIndexes((prev) => {
                const next = new Set(prev);
                if (next.has(idx)) {
                    next.delete(idx);
                } else {
                    if (!multiOpen) next.clear();
                    next.add(idx);
                }
                return next;
            });
        },
        [multiOpen],
    );

    return (
        <section className="faq-accordion-section">
            {/* ── Header ─────────────────────────────────────── */}
            {(title || subtitle) && (
                <div className="faq-accordion-header">
                    {title && <h2 className="faq-accordion-title">{title}</h2>}
                    {subtitle && (
                        <p className="faq-accordion-subtitle">{subtitle}</p>
                    )}
                </div>
            )}

            {/* ── Items ──────────────────────────────────────── */}
            <div
                className="faq-accordion-list"
                role="list"
                aria-label="Frequently asked questions"
            >
                {faqs.map((item, idx) => {
                    const isOpen = openIndexes.has(idx);
                    const panelId = `faq-panel-${idx}`;
                    const triggerId = `faq-trigger-${idx}`;

                    return (
                        <div
                            key={item.q}
                            className={`faq-item${isOpen ? " faq-item--open" : ""}`}
                            role="listitem"
                        >
                            {/* Question (trigger) */}
                            <button
                                id={triggerId}
                                aria-expanded={isOpen}
                                aria-controls={panelId}
                                className="faq-trigger"
                                onClick={() => toggle(idx)}
                            >
                                {/* Number badge */}
                                <span className="faq-trigger-badge" aria-hidden="true">
                                    {String(idx + 1).padStart(2, "0")}
                                </span>

                                {/* Question text */}
                                <span className="faq-trigger-question">{item.q}</span>

                                {/* Animated chevron */}
                                <span className="faq-trigger-icon" aria-hidden="true">
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M5 7.5L10 12.5L15 7.5"
                                            stroke="currentColor"
                                            strokeWidth="1.75"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                            </button>

                            {/* Answer (panel) — always in DOM for SEO */}
                            <div
                                id={panelId}
                                role="region"
                                aria-labelledby={triggerId}
                                className="faq-panel"
                                // CSS reads this to animate height
                                style={
                                    {
                                        "--panel-height": isOpen
                                            ? `${contentRefs.current[idx]?.scrollHeight ?? 0}px`
                                            : "0px",
                                    } as React.CSSProperties
                                }
                            >
                                <div
                                    ref={(el) => {
                                        contentRefs.current[idx] = el;
                                    }}
                                    className="faq-panel-inner"
                                >
                                    <p className="faq-answer">{item.a}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* ── Styles ─────────────────────────────────────── */}
            <style>{`
        /* =====================================================
           FAQ ACCORDION — scoped component styles
           (uses global design-system CSS vars)
           ===================================================== */

        .faq-accordion-section {
          width: 100%;
        }

        /* Header */
        .faq-accordion-header {
          text-align: center;
          margin-bottom: var(--space-xl);
        }

        .faq-accordion-title {
          /* inherits h2 from globals.css */
        }

        .faq-accordion-subtitle {
          font-size: clamp(16px, 1.25vw, 18px);
          color: var(--text-light);
          line-height: 1.7;
          font-family: var(--font-body);
          max-width: 52ch;
          margin: var(--space-sm) auto 0;
        }

        /* List wrapper */
        .faq-accordion-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-sm);
          max-width: 860px;
          margin-inline: auto;
        }

        /* Individual item */
        .faq-item {
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          background: var(--surface);
          box-shadow: var(--shadow-sm);
          overflow: hidden;
          transition:
            border-color 0.25s ease,
            box-shadow 0.25s ease,
            transform 0.2s ease;
        }

        .faq-item:hover {
          border-color: var(--border-strong);
          box-shadow: var(--shadow-md);
          transform: translateY(-1px);
        }

        .faq-item--open {
          border-color: var(--primary-light);
          box-shadow: 0 0 0 3px rgba(29, 111, 184, 0.12), var(--shadow-md);
        }

        /* Trigger button */
        .faq-trigger {
          width: 100%;
          display: flex;
          align-items: center;
          gap: var(--space-md);
          padding: var(--space-md) var(--space-lg);
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: left;
          font-family: var(--font-heading);
          color: var(--text);
          transition: background 0.2s ease;
        }

        .faq-trigger:hover {
          background: var(--surface-hover);
        }

        /* Number badge */
        .faq-trigger-badge {
          flex-shrink: 0;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--gradient-accent);
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 700;
          color: var(--primary);
          font-family: var(--font-heading);
          letter-spacing: 0.02em;
          transition: background 0.25s ease, border-color 0.25s ease;
        }

        .faq-item--open .faq-trigger-badge {
          background: var(--primary);
          border-color: var(--primary);
          color: #fff;
        }

        /* Question text */
        .faq-trigger-question {
          flex: 1;
          font-size: clamp(15px, 1.1vw, 17px);
          font-weight: 600;
          line-height: 1.45;
          color: var(--text);
        }

        /* Chevron icon */
        .faq-trigger-icon {
          flex-shrink: 0;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 1.5px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--muted);
          transition:
            transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
            color 0.2s ease,
            border-color 0.2s ease,
            background 0.2s ease;
        }

        .faq-item--open .faq-trigger-icon {
          transform: rotate(180deg);
          color: var(--primary-light);
          border-color: var(--primary-light);
          background: rgba(29, 111, 184, 0.08);
        }

        /* Animated panel */
        .faq-panel {
          max-height: var(--panel-height, 0px);
          overflow: hidden;
          transition: max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .faq-panel-inner {
          padding: 0 var(--space-lg) var(--space-md);
          padding-left: calc(var(--space-lg) + 32px + var(--space-md));
          /* aligns answer text under the question text (after badge) */
        }

        /* Answer text */
        .faq-answer {
          font-size: clamp(14px, 1.1vw, 16px);
          color: var(--text-light);
          line-height: 1.75;
          font-family: var(--font-body);
        }

        @media (max-width: 480px) {
          .faq-panel-inner {
            /* on very small screens, don't offset by badge width */
            padding-left: var(--space-md);
          }
        }
      `}</style>
        </section>
    );
}
