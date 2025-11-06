'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Operational efficiency',
    description: 'Streamline workflows and optimize processes to boost productivity and reduce costs.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop'
  },
  {
    id: 2,
    title: 'Market research & analysis',
    description: 'Make informed decisions with in-depth market insights and competitor analysis.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
  },
  {
    id: 3,
    title: 'Digital transformation',
    description: 'Leverage cutting-edge technology to modernize your business and stay ahead.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop'
  },
  {
    id: 4,
    title: 'Strategic consulting',
    description: 'Expert guidance to develop and execute winning business strategies.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop'
  }
];

export default function ServicesSlider() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  // Get visible cards (current, previous, next)
  const getVisibleCards = () => {
    const prevIndex = currentIndex === 0 ? services.length - 1 : currentIndex - 1;
    const nextIndex = currentIndex === services.length - 1 ? 0 : currentIndex + 1;
    
    return {
      left: services[prevIndex],
      center: services[currentIndex],
      right: services[nextIndex]
    };
  };

  const cards = getVisibleCards();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
          <span className="text-sm font-medium text-gray-600">Services</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-serif text-gray-900 leading-tight max-w-4xl mx-auto">
          Reliable expertise to drive your<br />greatest success
        </h1>
      </div>

      {/* Slider Container */}
      <div className="relative w-full max-w-[1400px] mt-8">
        <div 
          className="relative h-[450px] flex items-center justify-center gap-4"
          style={{ 
            perspective: '1800px',
            perspectiveOrigin: 'center center'
          }}
        >
          {/* Left Card */}
          <motion.div
            key={`left-${cards.left.id}`}
            initial={{ opacity: 0, x: -100 }}
            animate={{ 
              opacity: 0.5,
              x: 0,
              rotateY: -30,
              scale: 0.95,
              z: -100
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-[380px] h-[380px] shrink-0"
            style={{
              transformStyle: 'preserve-3d',
              filter: 'blur(1.5px)'
            }}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl cursor-pointer">
              <Image
                src={cards.left.image}
                alt={cards.left.title}
                fill
                className="object-cover"
                sizes="400px"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">{cards.left.title}</h3>
                <p className="text-gray-200 text-xs leading-relaxed">{cards.left.description}</p>
              </div>
            </div>
          </motion.div>

          {/* Center Card */}
          <motion.div
            key={`center-${cards.center.id}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1,
              scale: 1,
              rotateY: 0,
              z: 0
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-[540px] h-[400px] shrink-0"
            style={{
              transformStyle: 'preserve-3d'
            }}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl cursor-pointer">
              <Image
                src={cards.center.image}
                alt={cards.center.title}
                fill
                className="object-cover"
                sizes="540px"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl font-semibold mb-3">{cards.center.title}</h3>
                <p className="text-gray-200 text-sm leading-relaxed">{cards.center.description}</p>
              </div>
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            key={`right-${cards.right.id}`}
            initial={{ opacity: 0, x: 100 }}
            animate={{ 
              opacity: 0.5,
              x: 0,
              rotateY: 30,
              scale: 0.95,
              z: -100
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-[380px] h-[380px] shrink-0"
            style={{
              transformStyle: 'preserve-3d',
              filter: 'blur(1.5px)'
            }}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl cursor-pointer">
              <Image
                src={cards.right.image}
                alt={cards.right.title}
                fill
                className="object-cover"
                sizes="400px"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">{cards.right.title}</h3>
                <p className="text-gray-200 text-xs leading-relaxed">{cards.right.description}</p>
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons - Positioned at edges of center card */}
          <button
            onClick={handlePrevious}
            className="absolute left-[calc(50%-300px)] z-40 w-14 h-14 bg-teal-700 hover:bg-teal-800 text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6"  />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-[calc(50%-300px)] z-40 w-14 h-14 bg-teal-700 hover:bg-teal-800 text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6"  />
          </button>
        </div>
      </div>

      {/* Made in Framer watermark */}
   
    </div>
  );
}