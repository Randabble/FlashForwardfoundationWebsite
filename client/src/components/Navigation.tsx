import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = 64; // navbar height
        const targetPosition = element.offsetTop - headerHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      window.location.href = `/#${sectionId}`;
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
              <Link href="/"><span className="nav-link text-gray-700 hover:text-primary transition-colors duration-200 cursor-pointer">Home</span></Link>
              <Link href="/about"><span className="nav-link text-gray-700 hover:text-primary transition-colors duration-200 cursor-pointer">About</span></Link>
              <Link href="/team"><span className="nav-link text-gray-700 hover:text-primary transition-colors duration-200 cursor-pointer">Team</span></Link>
              <Link href="/impact"><span className="nav-link text-gray-700 hover:text-primary transition-colors duration-200 cursor-pointer">Impact</span></Link>
              <Link href="/product"><span className="nav-link text-gray-700 hover:text-primary transition-colors duration-200 cursor-pointer">Product</span></Link>
              <Link href="/blog"><span className="nav-link text-gray-700 hover:text-primary transition-colors duration-200 cursor-pointer">Blog</span></Link>
              <Link href="/contact"><span className="nav-link text-gray-700 hover:text-primary transition-colors duration-200 cursor-pointer">Contact</span></Link>
              <a 
                href="https://donate.stripe.com/test_your_stripe_link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium"
              >
                Donate Now
              </a>
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
          <Link href="/"><div className="block px-3 py-2 text-gray-700 hover:text-primary w-full text-left" onClick={() => setIsMobileMenuOpen(false)}>Home</div></Link>
          <Link href="/about"><div className="block px-3 py-2 text-gray-700 hover:text-primary w-full text-left" onClick={() => setIsMobileMenuOpen(false)}>About</div></Link>
          <Link href="/team"><div className="block px-3 py-2 text-gray-700 hover:text-primary w-full text-left" onClick={() => setIsMobileMenuOpen(false)}>Team</div></Link>
          <Link href="/impact"><div className="block px-3 py-2 text-gray-700 hover:text-primary w-full text-left" onClick={() => setIsMobileMenuOpen(false)}>Impact</div></Link>
          <Link href="/product"><div className="block px-3 py-2 text-gray-700 hover:text-primary w-full text-left" onClick={() => setIsMobileMenuOpen(false)}>Product</div></Link>
          <Link href="/blog"><div className="block px-3 py-2 text-gray-700 hover:text-primary w-full text-left" onClick={() => setIsMobileMenuOpen(false)}>Blog</div></Link>
          <Link href="/contact"><div className="block px-3 py-2 text-gray-700 hover:text-primary w-full text-left" onClick={() => setIsMobileMenuOpen(false)}>Contact</div></Link>
          <div className="px-3 py-2">
            <a 
              href="https://donate.stripe.com/test_your_stripe_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium block text-center"
            >
              Donate Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
