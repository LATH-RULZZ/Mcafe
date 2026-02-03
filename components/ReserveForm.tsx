import React, { useState } from 'react';
import { Send, CheckCircle, MessageCircle, Sparkles } from 'lucide-react';

export const ReserveForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    batch: 'morning',
    city: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form Submitted:', formData);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="bg-white text-forest p-10 rounded-[3rem] text-center shadow-2xl animate-in zoom-in duration-500">
        <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle className="w-10 h-10 text-gold" />
        </div>
        <h3 className="text-3xl font-serif mb-4">Spot Reserved!</h3>
        <p className="text-charcoal/60 mb-8 leading-relaxed">
          We've received your request. To confirm your batch and receive the meeting link, please join our official WhatsApp group.
        </p>
        <a 
          href="https://wa.me/919999999999" 
          className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 px-8 rounded-full font-bold hover:scale-105 transition-all"
        >
          <MessageCircle size={20} />
          Join WhatsApp Group
        </a>
      </div>
    );
  }

  return (
    <div className="bg-white text-forest p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gold"></div>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-2xl font-serif">Begin Journey</h3>
          <p className="text-gold font-bold text-xs uppercase tracking-widest flex items-center gap-1">
            <Sparkles className="w-3 h-3" /> 100% FREE
          </p>
        </div>
        <div className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter animate-pulse">
          30 Students / Batch Only
        </div>
      </div>
      <p className="text-charcoal/40 text-sm mb-8 italic">Next batch: Friday, 6 February.</p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-bold uppercase tracking-widest text-charcoal/50 mb-2">Full Name *</label>
          <input 
            type="text" 
            required
            className="w-full px-6 py-4 rounded-xl bg-sand border border-gold/10 focus:outline-none focus:border-gold transition-colors"
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>
        
        <div>
          <label className="block text-sm font-bold uppercase tracking-widest text-charcoal/50 mb-2">Phone (WhatsApp) *</label>
          <input 
            type="tel" 
            required
            pattern="[6-9][0-9]{9}"
            title="Enter valid 10-digit Indian mobile number"
            className="w-full px-6 py-4 rounded-xl bg-sand border border-gold/10 focus:outline-none focus:border-gold transition-colors"
            placeholder="+91"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-bold uppercase tracking-widest text-charcoal/50 mb-2">Preferred Batch *</label>
          <div className="grid grid-cols-2 gap-4">
            <label className={`cursor-pointer border p-4 rounded-xl flex flex-col items-center justify-center gap-1 transition-all ${formData.batch === 'morning' ? 'bg-forest text-sand border-forest' : 'bg-sand border-gold/10'}`}>
              <input 
                type="radio" 
                name="batch" 
                value="morning" 
                className="hidden" 
                checked={formData.batch === 'morning'}
                onChange={() => setFormData({...formData, batch: 'morning'})}
              />
              <span className="font-medium">Morning</span>
              <span className="text-[10px] opacity-60 uppercase tracking-widest">7:00 AM</span>
            </label>
            <label className={`cursor-pointer border p-4 rounded-xl flex flex-col items-center justify-center gap-1 transition-all ${formData.batch === 'evening' ? 'bg-forest text-sand border-forest' : 'bg-sand border-gold/10'}`}>
              <input 
                type="radio" 
                name="batch" 
                value="evening" 
                className="hidden" 
                checked={formData.batch === 'evening'}
                onChange={() => setFormData({...formData, batch: 'evening'})}
              />
              <span className="font-medium">Evening</span>
              <span className="text-[10px] opacity-60 uppercase tracking-widest">7:00 PM</span>
            </label>
          </div>
        </div>

        <button 
          disabled={isSubmitting}
          className="w-full bg-forest text-sand py-5 rounded-full font-bold text-lg hover:bg-forest/90 transition-all flex items-center justify-center gap-3 disabled:opacity-50 shadow-lg shadow-forest/20"
        >
          {isSubmitting ? 'Processing...' : (
            <>
              Yes I am in
              <Send size={18} />
            </>
          )}
        </button>
      </form>
      
      <p className="mt-8 text-[10px] text-charcoal/40 text-center uppercase tracking-widest font-bold">
        Himalayan Tradition • 100% Privacy • Guided Experience
      </p>
    </div>
  );
};