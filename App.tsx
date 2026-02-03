import React from 'react';
import { 
  CheckCircle2, 
  MessageCircle, 
  ShieldCheck
} from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { IntroVideo } from './components/IntroVideo';
import { ProgramTimeline } from './components/ProgramTimeline';
import { SocialProof } from './components/SocialProof';
import { Benefits } from './components/Benefits';
import { FAQ } from './components/FAQ';
import { ReserveForm } from './components/ReserveForm';
import { Footer } from './components/Footer';
import { CoachSection } from './components/CoachSection';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen font-sans selection:bg-gold selection:text-white">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 mandala-bg pointer-events-none z-0"></div>
      
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <ProgramTimeline />
        <Problem />
        <CoachSection />
        <IntroVideo />
        <SocialProof />
        <Benefits />
        <FAQ />
        
        <section id="reserve" className="py-24 bg-forest text-sand">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif mb-6">Begin Your Journey</h2>
                <p className="text-sand/80 mb-10 text-lg">
                  "Peace is not somewhere else. It begins with one conscious breath."
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="text-gold w-6 h-6 shrink-0 mt-1" />
                    <span className="text-sand/90 font-medium">This is a guided introduction. No pressure, no auto-enrollment, no sales during sessions.</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-gold w-6 h-6" />
                    <span>24-Hour Access to Recordings</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-gold w-6 h-6" />
                    <span>Himalayan Tradition Lineage</span>
                  </div>
                </div>
              </div>
              <ReserveForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Floating Elements */}
      <a 
        href="https://wa.me/919999999999" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap">WhatsApp Us</span>
      </a>
    </div>
  );
};

export default App;