
import React from 'react';
import { Play, Sparkles } from 'lucide-react';

export const IntroVideo: React.FC = () => {
  return (
    <section id="intro-video" className="py-12 md:py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-sand rounded-full blur-[100px] -z-10 opacity-40 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-[80px] -z-10 opacity-30 -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <p className="text-gold font-bold tracking-[0.4em] uppercase text-[9px] mb-3 flex items-center justify-center gap-2">
              <Sparkles className="w-3 h-3" />
              Watch the Journey
              <Sparkles className="w-3 h-3" />
            </p>
            <h2 className="text-3xl md:text-5xl font-serif text-forest mb-4 leading-tight italic">
              Experience the Practice
            </h2>
            <p className="text-charcoal/60 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              If you’ve tried meditation before and struggled, watch this.
            </p>
          </div>

          {/* YouTube Video Container - Slightly more compact */}
          <div className="relative group max-w-3xl mx-auto">
            {/* Elegant luxury frame */}
            <div className="absolute -inset-2 border border-gold/10 rounded-[2rem] -z-10 transition-transform duration-700 group-hover:scale-[1.01]"></div>
            
            <div className="aspect-video rounded-3xl overflow-hidden shadow-xl bg-charcoal relative">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/W92E-mP9v7s?si=calm-meditation-intro"
                title="Introductory Meditation Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            {/* Subtle floating label - scaled down for mobile */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-forest text-sand rounded-full shadow-lg border border-gold/10 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse"></div>
              <span className="text-[9px] font-bold tracking-[0.1em] uppercase">Start Your Transformation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
