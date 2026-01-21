import "./Footer.css";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <>
    <footer className="site-footer">

        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-col">
            <Link to="/" className="footer-logo">
              Mord<span>Spark</span>
            </Link>

            <p>
                Building reliable digital solutions with a focus on clarity, quality, and long-term value.
            </p>
          </div>

          {/* Company */}
          <div className="footer-col">
            <h4>About MordSpark</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/portfolio">News & Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>


          {/* Services */}
          <div className="footer-col">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><a href="#">Business Analytics</a></li>
              <li><a href="#">IT Consulting</a></li>
              <li><a href="#">Cyber Security</a></li>
              <li><a href="#">Cloud Computing</a></li>
            </ul>
          </div>

          {/* Legal + Social */}
          <div className="footer-col">
            <h4>Legal</h4>
            <ul className="footer-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Refund Policy</a></li>
            </ul>

            <div className="social-links">
              <a href="https://linkedin.com" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://twitter.com" aria-label="Twitter">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="https://facebook.com" aria-label="Facebook">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="footer-bottom" style={{ color:"white" }}>
          © {new Date().getFullYear()} MordSpark. All rights reserved.
        </div>

      
    </footer>
    </>
  );
};

export default Footer;
