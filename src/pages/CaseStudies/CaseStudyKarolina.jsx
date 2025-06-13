import React from 'react';
import './CaseStudyKarolina.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import moodboard from './img/Moodboard_paleta.jpg';
import photo from './img/Photos.jpg';
import mockup from './img/Mackbook_mockup.png';

const upIcon = <FontAwesomeIcon icon={faChevronUp} />;
const leftIcon = <FontAwesomeIcon icon={faChevronLeft} />;
const chevronIcon = <FontAwesomeIcon icon={faChevronRight} />;

const handleScrollToUp = () => {
  window.history.replaceState(null, '', '/projects');
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const CaseStudyKarolina = () => {
  return (
    <div className="case-study__container">
      <a href="./Projects" className="case-study__btn">
        <i>{leftIcon}</i> Zpět k projektům
      </a>

      <h1 className="case-study__heading">
        KarolinaLashes – prezentační web pro kosmetické služby
      </h1>
      <p>Individuální projekt - UX/UI design + vývoj</p>

      <div className="case-study__section">
        <h2 className="case-study__subheading">Zadání a cíl</h2>
        <p className="case-study__text">
          Klientka mě oslovila s přáním vytvořit jednoduchý, přehledný web pro
          její podnikání v oblasti kosmetických služeb. Nepřála si složitou
          strukturu ani e-shop, ale elegantní prezentační stránku, která by
          působila profesionálně a zároveň přívětivě.
        </p>
        <p>
          Jejím cílem bylo:
          <ul>
            <li>zvýšit důvěryhodnost služeb u nových zákaznic</li>
            <li>umožnit jim snadno najít informace a kontakt</li>
            <li>vytvořit prostor pro budoucí rozšíření webu.</li>
          </ul>
        </p>
      </div>

      <img src={moodboard} alt="Moodboard" className="case-study__image" />

      <div className="case-study__section">
        <h2 className="case-study__subheading">Moje role</h2>
        <p className="case-study__text">
          <p>
            Projekt jsem vedla od prvotního kontaktu až po nasazení hotového
            webu. Zastávala jsem roli UX designérky, UI designérky i vývojářky v
            jednom – od výzkumu, přes návrh designu ve Figmě, až po samotné
            kódování frontendu (HTML, CSS, JavaScript).
          </p>
        </p>
      </div>

      <div className="case-study__section">
        <h2 className="case-study__subheading">Průzkum a zadání</h2>
        <p className="case-study__text">
          <p>
            Klientka neměla konkrétní představu o designu, proto jsem připravila
            sérii otázek zaměřených na:
          </p>
          <ul>
            <li>cílovou skupinu (ženy 20–50 let)</li>
            <li>styl komunikace (jemný, přátelský)</li>
            <li>tonalitu značky (elegantní)</li>
            <li>představy o barvách (odstíny béžové, pudrové)</li>
          </ul>
          <p>
            Z rozhovoru vyplynula potřeba vytvořit jemný, ale moderní vzhled,
            který působí čistě, přehledně a trochu romanticky.
          </p>
        </p>

        <img src={photo} alt="Lashes services" className="case-study__image" />
      </div>

      <div className="case-study__section">
        <h2 className="case-study__subheading">Designový proces</h2>
        <p className="case-study__text">
          <ul>
            <li>
              Moodboard & styl: Vytvořila jsem moodboard, kde jsem definovala
              paletu v odstínech béžové a jako sekundární odstíny červené až
              růžové, doplněnou o vzdušné rozvržení a příjemné typografie.
            </li>
            <li>
              Typografie: Hlavní nadpisy jsem zvolila v psacím fontu pro jemný
              dojem, texty jsou v čitelné bezpatkové sazbě.
            </li>
            <li>
              Wireframe & struktura: Web je scrollovací one-page design
              rozdělený do sekcí: O mně, Služby, Ceník, Kontakt.
            </li>
            <li>
              Obrázky: Využily jsme ilustrační fotografie, s možností je v
              budoucnu nahradit reálnými.
            </li>
            <li>Responsivita: Web je optimalizovaný i pro mobilní zařízení.</li>
          </ul>
        </p>
      </div>

      <div className="case-study__section">
        <h2 className="case-study__subheading">Technologie</h2>
        <p className="case-study__text">
          <ul>
            <li>Nástroje: Figma, Visual Studio Code, GitHub</li>
            <li>Frontend: HTML5, CSS3, JavaScript</li>
            <li>SEO: Základní optimalizace pro vyhledávače</li>
            <li>
              Hosting:{' '}
              <a
                href="https://www.webglobe.cz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Webglobe
              </a>
            </li>
          </ul>
        </p>
      </div>

      <div className="case-study__section">
        <h2 className="case-study__subheading">Výsledek a zpětná vazba</h2>
        <p className="case-study__text">
          Klientka byla s návrhem i finálním webem velmi spokojená – oceňovala
          především čistý a profesionální vzhled, snadnou orientaci pro
          návštěvníky a přizpůsobení na míru bez použití šablon.
        </p>
        <div className="case-study__ending">
          <img
            src={mockup}
            alt="Mockup photo"
            className="case-study__image--mockup"
          />
          <a
            className="project__link"
            href="https://www.karolinalashes.cz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>
              Projekt <i className="gitHubIcon">{chevronIcon}</i>
            </button>
          </a>
        </div>
      </div>
      <div className="case-study__section">
        <h2 className="case-study__subheading"> Zhodnocení</h2>
        <p className="case-study__text">
          Nejvíce mě bavila komunikace s klientkou a hledání ideální vizuální
          podoby, která by ladila s její značkou i osobností. Zároveň jsem si
          ověřila, jak důležité je vcítit se do cílové skupiny a přemýšlet v
          souvislostech – od vizuálu až po strukturu webu.
        </p>
      </div>
      <div className="case-study__upbtn">
        <a className="up__btn" onClick={handleScrollToUp}>
          <i>{upIcon}</i>
        </a>
        <p className="up__text">Zpět nahoru</p>
      </div>
    </div>
  );
};

export default CaseStudyKarolina;
