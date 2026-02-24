import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ currentPage = 'home' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const getNavLinkClass = (page) => {
    const baseClass = "relative transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-primary/90";
    const active = currentPage === page;
    return `${active ? 'text-secondary' : 'text-gray-300 hover:text-secondary'} ${baseClass}`;
  };

  return (
    <nav className="w-full bg-primary/90 backdrop-blur-sm sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 max-w-full">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="text-2xl font-bold text-white flex items-center space-x-2 group">
            <span className="bg-secondary text-primary p-1 rounded transition-transform duration-150 group-hover:scale-105">
              IT
            </span>
            <span className="group-hover:text-secondary transition-colors duration-150">
              Imhotep Tech
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/libraries" className={getNavLinkClass('libraries')} aria-current={currentPage === 'libraries' ? 'page' : undefined}>
              <span className="relative">
                Libraries / APIs
                {currentPage === 'libraries' && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-secondary rounded-full"></span>
                )}
              </span>
            </Link>
            <a
              href="https://kbassem.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={getNavLinkClass('about-me')}
            >
              <span className="relative">
                The Founder
              </span>
            </a>
            <Link to="/social-media" className={getNavLinkClass('social-media')} aria-current={currentPage === 'social-media' ? 'page' : undefined}>
              <span className="relative">
                Social Media
                {currentPage === 'social-media' && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-secondary rounded-full"></span>
                )}
              </span>
            </Link>

            <a
              href="mailto:imhoteptech@outlook.com"
              className="inline-flex items-center px-5 py-2 bg-secondary text-primary rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              <i className="fas fa-paper-plane mr-2" />
              Get a Quote
            </a>
          </div>
          
          <button 
            className="md:hidden text-white focus:outline-none" 
            onClick={toggleMobileMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        
        {isMobileMenuOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="flex flex-col space-y-4 py-4">
              <Link to="/libraries" className={getNavLinkClass('libraries')} onClick={toggleMobileMenu} aria-current={currentPage === 'libraries' ? 'page' : undefined}>
                Libraries / APIs
              </Link>
              <a
                href="https://kbassem.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className={getNavLinkClass('about-me')}
                onClick={toggleMobileMenu}
              >
                The Founder
              </a>
              <Link to="/social-media" className={getNavLinkClass('social-media')} onClick={toggleMobileMenu} aria-current={currentPage === 'social-media' ? 'page' : undefined}>
                Social Media
              </Link>
              <a href="mailto:imhoteptech@outlook.com" className="inline-flex items-center justify-center px-4 py-3 bg-secondary text-primary rounded-full font-semibold shadow-md">
                <i className="fas fa-paper-plane mr-2" /> Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
