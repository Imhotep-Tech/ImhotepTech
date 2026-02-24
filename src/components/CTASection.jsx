import React from 'react';

const CTASection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-primary via-primary/80 to-dark py-24">
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-12 right-0 w-56 h-56 bg-accent/10 rounded-full blur-3xl" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/10 text-xs md:text-sm text-gray-200 mb-4">
          <i className="fas fa-bolt text-secondary mr-2" />
          Fast turn-around for SMEs and startups
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">
          Ready to ship your next app?
        </h2>
        <p className="text-sm md:text-lg text-gray-300 max-w-2xl mx-auto mb-8">
          From internal tools to customer-facing apps, we build clean, reliable software that supports your team and customers.
        </p>
        
        {/* Enhanced CTA buttons - more prominent */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <a 
            href="mailto:imhoteptech@outlook.com" 
            className="group relative px-10 py-5 bg-gradient-to-r from-secondary to-secondary/90 text-primary rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-200 hover:-translate-y-1 min-w-[220px]"
          >
            <i className="fas fa-envelope mr-2" />
            Get in Touch
          </a>
          <a 
            href="https://github.com/Imhotep-Tech" target="_blank" rel="noopener noreferrer"
            className="px-10 py-5 bg-transparent border-2 border-white/30 text-white rounded-full font-semibold hover:border-secondary hover:text-secondary hover:bg-secondary/10 transition-all duration-200 min-w-[220px]"
          >
            <i className="fab fa-github mr-2" />
            View Portfolio
          </a>
        </div>
        
        {/* Trust indicators - more prominent */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400 mb-6">
          <div className="flex items-center gap-2">
            <i className="fas fa-check-circle text-secondary" />
            <span>15+ delivered projects</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-shield-alt text-secondary" />
            <span>Reliable maintenance</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-comments text-secondary" />
            <span>Clear communication</span>
          </div>
        </div>
        
        {/* Additional contact methods */}
        <div className="mt-6 pt-6 border-t border-white/10">
          <p className="text-gray-400 mb-3 text-sm">Prefer a quick message?</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a 
              href="mailto:imhoteptech@outlook.com"
              className="text-secondary hover:text-accent transition-colors duration-200 flex items-center gap-2"
            >
              <i className="fas fa-envelope" />
              <span>imhoteptech@outlook.com</span>
            </a>
            <span className="text-gray-600">•</span>
            <a 
              href="https://www.linkedin.com/in/karimbassem"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-accent transition-colors duration-200 flex items-center gap-2"
            >
              <i className="fab fa-linkedin" />
              <span>LinkedIn</span>
            </a>
            <span className="text-gray-600">•</span>
            <a 
              href="https://x.com/Imhoteptech1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-accent transition-colors duration-200 flex items-center gap-2"
            >
              <i className="fab fa-x-twitter" />
              <span>Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
