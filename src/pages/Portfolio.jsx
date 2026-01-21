import { useState } from "react";
import "./Portfolio.css";

const FILTERS = [
  { label: "All Projects", value: "all" },
  { label: "Web Development", value: "web" },
  { label: "Mobile Apps", value: "mobile" },
  { label: "Enterprise", value: "enterprise" },
  { label: "Consulting", value: "consulting" },
];

const PROJECTS = [
  {
    id: 1,
    category: "web",
    label: "Web Development",
    title: "E-Commerce Platform",
    desc: "A full-scale e-commerce website with secure payments, product management, and modern UI.",
    img: "../public/images/E-Commerce.jpg",
    link: "https://aruz.in/",
  },
  {
    id: 2,
    category: "enterprise",
    label: "Corporate Website",
    title: "Corporate Landing Page",
    desc: "Professional corporate website designed for brand trust, lead generation, and performance.",
    img: "../public/images/corporate.jpg",
    link: "https://www.cardpays.in/",
  },
  {
    id: 3,
    category: "consulting",
    label: "Data Analytics",
    title: "Data Visualization Dashboard",
    desc: "Interactive dashboards showcasing advanced data visualization techniques and business insights.",
    img: "../public/images/dashboard.jpg",
    link: "https://projects-dashboard.netlify.app/",
  },
  {
    id: 4,
    category: "mobile",
    label: "Web & Mobile App",
    title: "Pustak Market",
    desc: "Online book marketplace offering both website and mobile application for seamless shopping.",
    img: "../public/images/book.jpg",
    link: "https://pustakmarket.com/",
  },
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const visibleProjects =
    activeFilter === "all"
      ? PROJECTS
      : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container hero-grid">
          <div className="hero-text">
            <h1>Our Portfolio</h1>
            <p>
              We partner with ambitious brands and startups to deliver scalable,
              secure, and high-impact digital products.
            </p>
            <a href="#projects" className="btn btn-primary btn-light">
              View Projects
            </a>
          </div>

          <div className="hero-visual">
            <img
              src="https://placehold.co/800x500/0A3D62/FFFFFF?text=Project+Showcase"
              alt="Portfolio showcase"
            />
          </div>
        </div>
      </section>

      {/* FILTERS */}
      <section className="filter-section" id="projects">
        <div className="container">
          <div className="filter-container">
            {FILTERS.map(f => (
              <button
                key={f.value}
                className={`filter-btn ${
                  activeFilter === f.value ? "active" : ""
                }`}
                onClick={() => setActiveFilter(f.value)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="portfolio-grid">
            {visibleProjects.map(project => (
              <article className="project-card" key={project.id}>
                <div className="card-thumb">
                  <img src={project.img} alt={project.title} />
                </div>

                <div className="card-body">
                  <span className="cat-badge">{project.label}</span>
                  <h3 className="card-title">{project.title}</h3>
                  <p className="card-desc">{project.desc}</p>

                  <a
                    href={project.link}
                    className="card-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Case Study{" "}
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <div className="contact-strip">
        <div className="container strip-flex">
          <div className="strip-item">
            <i className="fa-solid fa-envelope"></i> mordspark@gmail.com
          </div>
          <div className="strip-item">
            <i className="fa-solid fa-phone"></i>+91 9096807019
          </div>
          <div className="strip-item">
            <i className="fa-solid fa-location-dot"></i> Maharastra, pune
          </div>
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
