import React, { useState, useEffect } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  const techStack = [
    { name: 'Python', color: 'bg-blue-900/50', icon: 'fab fa-python', level: 85, delay: '0.1s' },
    { name: 'Django', color: 'bg-green-900/50', icon: 'fas fa-leaf', level: 90, delay: '0.2s' },
    { name: 'Flask', color: 'bg-red-900/50', icon: 'fas fa-flask', level: 95, delay: '0.3s' },
    { name: 'JavaScript', color: 'bg-yellow-900/50', icon: 'fab fa-js-square', level: 75, delay: '0.4s' },
    { name: 'React', color: 'bg-cyan-900/50', icon: 'fab fa-react', level: 80, delay: '0.5s' },
    { name: 'Tailwind', color: 'bg-pink-900/50', icon: 'fas fa-paint-brush', level: 90, delay: '0.6s' }
  ];

  return (
    <div className="lg:col-span-4 space-y-6">
      {/* About Card */}
      <div className={`group bg-gradient-to-br from-primary/60 via-primary/50 to-primary/40 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-700/50 hover:border-secondary/50 transition-all duration-200 hover-lift ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <h2 className="text-2xl font-bold mb-6 text-secondary flex items-center gap-3">
          <i className="fas fa-info-circle"></i>
          <span>About Imhotep Tech</span>
        </h2>
        
        <div className="flex justify-center mb-6">
          <img 
            src="/it.png" 
            className="w-40 h-40 rounded-full border-4 border-secondary object-cover shadow-xl" 
            alt="Imhotep Tech - Custom Software Development" 
            loading="lazy"
          />
        </div>
        
        <p className="text-gray-300 leading-relaxed">
          Imhotep Tech is a pioneering software development firm based in Egypt. 
          We specialize in crafting innovative software solutions tailored to meet 
          the diverse needs of our clients.
        </p>
      </div>
      
      {/* Tech Stack */}
      <div className={`bg-gradient-to-br from-primary/40 via-primary/30 to-primary/20 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-700/50 hover:border-secondary/30 transition-all duration-200 hover-lift ${isVisible ? 'animate-fade-in animate-stagger-1' : 'opacity-0'}`}>
        <h3 className="text-xl font-bold mb-6 text-secondary flex items-center gap-3">
          <i className="fas fa-code text-2xl"></i>
          <span>Our Tech Stack</span>
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {techStack.map((tech, index) => (
            <div 
              key={index}
              className="group/tech relative p-4 rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-700/30 border border-gray-600/30 hover:border-secondary/50 transition-all duration-200 hover-lift"
            >
              <div className="flex items-center gap-3 mb-3">
                <i className={`${tech.icon} text-2xl text-secondary`}></i>
                <div className="flex-1">
                  <span className="font-semibold text-white">
                    {tech.name}
                  </span>
                </div>
                <div className="text-xs text-secondary font-bold">
                  {tech.level}%
                </div>
              </div>
              
              <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-secondary to-accent h-2 rounded-full transition-all duration-300 ease-out"
                  style={{ 
                    width: `${tech.level}%`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
