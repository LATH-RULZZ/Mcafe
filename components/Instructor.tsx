
import React from 'react';

export const Instructor: React.FC = () => {
  return (
    <section id="instructor" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-[3rem] bg-sand overflow-hidden relative z-10 shadow-xl border border-gold/5">
              <img 
                src="https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&q=80&w=800" 
                alt="Instructor Rupam in Meditation" 
                className="w-full h-full object-cover grayscale-[0.2]"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-gold/10 rounded-full -z-0 blur-3xl"></div>
            <div className="absolute top-8 right-8 p-6 bg-forest text-sand rounded-2xl z-20 shadow-2xl border border-gold/20">
              <p className="text-sm font-bold tracking-widest uppercase mb-1">Teaching Path</p>
              <p className="text-2xl font-serif text-gold italic">AHMYSIN</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-gold font-bold tracking-widest uppercase text-sm mb-4">Your Guide</h4>
            <h2 className="text-5xl font-serif text-forest mb-8 leading-tight">Meet Rupam</h2>
            <div className="space-y-6 text-charcoal/70 text-lg leading-relaxed">
              <p>
                HI there, I am <span className="text-forest font-semibold">Data analyst at job & father of 2 kids at home</span>. 
              </p>
              <p>
                I started my spiritual journey from a 100 yr old book - <span className="italic font-medium">Gospel in Ramakrishna</span>. Currently I am a student of 3 year long - Teacher's training program at <span className="text-forest font-semibold underline decoration-gold/30">AHMYSIN, Rishikesh</span>.
              </p>
              <p>
                On the path of meditation, I have come across such beautiful knowledge that I would like to share with humanity and hopefully 1 day many 1000's of people will meditate regularly.
              </p>
              <div className="pt-6">
                <p className="italic border-l-4 border-gold pl-6 text-forest">
                  "Sharing the wisdom of the Himalayan Masters for modern living."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
