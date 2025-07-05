import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function CTASection() {
  const titleRef = useScrollAnimation();
  const descRef = useScrollAnimation();
  const buttonsRef = useScrollAnimation();

  return (
    <section className="py-20 bg-gradient-to-br from-secondary to-accent text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 ref={titleRef} className="scroll-fade text-4xl sm:text-5xl font-bold mb-6">
          Help Us Bring Safe, Sustainable Light to Students Around the World
        </h2>
        <p ref={descRef} className="scroll-fade text-xl mb-8 text-white/90">
          Your support can light up education and create opportunities for thousands of students in off-grid communities.
        </p>
        <div ref={buttonsRef} className="scroll-fade flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://gofund.me/436b67db" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transform hover:scale-105 transition-all duration-200 shadow-xl text-center"
          >
            <i className="fas fa-heart mr-2"></i>
            Donate Now
          </a>
          <a 
            href="/contact"
            className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-all duration-200 text-center"
          >
            <i className="fas fa-users mr-2"></i>
            Get Involved
          </a>
        </div>
      </div>
    </section>
  );
}
