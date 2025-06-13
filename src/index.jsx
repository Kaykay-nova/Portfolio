import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import About from './pages/components/About';
import Projects from './pages/Projects';
import CaseStudyKarolina from './pages/CaseStudies/CaseStudyKarolina';
import Contact from './pages/Contact';
import Header from './pages/components/Header';
import Footer from './pages/components/Footer';
import './global.css';

createRoot(document.querySelector('#app')).render(
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/karolinalashes-case-study" element={<CaseStudyKarolina />} />
    </Routes>
    <Footer />
  </Router>,
);
