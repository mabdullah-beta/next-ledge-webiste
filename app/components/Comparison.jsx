"use client";
import React from "react";
import { Check } from "lucide-react";

const Comparison = () => {
  const otherFirms = [
    {
      title: "Generic Strategies",
      description: "One-size-fits-all solutions that lack personalized insights and flexibility.",
    },
    {
      title: "Limited Guidance",
      description: "Clients are left to navigate complex challenges with minimal expert support.",
    },
    {
      title: "Hidden Fees",
      description: "Unexpected costs and additional charges that inflate your total investment.",
    },
  ];

  const withStratex = [
    {
      title: "Tailored Consulting",
      description: "Custom strategies designed to fit your unique business needs and goals.",
    },
    {
      title: "Dedicated Support",
      description: "Expert guidance and hands-on assistance at every stage of your journey.",
    },
    {
      title: "Transparent Pricing",
      description: "No surprises—clear pricing structure so you pay only for what you need.",
    },
  ];

  return (
    <section className=" font-inte relative py-20 md:py-20 sm:py-16 bg-white" aria-label="Comparison Section">
      <div className="max-w-[900px] mx-auto px-8 md:px-8 sm:px-5">
        <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
          <span className="font-inter text-sm font-medium text-[#1f514c]">Why choose us</span>
        </div>
        <h1 className="font-hedvig text-[45px] md:text-[45px]  text-gray-900 leading-tight max-w-4xl mx-auto">
          Expert consulting tailored to <br />your business success
        </h1>
      </div>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 bg-linear-to-b from-[#fefffe] to-[#f8fef4] border-2 border-[#f8fff4] ">
          
          {/* Left Column - Other Firms */}
          <div className="bg-linear-to-b from-[#fefffe] to-[#f8fff4] border-2 border-white rounded-3xl p-12 md:p-10 sm:p-8 space-y-10 md:space-y-10 sm:space-y-8">
            <h3 className="text-[28px] md:text-[26px] sm:text-[24px] font-semibold text-black mb-10 md:mb-10 sm:mb-8">Other Firms</h3>
            
            {otherFirms.map((item, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check size={20} className="text-gray-400" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="text-[20px] md:text-[18px] sm:text-[18px] font-semibold text-black mb-2">{item.title}</h4>
                  <p className="text-[16px] md:text-[15px] sm:text-[15px] font-normal text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - With Stratex */}
          <div className="bg-white border-2 border-[#f8fef4] rounded-3xl p-12 md:p-10 sm:p-8 space-y-10 md:space-y-10 sm:space-y-8">
            <h3 className="text-[28px] md:text-[26px] sm:text-[24px] font-semibold text-black mb-10 md:mb-10 sm:mb-8">With Stratex</h3>
            
            {withStratex.map((item, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 bg-[#1f514c] rounded-full flex items-center justify-center">
                    <Check size={14} className="text-white" strokeWidth={3} />
                  </div>
                </div>
                <div>
                  <h4 className="text-[22px] md:text-[18px] sm:text-[18px] font-semibold text-black mb-2">{item.title}</h4>
                  <p className="text-[16px] md:text-[15px] sm:text-[15px] font-normal text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;