import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './style.css';
import logo from './img/logo_inverz.png';

const Header = ({ handleScrollToHome }) => {
  const location = useLocation();
  const isActiveAbout = location.hash === '#about';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Reference pro menu a hamburger ikonu
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) && 
        hamburgerRef.current && 
        !hamburgerRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="header-container">
      <div className="header-blur" />
      <header className="header">
        <a href="/" className="logo" onClick={handleScrollToHome}>
          <img src={logo} alt="Logo" className="logo-img" />
        </a>

        <nav ref={menuRef} className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              'nav__link' + (isActive && !isActiveAbout ? ' active' : '')
            }
            onClick={() => {
              handleScrollToHome();
              setIsMenuOpen(false);
            }}
          >
            Domů
          </NavLink>
          <a
            href="/#about"
            className={'nav__link' + (isActiveAbout ? ' active' : '')}
            onClick={() => {
              handleScrollToHome();
              setIsMenuOpen(false);
            }}
          >
            O mně
          </a>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              'nav__link' + (isActive ? ' active' : '')
            }
            onClick={() => {
              scrollToTop();
              setIsMenuOpen(false);
            }}
          >
            Projekty
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              'nav__link' + (isActive ? ' active' : '')
            }
            onClick={() => {
              scrollToTop();
              setIsMenuOpen(false);
            }}
          >
            Kontakt
          </NavLink>
        </nav>

        <div ref={hamburgerRef} className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
        </div>
      </header>
    </div>
  );
};

export default Header;
