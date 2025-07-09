import React from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { useScrollAnimation } from "./hooks/useScrollAnimation";
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const titleRef = useScrollAnimation();
  const formRef = useScrollAnimation();
  const infoRef = useScrollAnimation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xldjopko', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error sending your message. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="font-sans">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 ref={titleRef} className="scroll-fade text-4xl sm:text-5xl lg:text-6xl font-bold text-dark mb-6">
            Get in Touch
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="scroll-fade text-xl text-gray-600 leading-relaxed">
            Have questions about our mission? Want to get involved? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div ref={formRef} className="scroll-fade">
              <h2 className="text-3xl font-bold text-dark mb-8">Send us a Message</h2>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-check text-white text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Message Sent Successfully!</h3>
                  <p className="text-green-600">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 text-primary font-medium hover:text-primary/80 transition-colors duration-200"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                        placeholder="Enter your full name"
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
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                    >
                      <option value="">Select a topic</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Partnership Opportunity">Partnership Opportunity</option>
                      <option value="Volunteer Interest">Volunteer Interest</option>
                      <option value="Donation Question">Donation Question</option>
                      <option value="Media Request">Media Request</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                      isSubmitting
                        ? 'bg-gray-400 text-white cursor-not-allowed'
                        : 'bg-primary text-white hover:bg-primary/90'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-spinner fa-spin mr-2"></i>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane mr-2"></i>
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
            
            {/* Contact Information */}
            <div ref={infoRef} className="scroll-fade">
              <h2 className="text-3xl font-bold text-dark mb-8">Contact Information</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-envelope text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-dark mb-1">Email Us</h3>
                    <p className="text-gray-600 mb-2">We typically respond within 24 hours</p>
                    <a 
                      href="mailto:flashforwardnp@gmail.com"
                      className="text-primary font-medium hover:text-primary/80 transition-colors duration-200"
                    >
                      flashforwardnp@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-dark mb-1">Location</h3>
                    <p className="text-gray-600 mb-2">Based in Washington State</p>
                    <p className="text-gray-600">Bellevue, WA, USA</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-clock text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-dark mb-1">Response Time</h3>
                    <p className="text-gray-600 mb-2">We're students, but we're committed!</p>
                    <p className="text-gray-600">Usually within 24 hours during school days</p>
                  </div>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-dark mb-4">Follow Our Journey</h3>
                <p className="text-gray-600 mb-4">
                  Stay updated on our latest projects, impact stories, and behind-the-scenes content.
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-200 shadow-lg"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-200 shadow-lg"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-200 shadow-lg"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-200 shadow-lg"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
                <p className="text-sm text-gray-500 mt-3">@flashforwardfoundation</p>
              </div>
              
              {/* FAQ Link */}
              <div className="mt-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-dark mb-2">Have a Quick Question?</h3>
                <p className="text-gray-600 mb-4">
                  Check out our FAQ section for answers to common questions about our mission, 
                  technology, and impact.
                </p>
                <a 
                  href="/#faq"
                  className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors duration-200"
                >
                  View FAQ
                  <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}