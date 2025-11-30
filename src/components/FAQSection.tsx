import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const titleRef = useScrollAnimation();
  const faq1Ref = useScrollAnimation();
  const faq2Ref = useScrollAnimation();
  const faq3Ref = useScrollAnimation();
  const faq4Ref = useScrollAnimation();

  const faqs = [
    {
      question: "How do the solar flashlights work?",
      answer: "Our flashlights use high-efficiency solar panels to charge lithium-ion batteries during the day. The stored energy powers bright LED lights for 6-8 hours of continuous use, perfect for evening study sessions."
    },
    {
      question: "Where does the funding go?",
      answer: "100% of donations go directly to flashlight production and distribution costs. Our team volunteers their time, and we partner with local organizations to ensure efficient, cost-effective delivery to students in need."
    },
    {
      question: "How can students get involved?",
      answer: "We welcome student volunteers! You can help with engineering, marketing, fundraising, or social media. Contact us to join our growing team of young changemakers making a real difference in global education."
    },
    {
      question: "What's the impact timeline?",
      answer: "We're currently piloting in Ghana with plans to distribute 500 flashlights by summer 2025. Our goal is to reach 5,000 students across West Africa by 2026, with expansion to other regions following successful implementation."
    }
  ];

  const faqRefs = [faq1Ref, faq2Ref, faq3Ref, faq4Ref];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-4xl sm:text-5xl font-bold text-dark mb-6">Frequently Asked Questions</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} ref={faqRefs[index]} className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-dark">{faq.question}</span>
                <i className={`fas fa-chevron-down text-gray-500 transform transition-transform duration-300 ${openFAQ === index ? 'rotate-180' : ''
                  }`}></i>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="p-6 pt-0 border-t border-gray-100">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
