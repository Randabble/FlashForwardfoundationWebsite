import { Link, useLocation } from 'wouter';
import { useState } from 'react';

export default function Footer() {
  const [location] = useLocation();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

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

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage({ type: 'success', text: 'Successfully subscribed! Check your email.' });
        setEmail('');
      } else {
        const data = await response.json();
        setMessage({ type: 'error', text: data.message || 'Failed to subscribe. Please try again.' });
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setMessage({ type: 'error', text: 'An error occurred. Please try again later.' });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setMessage(null), 5000);
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
                    &nbsp;Our Team
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

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Stay Updated</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Get the latest updates on our impact, new products, and stories from the field.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin mr-2"></i>
                    Subscribing...
                  </>
                ) : (
                  <>
                    <i className="fas fa-envelope mr-2"></i>
                    Subscribe
                  </>
                )}
              </button>
            </form>
            {message && (
              <div
                className={`mt-3 p-3 rounded-lg text-sm ${message.type === 'success'
                    ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                    : 'bg-red-500/20 text-red-300 border border-red-500/30'
                  }`}
              >
                <i className={`fas ${message.type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'} mr-2`}></i>
                {message.text}
              </div>
            )}
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
