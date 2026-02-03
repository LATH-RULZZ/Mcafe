
import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

export const WhoIsItFor: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl font-serif text-forest mb-12">This is for you if...</h2>
              <ul className="space-y-6">
                {[
                  "You feel 'wired but tired' and find it hard to disconnect.",
                  "You've tried apps but feel they're too surface-level.",
                  "You want a structure rooted in tradition, not just trends.",
                  "You are looking for calm and focus without heavy religion."
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4 items-start">
                    <CheckCircle className="w-6 h-6 text-gold shrink-0 mt-1" />
                    <span className="text-lg text-charcoal/80 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="pt-12 md:pt-0">
              <h2 className="text-4xl font-serif text-forest/40 mb-12">This is not for...</h2>
              <ul className="space-y-6">
                <li className="flex gap-4 items-start opacity-50">
                  <XCircle className="w-6 h-6 text-charcoal shrink-0 mt-1" />
                  <span className="text-lg text-charcoal/80 leading-relaxed">Those seeking a 'quick fix' or magic pill for mental health without any personal practice.</span>
                </li>
              </ul>
              <div className="mt-12 p-8 rounded-3xl bg-sand/50 border border-gold/10">
                <p className="text-charcoal/60 leading-relaxed italic text-sm">
                  Note: While meditation supports well-being, this program is for educational purposes and is not a substitute for professional clinical therapy or psychiatric treatment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
