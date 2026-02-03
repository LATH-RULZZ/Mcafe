import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "I can't stop my thoughts. Can I still meditate?",
      a: "Yes! The goal of meditation isn't to stop thoughts—it's to change your relationship with them. We use Himalayan techniques that prepare the body so thoughts settle down naturally."
    },
    {
      q: "Is this program religious?",
      a: "No. While rooted in the Himalayan tradition, the practices focus on the science of breath, relaxation, and awareness. People of all backgrounds and beliefs are welcome."
    },
    {
      q: "I've tried apps before. How is this different?",
      a: "Apps are one-way. This is a live, guided experience with an instructor who has 12+ years of experience. You get real-time energy, guidance, and daily support sessions to ask questions."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-paper">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-forest mb-6">Questions? <br/><span className="italic text-charcoal/40 font-normal">We have answers.</span></h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-gold/10 overflow-hidden shadow-sm">
                <button 
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-sand/30 transition-colors"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                >
                  <span className="text-lg font-serif text-forest pr-4">{faq.q}</span>
                  {openIndex === idx ? <ChevronUp className="text-gold shrink-0" /> : <ChevronDown className="text-gold shrink-0" />}
                </button>
                {openIndex === idx && (
                  <div className="px-8 pb-8 animate-in fade-in slide-in-from-top-2 duration-300">
                    <p className="text-charcoal/60 leading-relaxed text-lg">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};