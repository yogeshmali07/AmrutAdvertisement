import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SectionHeading, GlassCard, Button, TiltCard, FloatingElements } from '../components/ui';
import { siteConfig } from '../config';

const contactInfo = [
  {
    label: 'Visit Our Office',
    value: `${siteConfig.address.line1}, ${siteConfig.address.line2}, ${siteConfig.address.city}, ${siteConfig.address.state} - ${siteConfig.address.pin}`,
    icon: '📍',
  },
  {
    label: 'Call Us',
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone}`,
    icon: '📞',
  },
  {
    label: 'Email Us',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: '✉️',
  },
  {
    label: 'Working Hours',
    value: 'Mon - Sat: 9:00 AM - 7:00 PM',
    icon: '🕒',
  },
];

function PageHero() {
  return (
    <section className="relative pt-32 pb-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-600/5 via-transparent to-transparent" />
      <div className="absolute top-20 right-1/3 w-[400px] h-[400px] bg-gold-500/5 rounded-full blur-[100px]" />
      <FloatingElements />
      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-primary-500 mb-4 block">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-charcoal-800 mb-6">
            Let&rsquo;s Start a{' '}
            <span className="gradient-text">Conversation</span>
          </h1>
          <p className="text-charcoal-500 text-lg leading-relaxed">
            Have a project in mind? We&rsquo;d love to hear about it. Get in
            touch with us and let&rsquo;s explore how we can bring your vision
            to life.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // No backend — UI-only
  };

  return (
    <section id="contact-form" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          {/* Card Background Blur */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 via-accent-600/5 to-gold-500/10 rounded-3xl blur-xl" />

          {/* Card Container */}
          <div className="relative bg-gradient-to-br from-primary-50 to-accent-50/30 border border-primary-200/50 rounded-3xl p-6 md:p-8 lg:p-12 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary-500/5 rounded-full blur-3xl -mr-20 -mt-20" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent-500/5 rounded-full blur-2xl -ml-16 -mb-16" />

            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

                {/* ── Left: Form ── */}
                <div className="lg:col-span-3">
                  {/* Section header */}
                  <div className="mb-8">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-600 mb-5 shadow-lg shadow-primary-500/30"
                    >
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </motion.div>
                    <span className="text-xs font-semibold tracking-widest uppercase text-primary-500 mb-2 block">
                      Start a Project
                    </span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-800 mb-3">
                      Tell Us About{' '}
                      <span className="gradient-text">Your Project</span>
                    </h2>
                    <p className="text-charcoal-500 text-sm md:text-base leading-relaxed">
                      Fill in the details below and our team will get back to you within 24 hours with a tailored solution for your business.
                    </p>
                    <div className="flex flex-wrap gap-4 mt-4">
                      {['Quick Response', 'Expert Advice', 'No Commitment'].map((tag) => (
                        <span key={tag} className="inline-flex items-center gap-1.5 text-xs font-medium text-primary-700 bg-primary-100 px-3 py-1 rounded-full">
                          <svg className="w-3 h-3 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Form / Success */}
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-white/70 backdrop-blur-sm border border-primary-100 rounded-2xl p-8 md:p-12 text-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                        <span className="text-green-500 text-2xl">✓</span>
                      </div>
                      <h3 className="text-xl font-display font-bold text-charcoal-800 mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-charcoal-500 text-sm mb-6">
                        Thank you for reaching out. We&rsquo;ll get back to you within 24 hours.
                      </p>
                      <Button
                        variant="secondary"
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({ name: '', email: '', phone: '', service: '', message: '' });
                        }}
                      >
                        Send Another Message
                      </Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="name" className="block text-sm text-charcoal-600 font-medium mb-2">Full Name</label>
                          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                            className="w-full px-4 py-3 rounded-xl bg-white border border-cream-300 text-charcoal-800 placeholder-charcoal-300 focus:outline-none focus:ring-2 focus:ring-primary-500/30 transition-all text-sm"
                            placeholder="Your full name" />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm text-charcoal-600 font-medium mb-2">Email Address</label>
                          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                            className="w-full px-4 py-3 rounded-xl bg-white border border-cream-300 text-charcoal-800 placeholder-charcoal-300 focus:outline-none focus:ring-2 focus:ring-primary-500/30 transition-all text-sm"
                            placeholder="your@email.com" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="phone" className="block text-sm text-charcoal-600 font-medium mb-2">Phone Number</label>
                          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-white border border-cream-300 text-charcoal-800 placeholder-charcoal-300 focus:outline-none focus:ring-2 focus:ring-primary-500/30 transition-all text-sm"
                            placeholder="+91 XXXXX XXXXX" />
                        </div>
                        <div>
                          <label htmlFor="service" className="block text-sm text-charcoal-600 font-medium mb-2">Service Interested In</label>
                          <select id="service" name="service" value={formData.service} onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-white border border-cream-300 text-charcoal-800 focus:outline-none focus:ring-2 focus:ring-primary-500/30 transition-all text-sm">
                            <option value="">Select a service</option>
                            <option value="flex-printing">Flex Printing</option>
                            <option value="hoardings">Hoardings</option>
                            <option value="banner-advertising">Banner Advertising</option>
                            <option value="digital-marketing">Digital Marketing</option>
                            <option value="branding">Branding &amp; Promotion</option>
                            <option value="outdoor">Outdoor Advertising</option>
                            <option value="signage">Signage &amp; Shop Boards</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm text-charcoal-600 font-medium mb-2">Project Description</label>
                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-cream-300 text-charcoal-800 placeholder-charcoal-300 focus:outline-none focus:ring-2 focus:ring-primary-500/30 transition-all text-sm resize-none"
                          placeholder="Describe your project — what you need, your target audience, budget, deadline, etc." />
                      </div>

                      <Button variant="gold" type="submit" className="w-full sm:w-auto">
                        Send My Project Brief →
                      </Button>
                    </form>
                  )}
                </div>

                {/* ── Right: Contact Info ── */}
                <div className="lg:col-span-2 flex flex-col gap-6">
                  <div>
                    <span className="text-xs font-semibold tracking-widest uppercase text-primary-500 mb-2 block">Reach Out Directly</span>
                    <h3 className="text-2xl font-display font-bold text-charcoal-800 mb-1">Contact Information</h3>
                    <p className="text-charcoal-500 text-sm">Prefer to talk directly? Here&rsquo;s how to find us.</p>
                  </div>

                  <div className="space-y-3">
                    {contactInfo.map((info, i) => (
                      <motion.div
                        key={info.label}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.08 }}
                      >
                        <div className="bg-white/70 backdrop-blur-sm border border-white/80 rounded-2xl p-4 flex gap-4 items-start hover:shadow-md transition-shadow duration-300">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center flex-shrink-0 text-lg">
                            {info.icon}
                          </div>
                          <div>
                            <p className="text-charcoal-400 text-xs uppercase tracking-wider font-medium mb-0.5">{info.label}</p>
                            {info.href ? (
                              <a href={info.href} className="text-charcoal-800 text-sm font-semibold hover:text-primary-600 transition-colors">{info.value}</a>
                            ) : (
                              <p className="text-charcoal-800 text-sm font-semibold">{info.value}</p>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Google Maps */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="rounded-2xl overflow-hidden shadow-lg flex-1 min-h-[220px]"
                  >
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3746.5489221476137!2d77.126939!3d20.1111345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd0e3bde763648b%3A0x19b3ecda77594895!2sPatni%20Commercial%20Complex!5e0!3m2!1sen!2sin!4v1776513165450!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0, minHeight: '220px' }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Amrut Advertising Location - Patni Commercial Complex, Washim"
                    />
                  </motion.div>
                </div>

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Contact() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash === '#contact-form') {
      const timer = setTimeout(() => {
        const el = document.getElementById('contact-form');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [hash]);

  return (
    <>
      <PageHero />
      <ContactForm />
    </>
  );
}