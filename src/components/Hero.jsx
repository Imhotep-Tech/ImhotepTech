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
        <div className="absolute -top-10 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10 w-full">
        <div className="max-w-4xl mx-auto">
          {/* Main heading + tagline */}
          <div className="text-center space-y-5">
            <div className={`relative ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight">
                Imhotep Tech
              </h1>
            </div>

            <div className={`relative ${isLoaded ? 'animate-fade-in-up animate-stagger-1' : 'opacity-0'}`}>
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 italic font-light leading-relaxed">
                Win in your mind <span className="mx-3 text-secondary">•</span> and you will win in reality
              </p>
            </div>

            {/* Primary CTA */}
            <div className={`mt-5 ${isLoaded ? 'animate-fade-in-up animate-stagger-2' : 'opacity-0'}`}>
              <a 
                href="mailto:imhoteptech@outlook.com" 
                className="group relative inline-flex items-center px-10 py-4 bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-white rounded-full font-semibold text-base md:text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200"
              >
                <i className="fas fa-envelope mr-3" />
                <span>Start a project</span>
              </a>
              
              {/* Subtext removed for cleaner hero */}
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave separator */}
      <div className="relative h-32 w-full">
        <svg className="absolute bottom-0 w-full h-32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1a202c" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#1a202c" stopOpacity="1" />
              <stop offset="100%" stopColor="#1a202c" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path fill="url(#waveGradient)" d="M0,160L60,149.3C120,139,240,117,360,128C480,139,600,181,720,181.3C840,181,960,139,1080,122.7C1200,107,1320,117,1380,122.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
