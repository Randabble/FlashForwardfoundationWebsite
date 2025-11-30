import React from "react";
import AnimatedNav from "./components/AnimatedNav";
import Footer from "./components/Footer";
import { useScrollAnimation } from "./hooks/useScrollAnimation";
import { useState } from 'react';

export default function Volunteer() {
  const titleRef = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    school: '',
    skills: '',
    availability: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/xnnvrwbb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Thank you for your interest in volunteering! We\'ll get back to you soon.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          school: '',
          skills: '',
          availability: '',
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
      <AnimatedNav />

      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 ref={titleRef} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark mb-6">
            Volunteer With Us
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Join our student-led movement to bring light to education and make a real difference in the lives of students worldwide.
          </p>
        </div>
      </section>

      {/* Why Volunteer Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Volunteer with Flash Forward?</h2>
              <p className="text-lg text-gray-700 mb-6">
                As a volunteer with Flash Forward, you'll be part of a dynamic team of students working to address one of the world's most pressing challenges: energy poverty. Our volunteers gain valuable experience while making a meaningful impact.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-primary/10 rounded-lg p-6">
                  <i className="fas fa-hands-helping text-primary text-2xl mb-4"></i>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Make Real Impact</h3>
                  <p className="text-gray-700">Help design and distribute solar flashlights that directly improve educational outcomes for students in Ghana.</p>
                </div>

                <div className="bg-accent/10 rounded-lg p-6">
                  <i className="fas fa-tools text-accent text-2xl mb-4"></i>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Gain STEM Skills</h3>
                  <p className="text-gray-700">Learn 3D modeling, circuit design, soldering, and project management through hands-on experience.</p>
                </div>

                <div className="bg-primary/10 rounded-lg p-6">
                  <i className="fas fa-users text-primary text-2xl mb-4"></i>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Build Community</h3>
                  <p className="text-gray-700">Connect with like-minded students who share your passion for social impact and innovation.</p>
                </div>

                <div className="bg-accent/10 rounded-lg p-6">
                  <i className="fas fa-certificate text-accent text-2xl mb-4"></i>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Develop Leadership</h3>
                  <p className="text-gray-700">Take on leadership roles in various projects and build your resume with meaningful experience.</p>
                </div>
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Students volunteering"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Volunteer Opportunities</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <i className="fas fa-cogs text-primary text-3xl mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Engineering & Design</h3>
              <p className="text-gray-700 mb-4">Work on 3D modeling, circuit design, and prototyping of solar flashlights.</p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• CAD design and 3D printing</li>
                <li>• Circuit assembly and testing</li>
                <li>• Product improvement iterations</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <i className="fas fa-chart-line text-primary text-3xl mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Business & Operations</h3>
              <p className="text-gray-700 mb-4">Help with project management, partnerships, and organizational growth.</p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Partnership development</li>
                <li>• Project coordination</li>
                <li>• Financial planning</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <i className="fas fa-bullhorn text-primary text-3xl mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Advocacy & Outreach</h3>
              <p className="text-gray-700 mb-4">Raise awareness about energy poverty and promote our mission.</p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Social media management</li>
                <li>• Event organization</li>
                <li>• Community presentations</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <i className="fas fa-pen-fancy text-primary text-3xl mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Content & Communications</h3>
              <p className="text-gray-700 mb-4">Create compelling content to share our story and impact.</p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Blog writing and editing</li>
                <li>• Video content creation</li>
                <li>• Website maintenance</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <i className="fas fa-dollar-sign text-primary text-3xl mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fundraising</h3>
              <p className="text-gray-700 mb-4">Help secure funding for our solar flashlight distribution program.</p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Grant writing</li>
                <li>• Fundraising events</li>
                <li>• Donor relations</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <i className="fas fa-chart-pie text-primary text-3xl mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Research & Impact</h3>
              <p className="text-gray-700 mb-4">Measure and analyze the impact of our programs on student outcomes.</p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Data collection and analysis</li>
                <li>• Impact reporting</li>
                <li>• Research assistance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Apply to Volunteer</h2>

          <div className="bg-gray-50 rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

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
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                <div>
                  <label htmlFor="school" className="block text-sm font-medium text-gray-700 mb-2">
                    School/Organization
                  </label>
                  <input
                    type="text"
                    id="school"
                    name="school"
                    value={formData.school}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-2">
                  Skills & Interests
                </label>
                <textarea
                  id="skills"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Tell us about your skills, interests, and areas where you'd like to contribute..."
                />
              </div>

              <div>
                <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-2">
                  Availability
                </label>
                <select
                  id="availability"
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select your availability</option>
                  <option value="1-2 hours per week">1-2 hours per week</option>
                  <option value="3-5 hours per week">3-5 hours per week</option>
                  <option value="6-10 hours per week">6-10 hours per week</option>
                  <option value="More than 10 hours per week">More than 10 hours per week</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Why do you want to volunteer with Flash Forward?
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Share your motivation for joining our team..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
                >
                  <i className="fas fa-paper-plane mr-2"></i>
                  Submit Application
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