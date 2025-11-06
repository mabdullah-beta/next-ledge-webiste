"use client"
import React from 'react'
import Hero from './Hero'
import Header from './Header'
import Comparison from './Comparison'
import Slider from './ServicesSection'
import KeyBenefits from './KeyBenefits'
import PricingPlans from './PricingPlans'
import TestimonialSection from './TestimonialSection'
import HowItWorksSection from './HowItWorksSection'
import ImpactSection from './ImpactSection'
import TeamSection from './TeamSection'
import FAQSection from './FAQSection'
import ContactSection from './ContactSection'
import Footer from './Footer'

function Main() {
  return (
    <div className="overflow-x-hidden w-full">
        <Header/>
      <Hero/>
      <Comparison/>
      <Slider/>
      <TestimonialSection/>

      <KeyBenefits/>
      <PricingPlans/>
      <HowItWorksSection/>
      <ImpactSection/>
      <TeamSection/>
      <FAQSection/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default Main