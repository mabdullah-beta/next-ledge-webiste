'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    id: '01',
    title: 'Simple Booking',
    description: 'Effortlessly schedule a consultation to discuss your business needs and challenges. We streamline the process to get started quickly.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop',
    imagePosition: 'left' // Image on left, content on right
  },
  {
    id: '02',
    title: 'Tailored Strategy',
    description: 'We analyze your goals and create a customized strategy designed to drive measurable success for your business needs and exploring more ideas.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    imagePosition: 'right' // Content on left, image on right
  },
  {
    id: '03',
    title: 'Continuous Support',
    description: 'From implementation to optimization, we provide ongoing guidance and adjustments to ensure long-term growth for you',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
    imagePosition: 'left' // Image on left, content on right
  }
];

export default function HowItWorksSection() {
  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-2 h-2 bg-teal-700 rounded-full"></div>
            <span className="text-sm font-medium text-gray-700">How it works</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif text-gray-900 leading-tight mb-8">
            A proven process to achieve<br />your biggest goals
          </h2>
          <button className="inline-flex items-center gap-3 bg-teal-800 hover:bg-teal-900 text-white px-8 py-4 rounded-full transition-all duration-200 group">
            <span className="font-semibold">Get in touch</span>
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <ArrowRight className="w-5 h-5 text-teal-800 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </button>
        </div>

        {/* Steps with Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 -translate-x-1/2 hidden md:block"></div>

          {/* Steps */}
          <div className="space-y-32">
            {steps.map((step, index) => (
              <div key={step.id} className="relative">
                {/* Number Badge on Timeline */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex">
                  <div className="w-14 h-14 bg-teal-800 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step.id}
                  </div>
                </div>

                {/* Content Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  {step.imagePosition === 'left' ? (
                    <>
                      {/* Image on Left */}
                      <div className="md:pr-16">
                        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-xl">
                          <Image
                            src={step.image}
                            alt={step.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                      </div>

                      {/* Content on Right */}
                      <div className="md:pl-16">
                        <div className="md:hidden mb-4">
                          <div className="w-12 h-12 bg-teal-800 rounded-full flex items-center justify-center text-white font-bold text-base shadow-lg inline-flex">
                            {step.id}
                          </div>
                        </div>
                        <h3 className="text-4xl font-semibold text-gray-900 mb-6">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                          {step.description}
                        </p>
                        <button className="inline-flex items-center gap-2 text-gray-900 font-semibold hover:gap-3 transition-all">
                          Discover More
                          <ArrowRight className="w-5 h-5" />
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Content on Left */}
                      <div className="md:pr-16 md:text-right">
                        <div className="md:hidden mb-4">
                          <div className="w-12 h-12 bg-teal-800 rounded-full flex items-center justify-center text-white font-bold text-base shadow-lg inline-flex">
                            {step.id}
                          </div>
                        </div>
                        <h3 className="text-4xl font-semibold text-gray-900 mb-6">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                          {step.description}
                        </p>
                        <button className="inline-flex items-center gap-2 text-gray-900 font-semibold hover:gap-3 transition-all md:flex-row-reverse">
                          Discover More
                          <ArrowRight className="w-5 h-5 md:rotate-180" />
                        </button>
                      </div>

                      {/* Image on Right */}
                      <div className="md:pl-16">
                        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-xl">
                          <Image
                            src={step.image}
                            alt={step.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Made in Framer watermark */}
      <div className="mt-20 text-right max-w-7xl mx-auto text-xs text-gray-400 pr-4">
        Made in Framer
      </div>
    </section>
  );
}