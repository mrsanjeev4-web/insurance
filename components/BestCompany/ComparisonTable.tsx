import { comparisonRows } from "@/data";

function Stars({ count }: { count: number }) {
  return (
    <span aria-label={`${count} out of 5`}>
      <span className="star">{"★".repeat(count)}</span>
      <span className="star-muted">{"★".repeat(5 - count)}</span>
    </span>
  );
}

export default function ComparisonTable() {
  return (
    <div className="table-wrap">
      <table className="compare-table">
        <thead>
          <tr>
            <th>Company</th>
            <th>Best For</th>
            <th>Network Size</th>
            <th>Medicare</th>
            <th>ACA Marketplace</th>
            <th>Digital Experience</th>
          </tr>
        </thead>
        <tbody>
          {comparisonRows.map((row) => (
            <tr key={row.name}>
              <td style={{ fontFamily: "var(--font-heading)", fontWeight: 600, color: "var(--text)" }}>
                {row.name}
              </td>
              <td>{row.bestFor}</td>
              <td>
                <Stars count={row.network} />
              </td>
              <td>
                {row.medicare === true ? (
                  <span className="check-yes">✔ Yes</span>
                ) : (
                  <Stars count={row.medicare} />
                )}
              </td>
              <td>
                {row.aca === "yes" ? (
                  <span className="check-yes">✔ Yes</span>
                ) : (
                  <span className="check-limited">Limited</span>
                )}
              </td>
              <td>
                <Stars count={row.digital} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
