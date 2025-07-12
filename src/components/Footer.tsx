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
          {/* About Us */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">About Us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about">
                  <span className="text-gray-300 hover:text-primary transition-colors duration-200 cursor-pointer">
                    <i className="fas fa-bullseye mr-2"></i>
                    Our Mission
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <span className="text-gray-300 hover:text-primary transition-colors duration-200 cursor-pointer">
                    <i className="fas fa-blog mr-2"></i>
                    Blog
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/team">
                  <span className="text-gray-300 hover:text-primary transition-colors duration-200 cursor-pointer">
                    <i className="fa-solid fa-people-group"></i>
                    Our Team
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Get Involved</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://gofund.me/436b67db" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors duration-200">
                  <i className="fas fa-heart mr-2"></i>
                  Donate
                </a>
              </li>
              <li>
                <Link href="/volunteer">
                  <span className="text-gray-300 hover:text-primary transition-colors duration-200 cursor-pointer">
                    <i className="fas fa-hands-helping mr-2"></i>
                    Volunteer
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/partner">
                  <span className="text-gray-300 hover:text-primary transition-colors duration-200 cursor-pointer">
                    <i className="fas fa-handshake mr-2"></i>
                    Partner
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <i className="fas fa-envelope text-primary"></i>
                <a 
                  href="mailto:flashforwardnp@gmail.com"
                  className="text-gray-300 hover:underline"
                >
                  flashforwardnp@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-map-marker-alt text-primary"></i>
                <span className="text-gray-300">Bellevue, WA</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-at text-primary"></i>
                <a 
                  href="https://instagram.com/flashforwardfoundation" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:underline"
                >
                  @flashforwardfoundation
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-gray-400">© 2025 Flash Forward Foundation. All rights reserved.</p>
          <p className="text-gray-400 mt-2">Flash Forward is a 501(c)(3) nonprofit organization.</p>
        </div>
      </div>
    </footer>
  );
}
