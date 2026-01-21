import "./Home.css";
import { Link } from "react-router-dom";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Home = () => {
  const formRef = useRef();

  const handleHomeFormSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0w9i3xr",    // 👈 Replace
        "template_fdn1dn3",   // 👈 Replace
        formRef.current,
        "eWdQyRl6fYXCyEYnC"     // 👈 Replace
      )
      .then(() => {
        alert("Message sent successfully!");
        formRef.current.reset();
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send message");
      });
  };

  return (
    <main id="main-content" className="home-root">

      {/* HERO */}
      <section id="hero" className="hero-section">
        <div className="container hero-grid">
          <article className="hero-content">
            <h1>Trusted Digital Solutions for Modern Businesses</h1>
            <p>
              We partner with organizations to design, build, and scale secure
              digital solutions that deliver measurable business outcomes.
            </p>
            <div className="hero-actions">
              <Link to="/get-a-quote" className="btn btn-primary">
                Get a Quote
              </Link>
              <a href="#services" className="btn btn-secondary">
                Explore Services
              </a>
            </div>
          </article>

          <figure className="hero-image">
            <img
              src="https://placehold.co/800x500/0A3D62/FFFFFF?text=Strategic+Growth"
              alt="Corporate team analyzing data"
            />
          </figure>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section-padding bg-light">
        <div className="container">
          <header className="section-header">
            <span className="subheading">What We Do</span>
            <h2>Our Expertise</h2>
            <p>Capabilities Designed for Enterprise Growth</p>
          </header>

          <div className="grid-3">
            <article className="card service-card">
              <i className="fa-solid fa-chart-line service-icon" />
              <h3>Business Analytics</h3>
              <p>Turning business data into clear, informed decisions.</p>
              <Link to="/portfolio" className="service-link">
                Learn More
              </Link>
            </article>

            <article className="card service-card">
              <i className="fa-solid fa-laptop-code service-icon" />
              <h3>IT Consulting</h3>
              <p>Practical technology guidance aligned with your business goals.</p>
              <Link to="/portfolio" className="service-link">
                Learn More
              </Link>
            </article>

            <article className="card service-card">
              <i className="fa-solid fa-shield-halved service-icon" />
              <h3>Cyber Security</h3>
              <p>Safeguarding systems, data, and operations.</p>
              <Link to="/portfolio" className="service-link">
                Learn More
              </Link>
            </article>
          </div>
        </div>
      </section>

    

      {/* WHY US */}
      <section id="why-us" className="section-padding bg-light">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose MordSpark</h2>
          </div>

          <div className="grid-3">
            <div className="feature-item">
              <div className="feature-icon-box">
                <i className="fa-solid fa-users" />
              </div>
              <div>
                <h4>Expert Team</h4>
                <p>Skilled professionals with real project experience.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon-box">
                <i className="fa-solid fa-clock" />
              </div>
              <div>
                <h4>24/7 Support</h4>
                <p>Always available</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon-box">
                <i className="fa-solid fa-trophy" />
              </div>
              <div>
                <h4>Proven Results</h4>
                <p>A track record of successful implementations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="section-padding">
        <div className="container">
          <div className="section-header">
            <h2>Our Workflow</h2>
            <p>A clear, structured approach from start to delivery.</p>
          </div>

          <ol className="process-ol">
            <li className="process-li">
              <div className="process-marker">1</div>
              <h4>Consult</h4>
              <p>Understand goals and requirements.</p>
            </li>

            <li className="process-li">
              <div className="process-marker">2</div>
              <h4>Plan</h4>
              <p>Define scope, timeline, and approach.</p>
            </li>

            <li className="process-li">
              <div className="process-marker">3</div>
              <h4>Execute</h4>
              <p>Build, test, and integrate the solution.</p>
            </li>

            <li className="process-li">
              <div className="process-marker">4</div>
              <h4>Deliver</h4>
              <p>Deploy and support.</p>
            </li>
          </ol>
        </div>
      </section>

      <section id="portfolio" className="section-padding bg-light">
        <div className="container">
          <div className="section-header">
            <h2>Recent Case Studies</h2>
          </div>

          <div className="grid-3">
            <article className="card">
              <div className="project-img-container">
                <img
                  src="https://placehold.co/400x250/0A3D62/FFF?text=P+O+S"
                  alt="POS"
                />
              </div>
              <div className="card-body" style={{ paddingTop: "20px" }}>
                <h4>POS</h4>
                <p>
                  We provide reliable POS solutions to manage sales, billing, and inventory efficiently.
                </p>
                <span className="project-metric">Accurate Sales Reports</span>
              </div>
            </article>

            <article className="card">
              <div className="project-img-container">
                <img
                  src="https://placehold.co/400x250/1E90FF/FFF?text=AI+Agent"
                  alt="AI Agent"
                />
              </div>
              <div className="card-body" style={{ paddingTop: "20px" }}>
                <h4>AI Agent</h4>
                <p>
                  Our AI agents automate customer support, sales, and daily business tasks.
                </p>
                <span className="project-metric">24/7 Customer Support</span>
              </div>
            </article>

            <article className="card">
              <div className="project-img-container">
                <img
                  src="https://placehold.co/400x250/333/FFF?text=Bussiness+Development"
                  alt="Healthcare Security Shield"
                />
              </div>
              <div className="card-body" style={{ paddingTop: "20px" }}>
                <h4>Bussiness Development</h4>
                <p>
                  We help businesses grow by identifying new opportunities and markets.
                </p>
                <span className="project-metric">2x More Qualified Leads</span>
              </div>
            </article>
          </div>

          <div className="text-center" style={{ marginTop: "40px" }}>
            <Link to="/portfolio" className="btn btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      <section id="testimonials" className="section-padding">
        <div className="container">
          <div className="section-header">
            <h2>Client Feedback</h2>
          </div>

          <div className="grid-3">
            <article className="card testimonial-card">
              <div className="rating" aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              <p>
                “The team delivered exactly what was outlined. Clear
                communication, strong technical execution, and dependable
                follow-through.”
              </p>
              <div className="client-meta">
                <div className="client-avatar">
                  <img
                    src="https://placehold.co/48x48/ccc/333?text=SJ"
                    alt="Viraj Kale"
                  />
                </div>
                <div>
                  <strong>Viraj Kale</strong>
                  <br />
                  <small>CEO, Aruz</small>
                </div>
              </div>
            </article>

            <article className="card testimonial-card">
              <div className="rating" aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              <p>
                “We saw measurable improvements shortly after implementation.
                The engagement was structured and well managed.”
              </p>
              <div className="client-meta">
                <div className="client-avatar">
                  <img
                    src="https://placehold.co/48x48/ccc/333?text=MR"
                    alt="Raj Gosavi"
                  />
                </div>
                <div>
                  <strong>Raj Gosavi</strong>
                  <br />
                  <small>CEO, Pustak Market</small>
                </div>
              </div>
            </article>

            <article className="card testimonial-card">
              <div className="rating" aria-label="4 out of 5 stars">
                ★★★★☆
              </div>
              <p>
                “A reliable technology partner with a strong focus on security
                and operational stability.”
              </p>
              <div className="client-meta">
                <div className="client-avatar">
                  <img
                    src="https://placehold.co/48x48/ccc/333?text=DC"
                    alt="Satvir Goyal"
                  />
                </div>
                <div>
                  <strong>Satvir Goyal</strong>
                  <br />
                  <small>Director, CardPays</small>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      


      {/* CONTACT */}
      <section id="contact" className="section-padding">
        <div className="container">
          <div className="section-header">
            <h2>Get In Touch</h2>
            <p>Ready to start your project? Contact us today.</p>
          </div>

          <div className="contact-grid">
            <div className="contact-info">
              <h3>Contact Information</h3>
              <p>Reach out to our sales team for enterprise solutions.</p>

              <div className="contact-detail">
                <i className="fa-solid fa-envelope"></i>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=mordspark@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  mordspark@gmail.com
                </a>
              </div>

              <div className="contact-detail">
                <i className="fa-solid fa-phone"></i>
                <a href="tel:+919096807019">+91 90968 07019</a>
              </div>

              <div className="contact-detail">
                <i className="fa-solid fa-location-dot"></i>
                <span>Pune, Maharashtra</span>
              </div>
            </div>

            {/* EMAIL FORM */}
            <form
              ref={formRef}
              className="contact-form"
              noValidate
              onSubmit={handleHomeFormSubmit}
            >
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" name="name" required />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input type="email" name="email" required />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea name="message" rows={5} required></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
