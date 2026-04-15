import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Scene3D, FloatingParticles, GlowingSphere, FloatingRings, Billboard3D } from '../components/three';
import { Button, SectionHeading, GlassCard, TiltCard, ParallaxLayer, FloatingElements } from '../components/ui';
import { ServiceIcon } from '../components/ui/ServiceIcon';
import { siteConfig, services, stats, testimonials } from '../config';
import logo from '../assets/images/logo.png';

function HeroSection() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream-100 via-cream-200 to-primary-50">
      {/* 3D Background with parallax */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <Scene3D camera={{ position: [0, 0, 10], fov: 75 }} mouseIntensity={1.5}>
          <Billboard3D position={[-7, -1.5, -2]} scale={0.8} rotation={[0, 0.45, 0]} />
          <Billboard3D position={[7, -1.5, -3]} scale={0.7} rotation={[0, -0.35, 0]} />
          <FloatingParticles count={80} color="#00B5E2" />
          <GlowingSphere position={[-4, 2, -4]} scale={1.8} color="#00B5E2" />
          <GlowingSphere position={[4, -1.5, -5]} scale={1.4} color="#3D85A7" />
          <FloatingRings count={3} color="#00B5E2" />
        </Scene3D>
      </motion.div>

      {/* Gradient overlays for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream-200/20 via-transparent to-cream-200/40" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary-500/8 rounded-full blur-[128px]" />

      <FloatingElements />

      {/* Content with scroll parallax */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 container-custom px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
          <span className="text-sm text-charcoal-600">
            Trusted Advertising Partner — {siteConfig.tagline}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-charcoal-800 leading-[1.1] mb-6"
        >
          Crafting{' '}
          <span className="gradient-text">Powerful Brands</span>
          <br />
          That{' '}
          <span className="gradient-text-gold">Stand Out</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base md:text-lg text-charcoal-500 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          From eye-catching hoardings to strategic digital campaigns, we help
          businesses amplify their visibility and build lasting brand presence
          across Washim and beyond.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button variant="gold" className="w-full sm:w-auto">
            <Link to="/portfolio">Explore Our Work</Link>
          </Button>
          <Button variant="secondary" className="w-full sm:w-auto">
            <Link to="/services">Our Services</Link>
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border border-charcoal-300 flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 rounded-full bg-charcoal-400" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-transparent to-accent-500/5" />
      <FloatingElements />
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
      <FloatingElements />
      <div className="container-custom relative z-10">
        <SectionHeading
          subtitle="What We Do"
          title="Services Built to Amplify Your Brand"
          description="We combine traditional advertising expertise with modern strategies to deliver impactful campaigns that drive real results."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 6).map((service, i) => (
            <TiltCard key={service.id} intensity={10}>
              <div className="glass rounded-2xl p-6 md:p-8 h-full">
                <ServiceIcon name={service.icon} className="w-10 h-10 mb-4" />
                <h3 className="text-charcoal-800 font-semibold text-lg mb-2">
                  {service.title}
                </h3>
                <p className="text-charcoal-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </TiltCard>
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
            <ParallaxLayer speed={0.12}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden glass">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10" />
                <img
                  src={logo}
                  alt={siteConfig.name}
                  className="absolute inset-0 w-full h-full object-contain p-8"
                />
              </div>
            </ParallaxLayer>

            {/* Floating decorative element */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary-500/10 rounded-2xl blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent-500/10 rounded-2xl blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="section-padding relative">
      <FloatingElements />
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