import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="border-divider" style={{ background: "var(--surface)" }}>
      <div className="container flex items-center justify-between" style={{ paddingBlock: "18px" }}>
        <Link
          href="/"
          className="flex items-center gap-2"
          style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "20px", color: "var(--text)" }}
        >
          <span
            aria-hidden
            className="inline-flex items-center justify-center"
            style={{
              width: 34,
              height: 34,
              borderRadius: "var(--radius-sm)",
              background: "var(--gradient-hero)",
              color: "#fff",
              fontSize: 16,
              fontWeight: 800,
            }}
          >
            +
          </span>
          CoverageGuide
        </Link>

        <nav className="hidden md:flex items-center" style={{ gap: "28px" }}>
          <a href="#companies" className="text-small" style={{ color: "var(--text-light)", fontSize: 15 }}>
            Companies
          </a>
          <a href="#comparison" className="text-small" style={{ color: "var(--text-light)", fontSize: 15 }}>
            Comparison
          </a>
          <a href="#best-for" className="text-small" style={{ color: "var(--text-light)", fontSize: 15 }}>
            Best For You
          </a>
          <a href="#faqs" className="text-small" style={{ color: "var(--text-light)", fontSize: 15 }}>
            FAQs
          </a>
        </nav>

        <a href="#comparison" className="btn-outline" style={{ padding: "10px 18px", fontSize: 14 }}>
          Compare Plans
        </a>
      </div>
    </header>
  );
}
