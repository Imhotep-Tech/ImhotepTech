import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import SEOHelmet from '../components/SEOHelmet';

const Home = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Monitor scroll position to show/hide scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Set loaded state for animations
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <SEOHelmet 
        title="Imhotep Tech - Custom Software Development & Web Applications | Egypt"
        description="Leading software development company in Egypt. Custom web applications, Python/Django development, React solutions. 15+ successful projects delivered. Contact us for your business automation needs."
        keywords="custom software development, web application development, Egypt software company, Django development, React development, Python developer Egypt, business automation, clinic software, financial management app, Imhotep Tech"
        canonical="https://imhoteptech.vercel.app/"
      />
      <div className="w-full font-sans relative overflow-hidden">
        {/* Minimal background decorative elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
        </div>

        <Navbar currentPage="home" />
        <Hero />
        
        {/* Enhanced Main Content with better animations */}
        <div className="w-full bg-dark relative">
          {/* Section separator with enhanced wave */}
          <div className="relative h-16 w-full -mt-16">
            <svg className="absolute top-0 w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" preserveAspectRatio="none">
              <defs>
                <linearGradient id="sectionGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#1a202c" stopOpacity="0"/>
                  <stop offset="100%" stopColor="#1a202c" stopOpacity="1"/>
                </linearGradient>
              </defs>
              <path fill="url(#sectionGradient)" d="M0,0L60,5C120,10,240,20,360,25C480,30,600,30,720,25C840,20,960,10,1080,5C1200,0,1320,0,1380,0L1440,0L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
            </svg>
          </div>

          <div className="container mx-auto px-4 py-20 max-w-full">
            <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
              <AboutSection />
              <ProjectsSection />
            </div>
          </div>
        </div>
        
        <CTASection />
        <Footer />

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-secondary to-secondary/80 text-primary rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:scale-105 hover:-translate-y-1"
            aria-label="Scroll to top"
          >
            <i className="fas fa-arrow-up text-lg"></i>
          </button>
        )}
      </div>
    </>
  );
};

export default Home;
