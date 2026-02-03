import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-sand border-t border-gold/10">
      <div className="container mx-auto px-4 text-center">
        <p className="text-xs text-charcoal/30 font-bold tracking-widest uppercase">
          © 2026 Meditation Café India. All rights reserved.
        </p>
      </div>
    </footer>
  );
};