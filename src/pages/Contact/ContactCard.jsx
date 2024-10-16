import React from 'react';
import './style.css';
import logo from './img/logo.png';

const ContactCard = () => {
  return (
    <div className="contact-card">
      <div className="contact-logo">
        <img src={logo} alt="Logo" className="contact-logo-img" />
      </div>

      <div className="contact-links">
        <a href="https://www.linkedin.com/in/kristynakonecna/" target="_blank" rel="noopener noreferrer" className="contact-link">
          LinkedIn
        </a>
        <a href="https://github.com/Kaykay-nova" target="_blank" rel="noopener noreferrer" className="contact-link">
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ContactCard;
