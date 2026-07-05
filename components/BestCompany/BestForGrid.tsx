import { bestForList } from "@/data";

export default function BestForGrid() {
  return (
    <div
      className="grid card-grid-gap"
      style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}
    >
      {bestForList.map((entry) => (
        <div key={entry.label} className="border-default" style={{ padding: "var(--space-lg)" }}>
          <p
            className="text-small"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              color: "var(--secondary-dark)",
              marginBottom: 6,
            }}
          >
            {entry.label}
          </p>
          <p className="card-title" style={{ fontSize: 19 }}>{entry.company}</p>
        </div>
      ))}
    </div>
  );
}
