import { companies } from "@/data/companies";

export default function Hero() {
  return (
    <section className="main-section">
      <div className="container">
        <div
          className="hero-section section-padding-x section-padding-y"
          style={{ paddingBlock: "var(--space-3xl)" }}
        >
          <div style={{ maxWidth: 780 }}>
            <span
              className="eyebrow"
              style={{ color: "var(--secondary-light)" }}
            >
              2026 Buyer&apos;s Guide · Updated Yearly
            </span>

            <h1 style={{ color: "#FFFFFF", marginTop: "var(--space-sm)" }}>
              Best Health Insurance Companies in the USA (2026)
            </h1>

            <p
              className="discription-under-h2"
              style={{ color: "rgba(255,255,255,0.85)", marginTop: "var(--space-md)" }}
            >
              Compare the top {companies.length} health insurance providers on network size,
              Medicare and ACA Marketplace coverage, and digital tools — so you can pick the
              plan that actually fits your budget, your doctors, and your state.
            </p>

            <div
              className="flex flex-wrap items-center"
              style={{ gap: "var(--space-sm)", marginTop: "var(--space-lg)" }}
            >
              <a href="#comparison" className="btn-primary">
                View comparison table
              </a>
              <a
                href="#companies"
                className="btn-outline"
                style={{ borderColor: "rgba(255,255,255,0.6)", color: "#fff" }}
              >
                Browse all providers
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
