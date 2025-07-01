import { Link, useLocation } from 'wouter';

export default function Footer() {
  const [location] = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = 64;
        const targetPosition = element.offsetTop - headerHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <footer id="contact" className="bg-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Logo and Mission */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <i className="fas fa-lightbulb text-white text-lg"></i>
              </div>
              <span className="text-2xl font-bold">Flash Forward</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Lighting the future, one flashlight at a time. Empowering students in off-grid communities through sustainable solar technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-200">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-200">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-200">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-200">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/"><span className="text-gray-300 hover:text-primary transition-colors duration-200 cursor-pointer">Home</span></Link></li>
              <li><Link href="/about"><span className="text-gray-300 hover:text-primary transition-colors duration-200 cursor-pointer">About</span></Link></li>
              <li><Link href="/team"><span className="text-gray-300 hover:text-primary transition-colors duration-200 cursor-pointer">Our Team</span></Link></li>
              <li><Link href="/impact"><span className="text-gray-300 hover:text-primary transition-colors duration-200 cursor-pointer">Impact</span></Link></li>
              <li><Link href="/blog"><span className="text-gray-300 hover:text-primary transition-colors duration-200 cursor-pointer">Blog</span></Link></li>
              <li><button onClick={() => scrollToSection('faq')} className="text-gray-300 hover:text-primary transition-colors duration-200">FAQ</button></li>
              <li><a href="https://donate.stripe.com/test_your_stripe_link" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors duration-200">Donate</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <i className="fas fa-envelope text-primary"></i>
                <span className="text-gray-300">contact@flashforwardfoundation.org</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-map-marker-alt text-primary"></i>
                <span className="text-gray-300">Bellevue, WA</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-at text-primary"></i>
                <span className="text-gray-300">@flashforwardfoundation</span>
              </div>
            </div>
            
            {/* Contact Link */}
            <div className="mt-6">
              <Link href="/contact">
                <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium w-full">
                  <i className="fas fa-envelope mr-2"></i>
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-gray-400">© 2025 Flash Forward Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
