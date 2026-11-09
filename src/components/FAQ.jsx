import React, { useState } from 'react';

const faqData = [
  {
    question: "What is your skincare routine order?",
    answer: "A standard routine follows the rule of thinnest to thickest consistency: Cleanser, Toner, Serum, Moisturizer, and SPF (during the day)."
  },
  {
    question: "Are your products cruelty-free and vegan?",
    answer: "Yes! All our skincare formulations are 100% cruelty-free, ethically sourced, and vegan-friendly."
  },
  {
    question: "How long before I see results from a new product?",
    answer: "Skin cell turnover typically takes about 28 days. Most customers notice initial improvements in hydration immediately, and visible changes in texture and tone within 4 to 6 weeks."
  },
  {
    question: "Can I use active ingredients like Retinol and Vitamin C together?",
    answer: "It’s generally best to use Vitamin C in your morning routine to protect against environmental stressors, and Retinol at night to aid in skin repair. Using them at the exact same time can sometimes cause irritation."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-subtitle">Got questions about your skin or our products? We’ve got answers.</p>
        
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{item.question}</h3>
                <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
              </div>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}