import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-lg' : 'bg-white/95 backdrop-blur-sm border-b border-gray-200'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
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
              <Link href="/shop"><span className="nav-link text-gray-700 hover:text-primary transition-colors duration-200 cursor-pointer">Shop</span></Link>
              <Link href="/blog"><span className="nav-link text-gray-700 hover:text-primary transition-colors duration-200 cursor-pointer">Blog</span></Link>
              <Link href="/impact"><span className="nav-link text-gray-700 hover:text-primary transition-colors duration-200 cursor-pointer">Our Impact</span></Link>

              {/* Get Involved Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button className="nav-link text-gray-700 hover:text-primary transition-colors duration-200 cursor-pointer flex items-center">
                  Get Involved
                  <i className="fas fa-chevron-down ml-1 text-xs"></i>
                </button>

                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    <Link href="/volunteer">
                      <div className="px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors duration-200 cursor-pointer">
                        <i className="fas fa-hands-helping mr-2"></i>
                        Volunteer
                      </div>
                    </Link>
                    <Link href="/partner">
                      <div className="px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors duration-200 cursor-pointer">
                        <i className="fas fa-handshake mr-2"></i>
                        Partner
                      </div>
                    </Link>
                    <Link href="/contact">
                      <div className="px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors duration-200 cursor-pointer">
                        <i className="fas fa-envelope mr-2"></i>
                        Contact
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              <a
                href="https://gofund.me/436b67db"
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
          <Link href="/shop"><div className="block px-3 py-2 text-gray-700 hover:text-primary w-full text-left" onClick={() => setIsMobileMenuOpen(false)}>Shop</div></Link>
          <Link href="/blog"><div className="block px-3 py-2 text-gray-700 hover:text-primary w-full text-left" onClick={() => setIsMobileMenuOpen(false)}>Blog</div></Link>
          <Link href="/impact"><div className="block px-3 py-2 text-gray-700 hover:text-primary w-full text-left" onClick={() => setIsMobileMenuOpen(false)}>Our Impact</div></Link>

          {/* Get Involved Mobile Section */}
          <div className="px-3 py-2">
            <div className="text-gray-700 font-medium mb-2">Get Involved</div>
            <div className="ml-4 space-y-1">
              <Link href="/volunteer"><div className="block px-3 py-2 text-gray-600 hover:text-primary w-full text-left" onClick={() => setIsMobileMenuOpen(false)}>Volunteer</div></Link>
              <Link href="/partner"><div className="block px-3 py-2 text-gray-600 hover:text-primary w-full text-left" onClick={() => setIsMobileMenuOpen(false)}>Partner</div></Link>
              <Link href="/contact"><div className="block px-3 py-2 text-gray-600 hover:text-primary w-full text-left" onClick={() => setIsMobileMenuOpen(false)}>Contact</div></Link>
            </div>
          </div>

          <div className="px-3 py-2">
            <a
              href="https://gofund.me/436b67db"
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
