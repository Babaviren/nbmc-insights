import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">NBMC Insights</h3>
            <p className="text-sm leading-relaxed mb-4">
              Your trusted source for in-depth analysis and insights on key national topics affecting India.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/vote-stealing" className="hover:text-orange-500 transition-colors">Vote Stealing</Link></li>
              <li><Link to="/yearly-budget" className="hover:text-orange-500 transition-colors">Yearly Budget India</Link></li>
              <li><Link to="/railways" className="hover:text-orange-500 transition-colors">Indian Railways</Link></li>
              <li><Link to="/indigo-delays" className="hover:text-orange-500 transition-colors">Indigo Flight Delays</Link></li>
              <li><Link to="/pm-tours" className="hover:text-orange-500 transition-colors">PM Tours</Link></li>
              <li><Link to="/cricket" className="hover:text-orange-500 transition-colors">Cricket</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-orange-500 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-0.5 flex-shrink-0" />
                <span>contact@nbmc.info</span>
              </li>
              {/* <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-0.5 flex-shrink-0" />
                <span>+91 11 2345 6789</span>
              </li> */}
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-0.5 flex-shrink-0" />
                <span>SCO 95, Sector 3, Panchkula, Haryana-134109</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-4">Newsletter</h4>
            <p className="text-sm mb-4">Subscribe to get the latest updates directly in your inbox.</p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-orange-500 text-white placeholder-gray-500 text-sm"
                required
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-4 py-2 rounded-md transition-all duration-200 text-sm font-medium"
              >
                Subscribe
              </button>
              {subscribed && (
                <p className="text-green-400 text-sm">Thank you for subscribing!</p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} NBMC Insights. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
