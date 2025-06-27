import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import About from '../components/About';
import Header from '../components/Header';

const HomePage = () => {
  const [isOpenAbout, setIsOpenAbout] = useState(false);
  // const [showTextAnimation, setShowTextAnimation] = useState(false);
  const [isFirstTextVisible, setIsFirstTextVisible] = useState(false);
  const [isSecondTextVisible, setIsSecondTextVisible] = useState(false);
  const [buttonsVisible, setButtonsVisible] = useState(false);
  const aboutRef = useRef(null);

  const handleScrollToAbout = () => {
    setIsOpenAbout(true);
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleScrollToHome = () => {
    setIsOpenAbout(false);
    window.history.replaceState(null, '', '/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (window.location.hash === '#about') {
      handleScrollToAbout();
    }

    const firstTextTimeout = setTimeout(() => {
      setIsFirstTextVisible(true);
    }, 3000);

    const secondTextTimeout = setTimeout(() => {
      setIsSecondTextVisible(true);
    }, 1500);

    const buttonsVisible = setTimeout(() => {
      setButtonsVisible(true);
    }, 4000);

    return () => {
      clearTimeout(firstTextTimeout);
      clearTimeout(secondTextTimeout);
      clearTimeout(buttonsVisible);
    };
  }, []);

  return (
    <div className="page__container">
      <div className="background-image"></div>
      <Header
        handleScrollToAbout={handleScrollToAbout}
        handleScrollToHome={handleScrollToHome}
      />
      <div className="header-blur"></div>
      <main className="main-content">
        <div className="homepage__content">
          <div className="homepage__content--text">
            <h1>&lt;Hello, World! /&gt; Tady Kristýna!</h1>
            <p
              className={`homepage-text ${
                isSecondTextVisible ? 'slide-in' : 'slide-out'
              }`}
            >
              Graphic Designer & UX/UI Enthusiast
            </p>
            <p
              className={`homepage-text ${
                isFirstTextVisible ? 'slide-in' : 'slide-out'
              }`}
            >
              Vítejte na mém osobním portfoliu
            </p>
            <div
              className={`homepage__content--btn ${
                buttonsVisible ? 'slide-in' : 'slide-out'
              }`}
            >
              <a href="/#about" className="btn">
                <button onClick={handleScrollToAbout}>O mně</button>
              </a>
              <a href="/projects" className="btn">
                <button>Projekty</button>
              </a>
            </div>
          </div>
        </div>
        <div ref={aboutRef} id="about">
          <About />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
