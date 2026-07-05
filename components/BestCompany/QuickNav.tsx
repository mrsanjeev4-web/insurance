import { companies } from "@/data/companies";

export default function QuickNav() {
  return (
    <div className="sub-section">
      <div className="flex flex-wrap" style={{ gap: "10px" }}>
        {companies.map((c) => (
          <a key={c.id} href={`#${c.id}`} className="chip">
            {c.rank}. {c.name.split(" (")[0]}
          </a>
        ))}
      </div>
    </div>
  );
}
