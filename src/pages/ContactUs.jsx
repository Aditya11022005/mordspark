import { useState, useRef } from "react";
import "./ContactUs.css";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter a message.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    setSending(true);

    emailjs
      .sendForm(
        "service_0w9i3xr",   // 👈 Service ID
        "template_fdn1dn3",  // 👈 Template ID
        formRef.current,
        "eWdQyRl6fYXCyEYnC"    // 👈 Public Key
      )
      .then(() => {
        alert("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });

        setErrors({});
        setSending(false);
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send message");
        setSending(false);
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="contact-root">

      {/* ================= FORM ================= */}
      <section className="form-section">
        <div className="container">
          <div className="form-wrapper">
            <div className="section-header">
              <h2>Send us a Message</h2>
              <p style={{ color: "var(--clr-text-muted)" }}>
                We usually reply within 24 hours.
              </p>
            </div>

            <form
              ref={formRef}
              className="contact-form"
              noValidate
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  style={{ borderColor: errors.name ? "#d32f2f" : "#ccc" }}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address "
                  value={formData.email}
                  onChange={handleChange}
                  style={{ borderColor: errors.email ? "#d32f2f" : "#ccc" }}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91..."
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Project Inquiry..."
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group full-width">
                <label>Message *</label>
                <textarea
                  name="message"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleChange}
                  style={{ borderColor: errors.message ? "#d32f2f" : "#ccc" }}
                ></textarea>
                {errors.message && (
                  <span className="error-message">{errors.message}</span>
                )}
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: "100%",backgroundColor: "var(--clr-primary)",display: "flex", justifyContent: "center", alignItems: "center" }}
              >
                {sending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>

    </main>
  );
}
