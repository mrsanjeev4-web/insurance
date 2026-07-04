export default function AboutPage() {
    return (
        <main>
            {/* ===================================================
          HERO
          CLASSES: .main-section .section-padding-x .hero-section
                   .container .section-padding-y .btn-primary
                   .btn-outline .discription-under-h2
          =================================================== */}
            <section
                className="main-section section-padding-x hero-section"
                style={{ borderRadius: 0, boxShadow: "var(--shadow-lg)" }}
            >
                <div className="container">
                    <div className="section-padding-y" style={{ textAlign: "center" }}>
                        <span
                            className="text-small"
                            style={{
                                display: "inline-flex",
                                color: "rgba(255,255,255,0.8)",
                                background: "rgba(255,255,255,0.12)",
                                border: "1px solid rgba(255,255,255,0.2)",
                                borderRadius: "999px",
                                padding: "6px 14px",
                                marginBottom: "var(--space-md)",
                            }}
                        >
                            About Us
                        </span>
                        <h1 style={{ color: "#fff", maxWidth: "20ch", margin: "0 auto" }}>
                            Information first. Always.
                        </h1>
                        {/* CLASS: .discription-under-h2 — used directly under an h1/h2 */}
                        <p
                            className="discription-under-h2"
                            style={{
                                color: "rgba(255,255,255,0.88)",
                                maxWidth: "52ch",
                                margin: "var(--space-md) auto 0",
                            }}
                        >
                            We help people understand insurance and compare their options
                            clearly — without ever telling them what to buy.
                        </p>
                        <div
                            className="card-grid-gap"
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                marginTop: "var(--space-xl)",
                                flexWrap: "wrap",
                            }}
                        >
                            <button className="btn-primary">Compare plans</button>
                            <button
                                className="btn-outline"
                                style={{ borderColor: "#fff", color: "#fff" }}
                            >
                                See how it works
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===================================================
          WHY WE EXIST
          CLASSES: .main-section .section-light .container
                   .sub-section .discription-under-h2 .card-grid-gap
                   .border-default .card-title .card-description
          =================================================== */}
            <section className="main-section section-light">
                <div className="container">
                    <div className="sub-section max-w-4xl"  >
                        <h2>Why we exist</h2>
                        <p className="discription-under-h2" style={{ marginTop: "var(--space-sm)" }}>
                            Insurance is confusing by design - dense policy wording,
                            inconsistent terms across providers, and pressure to decide
                            quickly. We built this site because we believe people deserve
                            to understand their options before anyone tries to sell them
                            something.
                        </p>
                        <p
                            style={{
                                color: "var(--text-light)",
                                marginTop: "var(--space-sm)",
                                fontSize: "20px",
                            }}
                        >
                            So we focus on one job: explaining how insurance works, and
                            laying out plans side by side so you can see the differences
                            for yourself.
                        </p>
                    </div>

                    <div
                        className="card-grid-gap"
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                        }}
                    >
                        <div className="border-default" style={{ padding: "var(--space-lg)" }}>
                            <div
                                style={{
                                    width: "44px",
                                    height: "44px",
                                    borderRadius: "var(--radius-md)",
                                    background: "var(--gradient-accent)",
                                    marginBottom: "var(--space-sm)",
                                }}
                            />
                            {/* CLASS: .card-title + .card-description */}
                            <h3 className="card-title">Explain</h3>
                            <p className="card-description" style={{ marginTop: "6px" }}>
                                Plain-language breakdowns of how premiums, deductibles, and
                                coverage actually work.
                            </p>
                        </div>

                        <div className="border-default" style={{ padding: "var(--space-lg)" }}>
                            <div
                                style={{
                                    width: "44px",
                                    height: "44px",
                                    borderRadius: "var(--radius-md)",
                                    background: "var(--gradient-accent)",
                                    marginBottom: "var(--space-sm)",
                                }}
                            />
                            <h3 className="card-title">Compare</h3>
                            <p className="card-description" style={{ marginTop: "6px" }}>
                                Side-by-side views of plans across providers, using the same
                                criteria for every comparison.
                            </p>
                        </div>

                        <div className="border-default" style={{ padding: "var(--space-lg)" }}>
                            <div
                                style={{
                                    width: "44px",
                                    height: "44px",
                                    borderRadius: "var(--radius-md)",
                                    background: "var(--gradient-accent)",
                                    marginBottom: "var(--space-sm)",
                                }}
                            />
                            <h3 className="card-title">Clarify</h3>
                            <p className="card-description" style={{ marginTop: "6px" }}>
                                Highlighting what&apos;s actually different between plans —
                                not just what&apos;s marketed as different.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===================================================
          WHAT WE DON'T DO
          CLASSES: .main-section .section-brand .container
                   .sub-section .discription-under-h2 .border-default
                   .section-padding-x .section-padding-y .card-grid-gap
                   .card-title .card-description .border-divider
          =================================================== */}
            <section className="main-section section-brand">
                <div className="container">
                    <div className="sub-section" style={{ textAlign: "center" }}>
                        <h2>What we don&apos;t do</h2>
                        <p
                            className="discription-under-h2"
                            style={{ margin: "8px auto 0", maxWidth: "44ch" }}
                        >
                            This matters as much as what we do.
                        </p>
                    </div>

                    <div className="border-default">
                        <div className="section-padding-x section-padding-y">
                            <div
                                className="card-grid-gap"
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                                }}
                            >
                                <div>
                                    <h4 className="card-title" >
                                        No recommendations
                                    </h4>
                                    <p className="card-description" style={{ marginTop: "6px" }}>
                                        We never tell you which plan to choose. That decision is
                                        yours, based on your own circumstances.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="card-title" >
                                        No sales
                                    </h4>
                                    <p className="card-description" style={{ marginTop: "6px" }}>
                                        We don&apos;t sell insurance, and we&apos;re not paid to
                                        push any particular provider.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="card-title" >
                                        No pressure
                                    </h4>
                                    <p className="card-description" >
                                        No countdown timers, no &ldquo;limited-time&rdquo; offers.
                                        Take the time you need.
                                    </p>
                                </div>
                            </div>

                            <div className="border-divider" style={{ margin: "var(--space-lg) 0" }} />

                            <p className="card-description">
                                We&apos;re an information resource, not a broker or an
                                advisor. For advice specific to your situation, we&apos;d
                                always encourage speaking with a licensed insurance
                                professional.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===================================================
          HOW IT WORKS
          CLASSES: .main-section .section-light .container
                   .sub-section .discription-under-h2 .card-grid-gap
                   .border-default .card-title .card-description
          =================================================== */}
            <section className="main-section section-light">
                <div className="container">
                    <div className="sub-section" style={{ textAlign: "center" }}>
                        <h2>How it works</h2>
                        <p
                            className="discription-under-h2"
                            style={{ margin: "8px auto 0", maxWidth: "44ch" }}
                        >
                            Three steps, no obligation at any point.
                        </p>
                    </div>

                    <div
                        className="card-grid-gap"
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                        }}
                    >
                        {[
                            ["1", "Tell us what you need", "Health, home, or auto — pick a category to start exploring."],
                            ["2", "See plans side by side", "We lay out coverage, costs, and terms using the same format for every provider."],
                            ["3", "Decide on your own terms", "Walk away with clarity. If you choose to buy, you do it directly with the provider — never through us."],
                        ].map(([num, title, body]) => (
                            <div className="border-default" style={{ padding: "var(--space-lg)" }} key={num}>
                                <span
                                    className="text-small"
                                    style={{
                                        display: "inline-flex",
                                        width: "28px",
                                        height: "28px",
                                        borderRadius: "50%",
                                        background: "var(--gradient-accent)",
                                        color: "var(--primary)",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontWeight: 700,
                                        marginBottom: "var(--space-sm)",
                                    }}
                                >
                                    {num}
                                </span>
                                <h3 className="card-title" style={{ fontSize: "17px" }}>{title}</h3>
                                <p className="card-description" style={{ marginTop: "6px" }}>
                                    {body}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===================================================
          NEUTRALITY STATEMENT
          CLASSES: .main-section .section-brand .container
                   .sub-section .accent-panel .discription-under-h2
          =================================================== */}
            <section className="main-section section-brand">
                <div className="container">
                    <div className="sub-section max-w-2xl" >
                        <h2>Staying neutral, on purpose h</h2>
                    </div>

                    <div className="accent-panel">
                        <p
                            className="discription-under-h2"
                            style={{ color: "var(--text)" }}
                        >
                            We don&apos;t accept payment from insurance providers to rank
                            or feature their plans. Every comparison uses the same
                            criteria regardless of provider, and our information is
                            reviewed regularly to stay accurate as policies change.
                        </p>
                        <p className="text-small" style={{ marginTop: "var(--space-sm)" }}>
                            Have a correction or a question about how we source our
                            information? We&apos;d genuinely like to hear it.
                        </p>
                    </div>
                </div>
            </section>

            {/* ===================================================
          QUESTION / INPUT DEMO
          CLASSES: .main-section .section-light .container
                   .sub-section .discription-under-h2 .input-field
                   .btn-primary .border-divider
          =================================================== */}
            <section className="main-section section-light">
                <div className="container">
                    <div className="sub-section" style={{ maxWidth: "720px" }}>
                        <h2>Have a question about how we work?</h2>
                        <p className="discription-under-h2" style={{ marginTop: "var(--space-sm)" }}>
                            Send it our way — we read every message ourselves.
                        </p>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            gap: "var(--space-sm)",
                            flexWrap: "wrap",
                            alignItems: "center",
                        }}
                    >
                        <input
                            className="input-field"
                            placeholder="you@example.com"
                            style={{ flex: "1 1 240px" }}
                        />
                        <button className="btn-primary">Send a question</button>
                    </div>

                    <div className="border-divider" style={{ marginTop: "var(--space-lg)" }} />
                </div>
            </section>

            {/* ===================================================
          CLOSING CTA
          CLASSES: .main-section .section-padding-x .hero-section
                   .container .section-padding-y .btn-primary
          =================================================== */}
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
                            <h3 style={{ color: "#fff" }}>Start exploring your options.</h3>
                            <p style={{ color: "rgba(255,255,255,0.82)", marginTop: "4px" }}>
                                No sign-up required. No one will call you.
                            </p>
                        </div>
                        <button className="btn-primary">Compare plans</button>
                    </div>
                </div>
            </section>
        </main>
    );
}