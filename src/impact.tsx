import React from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { useScrollAnimation } from "./hooks/useScrollAnimation";
import { useState, useEffect } from 'react';

export default function Impact() {
  const titleRef = useScrollAnimation();
  const testimonialsRef = useScrollAnimation();
  const howItWorksRef = useScrollAnimation();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Akosua Mensah",
      age: 14,
      location: "Rural Ghana",
      quote: "Before the solar flashlight, I could only study when the sun was out. Now I can do my homework at night and my grades have improved so much. I want to become a doctor to help my community.",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
    },
    {
      name: "Kwame Asante",
      age: 16,
      location: "Ashanti Region, Ghana",
      quote: "The solar light changed everything for my family. My younger siblings and I can all study together at night now. We don't need to buy expensive kerosene anymore, and the air in our home is much cleaner.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
    },
    {
      name: "Ama Osei",
      age: 12,
      location: "Northern Ghana",
      quote: "I love reading so much, but before I could only read during the day. Now with my solar flashlight, I can read my favorite books every night. I dream of writing my own stories someday.",
      image: "https://images.unsplash.com/photo-1494790108755-2616c998f4e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
    }
  ];

  // Auto-rotate testimonials
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, [testimonials.length]);

  return (
    <div className="font-sans">
      <Navigation />
      
      {/* Hero Section */}
      {/* <section className="pt-20 pb-12 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 ref={titleRef} className="scroll-fade text-4xl sm:text-5xl lg:text-6xl font-bold text-dark mb-6">
            Our Impact
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Lighting up education and transforming lives across off-grid communities in Ghana and beyond.
          </p>
        </div>
      </section> */}

      {/* Impact Stats */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8">
              <div className="text-4xl font-bold text-primary mb-4">685M+</div>
              <div className="text-xl font-semibold text-gray-900 mb-2">People in Energy Poverty</div>
              <p className="text-gray-600">Worldwide without access to electricity</p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8">
              <div className="text-4xl font-bold text-primary mb-4">500+</div>
              <div className="text-xl font-semibold text-gray-900 mb-2">Flashlights Distributed</div>
              <p className="text-gray-600">Solar-powered lights delivered to students</p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8">
              <div className="text-4xl font-bold text-primary mb-4">15</div>
              <div className="text-xl font-semibold text-gray-900 mb-2">Schools Reached</div>
              <p className="text-gray-600">Educational institutions supported</p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8">
              <div className="text-4xl font-bold text-primary mb-4">2,000+</div>
              <div className="text-xl font-semibold text-gray-900 mb-2">Study Hours Enabled</div>
              <p className="text-gray-600">Additional learning time created</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Testimonials Slideshow */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 ref={testimonialsRef} className="scroll-fade text-3xl font-bold text-gray-900 mb-12 text-center">
            Stories from Students
          </h2>
          
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="text-center md:text-left">
                  <img 
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-32 h-32 rounded-full mx-auto md:mx-0 mb-6 object-cover"
                  />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {testimonials[currentTestimonial].name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Age {testimonials[currentTestimonial].age} • {testimonials[currentTestimonial].location}
                  </p>
                </div>
                <div>
                  <div className="text-6xl text-primary mb-4">"</div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {testimonials[currentTestimonial].quote}
                  </p>
                </div>
              </div>
            </div>
             */}
            {/* Navigation dots */}
            {/* <div className="flex justify-center space-x-2 pb-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentTestimonial ? 'bg-primary' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 ref={howItWorksRef} className="scroll-fade text-3xl font-bold text-gray-900 mb-12 text-center">
            How It Works
          </h2>

          {/* Technology Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                <i className="fas fa-cog text-primary mr-3"></i>
                Solar Technology
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Our flashlights use cutting-edge photovoltaic technology to harness solar energy efficiently. Each unit features high-efficiency monocrystalline solar panels that can fully charge the internal lithium-ion battery in 6-8 hours of direct sunlight.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <i className="fas fa-solar-panel text-primary mt-1 mr-3"></i>
                  <span className="text-gray-700"><strong>Solar Panel:</strong> Monocrystalline with 20% efficiency rating</span>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-battery-full text-primary mt-1 mr-3"></i>
                  <span className="text-gray-700"><strong>Battery:</strong>Lithium-ion battery for 8+ hours of lighting</span>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-lightbulb text-primary mt-1 mr-3"></i>
                  <span className="text-gray-700"><strong>LED Array:</strong>2 high-brightness LEDs</span>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-shield-alt text-primary mt-1 mr-3"></i>
                  <span className="text-gray-700"><strong>Durability:</strong>Waterproof and shock-resistant housing</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Solar flashlight technology"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Assembly Process */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Students assembling flashlights"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                <i className="fas fa-tools text-primary mr-3"></i>
                Student Assembly Process
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Our assembly process is designed to be educational and engaging for student volunteers. Working in teams at Sammamish High School's Builders Club, students learn valuable STEM skills while contributing to a meaningful cause.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-1">1</span>
                  <span className="text-gray-700"><strong>3D Printing:</strong> Students design and print custom housings using CAD software</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-1">2</span>
                  <span className="text-gray-700"><strong>Circuit Assembly:</strong> Careful soldering of LED arrays and battery management systems</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-1">3</span>
                  <span className="text-gray-700"><strong>Quality Testing:</strong> Each unit undergoes rigorous testing for functionality and durability</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-1">4</span>
                  <span className="text-gray-700"><strong>Packaging:</strong> Mailer boxes with educational brochures in local languages</span>
                </div>
              </div>
            </div>
          </div>

          {/* Distribution Network */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                <i className="fas fa-shipping-fast text-primary mr-3"></i>
                Distribution Methods
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                We've developed a comprehensive distribution network that ensures our flashlights reach the students who need them most, while building sustainable partnerships with local communities.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <i className="fas fa-handshake text-primary mt-1 mr-3"></i>
                  <span className="text-gray-700"><strong>Local Partnerships:</strong> Collaboration with Ghanaian schools and community organizations</span>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-graduation-cap text-primary mt-1 mr-3"></i>
                  <span className="text-gray-700"><strong>School-Based Distribution:</strong> Direct delivery to educational institutions in rural areas</span>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-box text-primary mt-1 mr-3"></i>
                  <span className="text-gray-700"><strong>Care Packages:</strong> Each flashlight includes maintenance guide and educational materials</span>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-chart-line text-primary mt-1 mr-3"></i>
                  <span className="text-gray-700"><strong>Impact Tracking:</strong> Follow-up surveys to measure educational outcomes and usage</span>
                </div>
              </div>
            </div>
            {/* The SVG map section is commented out for now to prevent JSX parsing errors. */}
            {/*
            <div>
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8">
                <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">Distribution Across Ghana</h4>
                <div className="relative">
                  <svg viewBox="0 0 400 300" className="w-full h-64">
                    <path d="M150 80 L250 85 L280 120 L285 180 L270 220 L240 240 L180 245 L140 240 L120 200 L125 150 L150 80 Z" fill="#e5f3ff" stroke="#1e40af" strokeWidth="2" />
                    <circle cx="180" cy="130" r="8" fill="#ef4444" className="animate-pulse" />
                    <circle cx="220" cy="160" r="8" fill="#ef4444" className="animate-pulse" />
                    <circle cx="160" cy="180" r="8" fill="#ef4444" className="animate-pulse" />
                    <circle cx="200" cy="200" r="8" fill="#ef4444" className="animate-pulse" />
                    <circle cx="240" cy="140" r="8" fill="#ef4444" className="animate-pulse" />
                    <text x="200" y="50" textAnchor="middle" className="text-lg font-bold fill-gray-800">Ghana</text>
                    <text x="190" y="120" textAnchor="middle" className="text-xs fill-gray-600">Ashanti</text>
                    <text x="230" y="150" textAnchor="middle" className="text-xs fill-gray-600">Eastern</text>
                    <text x="170" y="170" textAnchor="middle" className="text-xs fill-gray-600">Central</text>
                    <text x="210" y="190" textAnchor="middle" className="text-xs fill-gray-600">Greater Accra</text>
                    <text x="250" y="130" textAnchor="middle" className="text-xs fill-gray-600">Volta</text>
                  </svg>
                  <div className="mt-4 text-center">
                    <div className="flex items-center justify-center space-x-4">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                        <span className="text-sm text-gray-600">Distribution Centers</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">15 schools across 5 regions served</p>
                  </div>
                </div>
              </div>
            </div>
            */}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Help Us Scale Our Impact</h2>
          <p className="text-xl mb-8 opacity-90">
            Every donation helps us reach more students and expand our distribution network across Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://gofund.me/436b67db" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              <i className="fas fa-heart mr-2"></i>
              Donate Now
            </a>
            <a 
              href="/contact"
              className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors duration-200"
            >
              <i className="fas fa-envelope mr-2"></i>
              Partner With Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}