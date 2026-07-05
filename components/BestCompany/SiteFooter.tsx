import { companies } from "@/data";

export default function SiteFooter() {
  return (
    <footer style={{ background: "var(--primary-dark)", color: "rgba(255,255,255,0.75)" }}>
      <div className="container" style={{ paddingBlock: "var(--space-2xl)" }}>
        <div
          className="grid card-grid-gap"
          style={{ gridTemplateColumns: "2fr 1fr 1fr", marginBottom: "var(--space-xl)" }}
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 800,
                fontSize: 20,
                color: "#fff",
                marginBottom: "var(--space-sm)",
              }}
            >
              CoverageGuide
            </p>
            <p style={{ maxWidth: 420, fontSize: 15, lineHeight: 1.7 }}>
              An independent guide comparing the leading U.S. health insurance
              providers by network size, plan types, and digital experience —
              updated for 2026.
            </p>
          </div>

          <div>
            <p style={{ fontFamily: "var(--font-heading)", fontWeight: 600, color: "#fff", marginBottom: "var(--space-sm)" }}>
              Providers
            </p>
            <ul style={{ display: "grid", gap: 8 }}>
              {companies.slice(0, 5).map((c) => (
                <li key={c.id}>
                  <a href={`#${c.id}`} style={{ color: "rgba(255,255,255,0.75)", fontSize: 14 }}>
                    {c.name.split(" (")[0]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p style={{ fontFamily: "var(--font-heading)", fontWeight: 600, color: "#fff", marginBottom: "var(--space-sm)" }}>
              Guide
            </p>
            <ul style={{ display: "grid", gap: 8 }}>
              <li>
                <a href="#comparison" style={{ color: "rgba(255,255,255,0.75)", fontSize: 14 }}>
                  Comparison Table
                </a>
              </li>
              <li>
                <a href="#best-for" style={{ color: "rgba(255,255,255,0.75)", fontSize: 14 }}>
                  Best For You
                </a>
              </li>
              <li>
                <a href="#faqs" style={{ color: "rgba(255,255,255,0.75)", fontSize: 14 }}>
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.15)",
            paddingTop: "var(--space-lg)",
            fontSize: 13,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          <span>© {new Date().getFullYear()} CoverageGuide. For informational purposes only — not insurance advice.</span>
          <span>Plan availability and pricing vary by state.</span>
        </div>
      </div>
    </footer>
  );
}
