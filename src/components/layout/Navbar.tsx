import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, User, ShoppingCart, Settings, LogOut } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Shop', path: '/shop' },
  { name: 'About', path: '/about' },
  { name: 'Why Makhana', path: '/why-makhana' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const location = useLocation();
  const { totalItems } = useCart();
  const profileRef = useRef<HTMLDivElement>(null);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-ivory/95 backdrop-blur-md shadow-soft py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="relative z-10">
              <motion.h1
                className={`font-heading text-2xl md:text-3xl font-semibold transition-colors duration-300 ${
                  isScrolled ? 'text-charcoal' : 'text-ivory'
                }`}
                whileHover={{ scale: 1.02 }}
              >
                Krave<span className="text-gold">Krunch</span>
              </motion.h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative font-body text-sm tracking-wider uppercase transition-colors duration-300 ${
                    isScrolled
                      ? 'text-charcoal hover:text-gold'
                      : 'text-ivory/90 hover:text-ivory'
                  } ${location.pathname === link.path ? 'text-gold' : ''}`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gold"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA, Profile & Mobile Toggle */}
            <div className="flex items-center gap-3">
              {/* Cart Icon */}
              <Link
                to="/cart"
                className={`relative p-2 rounded-full transition-colors ${
                  isScrolled ? 'text-charcoal hover:bg-muted' : 'text-ivory hover:bg-ivory/10'
                }`}
              >
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-gold text-charcoal text-xs font-bold rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Link>

              {/* Profile Dropdown */}
              <div className="relative" ref={profileRef}>
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className={`p-2 rounded-full transition-colors ${
                    isScrolled ? 'text-charcoal hover:bg-muted' : 'text-ivory hover:bg-ivory/10'
                  }`}
                >
                  <User className="w-5 h-5" />
                </button>

                <AnimatePresence>
                  {isProfileOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-56 bg-card rounded-xl shadow-elevated border border-border overflow-hidden z-50"
                    >
                      <div className="p-4 border-b border-border">
                        <p className="font-heading text-sm font-medium text-foreground">Guest User</p>
                        <p className="font-body text-xs text-muted-foreground">Sign in for full access</p>
                      </div>
                      
                      <div className="py-2">
                        <Link
                          to="/cart"
                          onClick={() => setIsProfileOpen(false)}
                          className="flex items-center gap-3 px-4 py-3 font-body text-sm text-foreground hover:bg-muted transition-colors"
                        >
                          <ShoppingCart className="w-4 h-4 text-gold" />
                          View My Cart
                          {totalItems > 0 && (
                            <span className="ml-auto bg-gold text-charcoal text-xs px-2 py-0.5 rounded-full">
                              {totalItems}
                            </span>
                          )}
                        </Link>
                        <Link
                          to="/profile"
                          onClick={() => setIsProfileOpen(false)}
                          className="flex items-center gap-3 px-4 py-3 font-body text-sm text-foreground hover:bg-muted transition-colors"
                        >
                          <Settings className="w-4 h-4 text-muted-foreground" />
                          Manage Profile
                        </Link>
                        <button
                          onClick={() => setIsProfileOpen(false)}
                          className="flex items-center gap-3 w-full px-4 py-3 font-body text-sm text-foreground hover:bg-muted transition-colors"
                        >
                          <LogOut className="w-4 h-4 text-muted-foreground" />
                          Sign In / Register
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Shop Now Button */}
              <Link
                to="/shop"
                className={`hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full font-body text-sm tracking-wider uppercase transition-all duration-300 ${
                  isScrolled
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                    : 'bg-ivory/10 backdrop-blur-sm text-ivory border border-ivory/30 hover:bg-ivory/20'
                }`}
              >
                <ShoppingBag className="w-4 h-4" />
                Shop Now
              </Link>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2 transition-colors ${
                  isScrolled ? 'text-charcoal' : 'text-ivory'
                }`}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-charcoal lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className={`font-heading text-3xl transition-colors ${
                      location.pathname === link.path ? 'text-gold' : 'text-ivory hover:text-gold'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  to="/shop"
                  className="mt-4 px-8 py-3 bg-gold text-charcoal font-body text-sm tracking-wider uppercase rounded-full"
                >
                  Shop Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
