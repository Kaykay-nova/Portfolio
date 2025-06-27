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
                Design mě provází od dětství. Začalo to kresbou a malbou, pokračovalo studiem na umělecké škole se zaměřením na design skla – a postupně mě to dovedlo ke grafice. Věnovala jsem se tvorbě vizuálů pro tisk, web i sociální sítě a přirozeně si začala všímat toho, jak důležitou roli hraje vizuální komunikace v digitálním světě.
              </p>
              <p>
                Při své práci jsem spravovala weby, e-shopy i sociální sítě a tvořila pro ně obsah. Zajímalo mě, jak stránky fungují, a tak jsem se naučila základy HTML, CSS, JavaScriptu i Reactu – díky tomu jsem si mohla vyzkoušet tvorbu vlastních webových projektů a lépe pochopit technické souvislosti.
              </p>
              <p>
               Dnes je mou hlavní vášní grafický design – práce s vizuální identitou, barvami, typografií i celkovou atmosférou vizuálů. Zároveň se zajímám o oblast UX/UI designu, ve které se chci dál rozvíjet. Baví mě hledat cesty, jak vizuál nejen zaujme, ale zároveň dobře funguje a je srozumitelný pro uživatele.
              </p>
            </div>
            <div className='about__photo'>
              <img
                className="photo__Kristyna"
                src={foto}
                alt="Kristýna Konečná"
              />
              <a href="/contact" className="btn btn-contact">
                <button>Spojme se!</button>
              </a>
            </div>
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
