import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import WorkFlow from './components/WorkFlow'
import Pricing from './components/Pricing'
import Testemonials from './components/Testemonials'
import Footer from './components/Footer'
const App = () => {
  return (
    <Router>
      <Navbar />
      <div className='max-w-7xl mx-auto pt-20 px-6'>
        <section id="hero"><HeroSection /></section>
        <section id="features"><FeatureSection /></section>
        <section id="workflow"><WorkFlow /></section>
        <section id="pricing"><Pricing /></section>
        <section id="testimonials"><Testemonials /></section>
        <Footer />
      </div>
    </Router>
  )
}

export default App