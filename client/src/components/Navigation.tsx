import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 64; // navbar height
      const targetPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-lg' : 'bg-white/95 backdrop-blur-sm border-b border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                  <i className="fas fa-lightbulb text-white text-sm"></i>
                </div>
                <span className="text-xl font-bold text-dark">Flash Forward</span>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => scrollToSection('home')} className="nav-link text-gray-700 hover:text-primary transition-colors duration-200">Home</button>
              <button onClick={() => scrollToSection('about')} className="nav-link text-gray-700 hover:text-primary transition-colors duration-200">About</button>
              <button onClick={() => scrollToSection('team')} className="nav-link text-gray-700 hover:text-primary transition-colors duration-200">Team</button>
              <button onClick={() => scrollToSection('impact')} className="nav-link text-gray-700 hover:text-primary transition-colors duration-200">Impact</button>
              <button onClick={() => scrollToSection('product')} className="nav-link text-gray-700 hover:text-primary transition-colors duration-200">Product</button>
              <button onClick={() => scrollToSection('blog')} className="nav-link text-gray-700 hover:text-primary transition-colors duration-200">Blog</button>
              <button onClick={() => scrollToSection('contact')} className="nav-link text-gray-700 hover:text-primary transition-colors duration-200">Contact</button>
              <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium">
                Donate Now
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-primary"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white border-t border-gray-200`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <button onClick={() => scrollToSection('home')} className="block px-3 py-2 text-gray-700 hover:text-primary w-full text-left">Home</button>
          <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-gray-700 hover:text-primary w-full text-left">About</button>
          <button onClick={() => scrollToSection('team')} className="block px-3 py-2 text-gray-700 hover:text-primary w-full text-left">Team</button>
          <button onClick={() => scrollToSection('impact')} className="block px-3 py-2 text-gray-700 hover:text-primary w-full text-left">Impact</button>
          <button onClick={() => scrollToSection('product')} className="block px-3 py-2 text-gray-700 hover:text-primary w-full text-left">Product</button>
          <button onClick={() => scrollToSection('blog')} className="block px-3 py-2 text-gray-700 hover:text-primary w-full text-left">Blog</button>
          <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-gray-700 hover:text-primary w-full text-left">Contact</button>
          <div className="px-3 py-2">
            <button className="w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium">
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
