"use client";

import { useState } from "react";
import Image from "next/image";

const ALL_COMPANIES = [
    {
        name: "Kaiser Permanente",
        slug: "kaiser-permanente",
        logo: "https://logo.clearbit.com/kp.org",
        bestFor: "Overall Satisfaction",
        network: "Large",
        rating: "4.8",
        monthlyFrom: "From ~$350/mo",
        states: "8 states + DC",
        planTypes: ["HMO"],
        officialUrl: "https://www.kp.org",
        pros: ["Excellent satisfaction scores", "Integrated care model", "Strong preventive care", "Easy digital access"],
        cons: ["Limited to ~8 states", "Must stay in Kaiser network"],
        idealFor: "Individuals and families seeking comprehensive care management.",
        summary: "Kaiser's integrated model means your insurer and care team are one — resulting in fewer gaps and better outcomes.",
    },
    {
        name: "UnitedHealthcare",
        slug: "unitedhealthcare",
        logo: "https://logo.clearbit.com/uhc.com",
        bestFor: "Largest Network",
        network: "Very Large",
        rating: "4.7",
        monthlyFrom: "From ~$300/mo",
        states: "All 50 states",
        planTypes: ["HMO", "PPO", "EPO"],
        officialUrl: "https://www.uhc.com",
        pros: ["900k+ providers nationwide", "Broad plan selection", "Strong digital tools", "All 50 states"],
        cons: ["Premiums can be higher", "Plan complexity"],
        idealFor: "People who want maximum provider choice.",
        summary: "UnitedHealthcare is the largest US health insurer, with unmatched provider access and robust digital tools.",
    },
    {
        name: "Humana",
        slug: "humana",
        logo: "https://logo.clearbit.com/humana.com",
        bestFor: "Medicare Advantage",
        network: "Large",
        rating: "4.6",
        monthlyFrom: "From ~$0/mo (Medicare)",
        states: "Most states",
        planTypes: ["HMO", "PPO", "Medicare Advantage"],
        officialUrl: "https://www.humana.com",
        pros: ["Top Medicare plans", "Wellness extras", "Competitive drug coverage"],
        cons: ["Limited individual market", "Coverage varies by state"],
        idealFor: "Seniors and Medicare beneficiaries.",
        summary: "Humana is a go-to for seniors, offering robust Medicare Advantage plans with wellness perks.",
    },
    {
        name: "Aetna",
        slug: "aetna",
        logo: "https://logo.clearbit.com/aetna.com",
        bestFor: "Employer Plans",
        network: "Large",
        rating: "4.5",
        monthlyFrom: "From ~$280/mo",
        states: "Most states",
        planTypes: ["HMO", "PPO", "EPO"],
        officialUrl: "https://www.aetna.com",
        pros: ["Large provider network", "Strong wellness programs", "Good digital experience"],
        cons: ["Plan options vary by state", "Support can vary"],
        idealFor: "Employees seeking employer-sponsored coverage.",
        summary: "Aetna's employer-focused plans combine strong networks with wellness incentives.",
    },
    {
        name: "Cigna Healthcare",
        slug: "cigna",
        logo: "https://logo.clearbit.com/cigna.com",
        bestFor: "Global Coverage",
        network: "Large",
        rating: "4.5",
        monthlyFrom: "From ~$320/mo",
        states: "Most states",
        planTypes: ["HMO", "PPO", "International"],
        officialUrl: "https://www.cigna.com",
        pros: ["Global healthcare network", "Strong support", "Comprehensive plans"],
        cons: ["Higher premiums in some markets", "Limited ACA plans"],
        idealFor: "International professionals and frequent travelers.",
        summary: "Cigna shines for expats and global workers who need seamless healthcare across borders.",
    },
    {
        name: "Elevance Health (BCBS)",
        slug: "elevance-bcbs",
        logo: "https://logo.clearbit.com/bcbs.com",
        bestFor: "Nationwide Coverage",
        network: "Very Large",
        rating: "4.4",
        monthlyFrom: "From ~$290/mo",
        states: "All 50 states",
        planTypes: ["HMO", "PPO", "EPO", "HDHP"],
        officialUrl: "https://www.bcbs.com",
        pros: ["Available in all 50 states", "Large network", "Wide plan range"],
        cons: ["Quality varies by region", "Different regional operators"],
        idealFor: "People seeking broad national coverage.",
        summary: "Blue Cross Blue Shield's nationwide reach makes it a reliable anchor plan for most Americans.",
    },
    {
        name: "Molina Healthcare",
        slug: "molina",
        logo: "https://logo.clearbit.com/molinahealthcare.com",
        bestFor: "Medicaid Plans",
        network: "Medium",
        rating: "4.3",
        monthlyFrom: "From ~$0 (Medicaid)",
        states: "19 states",
        planTypes: ["Medicaid", "Medicare", "Marketplace"],
        officialUrl: "https://www.molinahealthcare.com",
        pros: ["Affordable plans", "Strong Medicaid", "Community-focused"],
        cons: ["Smaller networks", "Limited plan selection"],
        idealFor: "Low-income individuals and families.",
        summary: "Molina specializes in government-sponsored plans, providing affordable healthcare to underserved communities.",
    },
    {
        name: "Centene",
        slug: "centene",
        logo: "https://logo.clearbit.com/centene.com",
        bestFor: "ACA Marketplace Plans",
        network: "Medium",
        rating: "4.2",
        monthlyFrom: "From ~$200/mo",
        states: "Most states",
        planTypes: ["Medicaid", "Medicare", "ACA Marketplace"],
        officialUrl: "https://www.centene.com",
        pros: ["Competitive pricing", "Good ACA options", "Wide state availability"],
        cons: ["Network limitations", "Support varies"],
        idealFor: "Budget-conscious consumers.",
        summary: "Centene's ACA marketplace plans are among the most affordable, making quality coverage accessible.",
    },
];

const COLORS = [
    "#0F4C81",
    "#10B981",
    "#8B5CF6",
    "#F59E0B",
];

export default function CompareTool() {
    const [selected, setSelected] = useState<string[]>(["kaiser-permanente", "unitedhealthcare"]);

    const toggle = (slug: string) => {
        if (selected.includes(slug)) {
            if (selected.length > 1) setSelected(selected.filter((s) => s !== slug));
        } else if (selected.length < 4) {
            setSelected([...selected, slug]);
        }
    };

    const comparing = ALL_COMPANIES.filter((c) => selected.includes(c.slug));

    const rows: { label: string; key: keyof typeof ALL_COMPANIES[0] }[] = [
        { label: "Best For", key: "bestFor" },
        { label: "Network Size", key: "network" },
        { label: "Rating", key: "rating" },
        { label: "Starting Price", key: "monthlyFrom" },
        { label: "State Coverage", key: "states" },
        { label: "Best For", key: "idealFor" },
    ];

    return (
        <div>
            {/* Picker */}
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px",
                    marginBottom: "var(--space-lg)",
                    justifyContent: "center",
                }}
            >
                {ALL_COMPANIES.map((c) => {
                    const active = selected.includes(c.slug);
                    return (
                        <button
                            key={c.slug}
                            onClick={() => toggle(c.slug)}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                padding: "8px 14px",
                                borderRadius: "999px",
                                border: active ? "2px solid var(--primary)" : "1.5px solid var(--border)",
                                background: active ? "var(--gradient-accent)" : "var(--surface)",
                                color: active ? "var(--primary)" : "var(--text-light)",
                                fontWeight: active ? 700 : 500,
                                fontSize: "13px",
                                cursor: "pointer",
                                transition: "all 0.18s ease",
                            }}
                        >
                            <Image
                                src={c.logo}
                                alt={c.name}
                                width={20}
                                height={20}
                                style={{ borderRadius: "4px" }}
                            />
                            {c.name}
                        </button>
                    );
                })}
            </div>

            {/* Comparison Table */}
            <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "560px" }}>
                    <thead>
                        <tr>
                            <th
                                style={{
                                    textAlign: "left",
                                    padding: "12px 16px",
                                    background: "var(--surface-hover)",
                                    borderBottom: "1px solid var(--border)",
                                    fontSize: "13px",
                                    color: "var(--muted)",
                                    fontWeight: 600,
                                    minWidth: "120px",
                                }}
                            >
                                Feature
                            </th>
                            {comparing.map((c, i) => (
                                <th
                                    key={c.slug}
                                    style={{
                                        padding: "12px 16px",
                                        background: "var(--surface-hover)",
                                        borderBottom: "1px solid var(--border)",
                                        borderLeft: "1px solid var(--border)",
                                        textAlign: "center",
                                        minWidth: "160px",
                                    }}
                                >
                                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
                                        <div
                                            style={{
                                                width: "36px",
                                                height: "36px",
                                                borderRadius: "8px",
                                                overflow: "hidden",
                                                border: `2px solid ${COLORS[i] ?? "#ccc"}`,
                                            }}
                                        >
                                            <Image
                                                src={c.logo}
                                                alt={c.name}
                                                width={36}
                                                height={36}
                                            />
                                        </div>
                                        <span style={{ fontSize: "13px", fontWeight: 700, color: "var(--text)" }}>
                                            {c.name}
                                        </span>
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, ri) => (
                            <tr
                                key={row.label + ri}
                                style={{ background: ri % 2 === 0 ? "var(--surface)" : "var(--surface-hover)" }}
                            >
                                <td
                                    style={{
                                        padding: "11px 16px",
                                        fontSize: "13px",
                                        fontWeight: 600,
                                        color: "var(--text-light)",
                                        borderBottom: "1px solid var(--border-light)",
                                    }}
                                >
                                    {row.label}
                                </td>
                                {comparing.map((c) => {
                                    const val = c[row.key];
                                    return (
                                        <td
                                            key={c.slug + row.key}
                                            style={{
                                                padding: "11px 16px",
                                                fontSize: "13px",
                                                color: "var(--text)",
                                                textAlign: "center",
                                                borderLeft: "1px solid var(--border-light)",
                                                borderBottom: "1px solid var(--border-light)",
                                            }}
                                        >
                                            {row.key === "rating"
                                                ? `⭐ ${val}/5`
                                                : Array.isArray(val)
                                                    ? (val as string[]).join(", ")
                                                    : String(val)}
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                        {/* Visit site row */}
                        <tr style={{ background: "var(--surface)" }}>
                            <td
                                style={{
                                    padding: "12px 16px",
                                    fontSize: "13px",
                                    fontWeight: 600,
                                    color: "var(--text-light)",
                                }}
                            >
                                Official Site
                            </td>
                            {comparing.map((c) => (
                                <td
                                    key={c.slug + "site"}
                                    style={{
                                        padding: "12px 16px",
                                        textAlign: "center",
                                        borderLeft: "1px solid var(--border-light)",
                                    }}
                                >
                                    <a
                                        href={c.officialUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-primary"
                                        style={{
                                            display: "inline-block",
                                            fontSize: "12px",
                                            padding: "6px 14px",
                                        }}
                                    >
                                        Visit →
                                    </a>
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
