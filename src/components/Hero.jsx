import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative w-full bg-gradient-to-br from-primary via-primary/70 to-dark overflow-hidden">
      {/* Minimal background elements */}
      <div className="absolute inset-0 w-full overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10 w-full">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main heading */}
          <div className={`relative mb-8 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-4 text-white">
              Imhotep Tech
            </h1>
          </div>

          {/* Subtitle */}
          <div className={`relative mb-12 ${isLoaded ? 'animate-fade-in-up animate-stagger-1' : 'opacity-0'}`}>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 italic font-light leading-relaxed">
              Win in your mind <span className="mx-4 text-secondary">•</span> and you will win in reality
            </p>
          </div>

          {/* Enhanced CTA button - more prominent */}
          <div className={`${isLoaded ? 'animate-fade-in-up animate-stagger-2' : 'opacity-0'}`}>
            <a 
              href="mailto:imhoteptech@outlook.com" 
              className="group relative inline-flex items-center px-10 py-5 bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-white rounded-full font-bold text-lg 
                          shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200"
            >
              <i className="fas fa-envelope mr-3"></i>
              <span>Contact Us Today</span>
            </a>
            
            <p className="mt-6 text-gray-400 text-sm">
              <i className="fas fa-clock mr-2"></i>
              Available for new projects • Fast turn-around for SMEs and startups
            </p>
          </div>
        </div>
      </div>
      
      {/* Wave separator */}
      <div className="relative h-32 w-full">
        <svg className="absolute bottom-0 w-full h-32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1a202c" stopOpacity="0.8"/>
              <stop offset="50%" stopColor="#1a202c" stopOpacity="1"/>
              <stop offset="100%" stopColor="#1a202c" stopOpacity="1"/>
            </linearGradient>
          </defs>
          <path fill="url(#waveGradient)" d="M0,160L60,149.3C120,139,240,117,360,128C480,139,600,181,720,181.3C840,181,960,139,1080,122.7C1200,107,1320,117,1380,122.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
