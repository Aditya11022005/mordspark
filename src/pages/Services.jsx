import { Link } from "react-router-dom";
import "./Services.css";

const Services = () => {
  return (
    <main id="main-content" className="services-root">
      {/* ================= PAGE HERO ================= */}
      <section className="page-hero">
        <div className="container" style={{ textAlign: "center" }}>
          <span
            className="subheading"
            style={{
              color: "#64b5f6",
              fontWeight: 800,
              letterSpacing: "-0.02em",
            }}
          >
            Our Capabilities
          </span>
          <h1>Digital Services Built for Real Business Needs</h1>

          <div
            style={{
              display: "flex",
              gap: "15px",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p>
              We provide focused technology services that help organizations
              build, scale, and operate reliable digital systems.
            </p>

            <div
              style={{
                display: "flex",
                gap: "15px",
                flexWrap: "wrap",
              }}
            >
              <Link
                to="/get-a-quote"
                className="btn btn-secondary btn-quote"
                style={{ borderColor: "white", color: "white" }}
              >
                Get a Quote
              </Link>
              <Link
                to="/#core-services"
                className="btn btn-white"
                style={{
                  border: "1px solid #ffffff",
                  fontWeight: 600,
                }}
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CORE SERVICES ================= */}
      <section id="core-services" className="section-padding bg-light">
        <div className="container">
          <header className="section-header">
            <span className="subheading">What We Offer</span>
            <h2>Core Services</h2>
            <p>
              Practical technology services designed to support modern
              enterprises.
            </p>
          </header>

          <div className="grid-3">
            <article className="card">
              <i className="fa-solid fa-chart-pie service-icon" />
              <h3>Data Analytics</h3>
              <p>
                Helping teams make informed decisions using clear, reliable
                data.
              </p>
              <a href="#analytics-detail" className="service-link">
                Learn More <i className="fa-solid fa-arrow-right" />
              </a>
            </article>

            <article className="card">
              <i className="fa-solid fa-code service-icon" />
              <h3>Software Dev</h3>
              <p>
                Custom software built to support scale, security, and long-term
                use.
              </p>
              <a href="#software-detail" className="service-link">
                Learn More <i className="fa-solid fa-arrow-right" />
              </a>
            </article>

            <article className="card">
              <i className="fa-solid fa-cloud service-icon" />
              <h3>Cloud Solutions</h3>
              <p>
                Designing and managing cloud environments that are stable and
                cost-aware.
              </p>
              <a href="#cloud-detail" className="service-link">
                Learn More <i className="fa-solid fa-arrow-right" />
              </a>
            </article>

            <article className="card">
              <i className="fa-solid fa-shield-halved service-icon" />
              <h3>Cyber Security</h3>
              <p>
                Protecting systems and data through structured security
                practices.
              </p>
              <a href="#security-detail" className="service-link">
                Learn More <i className="fa-solid fa-arrow-right" />
              </a>
            </article>

            <article className="card">
              <i className="fa-solid fa-lightbulb service-icon" />
              <h3>IT Consulting</h3>
              <p>
                Technology guidance aligned with operational and business goals.
              </p>
              <a href="#consulting-detail" className="service-link">
                Learn More <i className="fa-solid fa-arrow-right" />
              </a>
            </article>

            <article className="card">
              <i className="fa-solid fa-mobile-screen service-icon" />
              <h3>Mobile Apps</h3>
              <p>
                Mobile solutions focused on performance, usability, and
                maintainability.
              </p>
              <a href="#mobile-detail" className="service-link">
                Learn More <i className="fa-solid fa-arrow-right" />
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* ================= SERVICE DETAILS ================= */}
      <section className="section-padding">
        <div className="container">
          {/* Analytics */}
          <div id="analytics-detail" className="service-row">
            <div className="service-row-content">
              <span className="subheading">Data & Intelligence</span>
              <h2>Business Analytics</h2>
              <p>
                We help organizations organize, analyze, and use data to support
                planning and operational decisions.
              </p>
              <ul className="service-features">
                <li>
                  <i className="fa-solid fa-check-circle" /> Predictive analysis
                </li>
                <li>
                  <i className="fa-solid fa-check-circle" /> Performance
                  dashboards (PowerBI / Tableau)
                </li>
                <li>
                  <i className="fa-solid fa-check-circle" /> Data storage and
                  pipelines
                </li>
                <li>
                  <i className="fa-solid fa-check-circle" /> Large-scale data
                  processing
                </li>
              </ul>
              <a href="#contact" className="btn btn-primary">
                Request Consultation
              </a>
            </div>

            <div className="service-row-image">
              <img
                src="https://placehold.co/600x400/F0F4F8/0A3D62?text=Data+Analytics+Dashboard"
                alt="Data analytics dashboard"
                width="600"
                height="400"
              />
            </div>
          </div>

          {/* Software */}
          <div id="software-detail" className="service-row">
            <div className="service-row-content">
              <span className="subheading">Engineering</span>
              <h2>Custom Software Development</h2>
              <p>
                We design and build custom software tailored to specific
                operational requirements.
              </p>
              <ul className="service-features">
                <li>
                  <i className="fa-solid fa-check-circle" /> Full-Stack Web
                  Development
                </li>
                <li>
                  <i className="fa-solid fa-check-circle" /> API Design &
                  Integration
                </li>
                <li>
                  <i className="fa-solid fa-check-circle" /> Legacy System
                  Modernization
                </li>
              </ul>
              <a href="#contact" className="btn btn-primary">
                Start a Project
              </a>
            </div>

            <div className="service-row-image">
              <img
                src="https://placehold.co/600x400/F0F4F8/1E90FF?text=Code+Architecture"
                alt="Software development code on screen"
                width="600"
                height="400"
              />
            </div>
          </div>

          {/* Consulting */}
          <div id="consulting-detail" className="service-row">
            <div className="service-row-content">
              <span className="subheading">Strategy</span>
              <h2>IT Consulting & Strategy</h2>
              <p>
                We assess existing systems and define practical roadmaps for
                improvement.
              </p>
              <ul className="service-features">
                <li>
                  <i className="fa-solid fa-check-circle" /> Digital Digital
                  roadmaps
                </li>
                <li>
                  <i className="fa-solid fa-check-circle" /> Technology
                  selection
                </li>
                <li>
                  <i className="fa-solid fa-check-circle" /> Vendor coordination
                </li>
                <li>
                  <i className="fa-solid fa-check-circle" /> Cost and efficiency
                  reviews
                </li>
              </ul>
              <a href="#contact" className="btn btn-primary">
                Speak to an Expert
              </a>
            </div>

            <div className="service-row-image">
              <img
                src="https://placehold.co/600x400/F0F4F8/333333?text=Strategic+Planning"
                alt="Consultants meeting in office"
                width="600"
                height="400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section className="section-padding" style={{ marginTop: "-90px" }}>
        <div className="container text-center">
          <div className="section-header">
            <h2>Industries We Work With</h2>
            <p>Experience across multiple business domains.</p>
          </div>

          <div className="industry-grid">
            <div className="industry-tag">
              <i className="fa-solid fa-building-columns" /> FinTech & Banking
            </div>
            <div className="industry-tag">
              <i className="fa-solid fa-cart-shopping" /> Retail & E-Commerce
            </div>
            <div className="industry-tag">
              <i className="fa-solid fa-graduation-cap" /> EdTech
            </div>
            <div className="industry-tag">
              <i className="fa-solid fa-industry" /> Manufacturing
            </div>
            <div className="industry-tag">
              <i className="fa-solid fa-house-chimney" /> Real Estate
            </div>
          </div>
        </div>
      </section>

      {/* ================= ENGAGEMENT MODELS ================= */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-header">
            <h2>Engagement Models</h2>
            <p>
              Choose the working model that best fits your project and budget.
            </p>
          </div>

          <div className="grid-3">
            <div className="card engagement-card">
              <i className="fa-solid fa-file-contract engagement-icon"></i>
              <h4>Fixed Price</h4>
              <p>
                Suitable for clearly defined projects with stable requirements.
              </p>
              <ul className="engagement-list">
                <li>Defined scope</li>
                <li>Predictable timelines</li>
                <li>Controlled budget</li>
              </ul>
              <Link
                to="/get-a-quote?model=fixed-price"
                className="btn btn-secondary"
                style={{ marginTop: "auto" }}
              >
                Discuss Fixed Scope
              </Link>
            </div>

            <div className="card engagement-card">
              <i className="fa-solid fa-hourglass-half engagement-icon"></i>
              <h4>Time &amp; Material</h4>
              <p>
                Appropriate for evolving requirements and iterative delivery.
              </p>
              <ul className="engagement-list">
                <li>Flexible scope</li>
                <li>Ongoing delivery</li>
                <li>Transparent billing</li>
              </ul>
              <Link
                to="/get-a-quote?model=time-material"
                className="btn btn-secondary"
                style={{ marginTop: "auto" }}
              >
                Discuss Flexible Work
              </Link>
            </div>

            <div className="card engagement-card">
              <i className="fa-solid fa-users-gear engagement-icon"></i>
              <h4>Dedicated Team</h4>
              <p>
                A long-term collaboration model with focused team allocation.
              </p>
              <ul className="engagement-list">
                <li>Consistent team</li>
                <li>Direct communication</li>
                <li>Knowledge continuity</li>
              </ul>
              <Link
                to="/get-a-quote?model=dedicated-team"
                className="btn btn-secondary"
                style={{ marginTop: "auto" }}
              >
                Discuss Long-Term Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
