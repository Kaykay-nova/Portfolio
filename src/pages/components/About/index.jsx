import './style.css';
import React, { forwardRef } from 'react';
import foto from './img/photo_kone.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faJs,
  faHtml5,
  faCss3Alt,
  faReact,
  faGitAlt,
  faFigma,
  faNodeJs,
} from '@fortawesome/free-brands-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import CIcon from '@coreui/icons-react';
import {
  cibAdobePhotoshop,
  cibNextJs,
  cibAdobeIndesign,
  cibCanva,
} from '@coreui/icons';

const upIcon = <FontAwesomeIcon icon={faChevronUp} />;
const jsIcon = <FontAwesomeIcon icon={faJs} />;
const htmlIcon = <FontAwesomeIcon icon={faHtml5} />;
const cssIcon = <FontAwesomeIcon icon={faCss3Alt} />;
const reactIcon = <FontAwesomeIcon icon={faReact} />;
const gitIcon = <FontAwesomeIcon icon={faGitAlt} />;
const figmaIcon = <FontAwesomeIcon icon={faFigma} />;
const nodeIcon = <FontAwesomeIcon icon={faNodeJs} />;

const About = forwardRef((props, ref) => {
  const handleScrollToHome = () => {
    window.history.replaceState(null, '', '/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="page__container about-page">
      <div className="about__content">
        <div className="about__journey">
          <h1 className="about__title" id="about" ref={ref}>
            O mně
          </h1>
          <div className="about__main">
            <div className="about__text">
              <p>
              Vždy jsem měla silný cit pro vizuální estetiku. Už od mládí jsem
              kreslila a tvořila, což mě později přivedlo ke grafice –
              připravovala jsem vizuály pro tisk, web i sociální sítě. Právě
              tato zkušenost mi dala základní vnímání kompozice, barev i celkové
              atmosféry vizuálního obsahu.
            </p>
            <p>
              Při správě webových stránek jsem si postupně začala všímat, jak
              důležité je nejen co je na stránce, ale jak to působí na
              návštěvníka. Tato potřeba mě dovedla k základům kódování a programování 
              – absolvovala jsem několik kurzů webového vývoje, kde jsem si
              osvojila HTML, CSS, JavaScript a React.
            </p>
            <p>
              I když mě kódování baví, brzy jsem pochopila, že mě nejvíce
              motivuje uživatelský zážitek, atmosféra designu a smysluplnost
              rozhraní. Proto jsem se rozhodla zaměřit na UX/UI design – oblast,
              kde se přirozeně propojuje moje vášeň pro estetiku, empatii a
              tvorba funkčních digitálních řešení.</p>
            </div>
            <img
              className="photo__Kristyna"
              src={foto}
              alt="Kristýna Konečná"
            />
          </div>

          <h2 className="about__title" id="about">
            Vzdělávací kurzy
          </h2>
          <p className="about__text">
            <a
              href="https://www.czechitas.cz/kurzy/digitalni-akademie-web"
              target="_blank"
              rel="noopener noreferrer"
            >
              Digitální akademie Web
            </a>{' '}
            | Czechitas <br />{' '}
            <span className="about__description">
              Práce s Gitem, HTML a CSS, Základní konstrukce jazyka JavaScript,
              bundlování, organizace kódu, komunikace se serverem, základy UX
              designu, framework React. Ukončeno písemnou zkouškou a odevzdáním
              a prezentací projektu “Balance Pal“.
            </span>
          </p>

          <p className="about__text">
            <a
              href="https://www.itnetwork.cz/prace-a-podnikani-v-it/rekvalifikacni-kurzy/rekvalifikacni-kurzy-javascript"
              target="_blank"
              rel="noopener noreferrer"
            >
              Programátor www aplikací v jazyce JavaScript
            </a>{' '}
            | ITnetwork (Akreditace MSMT-1493/2022-7) <br />
            <span className="about__description">
              Základní konstrukce jazyka JS, OOP v JS, Debugging v JS, Moderní
              webdesign, základy Node.js, Bootstrap, UML a návrhové vzory,
              Testování, Verzování, ukončeno písemnou zkouškou a vypracováním
              projektu “Evidence pojistných událostí”.
            </span>
          </p>

          <p className="about__text">
            <a
              href="https://www.primakurzy.cz/pracovnik-grafickeho-studia"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pracovník grafického studia
            </a>{' '}
            | PrimaKurzy (Akreditace MSMT-1500/2017-1/26) <br />
            <span className="about__description">
              Kurz tvorby digitální a tiskové grafiky v Adobe Photoshop a
              InDesign. Vytváření grafického návrhu webových stránek, tiskových
              propagačních materiálů s výstupem pro tiskárnu. Navrhování
              propagačních materiálů jako letáky, billboardy, roll-upy aj.
            </span>
          </p>
        </div>
        <div className="about__skills">
          <h2 className="about__title">Dovednosti a používané nástroje</h2>
          <div className="skills__icons">
          <i className="skills__icon">
              {figmaIcon}
              <span className="skills__title">Figma</span>
            </i>
            <i className="icon">
              <CIcon icon={cibAdobePhotoshop} className="core-icon" />
              <span className="skills__title">Photoshop</span>
            </i>
            <i className="icon">
              <CIcon icon={cibAdobeIndesign} className="core-icon" />
              <span className="skills__title">Indesign</span>
            </i>
            <i className="icon">
              <CIcon icon={cibCanva} className="core-icon" />
              <span className="skills__title">Canva</span>
            </i>
            <i className="skills__icon">
              {htmlIcon}
              <span className="skills__title">Html5</span>
            </i>
            <i className="skills__icon">
              {cssIcon}
              <span className="skills__title">CSS3</span>
            </i>
            <i className="skills__icon">
              {jsIcon}
              <span className="skills__title">JavaScript</span>
            </i>
            <i className="skills__icon">
              {reactIcon}
              <span className="skills__title">React</span>
            </i>
            <i className="icon">
              <CIcon icon={cibNextJs} className="core-icon" />
              <span className="skills__title">Next</span>
            </i>
            <i className="skills__icon">
              {nodeIcon}
              <span className="skills__title">Node.js</span>
            </i>
            <i className="skills__icon">
              {gitIcon}
              <span className="skills__title">Git</span>
            </i>
          </div>
        </div>
        <a className="up__btn" onClick={handleScrollToHome}>
          <i>{upIcon}</i>
        </a>
        <p>Zpět nahoru</p>
      </div>
    </div>
  );
});

export default About;
