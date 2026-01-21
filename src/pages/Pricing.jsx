import { useEffect, useState } from "react";
import "./Pricing.css";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  /* 1. Dynamic Year */
  useEffect(() => {
    const yearEl = document.getElementById("year");
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  }, []);

  /* 3. Pricing Toggle Logic */
  const handlePricingToggle = () => {
    setIsYearly((prev) => !prev);
  };

  /* 4. FAQ Accordion */
  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <main id="main-content" className="pricing-root">

      {/* ================= PLANS ================= */}
      <section className="section-padding bg-light" id="plans">
        <div className="container" style={{ marginTop: "100px" }}>

          <div className="toggle-container">
            <div className="toggle-wrapper">
              <span
                className={`toggle-label ${!isYearly ? "active" : ""}`}
              >
                Monthly
              </span>

              <label className="switch">
                <input
                  type="checkbox"
                  checked={isYearly}
                  onChange={handlePricingToggle}
                />
                <span className="slider"></span>
              </label>

              <span
                className={`toggle-label ${isYearly ? "active" : ""}`}
              >
                Yearly
              </span>

              <span className="discount-badge">Save 20%</span>
            </div>
          </div>

          <div className="pricing-grid">

            {/* Consultant */}
            <article className="pricing-card">
              <span className="plan-name">Consultant</span>
              <div className="plan-price">
                <span className="currency">$</span>
                <span className="amount">
                  {isYearly ? "9590" : "999"}
                </span>
              </div>
              <span className="plan-period">per month</span>
              <p className="plan-desc">
                Essential tools for small teams and startups.
              </p>

              <ul className="feature-list">
                <li><i className="fa-solid fa-check"></i> 5 Projects</li>
                <li><i className="fa-solid fa-check"></i> Basic Analytics</li>
                <li><i className="fa-solid fa-check"></i> Email Support</li>
                <li className="disabled"><i className="fa-solid fa-xmark"></i> Dedicated Manager</li>
                <li className="disabled"><i className="fa-solid fa-xmark"></i> 24/7 Priority Support</li>
              </ul>

              <a href="#" className="btn btn-outline" style={{ width: "100%" }}>
                Choose Consultant
              </a>
            </article>

            {/* Enterprise */}
            <article className="pricing-card popular">
              <div className="popular-badge">Most Popular</div>
              <span className="plan-name">Enterprise</span>
              <div className="plan-price">
                <span className="currency">$</span>
                <span className="amount">
                  {isYearly ? "23990" : "2499"}
                </span>
              </div>
              <span className="plan-period">per month</span>
              <p className="plan-desc">
                Complete solution for scaling organizations.
              </p>

              <ul className="feature-list">
                <li><i className="fa-solid fa-check"></i> Unlimited Projects</li>
                <li><i className="fa-solid fa-check"></i> Advanced Analytics</li>
                <li><i className="fa-solid fa-check"></i> Priority Email & Phone</li>
                <li><i className="fa-solid fa-check"></i> Dedicated Manager</li>
                <li className="disabled"><i className="fa-solid fa-xmark"></i> On-site Training</li>
              </ul>

              <a href="#" className="btn btn-secondary" style={{ width: "100%" }}>
                Choose Enterprise
              </a>
            </article>

            {/* Global */}
            <article className="pricing-card">
              <span className="plan-name">Global</span>
              <div className="plan-price">
                <span className="currency">$</span>
                <span className="amount">
                  {isYearly ? "47990" : "4999"}
                </span>
              </div>
              <span className="plan-period">per month</span>
              <p className="plan-desc">
                Full-service partnership for multinational firms.
              </p>

              <ul className="feature-list">
                <li><i className="fa-solid fa-check"></i> Unlimited Everything</li>
                <li><i className="fa-solid fa-check"></i> AI-Driven Insights</li>
                <li><i className="fa-solid fa-check"></i> 24/7 Live Support</li>
                <li><i className="fa-solid fa-check"></i> Dedicated Team</li>
                <li><i className="fa-solid fa-check"></i> On-site Training</li>
              </ul>

              <a href="#" className="btn btn-outline" style={{ width: "100%" }}>
                Choose Global
              </a>
            </article>

          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center" style={{ marginBottom: "40px" }}>
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="faq-container">
            {faqData.map((item, index) => (
              <div className="accordion-item" key={index}>
                <button
                  className={`accordion-header ${
                    activeFaq === index ? "active" : ""
                  }`}
                  aria-expanded={activeFaq === index}
                  onClick={() => toggleFaq(index)}
                >
                  {item.q}
                  <i className="fa-solid fa-chevron-down accordion-icon"></i>
                </button>

                <div
                  className="accordion-body"
                  style={{
                    maxHeight:
                      activeFaq === index ? "200px" : "0",
                  }}
                >
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT STRIP ================= */}
      <div className="contact-strip">
        <div className="container">
          <div className="strip-flex">
            <div className="strip-item">
              <i className="fa-solid fa-envelope"></i> contact@modrspark.com
            </div>
            <div className="strip-item">
              <i className="fa-solid fa-phone"></i> +91 9322465522
            </div>
            <div className="strip-item">
              <i className="fa-solid fa-location-dot"></i> Maharastra, pune
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}

/* ================= FAQ DATA ================= */
const faqData = [
  {
    q: "Can I switch plans later?",
    a: "Yes, you can upgrade or downgrade your plan at any time. Prorated rates will apply for the remainder of the billing cycle.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards, bank transfers (ACH/Wire), and PayPal for enterprise accounts.",
  },
  {
    q: "Do you offer refunds?",
    a: "We offer a 30-day money-back guarantee for new customers on the Consultant and Enterprise plans.",
  },
  {
    q: "Is there a setup fee?",
    a: "There are no setup fees for our standard plans. Custom integrations for Global plans may incur a one-time engineering fee.",
  },
];
