import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import AboutDoctor from './components/AboutDoctor';
import Certificates from './components/Certificates';
import Reviews from './components/Reviews';
import CTA from './components/CTA';
import BeforeAfter from './components/BeforeAfter';
import Contacts from './components/Contacts';
import Map from './components/Map';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <About />
      <Services />
      <Pricing />
      <AboutDoctor />
      <Certificates />
      <Reviews />
      <CTA />
      <BeforeAfter />
      <Contacts />
      <Map />
    </div>
  );
}

export default App;
