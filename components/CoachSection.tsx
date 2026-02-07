import React from 'react';

export const CoachSection: React.FC = () => {
  return (
    <section id="instructor" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Column 1 */}
            <div className="flex flex-col gap-4">
              {/* Text Block */}
              <div className="aspect-square md:aspect-auto md:h-1/2 rounded-3xl bg-gradient-to-br from-[#FFF8E7] to-[#F3E5AB] p-10 flex flex-col justify-center text-center border border-gold/10">
                <h2 className="text-3xl md:text-4xl font-serif text-forest mb-12 leading-tight">
                  Hi, i'm Rupam, your meditation coach.
                </h2>
                <div className="space-y-6">
                  <p className="text-xl md:text-2xl font-serif text-forest/80 italic">
                    I don't live in the mountains. <br />
                    I live a regular life.
                  </p>
                  <p className="text-xl md:text-2xl font-serif text-forest/80">
                    Meditation is how I stay balanced inside it.
                  </p>
                </div>
              </div>
              
              {/* Meditation Indoor Image */}
              <div className="aspect-square md:aspect-auto md:h-1/2 rounded-3xl overflow-hidden border border-gold/5 shadow-lg group">
                <img 
                    src="images/meditation-home.jpg"   
                    alt="Rupam Meditating at Home" 
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-4">
              {/* Regular Life / Family Image (Tall) - Updated to Baby Feet in Hands visual as requested */}
              <div className="aspect-[4/5] md:aspect-auto md:h-[60%] rounded-3xl overflow-hidden border border-gold/5 shadow-lg group">
                <img 
                  src="images/baby-feet.jpg"
                   alt="Baby feet in parent hands" 
                  className="w-full h-full object-cover grayscale-[0.1] group-hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Meditation Mountain Image (Wide) */}
              <div className="aspect-video md:aspect-auto md:h-[40%] rounded-3xl overflow-hidden border border-gold/5 shadow-lg group">
                <img 
                  src="images/mountain.jpg" 
                  alt="Rupam Meditating in the Mountains" 
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};