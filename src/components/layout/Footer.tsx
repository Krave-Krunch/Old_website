import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <footer className="bg-charcoal text-ivory">
      {/* Main Footer */}
      <div className="container mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-heading text-3xl font-semibold mb-4">
              Krave<span className="text-gold">Krunch</span>
            </h3>
            <p className="text-ivory/70 font-body text-sm leading-relaxed mb-6">
              Premium flavoured Makhana crafted for the discerning snacker. 
              Healthy indulgence without compromise.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-full bg-ivory/10 flex items-center justify-center hover:bg-gold transition-colors duration-300"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-medium mb-6 text-gold">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Shop', 'About Us', 'Why Makhana', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-').replace(' us', '')}`}
                    className="text-ivory/70 hover:text-gold transition-colors duration-300 font-body text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Flavours */}
          <div>
            <h4 className="font-heading text-lg font-medium mb-6 text-gold">Our Flavours</h4>
            <ul className="space-y-3">
              {['Himalayan Salted', 'Masala', 'Caramel', 'Mexican', 'Cream & Onion'].map((item) => (
                <li key={item}>
                  <Link
                    to="/shop"
                    className="text-ivory/70 hover:text-gold transition-colors duration-300 font-body text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-medium mb-6 text-gold">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-ivory/70 font-body text-sm">
                  Korath Bari Madhubani, Purnea, Bihar 854301
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-ivory/70 font-body text-sm">+91 86188 90788</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-ivory/70 font-body text-sm">info@kravekrunch.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-ivory/10">
        <div className="container mx-auto px-6 md:px-12 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-ivory/50 font-body text-xs">
              © 2024 Krave Krunch. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-ivory/50 font-body text-xs">FSSAI Licensed</span>
              <span className="text-ivory/50 font-body text-xs">•</span>
              <Link to="/contact" className="text-ivory/50 hover:text-gold font-body text-xs transition-colors">
                Privacy Policy
              </Link>
              <span className="text-ivory/50 font-body text-xs">•</span>
              <Link to="/contact" className="text-ivory/50 hover:text-gold font-body text-xs transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
