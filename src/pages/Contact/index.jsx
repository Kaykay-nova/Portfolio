import './style.css';
import ContactForm from './ContactForm';
import ContactCard from './ContactCard';
import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const downIcon = <FontAwesomeIcon icon={faAngleDown} />;

const Contact = () => {
  const formRef = useRef(null);

  const handleScrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="page__container">
      <ContactCard />
      <p className="contact__main">
        Zajímá vás více o mé práci nebo máte zájem o spolupráci?
        <br />
        Zanechte mi zprávu a já se vám brzy ozvu.
      </p>

      <a className="up__btn" onClick={handleScrollToForm}>
        <i>{downIcon}</i>
      </a>

      <h1 ref={formRef} className="contact-form__title">
        Kontaktní formulář
      </h1>
      <ContactForm />
    </div>
  );
};

export default Contact;
