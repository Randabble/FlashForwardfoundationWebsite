import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function PartnershipSection() {
  const titleRef = useScrollAnimation();
  const descRef = useScrollAnimation();
  const partner1Ref = useScrollAnimation();
  const partner2Ref = useScrollAnimation();
  const partner3Ref = useScrollAnimation();
  const testimonialRef = useScrollAnimation();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-4xl sm:text-5xl font-bold text-dark mb-6">Local Roots, Global Reach</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p ref={descRef} className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our impact is made possible through strong partnerships with educational institutions, consulting firms, and community organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div ref={partner1Ref} className="text-center p-6 border border-gray-200 rounded-xl hover:border-primary/30 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-school text-white text-2xl"></i>
            </div>
            <h3 className="text-lg font-semibold text-dark mb-2">Sammamish High School</h3>
            <p className="text-gray-600 text-sm">Builders Club</p>
            <p className="text-gray-500 text-xs mt-2">Engineering & prototyping partnership</p>
          </div>

          <div ref={partner2Ref} className="text-center p-6 border border-gray-200 rounded-xl hover:border-primary/30 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-handshake text-white text-2xl"></i>
            </div>
            <h3 className="text-lg font-semibold text-dark mb-2">Thrive Consulting</h3>
            <p className="text-gray-600 text-sm">Strategic Advisory</p>
            <p className="text-gray-500 text-xs mt-2">Business development & scaling guidance</p>
          </div>

          <div ref={partner3Ref} className="text-center p-6 border border-gray-200 rounded-xl hover:border-primary/30 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-globe-africa text-white text-2xl"></i>
            </div>
            <h3 className="text-lg font-semibold text-dark mb-2">Local Churches</h3>
            <p className="text-gray-600 text-sm">Malawi & Ghana</p>
            <p className="text-gray-500 text-xs mt-2">Distribution & community outreach</p>
          </div>
        </div>

        <div ref={testimonialRef} className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
              <i className="fas fa-quote-right text-white text-2xl"></i>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-lg text-gray-700 italic mb-4">
                "Working with Flash Forward has been incredible. These students don't just dream about changing the world – they actually do it. Their innovative approach to solving real problems through sustainable technology is exactly what our communities need."
              </p>
              <div className="flex flex-col lg:flex-row lg:items-center lg:gap-4">
                <p className="font-semibold text-dark">Shreyas Prabhu</p>
                <p className="text-gray-600">Founder, Sammamish Builders Club</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
