import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks, siteConfig } from '../../config';
import logo from '../../assets/images/logo.png';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-strong shadow-lg shadow-charcoal-200/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="container-custom px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt={siteConfig.name}
            className="w-16 h-16 rounded-lg object-contain transition-transform group-hover:scale-110"
          />
          <div className="hidden sm:block">
            <span className="block text-charcoal-800 font-semibold text-lg leading-tight tracking-tight">
              {siteConfig.name}
            </span>
            <span className="block text-[10px] text-primary-500 uppercase tracking-[0.2em] font-medium">
              {siteConfig.tagline}
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  location.pathname === link.path
                    ? 'text-primary-600'
                    : 'text-charcoal-600 hover:text-primary-600'
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-primary-50 rounded-lg -z-10"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link
            to="/contact#contact-form"
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-primary-500 to-accent-600 rounded-lg hover:from-primary-600 hover:to-accent-700 transition-all duration-300 shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={{
              rotate: isMobileOpen ? 45 : 0,
              y: isMobileOpen ? 8 : 0,
            }}
            className="block w-6 h-0.5 bg-charcoal-700"
          />
          <motion.span
            animate={{ opacity: isMobileOpen ? 0 : 1 }}
            className="block w-6 h-0.5 bg-charcoal-700"
          />
          <motion.span
            animate={{
              rotate: isMobileOpen ? -45 : 0,
              y: isMobileOpen ? -8 : 0,
            }}
            className="block w-6 h-0.5 bg-charcoal-700"
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-strong border-t border-cream-300 overflow-hidden"
          >
            <div className="container-custom px-4 py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    location.pathname === link.path
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-charcoal-600 hover:text-primary-600 hover:bg-primary-50/50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact#contact-form"
                className="mt-2 inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-white bg-gradient-to-r from-primary-500 to-accent-600 rounded-lg"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}