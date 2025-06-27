import React from 'react';
import './style.css';
import logo from './img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const gitHubIcon = <FontAwesomeIcon icon={faGithub} />;
const linkedInIcon = <FontAwesomeIcon icon={faLinkedin} />;

const ContactCard = () => {
  return (
    <div className="contact-card">
      <div className="contact-logo">
        <img src={logo} alt="Logo" className="contact-logo-img" />
      </div>

      <div>
        <div className="contact-text">
          <p>Kristýna Konečná</p>
          <em>Graphic Designer & UX/UI Enthusiast</em>
        </div>

        <div className="contact-links">
          <a
            className="contact-link"
            href="https://www.linkedin.com/in/kristynakonecna/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {linkedInIcon}
          </a>
          <a
            className="contact-link"
            href="https://github.com/Kaykay-nova"
            target="_blank"
            rel="noopener noreferrer"
          >
            {gitHubIcon}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
