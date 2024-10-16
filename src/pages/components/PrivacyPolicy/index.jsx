import React from 'react';
import './style.css';

const PrivacyPolicy = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target.className === 'policy-overlay') {
      onClose();
    }
  };

  return (
    <div className="policy-overlay" onClick={handleOverlayClick}>
      <div className="policy-content">
        <h2>Podmínky ochrany osobních údajů</h2>
        <p>
          Na mých webových stránkách dbám na ochranu vašich osobních údajů a
          zpracovávám je v souladu s platnými právními předpisy, zejména podle
          nařízení EU 2016/679 (Obecné nařízení o ochraně osobních údajů – GDPR).
        </p>

        <h3>Jaké údaje zpracovávám?</h3>
        <p>
          Pokud mě kontaktujete prostřednictvím kontaktního formuláře,
          zpracovávám následující osobní údaje:
        </p>
        <ul>
          <li>
            <strong>E-mailová adresa</strong>
          </li>
          <li>
            <strong>Obsah vaší zprávy</strong>
          </li>
        </ul>

        <h3>Účel zpracování osobních údajů</h3>
        <p>
          Vaše osobní údaje slouží výhradně k tomu, abych vám mohla odpovědět
          na váš dotaz. Tyto údaje nejsou využívány k žádným jiným účelům.
        </p>

        <h3>Doba uchovávání údajů</h3>
        <p>
          Osobní údaje budou uchovávány pouze po dobu nezbytnou pro vyřízení
          vaší zprávy. Po vyřízení vašeho dotazu budou vaše údaje neprodleně
          smazány.
        </p>

        <h3>Předávání osobních údajů</h3>
        <p>Vaše osobní údaje nejsou předávány žádným třetím stranám.</p>

        <h3>Zabezpečení osobních údajů</h3>
        <p>
          Vaše osobní údaje jsou zpracovávány s maximální péčí a jsou chráněny
          proti neoprávněnému přístupu. Údaje nejsou ukládány na žádné externí
          servery ani databáze mimo můj přímý dosah.
        </p>

        <h3>Vaše práva</h3>
        <p>Podle GDPR máte právo:</p>
        <ul>
          <li>Požádat o přístup k vašim osobním údajům</li>
          <li>Požádat o opravu nepřesných nebo neaktuálních údajů</li>
          <li>Požádat o vymazání vašich údajů</li>
          <li>Omezení zpracování vašich osobních údajů</li>
          <li>
            Podat stížnost u dozorového úřadu (Úřad pro ochranu osobních údajů),
            pokud máte pochybnosti o zpracování vašich osobních údajů.
          </li>
        </ul>

        <h3>Správce osobních údajů</h3>
        <p>
          Správcem vašich osobních údajů jsem já, <strong>Kristýna Konečná</strong>,
          fyzická osoba provozující tyto webové stránky. Můžete mě kontaktovat
          na e-mailu: <strong>konecnaweb@gmail.com</strong>.
        </p>
        <button className="close-button" onClick={onClose}>
          &times; Zavřít
        </button>
      </div>
      
    </div>
  );
};

export default PrivacyPolicy;
