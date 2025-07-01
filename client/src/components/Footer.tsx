import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 2000);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 64;
      const targetPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
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
              <li><button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-primary transition-colors duration-200">Home</button></li>
              <li><button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-primary transition-colors duration-200">About</button></li>
              <li><button onClick={() => scrollToSection('team')} className="text-gray-300 hover:text-primary transition-colors duration-200">Our Team</button></li>
              <li><button onClick={() => scrollToSection('impact')} className="text-gray-300 hover:text-primary transition-colors duration-200">Impact</button></li>
              <li><button onClick={() => scrollToSection('blog')} className="text-gray-300 hover:text-primary transition-colors duration-200">Blog</button></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors duration-200">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors duration-200">Donate</a></li>
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
            
            {/* Newsletter Signup */}
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Stay Updated</h4>
              <form onSubmit={handleNewsletterSignup} className="flex space-x-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button 
                  type="submit"
                  className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                    isSubscribed 
                      ? 'bg-green-500 text-white' 
                      : 'bg-primary text-white hover:bg-primary/90'
                  }`}
                >
                  <i className={`fas ${isSubscribed ? 'fa-check' : 'fa-paper-plane'}`}></i>
                </button>
              </form>
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
