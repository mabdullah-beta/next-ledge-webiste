// This is the forecasting service
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import PricingPlans from "../../components/Pricing";
import FAQSection from "../../components/FAQ";
import ContactSection from "../../components/Contact";
import Footer from "../../components/Footer";

export default function Forecasting() {
    return (
    <div className="overflow-x-hidden w-full">
        <Header/>
        <Hero/>
        <PricingPlans/>
        <FAQSection/>
        <ContactSection/>
        <Footer/>

    </div>
  );
}
