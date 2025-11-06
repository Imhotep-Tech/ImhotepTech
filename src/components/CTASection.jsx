import React from 'react';

const CTASection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-primary via-primary/80 to-dark py-20">
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-12 right-0 w-56 h-56 bg-accent/10 rounded-full blur-3xl" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/10 text-sm text-gray-200 mb-5">
          <i className="fas fa-bolt text-secondary mr-2" />
          Fast turn-around for SMEs and startups
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">
          Ready to build something amazing?
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
          From internal tools to customer-facing apps, we craft robust, beautiful software that drives results.
        </p>
        <div className="flex items-center justify-center gap-3">
          <a 
            href="mailto:imhoteptech@outlook.com" 
            className="group relative px-8 py-4 bg-secondary text-primary rounded-full font-bold text-lg shadow-lg hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <i className="fas fa-envelope mr-2" />
            Get in Touch
          </a>
          <a 
            href="https://github.com/Imhotep-Tech" target="_blank" rel="noopener noreferrer"
            className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-semibold hover:border-secondary/60 hover:text-secondary transition-all duration-300"
          >
            <i className="fab fa-github mr-2" />
            View Portfolio
          </a>
        </div>
        <p className="mt-4 text-sm text-gray-400">
          <i className="fas fa-shield-alt mr-1" /> 15+ delivered projects · Reliable maintenance · Clear communication
        </p>
      </div>
    </div>
  );
};

export default CTASection;
