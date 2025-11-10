'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';


export default function FlowchartSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  

  return (
    <section ref={ref} className="w-full bg-white py-20 md:px-4" aria-labelledby="flowchart-title">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="font-hedvig text-center mb-16 md:mb-16 sm:mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="dot-indicator bg-primary rounded-full" aria-hidden="true"></div>
            <span className="text-base font-semimedium text-primary">
              Process Flow
            </span>
          </div>
          <h2 id="flowchart-title" className="font-hedvig text-heading-lg leading-tight text-gray-900 mx-auto max-w-2xl mb-5 px-4">
            Our Business Process Workflow
          </h2>
          <p className="text-body-lg text-gray-600 max-w-2xl mx-auto px-4">
            A comprehensive view of how our financial services operate and interconnect to deliver value.
          </p>
        </div>
        
        {/* Flowchart */}
        <div className="mt-10 text-center mx-auto max-w-4xl border-2 border-gray-200 rounded-lg">
          <img src="/flowchart.jpg" alt="Business Process Workflow" className="w-full rounded-lg" />
        </div>

      </div>
    </section>
  );
}
