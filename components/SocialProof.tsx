
import React from 'react';
import { Star, Quote, ArrowRight } from 'lucide-react';

export const SocialProof: React.FC = () => {
  const testimonials = [
    {
      name: "Priyanka",
      role: "Project Manager, Sapient",
      text: "I sleep better now."
    },
    {
      name: "Shanu",
      role: "Booking.com",
      text: "Finally, I built a habit of regular meditation."
    }
  ];

  return (
    <section className="py-24 bg-sand/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-gold font-bold tracking-widest uppercase text-sm mb-4">Community</p>
          <h2 className="text-4xl md:text-5xl font-serif text-forest">Practiced by those who perform under pressure.</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
          {testimonials.map((t, idx) => (
            <div key={idx} className="p-10 rounded-[2.5rem] bg-white border border-gold/10 shadow-sm relative group hover:-translate-y-2 transition-transform">
              <Quote className="absolute top-8 right-8 text-gold/10 w-12 h-12" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-gold text-gold" />)}
              </div>
              <p className="text-charcoal/80 text-lg italic leading-relaxed mb-8">"{t.text}"</p>
              <div>
                <p className="font-serif text-forest text-xl">{t.name}</p>
                <p className="text-sm text-charcoal/50 uppercase tracking-widest">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center">
          <a 
            href="#reserve" 
            className="group bg-gold text-forest px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-gold/20 flex items-center gap-3"
          >
            Start My Own Journey
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
