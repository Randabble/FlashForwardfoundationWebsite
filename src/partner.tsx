import React from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { useScrollAnimation } from "./hooks/useScrollAnimation";
import { useState } from 'react';

export default function Partner() {
  const titleRef = useScrollAnimation();
  const [formData, setFormData] = useState({
    organizationName: '',
    contactName: '',
    email: '',
    phone: '',
    organizationType: '',
    location: '',
    partnershipInterest: '',
    existingPrograms: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/mjkrzlea', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Thank you for your interest in partnering with us! We\'ll get back to you soon.');
        setFormData({
          organizationName: '',
          contactName: '',
          email: '',
          phone: '',
          organizationType: '',
          location: '',
          partnershipInterest: '',
          existingPrograms: '',
          message: ''
        });
      } else {
        alert('There was an error submitting your form. Please try again.');
      }
    } catch (error) {
      alert('There was an error submitting your form. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="font-sans">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 ref={titleRef} className="scroll-fade text-4xl sm:text-5xl lg:text-6xl font-bold text-dark mb-6">
            Partner With Us
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Join forces with Flash Forward to expand our impact and bring sustainable lighting solutions to more communities worldwide.
          </p>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Partner with Flash Forward?</h2>
              <p className="text-lg text-gray-700 mb-6">
                Partnering with Flash Forward means joining a network of organizations committed to addressing energy poverty and expanding educational opportunities for underserved communities. Together, we can scale our impact and create lasting change.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 rounded-lg p-3 mr-4">
                    <i className="fas fa-globe text-primary text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Impact</h3>
                    <p className="text-gray-700">Reach more communities and amplify your organization's social impact through our established distribution network.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-accent/10 rounded-lg p-3 mr-4">
                    <i className="fas fa-lightbulb text-accent text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation Access</h3>
                    <p className="text-gray-700">Access cutting-edge solar technology and student-driven innovation for sustainable development projects.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 rounded-lg p-3 mr-4">
                    <i className="fas fa-users text-primary text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Engagement</h3>
                    <p className="text-gray-700">Connect with passionate student volunteers and expand your community outreach capabilities.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-accent/10 rounded-lg p-3 mr-4">
                    <i className="fas fa-chart-line text-accent text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Measurable Results</h3>
                    <p className="text-gray-700">Track and measure educational outcomes with our comprehensive impact assessment tools.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Partnership collaboration"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Partnership Opportunities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <i className="fas fa-graduation-cap text-primary text-3xl mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Educational Institutions</h3>
              <p className="text-gray-700 mb-4">Schools, universities, and educational organizations looking to expand global impact programs.</p>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Student exchange programs</li>
                <li>• Service learning opportunities</li>
                <li>• Research collaborations</li>
                <li>• STEM education partnerships</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <i className="fas fa-hands-helping text-primary text-3xl mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">NGOs & Nonprofits</h3>
              <p className="text-gray-700 mb-4">Organizations working in education, energy access, or international development.</p>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Distribution partnerships</li>
                <li>• Program integration</li>
                <li>• Community outreach</li>
                <li>• Impact measurement</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <i className="fas fa-building text-primary text-3xl mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Corporate Partners</h3>
              <p className="text-gray-700 mb-4">Companies committed to social responsibility and sustainable development goals.</p>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• CSR program integration</li>
                <li>• Employee engagement</li>
                <li>• Technology partnerships</li>
                <li>• Funding opportunities</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <i className="fas fa-map-marked-alt text-primary text-3xl mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Local Organizations</h3>
              <p className="text-gray-700 mb-4">Community-based organizations in target regions for distribution and impact.</p>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Local distribution networks</li>
                <li>• Community needs assessment</li>
                <li>• Cultural adaptation</li>
                <li>• Long-term sustainability</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <i className="fas fa-flask text-primary text-3xl mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Research Institutions</h3>
              <p className="text-gray-700 mb-4">Universities and research centers focused on sustainable technology and development.</p>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Technology improvement</li>
                <li>• Impact studies</li>
                <li>• Academic publications</li>
                <li>• Grant collaborations</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <i className="fas fa-seedling text-primary text-3xl mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Environmental Groups</h3>
              <p className="text-gray-700 mb-4">Organizations focused on climate change, renewable energy, and environmental justice.</p>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Climate impact initiatives</li>
                <li>• Renewable energy advocacy</li>
                <li>• Environmental education</li>
                <li>• Policy development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Current Partners</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gray-100 rounded-lg p-6 mb-4">
                <i className="fas fa-school text-primary text-4xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Sammamish High School</h3>
              <p className="text-gray-600">Builders Club & Engineering Program</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-100 rounded-lg p-6 mb-4">
                <i className="fas fa-globe-africa text-primary text-4xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ghana Education Network</h3>
              <p className="text-gray-600">Local Distribution Partner</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-100 rounded-lg p-6 mb-4">
                <i className="fas fa-leaf text-primary text-4xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Solar for All Initiative</h3>
              <p className="text-gray-600">Technology & Advocacy Partner</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-100 rounded-lg p-6 mb-4">
                <i className="fas fa-heart text-primary text-4xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Youth Impact Coalition</h3>
              <p className="text-gray-600">Student Engagement Partner</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Application Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Apply for Partnership</h2>
          
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="organizationName" className="block text-sm font-medium text-gray-700 mb-2">
                    Organization Name *
                  </label>
                  <input
                    type="text"
                    id="organizationName"
                    name="organizationName"
                    value={formData.organizationName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="organizationType" className="block text-sm font-medium text-gray-700 mb-2">
                    Organization Type *
                  </label>
                  <select
                    id="organizationType"
                    name="organizationType"
                    value={formData.organizationType}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select organization type</option>
                    <option value="Educational Institution">Educational Institution</option>
                    <option value="NGO/Nonprofit">NGO/Nonprofit</option>
                    <option value="Corporate">Corporate</option>
                    <option value="Local Community Organization">Local Community Organization</option>
                    <option value="Research Institution">Research Institution</option>
                    <option value="Environmental Group">Environmental Group</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                    Location/Region
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="City, State/Country"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="partnershipInterest" className="block text-sm font-medium text-gray-700 mb-2">
                  Partnership Interest *
                </label>
                <select
                  id="partnershipInterest"
                  name="partnershipInterest"
                  value={formData.partnershipInterest}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select partnership type</option>
                  <option value="Distribution Partner">Distribution Partner</option>
                  <option value="Technology Development">Technology Development</option>
                  <option value="Funding Partnership">Funding Partnership</option>
                  <option value="Educational Collaboration">Educational Collaboration</option>
                  <option value="Research Partnership">Research Partnership</option>
                  <option value="Advocacy Partnership">Advocacy Partnership</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="existingPrograms" className="block text-sm font-medium text-gray-700 mb-2">
                  Existing Relevant Programs
                </label>
                <textarea
                  id="existingPrograms"
                  name="existingPrograms"
                  value={formData.existingPrograms}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Tell us about your current programs related to education, energy access, or community development..."
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Partnership Proposal
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Describe how you envision partnering with Flash Forward and the mutual benefits..."
                />
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
                >
                  <i className="fas fa-handshake mr-2"></i>
                  Submit Partnership Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}