import React from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Features } from './components/Features/Features'
import { About } from './components/About/About'
import { Services } from './components/Services/Services'
import { Pricing } from './components/Pricing/Pricing'
import { AboutDoctor } from './components/AboutDoctor/AboutDoctor'
import { Certificates } from './components/Certificates/Certificates'
import { Reviews } from './components/Reviews/Reviews'
import { CTA } from './components/CTA/CTA'
import { BeforeAfter } from './components/BeforeAfter/BeforeAfter'
import { Contacts } from './components/Contacts/Contacts'
import { Map } from './components/Map/Map'

export function App () {
  return (
    <div className='App'>
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
  )
}

export default App
