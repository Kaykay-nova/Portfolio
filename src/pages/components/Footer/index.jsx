import React, { useState } from 'react';
import './style.css';
import PrivacyPolicy from '../PrivacyPolicy';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const gitHubIcon = <FontAwesomeIcon icon={faGithub} />;
const linkedInIcon = <FontAwesomeIcon icon={faLinkedinIn} />;

const Footer = () => {
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);

  return (
    <footer>
      <p>
        <a href="#" onClick={() => setIsPolicyOpen(true)}>
          Ochrana osobních údajů
        </a>
      </p>
      <p>&copy; 2024 Kristýna Konečná | Všechna práva vyhrazena</p>

      <div className="footer__links">
        <a
          className="footer__icon"
          href="https://www.linkedin.com/in/kristynakonecna/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkedInIcon}
        </a>
        <a
          className="footer__icon"
          href="https://github.com/Kaykay-nova"
          target="_blank"
          rel="noopener noreferrer"
        >
          {gitHubIcon}
        </a>
      </div>
      <PrivacyPolicy
        isOpen={isPolicyOpen}
        onClose={() => setIsPolicyOpen(false)}
      />
    </footer>
  );
};

export default Footer;
