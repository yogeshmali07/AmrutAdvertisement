import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Scene3D, FloatingParticles, GlowingSphere, FloatingRings } from '../components/three';
import { Button, SectionHeading, GlassCard } from '../components/ui';
import { ServiceIcon } from '../components/ui/ServiceIcon';
import { siteConfig, services, stats, testimonials } from '../config';
import logo from '../assets/images/logo.png';

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <Scene3D camera={{ position: [0, 0, 10], fov: 50 }}>
        <FloatingParticles count={100} color="#5c7cfa" />
        <GlowingSphere position={[-3, 1, -2]} scale={2} color="#5c7cfa" />
        <GlowingSphere position={[3, -1, -3]} scale={1.5} color="#fbbf24" />
        <FloatingRings count={4} color="#5c7cfa" />
      </Scene3D>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950/80 via-dark-950/40 to-dark-950" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold-500/5 rounded-full blur-[100px]" />

      {/* Content */}
      <div className="relative z-10 container-custom px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
          <span className="text-sm text-dark-300">
            Trusted Advertising Partner {siteConfig.tagline}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-6"
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
          className="text-base md:text-lg text-dark-400 max-w-2xl mx-auto leading-relaxed mb-10"
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
            className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 rounded-full bg-white/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 via-transparent to-gold-500/10" />
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
              <div className="text-dark-400 text-sm uppercase tracking-wider">
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
      <div className="container-custom">
        <SectionHeading
          subtitle="What We Do"
          title="Services Built to Amplify Your Brand"
          description="We combine traditional advertising expertise with modern strategies to deliver impactful campaigns that drive real results."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 6).map((service, i) => (
            <GlassCard key={service.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <ServiceIcon name={service.icon} className="w-10 h-10 mb-4" />
                <h3 className="text-white font-semibold text-lg mb-2">
                  {service.title}
                </h3>
                <p className="text-dark-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            </GlassCard>
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
            <span className="text-sm font-semibold tracking-widest uppercase text-gold-400 mb-4 block">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Over a Decade of{' '}
              <span className="gradient-text">Creative Excellence</span>
            </h2>
            <p className="text-dark-400 leading-relaxed mb-6">
              Since 2013, Amrut Advertising has been the trusted advertising
              partner for businesses across Washim and Maharashtra. We combine
              local market understanding with creative innovation to deliver
              campaigns that truly resonate.
            </p>
            <p className="text-dark-400 leading-relaxed mb-8">
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
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden glass">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 to-gold-500/10" />
              <img
                src={logo}
                alt={siteConfig.name}
                className="absolute inset-0 w-full h-full object-contain p-8"
              />
            </div>

            {/* Floating decorative element */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary-600/10 rounded-2xl blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gold-500/10 rounded-2xl blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          subtitle="Testimonials"
          title="What Our Clients Say"
          description="Building trust through consistent results and exceptional service."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <GlassCard key={i}>
              <div className="flex flex-col h-full">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-gold-400 text-sm">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-dark-300 text-sm leading-relaxed mb-6 flex-1">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-gold-400 flex items-center justify-center text-dark-950 font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">{t.name}</p>
                    <p className="text-dark-500 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            </GlassCard>
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
          className="relative glass-strong rounded-3xl p-8 md:p-16 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 to-gold-500/10" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-primary-600/10 rounded-full blur-[80px]" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
              Ready to{' '}
              <span className="gradient-text-gold">Elevate Your Brand?</span>
            </h2>
            <p className="text-dark-400 max-w-xl mx-auto mb-8 leading-relaxed">
              Let&rsquo;s create something extraordinary together. Get in touch
              with us today and discover how we can transform your business
              visibility.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="gold">
                <Link to="/contact">Start a Project</Link>
              </Button>
              <Button variant="secondary">
                <a href={`tel:${siteConfig.phone}`}>Call Us Now</a>
              </Button>
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
