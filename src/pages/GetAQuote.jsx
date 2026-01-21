import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./GetAQuote.css";

export default function GetAQuote() {
  const location = useLocation();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "",
    engagementModel: "",
    projectTitle: "",
    description: "",
    budget: "",
    timeline: "asap",
    contactMethod: "email",
  });

  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);

  /* ---------------------------------
     READ ENGAGEMENT MODEL FROM URL
  ---------------------------------- */
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const model = params.get("model");

    if (model) {
      setFormData((prev) => ({
        ...prev,
        engagementModel: model,
      }));
    }
  }, [location.search]);

  /* ----------------------------
     VALIDATION
  ----------------------------- */
  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = true;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) newErrors.email = true;

    if (!formData.serviceType) newErrors.serviceType = true;
    if (!formData.description.trim()) newErrors.description = true;
    if (!formData.budget) newErrors.budget = true;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSending(true);

    setTimeout(() => {
      alert(
        `Thank you, ${formData.fullName}! Your quote request has been received.`
      );

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        serviceType: "",
        engagementModel: "",
        projectTitle: "",
        description: "",
        budget: "",
        timeline: "asap",
        contactMethod: "email",
      });

      setErrors({});
      setSending(false);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  return (
    <main id="main-content" className="quote-root">
      <section className="section-padding bg-light" id="quote-form">
        <div className="container">
          <div className="form-card">
            <div className="text-center" style={{ marginBottom: "30px" }}>
              <h2>Project Details</h2>
              <p>Please fill out the form below. We reply within 24 hours.</p>
            </div>

            {/* ✅ SHOW SELECTED ENGAGEMENT MODEL */}
            {formData.engagementModel && (
              <div
                style={{
                  background: "#eef6ff",
                  padding: "12px 16px",
                  borderRadius: "6px",
                  marginBottom: "25px",
                  textAlign: "center",
                  fontWeight: 500,
                }}
              >
                Selected engagement model:{" "}
                <strong>
                  {formData.engagementModel
                    .replace("-", " ")
                    .toUpperCase()}
                </strong>
              </div>
            )}

            <form noValidate onSubmit={handleSubmit}>
              {/* BASIC INFO */}
              <h4 className="form-section-title">1. Basic Information</h4>
              <div className="form-grid">
                <div className="form-group">
                  <label>
                    Full Name <span>*</span>
                  </label>
                  <input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={errors.fullName ? "invalid" : ""}
                  />
                </div>

                <div className="form-group">
                  <label>
                    Work Email <span>*</span>
                  </label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? "invalid" : ""}
                  />
                </div>

                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Company Name</label>
                  <input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* PROJECT */}
              <h4 className="form-section-title">2. Project Specification</h4>
              <div className="form-grid">
                <div className="form-group">
                  <label>
                    Project Type <span>*</span>
                  </label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className={errors.serviceType ? "invalid" : ""}
                  >
                    <option value="">Select a Service</option>
                    <option value="web-dev">Website Development</option>
                    <option value="saas">Web App / SaaS</option>
                    <option value="mobile">Mobile App</option>
                    <option value="ui-ux">UI/UX Design</option>
                    <option value="branding">Branding</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Project Title</label>
                  <input
                    name="projectTitle"
                    value={formData.projectTitle}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group full-width">
                  <label>
                    Project Description <span>*</span>
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className={errors.description ? "invalid" : ""}
                  />
                </div>
              </div>

              {/* BUDGET */}
              <h4 className="form-section-title">3. Budget & Timeline</h4>
              <div className="form-grid">
                <div className="form-group">
                  <label>
                    Budget Range <span>*</span>
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={errors.budget ? "invalid" : ""}
                  >
                    <option value="">Select Range</option>
                    <option value="under-25k">Under ₹25,000</option>
                    <option value="25k-50k">₹25,000 – ₹50,000</option>
                    <option value="50k-1lakh">₹50,000 – ₹1,00,000</option>
                    <option value="1lakh-3lakh">₹1,00,000 – ₹3,00,000</option>
                    <option value="3lakh+">Above ₹3,00,000</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Expected Timeline</label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                  >
                    <option value="asap">ASAP</option>
                    <option value="2-4weeks">2 – 4 Weeks</option>
                    <option value="1-3months">1 – 3 Months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Preferred Contact</label>
                  <select
                    name="contactMethod"
                    value={formData.contactMethod}
                    onChange={handleChange}
                  >
                    <option value="email">Email</option>
                    <option value="phone">Phone Call</option>
                    <option value="whatsapp">WhatsApp</option>
                  </select>
                </div>
              </div>

              <div style={{ textAlign: "center", marginTop: "40px" }}>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: "100%", maxWidth: "350px" }}
                  disabled={sending}
                >
                  {sending ? "Sending..." : "Submit Quote Request"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
