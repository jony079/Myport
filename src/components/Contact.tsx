import { MdArrowOutward, MdCopyright } from "react-icons/md";
import { FaGraduationCap, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:taybe00mse@gmail.com" data-cursor="disable">
                <FaEnvelope style={{ marginRight: 8, color: "var(--accentColor)" }} />
                taybe00mse@gmail.com
              </a>
            </p>
            <h4>Location</h4>
            <p className="contact-location">
              <FaMapMarkerAlt style={{ marginRight: 8, color: "var(--accentColor)" }} />
              Rajshahi, Bangladesh
            </p>
            <h4>Affiliation</h4>
            <p className="contact-location">
              <FaGraduationCap style={{ marginRight: 8, color: "var(--accentColor)" }} />
              Rajshahi University of Engineering & Technology (RUET)
            </p>
          </div>

          <div className="contact-box">
            <h4>Connect & Profiles</h4>
            <a
              href="https://github.com/jony079"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub / jony079 <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/md-taybe-hossin-jony-751685414"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn / Md Tayve Hossin Jony <MdArrowOutward />
            </a>
            <a
              href="mailto:taybe00mse@gmail.com?subject=Research%20Collaboration"
              data-cursor="disable"
              className="contact-social"
            >
              Research Inquiry <MdArrowOutward />
            </a>
          </div>

          <div className="contact-box">
            <h2>
              Md Tayve Hossin Jony <br />
              <span>Materials Science & Engineering</span>
            </h2>
            <p className="contact-bio-note">
              Department of MSE • Rajshahi University of Engineering & Technology
            </p>
            <h5>
              <MdCopyright /> 2026 Md Tayve Hossin Jony. All Rights Reserved.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
