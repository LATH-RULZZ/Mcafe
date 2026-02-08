
import React from 'react';
import { Brain, RotateCcw, ShieldCheck, ArrowRight } from 'lucide-react';

export const Problem: React.FC = () => {
  const problems = [
    {
      text: "You overthink even when your body is tired",
      icon: Brain,
      color: "text-blue-400",
      graph: "M 0 50 Q 25 0 50 50 T 100 50" // Squiggly line for overthinking
    },
    {
      text: "You’ve “tried meditation” but couldn’t stick",
      icon: RotateCcw,
      color: "text-red-400",
      graph: "M 50 20 A 30 30 0 1 1 50 80 A 30 30 0 1 1 50 20" // Circle for cycle/sticking
    },
    {
      text: "You want calm without becoming spiritual or religious",
      icon: ShieldCheck,
      color: "text-emerald-400",
      graph: "M 10 50 L 90 50 M 50 10 L 50 90" // Clean cross for groundedness
    }
  ];

  return (
    <section className="py-24 bg-white/40 border-y border-gold/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif text-forest mb-16 text-center">
            This is for you if...
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {problems.map((p, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-sand/50 border border-gold/5 flex flex-col items-center text-center group hover:bg-white hover:shadow-lg transition-all h-full">
                <div className={`mb-6 p-4 rounded-full bg-white shadow-inner ${p.color} group-hover:scale-110 transition-transform relative shrink-0`}>
                  <p.icon className="w-8 h-8 relative z-10" />
                  <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100">
                    <path d={p.graph} fill="none" stroke="currentColor" strokeWidth="4" />
                  </svg>
                </div>
                <p className="text-charcoal/80 font-medium text-lg leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center space-y-12">
            <div className="space-y-4">
              <p className="text-2xl font-serif text-forest">
                You’re not broken. <br />
                <span className="text-gold italic">You were never taught the right way.</span>
              </p>
            </div>
            
            <a
  href="https://wa.me/917497870552?text=Hi%20I%20want%20to%20learn%20the%20right%20way.%20Please%20guide%20me."
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-3 bg-forest text-sand px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-forest/10 group"
>
  Learn the Right Way
  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
</a>

          </div>
        </div>
      </div>
    </section>
  );
};
