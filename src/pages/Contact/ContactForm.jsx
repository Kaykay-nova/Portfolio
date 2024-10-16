import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import PrivacyPolicy from '../components/PrivacyPolicy';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [gdprConsent, setGdprConsent] = useState(false);
  const [notification, setNotification] = useState('');
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!gdprConsent) {
      alert('Musíte souhlasit s podmínkami GDPR.');
      return;
    }

    // Nastavení parametrů pro EmailJS
    const templateParams = {
      email: email,
      message: message,
    };

    emailjs
      .send(
        'service_qdoz9lj',
        'template_rajkm21',
        templateParams,
        'wOp1uT_mK4bZI6HNF',
      )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setNotification('Formulář byl úspěšně odeslán! Vaše zpráva už putuje do mé schránky.');
        setEmail('');
        setMessage('');
        setGdprConsent(false);

        setTimeout(() => {
          setNotification('');
        }, 7000);
      })
      .catch((err) => {
        console.log('FAILED...', err);
        setNotification('Došlo k neočekávané chybě při odesílání formuláře. Zkuste to za chvíli.');
      });
  };

  return (
    <div>
      {notification && <p style={{ color: 'green' }}>{notification}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Váš email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Zpráva:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="checkbox"
            id="gdprConsent"
            checked={gdprConsent}
            onChange={(e) => setGdprConsent(e.target.checked)}
            required
          />
          <label htmlFor="gdprConsent">
            Souhlasím se zpracováním osobních údajů pro účely odpovědi na můj
            dotaz.
            <a href="#" onClick={() => setIsPolicyOpen(true)}>
              {' '}
              Zobrazit podmínky ochrany osobních údajů
            </a>
            .
          </label>
        </div>
        <div className="button-container">
          <button type="submit">Odeslat</button>
        </div>
      </form>
      <PrivacyPolicy
        isOpen={isPolicyOpen}
        onClose={() => setIsPolicyOpen(false)}
      />
    </div>
  );
};

export default ContactForm;
