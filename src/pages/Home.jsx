import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Scene3D, Billboard3D } from '../components/three';
import { Button, SectionHeading, TiltCard, ParallaxLayer } from '../components/ui';
import { ServiceIcon } from '../components/ui/ServiceIcon';
import { siteConfig, services, stats, testimonials } from '../config';
import logo from '../assets/images/logo.png';

function HeroSection() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={heroRef} className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-cream-50 to-cream-100">

      {/* 3D Billboards — fullscreen background layer, receives pointer events */}
      <div className="absolute inset-0 z-10">
        <Scene3D camera={{ position: [0, 1.5, 14], fov: 60 }} mouseIntensity={0.15}>
          <Billboard3D
            position={[-9, -0.5, 0]}
            scale={0.72}
            label="OUTDOOR HOARDINGS"
            tagline="Maximum Visibility"
          />
          <Billboard3D
            position={[9, -0.5, 0]}
            scale={0.72}
            label="DIGITAL MARKETING"
            tagline="Campaigns That Convert"
          />
        </Scene3D>
      </div>

      {/* Hero text — centered, pointer-events-none so mouse passes to Canvas behind */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-20 flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8 pointer-events-none"
      >
        <div className="text-center max-w-2xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
          <span className="text-sm text-charcoal-600">
            Trusted Advertising Partner — {siteConfig.tagline}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-charcoal-800 leading-[1.1] mb-5"
        >
          Crafting{' '}
          <span className="gradient-text">Powerful Brands</span>
          <br />
          That{' '}
          <span className="gradient-text-gold">Stand Out</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base md:text-lg text-charcoal-500 max-w-2xl mx-auto leading-relaxed mb-8"
        >
          From eye-catching hoardings to strategic digital campaigns, we help
          businesses amplify their visibility and build lasting brand presence
          across Washim and beyond.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button variant="gold" className="w-full sm:w-auto pointer-events-auto">
            <Link to="/portfolio">Explore Our Work</Link>
          </Button>
          <Button variant="secondary" className="w-full sm:w-auto pointer-events-auto">
            <Link to="/services">Our Services</Link>
          </Button>
        </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-transparent to-accent-500/5" />
      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-display font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-charcoal-500 text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesPreview() {
  return (
    <section className="section-padding relative">
      <div className="container-custom relative z-10">
        <SectionHeading
          subtitle="What We Do"
          title="Services Built to Amplify Your Brand"
          description="We combine traditional advertising expertise with modern strategies to deliver impactful campaigns that drive real results."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 6).map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="will-change-transform"
            >
              <div className="glass rounded-2xl p-6 md:p-8 h-full hover:shadow-lg hover:shadow-primary-500/8 transition-shadow duration-300">
                <ServiceIcon name={service.icon} className="w-10 h-10 mb-4" />
                <h3 className="text-charcoal-800 font-semibold text-lg mb-2">
                  {service.title}
                </h3>
                <p className="text-charcoal-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button variant="secondary">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function AboutPreview() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-600/5 to-transparent" />
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-semibold tracking-widest uppercase text-primary-500 mb-4 block">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-800 mb-6">
              Over a Decade of{' '}
              <span className="gradient-text">Creative Excellence</span>
            </h2>
            <p className="text-charcoal-500 leading-relaxed mb-6">
              Since 2013, Amrut Advertising has been the trusted advertising
              partner for businesses across Washim and Maharashtra. We combine
              local market understanding with creative innovation to deliver
              campaigns that truly resonate.
            </p>
            <p className="text-charcoal-500 leading-relaxed mb-8">
              From a small shop to becoming the go-to advertising agency in the
              region, our journey has been driven by a commitment to quality,
              reliability, and results that matter.
            </p>
            <Button variant="secondary">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <ParallaxLayer speed={0.08}>
              <div className="relative rounded-2xl overflow-hidden glass p-1">
                <div className="rounded-xl overflow-hidden bg-gradient-to-br from-cream-100 to-white">
                  <img
                    src={logo}
                    alt={siteConfig.name}
                    className="w-full h-auto object-contain p-10"
                  />
                </div>
              </div>
            </ParallaxLayer>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="section-padding relative">
      <div className="container-custom relative z-10">
        <SectionHeading
          subtitle="Testimonials"
          title="What Our Clients Say"
          description="Building trust through consistent results and exceptional service."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TiltCard key={i} intensity={8}>
              <div className="glass rounded-2xl p-6 md:p-8 h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-accent-500 text-sm">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-charcoal-600 text-sm leading-relaxed mb-6 flex-1">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-cream-300">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-charcoal-800 font-medium text-sm">{t.name}</p>
                    <p className="text-charcoal-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl p-8 md:p-16 text-center overflow-hidden bg-gradient-to-br from-primary-500 to-accent-600"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px]" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
              Ready to{' '}
              <span className="text-white/90">Elevate Your Brand?</span>
            </h2>
            <p className="text-white/70 max-w-xl mx-auto mb-8 leading-relaxed">
              Let&rsquo;s create something extraordinary together. Get in touch
              with us today and discover how we can transform your business
              visibility.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 text-sm font-medium text-primary-600 bg-white rounded-lg hover:bg-cream-100 transition-all shadow-lg shadow-black/10"
              >
                Start a Project
              </Link>
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center px-8 py-3 text-sm font-medium text-white border border-white/30 rounded-lg hover:bg-white/10 transition-all"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesPreview />
      <AboutPreview />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}