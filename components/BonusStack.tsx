
import React from 'react';
import { Gift, MessageSquare, Video } from 'lucide-react';

export const BonusStack: React.FC = () => {
  return (
    <section className="py-24 bg-sand">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-[4rem] p-12 md:p-20 shadow-2xl relative overflow-hidden border border-gold/10">
          <div className="absolute top-0 right-0 p-12 text-gold/5">
            <Gift size={200} />
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <span className="inline-block px-4 py-2 rounded-full bg-gold/10 text-gold font-bold text-xs uppercase tracking-widest mb-6">Bonus Value</span>
              <h2 className="text-4xl md:text-5xl font-serif text-forest mb-8 leading-tight">Monthly Live Q&A with Senior Faculty</h2>
              <p className="text-charcoal/70 text-lg leading-relaxed mb-8">
                Your journey doesn't end after 3 days. Get exclusive access to our monthly deep-dive Q&A sessions where you can ask advanced questions to our most experienced meditation teachers.
              </p>
              <div className="flex gap-4">
                <div className="flex items-center gap-2 text-forest font-semibold">
                  <Video className="text-gold" /> Live Zoom
                </div>
                <div className="flex items-center gap-2 text-forest font-semibold">
                  <MessageSquare className="text-gold" /> Direct Access
                </div>
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-3xl bg-sand p-4 flex flex-col items-center justify-center text-center">
                <p className="text-4xl font-serif text-gold mb-2">₹1999</p>
                <p className="text-xs uppercase tracking-widest text-charcoal/40 font-bold">Standard Value</p>
              </div>
              <div className="aspect-square rounded-3xl bg-forest p-4 flex flex-col items-center justify-center text-center text-gold">
                <p className="text-4xl font-serif mb-2 italic">FREE</p>
                <p className="text-xs uppercase tracking-widest text-sand/40 font-bold">For You Today</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
