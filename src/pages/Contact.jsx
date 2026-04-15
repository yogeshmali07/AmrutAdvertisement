import { useState } from 'react';
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
    <section className="relative pt-32 pb-20 overflow-hidden">
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
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <SectionHeading
              subtitle="Send a Message"
              title="Tell Us About Your Project"
              align="left"
            />

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-strong rounded-2xl p-8 md:p-12 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-400 text-2xl">✓</span>
                </div>
                <h3 className="text-xl font-display font-bold text-charcoal-800 mb-2">
                  Message Sent!
                </h3>
                <p className="text-charcoal-500 text-sm mb-6">
                  Thank you for reaching out. We&rsquo;ll get back to you within
                  24 hours.
                </p>
                <Button
                  variant="secondary"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      service: '',
                      message: '',
                    });
                  }}
                >
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm text-charcoal-600 font-medium mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border border-cream-300 text-charcoal-800 placeholder-charcoal-300 focus:outline-none focus:ring-2 focus:ring-primary-500/30 transition-all text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm text-charcoal-600 font-medium mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border border-cream-300 text-charcoal-800 placeholder-charcoal-300 focus:outline-none focus:ring-2 focus:ring-primary-500/30 transition-all text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm text-charcoal-600 font-medium mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-cream-300 text-charcoal-800 placeholder-charcoal-300 focus:outline-none focus:ring-2 focus:ring-primary-500/30 transition-all text-sm"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm text-charcoal-600 font-medium mb-2"
                    >
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-cream-300 text-charcoal-800 focus:outline-none focus:ring-2 focus:ring-primary-500/30 transition-all text-sm"
                    >
                      <option value="">Select a service</option>
                      <option value="flex-printing">Flex Printing</option>
                      <option value="hoardings">Hoardings</option>
                      <option value="banner-advertising">
                        Banner Advertising
                      </option>
                      <option value="digital-marketing">
                        Digital Marketing
                      </option>
                      <option value="branding">Branding & Promotion</option>
                      <option value="outdoor">Outdoor Advertising</option>
                      <option value="signage">Signage & Shop Boards</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-charcoal-600 font-medium mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-cream-300 text-charcoal-800 placeholder-charcoal-300 focus:outline-none focus:ring-2 focus:ring-primary-500/30 transition-all text-sm resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <Button variant="gold" type="submit" className="w-full sm:w-auto">
                  Send Message
                </Button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <SectionHeading
              subtitle="Get in Touch"
              title="Contact Information"
              align="left"
            />
            <div className="space-y-4">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <TiltCard intensity={6}>
                    <div className="glass rounded-2xl p-5">
                      <div className="flex gap-4 items-start">
                        <span className="text-2xl flex-shrink-0">{info.icon}</span>
                        <div>
                          <p className="text-charcoal-500 text-xs uppercase tracking-wider mb-1">
                            {info.label}
                          </p>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="text-charcoal-800 text-sm font-medium hover:text-primary-600 transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-charcoal-800 text-sm font-medium">
                              {info.value}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 glass rounded-2xl overflow-hidden aspect-[4/3]"
            >
              <div className="w-full h-full bg-gradient-to-br from-primary-50 to-cream-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🗺️</div>
                  <p className="text-charcoal-500 text-sm">Map Placeholder</p>
                  <p className="text-charcoal-400 text-xs mt-1">
                    Washim, Maharashtra
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Contact() {
  return (
    <>
      <PageHero />
      <ContactForm />
    </>
  );
}