import type { Company } from "@/data/companies";

export default function CompanyCard({ company }: { company: Company }) {
  return (
    <article
      id={company.id}
      className="border-default"
      style={{ padding: "var(--space-xl)", scrollMarginTop: "90px" }}
    >
      <div className="flex items-start" style={{ gap: "var(--space-md)" }}>
        <span className="rank-badge" aria-hidden>
          {company.rank}
        </span>
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: "clamp(22px, 2.4vw, 30px)" }}>{company.name}</h2>
          <a
            href={company.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-small"
            style={{ color: "var(--primary)" }}
          >
            {company.websiteLabel} ↗
          </a>
        </div>
      </div>

      <div className="sub-section" style={{ marginTop: "var(--space-lg)" }}>
        {company.overview.map((para, i) => (
          <p
            key={i}
            className="card-description"
            style={{ marginBottom: i === company.overview.length - 1 ? 0 : "var(--space-sm)" }}
          >
            {para}
          </p>
        ))}
      </div>

      <div
        className="grid"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "var(--space-lg)",
          marginTop: "var(--space-lg)",
        }}
      >
        <div>
          <h3 className="card-title" style={{ fontSize: 17, marginBottom: "var(--space-sm)" }}>
            Key Features
          </h3>
          <ul style={{ display: "grid", gap: "8px" }}>
            {company.keyFeatures.map((f) => (
              <li key={f} className="card-description" style={{ fontSize: 15, display: "flex", gap: 8 }}>
                <span style={{ color: "var(--primary)" }} aria-hidden>•</span>
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="card-title" style={{ fontSize: 17, marginBottom: "var(--space-sm)", color: "var(--secondary-dark)" }}>
            Pros
          </h3>
          <ul style={{ display: "grid", gap: "8px", marginBottom: "var(--space-md)" }}>
            {company.pros.map((p) => (
              <li key={p} className="card-description" style={{ fontSize: 15, display: "flex", gap: 8 }}>
                <span style={{ color: "var(--secondary-dark)" }} aria-hidden>✔</span>
                {p}
              </li>
            ))}
          </ul>

          <h3 className="card-title" style={{ fontSize: 17, marginBottom: "var(--space-sm)", color: "var(--muted)" }}>
            Cons
          </h3>
          <ul style={{ display: "grid", gap: "8px" }}>
            {company.cons.map((c) => (
              <li key={c} className="card-description" style={{ fontSize: 15, display: "flex", gap: 8 }}>
                <span style={{ color: "var(--muted)" }} aria-hidden>−</span>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="accent-panel" style={{ marginTop: "var(--space-lg)" }}>
        <strong style={{ fontFamily: "var(--font-heading)", color: "var(--primary-dark)" }}>
          Best for:{" "}
        </strong>
        <span className="card-description" style={{ fontSize: 15 }}>{company.bestFor}</span>
      </div>
    </article>
  );
}
