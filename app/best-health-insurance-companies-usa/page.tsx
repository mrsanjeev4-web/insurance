import FaqAccordion from "@/components/FaqAccordion";
import bestHealthInsuranceFaqs from "@/data/faqs/best-health-insurance-companies-usa";
import CompareTool from "./CompareTool";
import Image from "next/image";

/* ============================================================
   DATA
   ============================================================ */

const companies = [
    {
        name: "Kaiser Permanente",
        slug: "kaiser-permanente",
        logo: "https://logo.clearbit.com/kp.org",
        officialUrl: "https://www.kp.org",
        bestFor: "Overall Satisfaction",
        network: "Large",
        rating: "4.8",
        monthlyFrom: "From ~$350/mo",
        states: "8 states + DC",
        planTypes: ["HMO"],
        summary:
            "Kaiser Permanente consistently ranks #1 for customer satisfaction thanks to its integrated model — your insurer and care team are the same organisation, so coverage gaps are rare and digital access is seamless.",
        pros: [
            "Highest customer-satisfaction scores",
            "Integrated insurer + provider",
            "Strong preventive-care programmes",
            "Best-in-class digital app",
        ],
        cons: ["Only available in ~8 states + DC", "Must stay within the Kaiser network"],
        idealFor: "Individuals and families who live inside Kaiser's service area and want a streamlined, all-in-one healthcare experience.",
    },
    {
        name: "UnitedHealthcare",
        slug: "unitedhealthcare",
        logo: "https://logo.clearbit.com/uhc.com",
        officialUrl: "https://www.uhc.com",
        bestFor: "Largest Network",
        network: "Very Large",
        rating: "4.7",
        monthlyFrom: "From ~$300/mo",
        states: "All 50 states",
        planTypes: ["HMO", "PPO", "EPO"],
        summary:
            "UnitedHealthcare is the largest US health insurer, offering access to 900 000+ physicians and hospitals. If provider choice matters most, UHC is hard to beat.",
        pros: [
            "900k+ in-network providers",
            "Broad plan portfolio",
            "Industry-leading digital tools",
            "Available nationwide",
        ],
        cons: ["Premiums can be higher in some regions", "Plan complexity can be confusing"],
        idealFor: "People who want maximum provider choice regardless of where they live.",
    },
    {
        name: "Humana",
        slug: "humana",
        logo: "https://logo.clearbit.com/humana.com",
        officialUrl: "https://www.humana.com",
        bestFor: "Medicare Advantage",
        network: "Large",
        rating: "4.6",
        monthlyFrom: "From $0/mo (Medicare Adv.)",
        states: "Most states",
        planTypes: ["HMO", "PPO", "Medicare Advantage"],
        summary:
            "Humana specialises in Medicare-related products and is one of the most popular choices among seniors, combining competitive drug coverage with rich wellness extras.",
        pros: [
            "Top-rated Medicare Advantage plans",
            "Wellness & fitness benefits",
            "Competitive Part D drug coverage",
        ],
        cons: ["Limited individual market options", "Coverage varies significantly by state"],
        idealFor: "Seniors and Medicare beneficiaries seeking affordable, feature-rich plans.",
    },
    {
        name: "Aetna",
        slug: "aetna",
        logo: "https://logo.clearbit.com/aetna.com",
        officialUrl: "https://www.aetna.com",
        bestFor: "Employer Plans",
        network: "Large",
        rating: "4.5",
        monthlyFrom: "From ~$280/mo",
        states: "Most states",
        planTypes: ["HMO", "PPO", "EPO"],
        summary:
            "Aetna (a CVS Health company) offers a broad portfolio of employer and individual plans backed by a large provider network and standout wellness incentives.",
        pros: [
            "Large provider network",
            "Strong wellness programmes",
            "Good digital member experience",
        ],
        cons: ["Plan options vary by state", "Customer support quality can differ by region"],
        idealFor: "Employees seeking employer-sponsored health coverage with wellness perks.",
    },
    {
        name: "Cigna Healthcare",
        slug: "cigna",
        logo: "https://logo.clearbit.com/cigna.com",
        officialUrl: "https://www.cigna.com",
        bestFor: "Global Coverage",
        network: "Large",
        rating: "4.5",
        monthlyFrom: "From ~$320/mo",
        states: "Most states",
        planTypes: ["HMO", "PPO", "International"],
        summary:
            "Cigna is the go-to for expatriates, global workers, and frequent travellers who need healthcare that follows them across borders.",
        pros: [
            "Global healthcare network",
            "Strong multilingual support",
            "Comprehensive plan options",
        ],
        cons: ["Higher premiums in some markets", "Limited ACA plans in certain states"],
        idealFor: "International professionals and frequent travellers.",
    },
    {
        name: "Elevance Health (BCBS)",
        slug: "elevance-bcbs",
        logo: "https://logo.clearbit.com/bcbs.com",
        officialUrl: "https://www.bcbs.com",
        bestFor: "Nationwide Coverage",
        network: "Very Large",
        rating: "4.4",
        monthlyFrom: "From ~$290/mo",
        states: "All 50 states",
        planTypes: ["HMO", "PPO", "EPO", "HDHP"],
        summary:
            "Blue Cross Blue Shield companies collectively cover millions of Americans. Elevance Health's nationwide footprint makes it a reliable default for most people.",
        pros: [
            "Available in all 50 states",
            "Extremely large provider network",
            "Wide range of plan types",
        ],
        cons: ["Quality and pricing vary by regional plan", "Different operators per state"],
        idealFor: "People seeking reliable, broad national coverage.",
    },
    {
        name: "Molina Healthcare",
        slug: "molina",
        logo: "https://logo.clearbit.com/molinahealthcare.com",
        officialUrl: "https://www.molinahealthcare.com",
        bestFor: "Medicaid Plans",
        network: "Medium",
        rating: "4.3",
        monthlyFrom: "From $0 (Medicaid)",
        states: "19 states",
        planTypes: ["Medicaid", "Medicare", "Marketplace"],
        summary:
            "Molina focuses on government-sponsored programmes, delivering affordable, community-centred care to low-income individuals and families.",
        pros: [
            "Affordable / low-cost plans",
            "Strong Medicaid programme",
            "Community-focused services",
        ],
        cons: ["Smaller provider networks", "Limited plan selection outside Medicaid"],
        idealFor: "Low-income individuals and families who qualify for Medicaid.",
    },
    {
        name: "Centene",
        slug: "centene",
        logo: "https://logo.clearbit.com/centene.com",
        officialUrl: "https://www.centene.com",
        bestFor: "ACA Marketplace",
        network: "Medium",
        rating: "4.2",
        monthlyFrom: "From ~$200/mo",
        states: "Most states",
        planTypes: ["Medicaid", "Medicare", "ACA Marketplace"],
        summary:
            "Centene is one of the largest ACA marketplace providers, offering competitively priced plans across most states — ideal for budget-conscious shoppers.",
        pros: [
            "Competitive marketplace pricing",
            "Strong ACA plan options",
            "Wide state availability",
        ],
        cons: ["Network limitations in some regions", "Customer-service quality varies"],
        idealFor: "Budget-conscious consumers shopping on the ACA marketplace.",
    },
];

const criteria = [
    {
        icon: "💰",
        title: "Monthly Premium",
        description: "The fixed amount you pay each month regardless of care usage. Balance it against your deductible.",
    },
    {
        icon: "🏥",
        title: "Deductible",
        description: "The amount you pay out-of-pocket before insurance kicks in. Higher deductible = lower premium.",
    },
    {
        icon: "🗺️",
        title: "Provider Network",
        description: "Confirm your preferred doctors and hospitals are in-network to avoid surprise bills.",
    },
    {
        icon: "💊",
        title: "Prescription Coverage",
        description: "Check your medications are on the plan formulary and note any tier-based cost-sharing.",
    },
    {
        icon: "🛡️",
        title: "Out-of-Pocket Max",
        description: "The most you'll ever pay in a plan year. Once hit, insurance covers 100% of covered care.",
    },
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: bestHealthInsuranceFaqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
        },
    })),
};

/* ============================================================
   PAGE
   ============================================================ */

export default function BestHealthInsurancePage() {
    return (
        <main>
            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* ================================================
            HERO
            ================================================ */}
            <section
                className="main-section section-padding-x hero-section"
                style={{ borderRadius: 0 }}
            >
                <div className="container">
                    <div className="section-padding-y" style={{ textAlign: "center" }}>
                        <span
                            className="text-small"
                            style={{
                                display: "inline-flex",
                                color: "rgba(255,255,255,0.85)",
                                background: "rgba(255,255,255,0.12)",
                                border: "1px solid rgba(255,255,255,0.2)",
                                borderRadius: "999px",
                                padding: "6px 16px",
                                marginBottom: "var(--space-md)",
                            }}
                        >
                            ✦ Updated for 2026
                        </span>

                        <h1 style={{ color: "#fff", maxWidth: "22ch", margin: "0 auto" }}>
                            Best Health Insurance Companies in the USA
                        </h1>

                        <p
                            className="discription-under-h2"
                            style={{
                                color: "rgba(255,255,255,0.88)",
                                maxWidth: "56ch",
                                margin: "var(--space-md) auto 0",
                            }}
                        >
                            We compared 8 of the largest US health insurers on coverage,
                            network size, affordability, and customer satisfaction — so
                            you can see the differences for yourself.
                        </p>

                        {/* Jump nav */}
                        <nav
                            aria-label="Page sections"
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                justifyContent: "center",
                                gap: "10px",
                                marginTop: "var(--space-lg)",
                            }}
                        >
                            {[
                                { href: "#compare", label: "⚡ Compare tool" },
                                { href: "#companies", label: "🏢 All 8 companies" },
                                { href: "#how-to-choose", label: "📋 How to choose" },
                                { href: "#faq", label: "❓ FAQ" },
                            ].map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="text-small"
                                    style={{
                                        color: "#fff",
                                        background: "rgba(255,255,255,0.1)",
                                        border: "1px solid rgba(255,255,255,0.25)",
                                        borderRadius: "999px",
                                        padding: "7px 16px",
                                        textDecoration: "none",
                                        transition: "background 0.2s",
                                    }}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            </section>

            {/* ================================================
            QUICK COMPARISON TABLE
            ================================================ */}
            <section className="main-section section-light">
                <div className="container">
                    <div className="sub-section">
                        <h2>Quick Comparison: Top Health Insurance Companies</h2>
                        <p className="discription-under-h2" style={{ marginTop: "var(--space-sm)" }}>
                            A side-by-side snapshot — click a company name to jump to its full profile.
                        </p>
                    </div>

                    <div className="border-default" style={{ overflowX: "auto", padding: 0 }}>
                        <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "640px" }}>
                            <thead>
                                <tr style={{ background: "var(--surface-hover)" }}>
                                    {["Company", "Best For", "Network", "Starting Price", "Rating"].map((h) => (
                                        <th
                                            key={h}
                                            style={{
                                                textAlign: "left",
                                                padding: "var(--space-sm) var(--space-md)",
                                                fontFamily: "var(--font-heading)",
                                                fontSize: "13px",
                                                color: "var(--text)",
                                                borderBottom: "1px solid var(--border)",
                                                whiteSpace: "nowrap",
                                            }}
                                        >
                                            {h}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {companies.map((c, i) => (
                                    <tr key={c.name} className="border-divider">
                                        <td style={{ padding: "var(--space-sm) var(--space-md)" }}>
                                            <a
                                                href={`#${c.slug}`}
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "10px",
                                                    color: "var(--text)",
                                                    textDecoration: "none",
                                                    fontWeight: 600,
                                                    fontSize: "14px",
                                                }}
                                            >
                                                <Image
                                                    src={c.logo}
                                                    alt={`${c.name} logo`}
                                                    width={28}
                                                    height={28}
                                                    style={{ borderRadius: "6px", flexShrink: 0 }}
                                                />
                                                {i + 1}. {c.name}
                                            </a>
                                        </td>
                                        <td style={{ padding: "var(--space-sm) var(--space-md)", color: "var(--text-light)", fontSize: "13px" }}>
                                            {c.bestFor}
                                        </td>
                                        <td style={{ padding: "var(--space-sm) var(--space-md)", color: "var(--text-light)", fontSize: "13px" }}>
                                            {c.network}
                                        </td>
                                        <td style={{ padding: "var(--space-sm) var(--space-md)", color: "var(--text-light)", fontSize: "13px" }}>
                                            {c.monthlyFrom}
                                        </td>
                                        <td style={{ padding: "var(--space-sm) var(--space-md)", fontSize: "13px", color: "var(--secondary-dark)", fontWeight: 700 }}>
                                            ⭐ {c.rating}/5
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ================================================
            INTERACTIVE COMPARE TOOL
            ================================================ */}
            <section className="main-section section-brand" id="compare">
                <div className="container">
                    <div className="sub-section" style={{ textAlign: "center" }}>
                        <h2>Build Your Own Comparison</h2>
                        <p className="discription-under-h2" style={{ margin: "8px auto 0", maxWidth: "52ch" }}>
                            Pick 2–4 companies you&apos;re deciding between and see them lined up side by side.
                        </p>
                    </div>
                    <CompareTool />
                </div>
            </section>

            {/* ================================================
            COMPANY CARDS (1–8)
            ================================================ */}
            <section className="main-section section-light" id="companies">
                <div className="container">
                    <div className="sub-section" style={{ textAlign: "center" }}>
                        <h2>The 8 Companies, In Detail</h2>
                        <p className="discription-under-h2" style={{ margin: "8px auto 0", maxWidth: "52ch" }}>
                            Strengths, trade-offs, who each plan suits best — and a direct link to get a quote.
                        </p>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-lg)" }}>
                        {companies.map((c, i) => (
                            <article
                                className="border-default"
                                key={c.name}
                                id={c.slug}
                                style={{ padding: "var(--space-lg)", scrollMarginTop: "24px" }}
                            >
                                {/* Header row */}
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        flexWrap: "wrap",
                                        gap: "var(--space-sm)",
                                        marginBottom: "var(--space-sm)",
                                    }}
                                >
                                    <div style={{ display: "flex", gap: "var(--space-sm)", alignItems: "flex-start" }}>
                                        <Image
                                            src={c.logo}
                                            alt={`${c.name} logo`}
                                            width={52}
                                            height={52}
                                            style={{
                                                borderRadius: "var(--radius-sm)",
                                                border: "1px solid var(--border)",
                                                flexShrink: 0,
                                                background: "#fff",
                                            }}
                                        />
                                        <div>
                                            <span className="text-small">#{i + 1} · {c.bestFor}</span>
                                            <h3 className="card-title" style={{ marginTop: "2px" }}>{c.name}</h3>
                                        </div>
                                    </div>

                                    <span
                                        style={{
                                            alignSelf: "flex-start",
                                            fontSize: "14px",
                                            fontWeight: 700,
                                            color: "var(--secondary-dark)",
                                            background: "var(--gradient-accent)",
                                            borderRadius: "999px",
                                            padding: "4px 14px",
                                            whiteSpace: "nowrap",
                                        }}
                                    >
                                        ⭐ {c.rating}/5
                                    </span>
                                </div>

                                <p className="card-description">{c.summary}</p>

                                {/* Quick-fact tags */}
                                <div
                                    style={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        gap: "8px",
                                        margin: "var(--space-sm) 0 var(--space-md)",
                                    }}
                                >
                                    {[c.monthlyFrom, c.states, ...c.planTypes].map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-small"
                                            style={{
                                                background: "var(--surface-hover)",
                                                border: "1px solid var(--border)",
                                                borderRadius: "999px",
                                                padding: "3px 11px",
                                                color: "var(--text-light)",
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Pros / Cons grid */}
                                <div
                                    className="card-grid-gap"
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                                    }}
                                >
                                    <div>
                                        <span
                                            className="text-small"
                                            style={{ color: "var(--secondary-dark)", fontWeight: 700 }}
                                        >
                                            ✅ PROS
                                        </span>
                                        <ul style={{ marginTop: "6px", paddingLeft: "18px" }}>
                                            {c.pros.map((p) => (
                                                <li key={p} className="card-description" style={{ marginBottom: "4px" }}>
                                                    {p}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <span
                                            className="text-small"
                                            style={{ color: "var(--primary-dark)", fontWeight: 700 }}
                                        >
                                            ⚠️ CONS
                                        </span>
                                        <ul style={{ marginTop: "6px", paddingLeft: "18px" }}>
                                            {c.cons.map((cn) => (
                                                <li key={cn} className="card-description" style={{ marginBottom: "4px" }}>
                                                    {cn}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="border-divider" style={{ margin: "var(--space-md) 0" }} />

                                {/* Footer row: idealFor + CTA */}
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        flexWrap: "wrap",
                                        gap: "var(--space-sm)",
                                    }}
                                >
                                    <p className="text-small" style={{ maxWidth: "60ch" }}>
                                        <strong style={{ color: "var(--text)" }}>Best for: </strong>
                                        {c.idealFor}
                                    </p>

                                    <a
                                        href={c.officialUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-primary"
                                        style={{
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: "6px",
                                            fontSize: "14px",
                                            padding: "10px 20px",
                                            whiteSpace: "nowrap",
                                            textDecoration: "none",
                                        }}
                                    >
                                        Visit {c.name} →
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================================================
            HOW TO CHOOSE
            ================================================ */}
            <section className="main-section section-brand" id="how-to-choose">
                <div className="container">
                    <div className="sub-section" style={{ textAlign: "center" }}>
                        <h2>How to Choose the Right Health Insurance</h2>
                        <p className="discription-under-h2" style={{ margin: "8px auto 0", maxWidth: "52ch" }}>
                            Before selecting a plan, weigh these five key factors.
                        </p>
                    </div>

                    <div
                        className="card-grid-gap"
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                        }}
                    >
                        {criteria.map((item) => (
                            <div className="border-default" style={{ padding: "var(--space-lg)" }} key={item.title}>
                                <div
                                    style={{
                                        width: "42px",
                                        height: "42px",
                                        borderRadius: "var(--radius-sm)",
                                        background: "var(--gradient-accent)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "20px",
                                        marginBottom: "var(--space-sm)",
                                    }}
                                >
                                    {item.icon}
                                </div>
                                <h3 className="card-title" style={{ fontSize: "17px" }}>{item.title}</h3>
                                <p className="card-description" style={{ marginTop: "6px" }}>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================================================
            FAQ
            ================================================ */}
            <section className="main-section section-light" id="faq">
                <div className="container">
                    <FaqAccordion
                        faqs={bestHealthInsuranceFaqs}
                        title="Frequently Asked Questions"
                        subtitle="Everything you need to know about choosing the best health insurance in the USA."
                    />
                </div>
            </section>

            {/* ================================================
            FINAL VERDICT
            ================================================ */}
            <section className="main-section section-brand">
                <div className="container">
                    <div className="sub-section" style={{ textAlign: "center" }}>
                        <h2>Our Top Picks at a Glance</h2>
                        <p className="discription-under-h2" style={{ margin: "8px auto 0", maxWidth: "48ch" }}>
                            Three standout choices for the most common needs.
                        </p>
                    </div>

                    <div
                        className="card-grid-gap"
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                        }}
                    >
                        {[
                            { tag: "🥇 Best overall satisfaction", company: companies[0] },
                            { tag: "🌐 Best provider network",     company: companies[1] },
                            { tag: "💸 Best on a budget",          company: companies[6] },
                        ].map((v) => (
                            <a
                                key={v.tag}
                                href={v.company.officialUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border-default"
                                style={{
                                    padding: "var(--space-lg)",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "var(--space-sm)",
                                    textDecoration: "none",
                                    color: "inherit",
                                }}
                            >
                                <Image
                                    src={v.company.logo}
                                    alt={`${v.company.name} logo`}
                                    width={48}
                                    height={48}
                                    style={{
                                        borderRadius: "var(--radius-sm)",
                                        border: "1px solid var(--border)",
                                        background: "#fff",
                                        flexShrink: 0,
                                    }}
                                />
                                <div>
                                    <span
                                        className="text-small"
                                        style={{ color: "var(--secondary-dark)", fontWeight: 700 }}
                                    >
                                        {v.tag}
                                    </span>
                                    <h3 className="card-title" style={{ fontSize: "16px", marginTop: "2px" }}>
                                        {v.company.name}
                                    </h3>
                                    <span className="text-small" style={{ color: "var(--primary)" }}>
                                        Visit official site →
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================================================
            CLOSING CTA
            ================================================ */}
            <section
                className="main-section section-padding-x hero-section"
                style={{ borderRadius: 0 }}
            >
                <div className="container">
                    <div
                        className="section-padding-y"
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            flexWrap: "wrap",
                            gap: "var(--space-md)",
                        }}
                    >
                        <div>
                            <h3 style={{ color: "#fff" }}>Ready to compare plans side by side?</h3>
                            <p style={{ color: "rgba(255,255,255,0.82)", marginTop: "4px" }}>
                                Use our interactive tool above — free, no sign-up required.
                            </p>
                        </div>
                        <a
                            href="#compare"
                            className="btn-primary"
                            style={{ textDecoration: "none" }}
                        >
                            Start comparing →
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}