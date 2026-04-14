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
          ? 'glass-strong shadow-lg shadow-dark-950/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="container-custom px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt={siteConfig.name}
            className="w-10 h-10 rounded-lg object-contain transition-transform group-hover:scale-110"
          />
          <div className="hidden sm:block">
            <span className="block text-white font-semibold text-lg leading-tight tracking-tight">
              {siteConfig.name}
            </span>
            <span className="block text-[10px] text-gold-400 uppercase tracking-[0.2em] font-medium">
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
                    ? 'text-white'
                    : 'text-dark-400 hover:text-white'
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-white/10 rounded-lg -z-10"
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
            to="/contact"
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-dark-950 bg-gradient-to-r from-gold-400 to-gold-500 rounded-lg hover:from-gold-500 hover:to-gold-600 transition-all duration-300 shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40"
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
            className="block w-6 h-0.5 bg-white"
          />
          <motion.span
            animate={{ opacity: isMobileOpen ? 0 : 1 }}
            className="block w-6 h-0.5 bg-white"
          />
          <motion.span
            animate={{
              rotate: isMobileOpen ? -45 : 0,
              y: isMobileOpen ? -8 : 0,
            }}
            className="block w-6 h-0.5 bg-white"
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
            className="md:hidden glass-strong border-t border-white/5 overflow-hidden"
          >
            <div className="container-custom px-4 py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    location.pathname === link.path
                      ? 'bg-white/10 text-white'
                      : 'text-dark-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-2 inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-dark-950 bg-gradient-to-r from-gold-400 to-gold-500 rounded-lg"
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
