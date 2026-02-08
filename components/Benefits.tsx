
import React from 'react';
import { Shield, Zap, Sun, Heart, Brain, Smile, ArrowRight } from 'lucide-react';

export const Benefits: React.FC = () => {
  const benefits = [
    { 
      title: "Emotional Stability", 
      icon: Shield, 
      desc: "Stay grounded and centered even when life gets unpredictable." 
    },
    { 
      title: "Diminished anger issues", 
      icon: Heart, 
      desc: "Learn to respond rather than react to frustrating situations." 
    },
    { 
      title: "Morning routine development", 
      icon: Sun, 
      desc: "Create a powerful start to your day that sets the tone for success." 
    },
    { 
      title: "More energy and focus", 
      icon: Zap, 
      desc: "Sharpen your concentration and maintain high energy levels throughout the day." 
    },
    { 
      title: "Neuroplasticity", 
      icon: Brain, 
      desc: "20 minutes of daily re-wiring of mind for self-transformation." 
    },
    { 
      title: "Happy U", 
      icon: Smile, 
      desc: "Reconnect with your natural state of joy and inner contentment." 
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-forest text-sand">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 italic">The Transformation</h2>
          <p className="text-sand/60 text-lg">Small shifts in awareness lead to significant changes in your daily life.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 max-w-6xl mx-auto mb-20">
          {benefits.map((b, idx) => (
            <div key={idx} className="flex gap-6 items-start group">
              <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center shrink-0 text-gold group-hover:bg-gold group-hover:text-forest transition-all">
                <b.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-serif mb-3">{b.title}</h3>
                <p className="text-sand/50 leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
  href="https://wa.me/917497870552?text=Hi%20I%20am%20interested%20in%20these%20benefits.%20Please%20guide%20me."
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-3 bg-sand text-forest px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-black/20 group"
>
  I want these benefits
  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
</a>

        </div>
      </div>
    </section>
  );
};
