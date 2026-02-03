
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Program', href: '#program' },
    { name: 'Instructor', href: '#instructor' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-sand/80 backdrop-blur-md border-b border-gold/10">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-forest rounded-full flex items-center justify-center text-gold font-serif text-xl">M</div>
          <span className="font-serif text-xl tracking-tight text-forest">Meditation Café</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-forest/70 hover:text-forest font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#reserve" 
            className="bg-forest text-sand px-6 py-2.5 rounded-full font-medium hover:bg-forest/90 transition-all border border-forest"
          >
            Reserve
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-forest" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-sand border-b border-gold/10 p-4 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-lg text-forest/80 py-2 border-b border-gold/5"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#reserve" 
            onClick={() => setIsOpen(false)}
            className="bg-forest text-sand py-4 rounded-xl text-center font-semibold"
          >
            Reserve Your Spot
          </a>
        </div>
      )}
    </nav>
  );
};
