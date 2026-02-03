import React from 'react';
import { ArrowRight, ShieldCheck, Award, Activity, Play, Users } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-sand">
      <div className="container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 text-gold font-medium mb-8 animate-pulse-slow">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
          </span>
          Next Batch Starts: Friday, 6 February
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-forest mb-8 leading-[1.1]">
          Silence the Noise. <br />
          <span className="italic">Reconnect With Yourself.</span>
        </h1>
        
        <p className="text-charcoal/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          A guided meditation experience rooted in the Himalayan tradition — 
          designed for modern, busy lives. 100% practice, zero jargon.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-20">
          <a 
            href="#reserve" 
            className="group bg-forest text-sand px-8 py-5 rounded-full text-lg font-semibold flex items-center gap-3 hover:scale-105 transition-all shadow-xl shadow-forest/20 w-full md:w-auto justify-center"
          >
            Yes I am in
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#intro-video"
            className="flex items-center gap-3 text-forest font-semibold hover:opacity-70 transition-opacity px-8 py-5 group"
          >
            <div className="w-12 h-12 rounded-full border border-forest/20 flex items-center justify-center group-hover:bg-forest group-hover:text-sand transition-all">
              <Play className="w-5 h-5 ml-1" />
            </div>
            Watch 2-min Explainer
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto py-12 border-y border-gold/10">
          {[
            { icon: Award, text: "12+ Years Experience" },
            { icon: ShieldCheck, text: "Himalayan Lineage" },
            { icon: Activity, text: "100% Practice Focused" },
            { icon: Users, text: "Live Guided Sessions" }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center gap-3 group">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm border border-gold/5 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6 text-gold" />
              </div>
              <span className="text-[10px] font-bold text-forest/60 uppercase tracking-[0.2em]">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};