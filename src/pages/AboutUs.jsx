import "./AboutUs.css";

export default function AboutUs() {
  return (
    <main id="main-content" className="about-root">
      {/* HERO */}
      <section
        className="page-hero"
        style={{
          paddingTop: "170px",
          paddingBottom: "120px",
          height: "550px",
          background: "linear-gradient(135deg, #0a3d62 0%, #072d4a 100%)",
          position: "relative",
          color: "#fff",
          textAlign: "center",
        }}
      >

        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            fontWeight: "500",
          }}
        >
          <span
            style={{
              color: "#60a5fa",
              letterSpacing: "2px",
              textTransform: "uppercase",
              fontSize: "0.9rem",
              display: "block",
              marginBottom: "16px",
            }}
          >
            ABOUT CORPSOLUTION
          </span>

          <h1
            style={{
              fontSize: "3.5rem",
              lineHeight: "1.2",
              marginBottom: "24px",
              fontWeight: 800,
              color: "#fff",
            }}
          >
            Building Reliable Digital Systems
          </h1>

          <p
            style={{
              fontSize: "1.25rem",
              color: "#e2e8f0",
              maxWidth: "900px",
            }}
          >
            We help businesses build and maintain digital solutions they can trust.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="section-padding story-section">
        <div className="container">
          <div className="story-grid">
            <div className="story-image">
              <img
                src="https://placehold.co/600x700/F0F4F8/0A3D62?text=Strategic+Meeting"
                alt="Strategic Meeting"
              />
            </div>

            <div className="story-text">
              <span className="section-label">Who We Are</span>
              <h2>Focused on Reliable Digital Work</h2>

              <p>
                We are a focused digital team working with businesses to build practical and dependable digital solutions.
              </p>

              <div className="story-highlight">
                “We care about building things that work well, last long, and actually help the business.”
              </div>

              <p>
                Our approach is simple: clear communication, careful execution, and long-term reliability over short-term trends.
              </p>

              <img
                src="https://placehold.co/200x60/FFFFFF/000000?text=Signature"
                alt="Signature"
                className="signature"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MISSION / VISION / VALUES */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-header">
            <span className="subheading">Our Foundation</span>
            <h2>Purpose-Driven Performance</h2>
            <p>The core principles that guide our decisions.</p>
          </div>

          <div className="mvv-grid">
            <div
              className="mvv-card"
              style={{
                position: "relative",
                padding: "40px",
                borderRadius: "12px",
                border: "1px solid #e2e8f0",
                transition: "0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 10px 25px rgba(0,0,0,0.08)";
                e.currentTarget.style.borderTop = "4px solid #1e90ff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderTop = "4px solid transparent";
              }}
            >
              <div className="mvv-icon">
                <i className="fa-solid fa-rocket"></i>
              </div>
              <h3>Our Mission</h3>
              <p>
                Empower enterprises with resilient, scalable digital
                infrastructure.
              </p>
            </div>

            <div
              className="mvv-card"
              style={{
                position: "relative",
                padding: "40px",
                borderRadius: "12px",
                border: "1px solid #e2e8f0",
                transition: "0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 10px 25px rgba(0,0,0,0.08)";
                e.currentTarget.style.borderTop = "4px solid #1e90ff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderTop = "4px solid transparent";
              }}
            >
              <div className="mvv-icon">
                <i className="fa-solid fa-eye"></i>
              </div>
              <h3>Our Vision</h3>
              <p>
                Be the world's most trusted partner for digital transformation.
              </p>
            </div>

            <div
              className="mvv-card"
              style={{
                position: "relative",
                padding: "40px",
                borderRadius: "12px",
                border: "1px solid #e2e8f0",
                transition: "0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 10px 25px rgba(0,0,0,0.08)";
                e.currentTarget.style.borderTop = "4px solid #1e90ff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderTop = "4px solid transparent";
              }}
            >
              <div className="mvv-icon">
                <i className="fa-regular fa-gem"></i>
              </div>
              <h3>Our Values</h3>
              <p>
                Integrity, excellence, and relentless focus on client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-number">2+</span>
              <span className="stat-label">Years of Experience</span>
            </div>

            <div className="stat-card">
              <span className="stat-number">10+</span>
              <span className="stat-label">Projects Delivered</span>
            </div>

            <div className="stat-card">
              <span className="stat-number">10+</span>
              <span className="stat-label">Happy Clients</span>
            </div>

            <div className="stat-card">
              <span className="stat-number">100%</span>
              <span className="stat-label">Client-Focused Work</span>
            </div>
          </div>
        </div>
      </section>


      <section className="section-padding bg-light">
  <div className="container">
    <div className="section-header">
      <span className="subheading">Leadership</span>
      <h2>Meet the Executives</h2>
    </div>

    <div className="team-grid">
      {/* Card 1 */}
      <div className="team-card">
        <div className="team-img-box">
          <img
            src="../public/images/team/aditya.png"
            alt="Aditya Pande, Lead Developer"
          />
        </div>
        <div className="team-info">
          <h4 className="team-name">Aditya Pande</h4>
          <span className="team-role">Lead Developer</span>
          <p style={{ fontSize: "0.9rem", marginBottom: "10px" }}>
            Architecting scalable solutions with expertise in full-stack development and team leadership. Driving technical excellence across all projects.
          </p>
          <div className="team-social">
            <a href="#" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="team-card">
        <div className="team-img-box">
          <img
            src="../public/images/team/avatar.jpg"
            alt="Harshal Mahajan, Full-Stack Developer"
          />
        </div>
        <div className="team-info">
          <h4 className="team-name">Harshal Mahajan</h4>
          <span className="team-role">Full-Stack Developer</span>
          <p style={{ fontSize: "0.9rem", marginBottom: "10px" }}>
            Specializing in end-to-end application development with a focus on seamless integration and optimal performance.
          </p>
          <div className="team-social">
            <a href="#" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="team-card">
        <div className="team-img-box">
          <img
            src="../public/images/team/dhruv.png"
            alt="Dhruv Limbasiya, Backend Developer"
          />
        </div>
        <div className="team-info">
          <h4 className="team-name">Dhruv Limbasiya</h4>
          <span className="team-role">Backend Developer</span>
          <p style={{ fontSize: "0.9rem", marginBottom: "10px" }}>
            Building robust server-side architectures and APIs. Expert in database optimization and system scalability.
          </p>
          <div className="team-social">
            <a href="#" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="team-card">
        <div className="team-img-box">
          <img
            src="../public/images/team/rishi.jpeg"
            alt="Rishi Patel, Frontend Developer (UI Focus)"
          />
        </div>
        <div className="team-info">
          <h4 className="team-name">Rishi Patel</h4>
          <span className="team-role">Frontend Developer (UI Focus)</span>
          <p style={{ fontSize: "0.9rem", marginBottom: "10px" }}>
            Crafting intuitive, responsive user interfaces with modern frameworks. Transforming designs into seamless experiences.
          </p>
          <div className="team-social">
            <a href="#" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      {/* card 5 */}
      <div className="team-card">
        <div className="team-img-box">
          <img
            src="../public/images/team/smit.JPEG"
            alt="Smit Gadhiya, UI / UX Designer"
          />
        </div>
        <div className="team-info">
          <h4 className="team-name">Smit Gadhiya</h4>
          <span className="team-role">UI / UX Designer</span>
          <p style={{ fontSize: "0.9rem", marginBottom: "10px" }}>
            Designing user-centered experiences that blend aesthetics with functionality. Creating interfaces that users love.
          </p>
          <div className="team-social">
            <a href="#" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>


               {/*End the card */}
        
      

    </div>
  </div>
</section>


      {/* CULTURE */}
      <section className="section-padding">
        <div className="container">
          <div className="hero-split">
            <div className="hero-text">
              <span className="subheading">Our Culture</span>
              <h2>How We Work</h2>

              <div className="culture-grid single-column">
                <div className="culture-item">
                  <i className="fa-solid fa-check-circle culture-icon"></i>
                  <div>
                    <h4 >Culture Items</h4>
                    <p style={{ color: "black" }}>Decisions guided by practical business needs.</p>
                  </div>
                </div>

                <div className="culture-item">
                  <i className="fa-solid fa-check-circle culture-icon"></i>
                  <div>
                    <h4>Clear Communication</h4>
                    <p style={{ color: "black" }}>Transparent updates throughout the project lifecycle.</p>
                  </div>
                </div>

                <div className="culture-item">
                  <i className="fa-solid fa-check-circle culture-icon"></i>
                  <div>
                    <h4>Thoughtful Execution</h4>
                    <p style={{ color: "black" }}>Steady, iterative progress with attention to quality.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <img
                src="https://placehold.co/600x700/F0F4F8/0A3D62?text=Work+Culture"
                alt="Work Culture"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
