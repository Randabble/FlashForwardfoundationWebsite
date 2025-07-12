import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useCounterAnimation } from '../hooks/useCounterAnimation';

export default function ImpactSection() {
  const titleRef = useScrollAnimation();
  const descRef = useScrollAnimation();
  
  const studentsCounter = useCounterAnimation(600, 'M+');
  const percentCounter = useCounterAnimation(60, '%');
  const hoursRef = useScrollAnimation();

  return (
    <section id="impact" className="py-20 bg-gradient-to-br from-secondary/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="scroll-fade text-4xl sm:text-5xl font-bold text-dark mb-6">Why Flashlights?</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p ref={descRef} className="scroll-fade text-xl text-gray-600 max-w-3xl mx-auto">
            Simple technology can create profound change. See how solar-powered flashlights are transforming education worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-users text-white text-3xl"></i>
            </div>
            <div className="text-4xl sm:text-5xl font-bold text-dark mb-2">100M+</div>
            <div className="text-lg font-semibold text-gray-800 mb-2">Students</div>
            <p className="text-gray-600">Globally lack access to electricity for studying</p>
          </div>

          <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-moon text-white text-3xl"></i>
            </div>
            <div className="text-4xl sm:text-5xl font-bold text-dark mb-2">70%</div>
            <div className="text-lg font-semibold text-gray-800 mb-2">% Less Study Time</div>
            <p className="text-gray-600">Students in off-grid homes study after sunset</p>
          </div>

          <div ref={hoursRef} className="scroll-fade text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-clock text-white text-3xl"></i>
            </div>
            <div className="text-4xl sm:text-5xl font-bold text-dark mb-2">2-3</div>
            <div className="text-lg font-semibold text-gray-800 mb-2">Extra Hours Daily</div>
            <p className="text-gray-600">Solar lights can add to daily study time</p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
