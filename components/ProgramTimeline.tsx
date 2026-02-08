import React from 'react';
import { Sun, Moon, Sparkles, CheckCircle2 } from 'lucide-react';

export const ProgramTimeline: React.FC = () => {
  const days = [
    {
      day: "Day 01",
      title: "Healthy Pranayam",
      points: [
        "Calming the mind using ancient breathing practices",
        "Detoxification of the nervous system",
        "Vyayam for muscle health & flexibility"
      ]
    },
    {
      day: "Day 02",
      title: "Zone of Meditation",
      points: [
        "Pre - Meditation Techniques",
        "Correct posture & breathing alignment",
        "20 minutes of pure awareness practice"
      ]
    },
    {
      day: "Day 03",
      title: "दिनचर्या (Dincharya)",
      points: [
        "Structuring your daily life for lasting peace",
        "Sadhana: Building a sustainable home practice",
        "Integrating silence into a busy modern schedule"
      ]
    }
  ];

  return (
    <section id="program" className="py-24 bg-paper relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-forest mb-6 italic">Your 3-Day Inner Reset</h2>
            <p className="text-charcoal/50 mb-12 max-w-xl mx-auto">Each session is a blend of traditional Himalayan wisdom and practical application for your modern life.</p>
            
            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="px-8 py-6 bg-white border-4 border-gold rounded-2xl shadow-xl flex items-center gap-4 transform hover:-translate-y-1 transition-transform ring-4 ring-gold/10">
                <Sun className="w-8 h-8 text-gold" />
                <div className="text-left">
                  <p className="text-xs uppercase tracking-widest font-black text-gold">Batch 1</p>
                  <p className="text-2xl font-serif text-forest">7 AM - 8 AM</p>
                </div>
              </div>
              <div className="px-8 py-6 bg-white border-4 border-gold rounded-2xl shadow-xl flex items-center gap-4 transform hover:-translate-y-1 transition-transform ring-4 ring-gold/10">
                <Moon className="w-8 h-8 text-gold" />
                <div className="text-left">
                  <p className="text-xs uppercase tracking-widest font-black text-gold">Batch 2</p>
                  <p className="text-2xl font-serif text-forest">7 PM - 8 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {days.map((d, idx) => (
              <div key={idx} className="relative p-10 rounded-3xl bg-white/60 border border-gold/10 overflow-hidden group hover:bg-white transition-all hover:shadow-2xl">
                <div className="text-8xl font-serif text-gold/5 absolute -top-4 -right-4 transition-transform group-hover:scale-110 select-none">{idx + 1}</div>
                <h4 className="text-gold font-bold tracking-[0.3em] mb-4 uppercase text-[10px]">{d.day}</h4>
                <h3 className="text-2xl font-serif text-forest mb-8 border-b border-gold/10 pb-4">{d.title}</h3>
                
                <ul className="space-y-4 relative z-10">
                  {d.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                      <span className="text-charcoal/70 text-sm leading-relaxed font-medium">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto bg-forest text-sand p-10 md:p-16 rounded-[3rem] text-center relative overflow-hidden border border-gold/20 shadow-2xl">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gold/5 rounded-full blur-3xl"></div>
            
            <p className="text-gold font-bold mb-4 tracking-widest uppercase flex items-center justify-center gap-2 text-xs">
              <Sparkles className="w-4 h-4" />
              Join the Experience
              <Sparkles className="w-4 h-4" />
            </p>
            <h3 className="text-7xl md:text-8xl font-serif mb-8 text-white italic">
              FREE
            </h3>
            <p className="text-sand/70 mb-10 text-lg leading-relaxed max-w-md mx-auto">
              This is a guided introduction. No pressure, no auto-enrollment, no sales during sessions. Just pure practice.
            </p>
            <a
  href="https://wa.me/917497870552?text=Hi%20Yes%20I%20am%20in.%20I%20would%20like%20to%20get%20started."
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-gold text-forest px-12 py-5 rounded-full font-bold text-xl hover:bg-white transition-all hover:scale-105 shadow-xl shadow-gold/20"
>
  Yes I am in
</a>

            <p className="mt-6 text-[10px] text-gold font-bold uppercase tracking-[0.2em]">
              Next batch starts Friday, 6 February
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};