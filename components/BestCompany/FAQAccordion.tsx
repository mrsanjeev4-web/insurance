"use client";

import { companyFaqs } from "@/data";
import { useState } from "react";


export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div style={{ display: "grid", gap: "var(--space-sm)" }}>
      {companyFaqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={faq.question} className="accordion-item" data-open={isOpen}>
            <button
              type="button"
              className="accordion-trigger"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <span>{faq.question}</span>
              <span className="accordion-icon" aria-hidden>
                +
              </span>
            </button>
            {isOpen && (
              <div id={`faq-panel-${i}`} className="accordion-panel">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
