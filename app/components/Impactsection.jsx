'use client';

import Image from 'next/image';

const stats = [
  { id: 1, value: '$7M+', label: 'Revenue', position: 'left-top' },
  { id: 2, value: '78%', label: 'Impact', position: 'right-top' },
  { id: 3, value: '72%', label: 'Growth', position: 'left-middle' },
  { id: 4, value: '1%', label: 'Designers', position: 'right-middle' },
  { id: 5, value: '65%', label: 'Skills', position: 'left-bottom' },
  { id: 6, value: '10+', label: 'Consultants', position: 'right-bottom' }
];

export default function ImpactSection() {
  return (
    <section className="w-full bg-white py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
            <span className="text-sm font-medium text-gray-700">Impact</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif text-gray-900 leading-tight mb-6 max-w-4xl mx-auto">
            Real results that drive lasting<br />impact for everyone
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We deliver tailored strategies, innovative solutions,<br />and dedicated support to drive lasting growth
          </p>
        </div>

        {/* Stats with Image */}
        <div className="relative max-w-4xl mx-auto mt-20">
          {/* Central Image - Smaller */}
          <div className="relative w-full max-w-sm mx-auto">
            <div className="relative w-full h-[420px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=1000&fit=crop"
                alt="Professional consultant"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 384px"
                priority
              />
            </div>
          </div>

          {/* Floating Stats Badges - Closer to Image */}
          {/* Left Side Stats */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden lg:block">
            <div className="space-y-16">
              {/* $7M+ Revenue */}
              <div className="flex items-center gap-2">
                <div className="bg-teal-800 text-white px-4 py-2 rounded-full shadow-lg">
                  <span className="font-bold text-base">$7M+</span>
                </div>
                <span className="text-gray-900 font-medium text-base">Revenue</span>
              </div>

              {/* 72% Growth */}
              <div className="flex items-center gap-2">
                <div className="bg-teal-800 text-white px-4 py-2 rounded-full shadow-lg">
                  <span className="font-bold text-base">72%</span>
                </div>
                <span className="text-gray-900 font-medium text-base">Growth</span>
              </div>

              {/* 65% Skills */}
              <div className="flex items-center gap-2">
                <div className="bg-teal-800 text-white px-4 py-2 rounded-full shadow-lg">
                  <span className="font-bold text-base">65%</span>
                </div>
                <span className="text-gray-900 font-medium text-base">Skills</span>
              </div>
            </div>
          </div>

          {/* Right Side Stats */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden lg:block">
            <div className="space-y-16">
              {/* 78% Impact */}
              <div className="flex items-center gap-2">
                <div className="bg-teal-800 text-white px-4 py-2 rounded-full shadow-lg">
                  <span className="font-bold text-base">78%</span>
                </div>
                <span className="text-gray-900 font-medium text-base">Impact</span>
              </div>

              {/* 1% Designers */}
              <div className="flex items-center gap-2">
                <div className="bg-teal-800 text-white px-4 py-2 rounded-full shadow-lg">
                  <span className="font-bold text-base">1%</span>
                </div>
                <span className="text-gray-900 font-medium text-base">Designers</span>
              </div>

              {/* 10+ Consultants */}
              <div className="flex items-center gap-2">
                <div className="bg-teal-800 text-white px-4 py-2 rounded-full shadow-lg">
                  <span className="font-bold text-base">10+</span>
                </div>
                <span className="text-gray-900 font-medium text-base">Consultants</span>
              </div>
            </div>
          </div>

          {/* Mobile Stats - Below Image */}
          <div className="mt-12 grid grid-cols-2 gap-4 lg:hidden">
            {stats.map((stat) => (
              <div key={stat.id} className="flex items-center gap-2 justify-center">
                <div className="bg-teal-800 text-white px-4 py-2 rounded-full shadow-lg">
                  <span className="font-bold">{stat.value}</span>
                </div>
                <span className="text-gray-900 font-medium">{stat.label}</span>
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