"use client"
import React from 'react'
import Hero from './hero'
import Header from './Header'
import Comparison from './Comparison'
import Slider from './slider'
import KeyBenefits from './KeyBenefits'
import PricingPlans from './PricingPlans'
import TestimonialSection from './Testimonialsection'
import HowItWorksSection from './Howitworkssection'
import ImpactSection from './Impactsection'
import TeamSection from './Teamsection '
import FAQSection from './Faqsection'
import ContactSection from './Contactsection'

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
    </div>
  )
}

export default Main