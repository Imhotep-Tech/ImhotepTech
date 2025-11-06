import React, { useState } from 'react';

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const {
    title,
    url,
    date,
    description,
    image,
    imageAlt,
    tags,
    buttons,
    features
  } = project;

  const handleCardClick = (e) => {
    // Check if the clicked element or its parent is a button or link
    const isButton = e.target.closest('a, button');
    if (!isButton && url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      className="group relative bg-gradient-to-br from-primary/40 via-primary/30 to-primary/20 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-gray-700/50 hover:border-secondary/40 transition-colors duration-300 w-full cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
      style={{
        animationDelay: `${index * 100}ms`,
        animationFillMode: 'both'
      }}
    >
      {/* Subtle hover ring */}
      <div className={`absolute inset-0 rounded-3xl ring-0 ring-secondary/0 transition-all duration-300 ${isHovered ? 'ring-2 ring-secondary/30' : ''}`}></div>

      {/* Main Content Container */}
      <div className={`${image ? "flex flex-col md:flex-row" : "p-8"} w-full relative z-10`}>
        {/* Enhanced Project Image with better hover effects */}
        {image && (
          <div className="w-full md:w-1/3 p-6 md:p-8 flex items-center justify-center relative flex-shrink-0">
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src={image} 
                className={`relative w-32 h-32 md:w-40 md:h-40 object-cover rounded-2xl shadow-xl transition-transform duration-300 ${
                  isHovered ? 'scale-105' : 'scale-100'
                } ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                alt={imageAlt} 
                loading="lazy"
                onLoad={() => setImageLoaded(true)}
              />
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-secondary/30 border-t-secondary rounded-full animate-spin"></div>
                </div>
              )}
            </div>
          </div>
        )}
        
        {/* Enhanced Project Details with better animations */}
        <div className={`${image ? "w-full md:w-2/3 p-6 md:p-8" : "relative z-10"} flex flex-col justify-between min-h-0`}>
          {/* Header Section with enhanced styling */}
          <div className="mb-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-4">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white group-hover:text-secondary transition-colors duration-500 flex-1">
                <span className="hover:underline decoration-secondary decoration-2 underline-offset-4 break-words relative">
                  {title}
                  <i className="fas fa-external-link-alt ml-2 text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-x-1"></i>
                  {/* Text glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-accent/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </span>
              </h3>
              <div className="flex-shrink-0">
                <span className="text-xs bg-gradient-to-r from-accent via-secondary to-accent text-white px-4 py-2 rounded-full font-semibold shadow-lg whitespace-nowrap animate-pulse-slow">
                  {date}
                </span>
              </div>
            </div>
            
            {/* Enhanced Description */}
            <div className="text-gray-300 mb-6 text-sm md:text-base leading-relaxed">
              {typeof description === 'string' ? (
                <p className="group-hover:text-gray-200 transition-colors duration-300">{description}</p>
              ) : (
                <div className="group-hover:text-gray-200 transition-colors duration-300">{description}</div>
              )}
              
              {features && (
                <ul className="list-none mt-4 space-y-3">
                  {features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3 text-sm group-hover:text-gray-200 transition-colors duration-300">
                      <i className="fas fa-check-circle text-secondary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          
          {/* Enhanced Tags and Buttons Section */}
          <div className="space-y-6">
            {tags && (
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className={`text-xs px-3 py-2 rounded-full ${tag.color} border border-white/10 transition-colors duration-200 cursor-default`}
                    style={{
                      animationDelay: `${tagIndex * 50}ms`,
                      animationFillMode: 'both'
                    }}
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            )}
            
            {/* Enhanced Buttons */}
            <div className="flex flex-wrap gap-3" onClick={(e) => e.stopPropagation()}>
              {buttons.map((button, buttonIndex) => (
                <a 
                  key={buttonIndex}
                  href={button.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`group/button relative px-6 py-3 ${button.style} text-white rounded-xl font-semibold text-sm 
                             shadow-md hover:shadow-lg transition-transform duration-200 flex items-center gap-2`}
                  style={{
                    animationDelay: `${buttonIndex * 100}ms`,
                    animationFillMode: 'both'
                  }}
                >
                  <i className={`${button.icon}`}></i>
                  <span>{button.text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Minimal decorations removed for cleaner UX */}
    </div>
  );
};

export default ProjectCard;
