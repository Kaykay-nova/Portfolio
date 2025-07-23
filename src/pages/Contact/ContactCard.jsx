import React, { useState } from 'react';
import './style.css';
import logo from './img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const gitHubIcon = <FontAwesomeIcon icon={faGithub} />;
const linkedInIcon = <FontAwesomeIcon icon={faLinkedin} />;

const ContactCard = () => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };
  return (
    <div className="card-container" onClick={handleClick}>
      <div className={`card-inner ${flipped ? 'flipped' : ''}`}>
        <div className='card-front'>
        <img src={logo} alt="Logo" className="contact-logo-img" />
      </div>

      <div className='card-back'>
        <div className="contact-text">
          <p>Kristýna Konečná</p>
          <em>Graphic & Content Designer<br/> 
          with a UX/UI focus</em>
        </div>

        <div className="contact-links">
          <a
            className="contact-link"
            href="https://www.linkedin.com/in/kristynakonecna/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
          >
            {linkedInIcon}
          </a>
          <a
            className="contact-link"
            href="https://github.com/Kaykay-nova"
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
          >
            {gitHubIcon}
          </a>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ContactCard;
