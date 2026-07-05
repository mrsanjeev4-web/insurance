import { BestForGrid, CompanyCard, ComparisonTable, FAQAccordion, Hero, Navbar, QuickNav, SiteFooter, SiteHeader } from "@/components";

import { companies } from "@/data";

export default function Home() {
 return (
    <>
    <Navbar/>
      <SiteHeader />

      <main id="main-content" style={{ flex: 1 }}>
        <Hero />

        {/* Companies list */}
        <section id="companies" className="main-section section-light">
          <div className="container">
            <div className="sub-section" style={{ maxWidth: 760 }}>
              <span className="eyebrow">Top 10 Providers</span>
              <h2 style={{ marginTop: "var(--space-xs)" }}>
                The 10 Best Health Insurance Companies, Ranked
              </h2>
              <p className="discription-under-h2" style={{ marginTop: "var(--space-sm)" }}>
                Each provider below is evaluated on network size, plan variety, Medicare and
                Medicaid options, preventive care, and the quality of its digital tools.
              </p>
            </div>

            <QuickNav />

            <div style={{ display: "grid", gap: "var(--space-xl)" }}>
              {companies.map((company) => (
                <CompanyCard key={company.id} company={company} />
              ))}
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section id="comparison" className="main-section section-brand">
          <div className="container">
            <div className="sub-section" style={{ maxWidth: 760 }}>
              <span className="eyebrow">Side by Side</span>
              <h2 style={{ marginTop: "var(--space-xs)" }}>Comparison Table</h2>
              <p className="discription-under-h2" style={{ marginTop: "var(--space-sm)" }}>
                A quick snapshot of how the top providers stack up on network size, Medicare,
                ACA Marketplace availability, and digital experience.
              </p>
            </div>

            <ComparisonTable />
          </div>
        </section>

        {/* Which company is best */}
        <section id="best-for" className="main-section section-light">
          <div className="container">
            <div className="sub-section" style={{ maxWidth: 760 }}>
              <span className="eyebrow">Find Your Match</span>
              <h2 style={{ marginTop: "var(--space-xs)" }}>
                Which Health Insurance Company Is Best?
              </h2>
              <p className="discription-under-h2" style={{ marginTop: "var(--space-sm)" }}>
                There is no single health insurance company that is best for everyone. The
                right choice depends on your healthcare needs, budget, preferred doctors, and
                where you live.
              </p>
            </div>

            <BestForGrid />
          </div>
        </section>

        {/* FAQs */}
        <section id="faqs" className="main-section section-brand">
          <div className="container">
            <div className="sub-section" style={{ maxWidth: 760 }}>
              <span className="eyebrow">Common Questions</span>
              <h2 style={{ marginTop: "var(--space-xs)" }}>Frequently Asked Questions</h2>
            </div>

            <div style={{ maxWidth: 820 }}>
              <FAQAccordion />
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="main-section section-light">
          <div className="container">
            <div className="border-default" style={{ padding: "var(--space-xl)", maxWidth: 900, marginInline: "auto" }}>
              <h2 style={{ fontSize: "clamp(24px, 2.6vw, 32px)" }}>Conclusion</h2>
              <p className="card-description" style={{ marginTop: "var(--space-sm)" }}>
                Choosing the best health insurance company involves more than comparing
                premiums. Factors such as provider networks, coverage options, customer
                support, digital tools, preventive care, and plan availability all play an
                important role in finding the right policy. The companies featured in this
                guide have established strong reputations for offering reliable health
                insurance solutions across different segments of the U.S. market.
              </p>
              <p className="card-description" style={{ marginTop: "var(--space-sm)" }}>
                Before enrolling, compare plan details, check provider networks in your area,
                review out-of-pocket costs, and confirm that your preferred doctors and
                hospitals are included. Taking the time to evaluate these factors will help
                you select a plan that provides the right balance of affordability, coverage,
                and long-term value.
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}