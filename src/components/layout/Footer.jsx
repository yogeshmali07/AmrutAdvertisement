import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { siteConfig, navLinks, services } from '../../config';
import logo from '../../assets/images/logo.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-dark-950 border-t border-white/5">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />

      <div className="container-custom section-padding pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt={siteConfig.name}
                className="w-10 h-10 rounded-lg object-contain"
              />
              <div>
                <span className="block text-white font-semibold text-lg leading-tight">
                  {siteConfig.name}
                </span>
                <span className="block text-[10px] text-gold-400 uppercase tracking-[0.2em] font-medium">
                  {siteConfig.tagline}
                </span>
              </div>
            </Link>
            <p className="text-dark-400 text-sm leading-relaxed mb-6 max-w-xs">
              {siteConfig.description}
            </p>
            <div className="flex gap-3">
              {Object.entries(siteConfig.social).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-dark-400 hover:text-white transition-all duration-300 text-xs uppercase font-bold"
                  aria-label={platform}
                >
                  {platform.charAt(0).toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-dark-400 hover:text-white text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-3">
              {services.slice(0, 5).map((svc) => (
                <li key={svc.id}>
                  <Link
                    to="/services"
                    className="text-dark-400 hover:text-white text-sm transition-colors duration-300"
                  >
                    {svc.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-4 text-sm text-dark-400">
              <li>
                <p className="text-dark-300 font-medium mb-1">Address</p>
                <p>
                  {siteConfig.address.line1}, {siteConfig.address.line2},{' '}
                  {siteConfig.address.city}, {siteConfig.address.state} -{' '}
                  {siteConfig.address.pin}
                </p>
              </li>
              <li>
                <p className="text-dark-300 font-medium mb-1">Phone</p>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <p className="text-dark-300 font-medium mb-1">Email</p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-dark-500 text-sm">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-dark-500 text-sm">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
