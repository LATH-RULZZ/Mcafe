
import React from 'react';

export const Experience: React.FC = () => {
  return (
    <section className="py-24 bg-forest overflow-hidden relative border-y border-gold/10">
      {/* Subtle organic background pattern */}
      <div className="absolute inset-0 mandala-bg opacity-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Image Container - Designed for the cinematic mountain meditation photo */}
            <div className="w-full lg:w-1/2">
              <div className="relative group">
                {/* Elegant gold corner accents */}
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold/40 z-20 group-hover:scale-110 transition-transform duration-700"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-gold/40 z-20 group-hover:scale-110 transition-transform duration-700"></div>
                
                <div className="aspect-[3/4] md:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/5 bg-sand/10 relative">
                  {/* We use a high-quality placeholder that matches the composition of your side-profile mountain photo */}
                  <img 
                    src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200" 
                    alt="Rupam Meditating on a Himalayan Peak" 
                    className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                  />
                  {/* Gradient to make text pop and add atmosphere */}
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-transparent to-transparent opacity-60"></div>
                  
                  {/* Floating badge */}
                  <div className="absolute top-8 right-8 px-5 py-3 rounded-2xl bg-forest/40 backdrop-blur-xl border border-white/10 text-gold text-[10px] font-bold tracking-[0.3em] uppercase">
                    Rishikesh Training
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bio Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <div className="inline-block w-16 h-px bg-gold mb-10"></div>
              <h3 className="text-gold font-bold tracking-[0.4em] uppercase text-[10px] mb-8">Guided by Tradition</h3>
              <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-sand leading-[1.4] italic mb-12">
                “Trained in Himalayan meditation traditions in Rishikesh, Rupam has guided working professionals, entrepreneurs, and seekers through practical, grounded meditation that fits modern life.”
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
                <div className="flex flex-col gap-2">
                  <span className="text-gold font-bold tracking-widest uppercase text-[10px]">Lineage</span>
                  <span className="text-sand/80 font-medium text-lg">Himalayan Masters</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-gold font-bold tracking-widest uppercase text-[10px]">Method</span>
                  <span className="text-sand/80 font-medium text-lg">Practical & Grounded</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-gold font-bold tracking-widest uppercase text-[10px]">Approach</span>
                  <span className="text-sand/80 font-medium text-lg">Fits Modern Life</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-gold font-bold tracking-widest uppercase text-[10px]">Experience</span>
                  <span className="text-sand/80 font-medium text-lg">12+ Years Practice</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
