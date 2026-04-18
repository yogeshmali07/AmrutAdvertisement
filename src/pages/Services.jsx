import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SectionHeading, Button, TiltCard, FloatingElements } from '../components/ui';
import { ServiceIcon } from '../components/ui/ServiceIcon';
import { services, siteConfig } from '../config';

const process = [
  {
    step: '01',
    title: 'Discover',
    description:
      'We understand your business, target audience, and goals to craft a tailored advertising strategy.',
  },
  {
    step: '02',
    title: 'Design',
    description:
      'Our creative team conceptualizes and designs compelling visuals that capture your brand essence.',
  },
  {
    step: '03',
    title: 'Deploy',
    description:
      'We execute your campaign across chosen channels with precision, ensuring maximum impact and reach.',
  },
  {
    step: '04',
    title: 'Deliver',
    description:
      'We monitor results and optimize for performance, ensuring your investment delivers measurable returns.',
  },
];

function PageHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-600/5 via-transparent to-transparent" />
      <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-gold-500/5 rounded-full blur-[100px]" />
      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-primary-500 mb-4 block">
            Our Services
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-charcoal-800 mb-6">
            Comprehensive{' '}
            <span className="gradient-text">Advertising Solutions</span>
          </h1>
          <p className="text-charcoal-500 text-lg leading-relaxed">
            From traditional outdoor advertising to cutting-edge digital
            campaigns, we offer a complete suite of services designed to amplify
            your brand presence and drive business growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ServicesList() {
  return (
    <section className="section-padding relative">
      <FloatingElements />
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <TiltCard key={service.id} intensity={10}>
              <div className="glass rounded-2xl p-6 md:p-8 h-full group">
                <div className="w-14 h-14 rounded-xl bg-primary-600/10 flex items-center justify-center mb-5">
                  <ServiceIcon name={service.icon} className="w-7 h-7" />
                </div>
                <h3 className="text-charcoal-800 font-semibold text-xl mb-3">
                  {service.title}
                </h3>
                <p className="text-charcoal-500 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex items-center text-primary-600 text-sm font-medium group-hover:text-primary-700 transition-colors">
                  <span>Learn More</span>
                  <motion.span
                    className="ml-2 inline-block"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-600/5 to-transparent" />
      <div className="container-custom relative z-10">
        <SectionHeading
          subtitle="How We Work"
          title="Our Proven Process"
          description="A streamlined approach that ensures every project is delivered with excellence and precision."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative group"
            >
              <div className="glass rounded-2xl p-6 h-full overflow-hidden relative">
                {/* Animated floating number background */}
                <div className="absolute -right-2 -top-4 overflow-hidden h-24 w-20 pointer-events-none">
                  <motion.div
                    animate={{ y: ['0%', '-50%'] }}
                    transition={{
                      duration: 4 + i * 0.5,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className="flex flex-col items-center"
                  >
                    {[...Array(8)].map((_, j) => (
                      <span
                        key={j}
                        className="text-6xl font-display font-bold text-primary-500/[0.06] leading-none block py-1"
                      >
                        {item.step}
                      </span>
                    ))}
                  </motion.div>
                </div>

                {/* Step number with accent bar */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold text-sm">
                    {item.step}
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-primary-500/20 to-transparent" />
                </div>

                <h3 className="text-charcoal-800 font-semibold text-lg mb-3 relative z-10">
                  {item.title}
                </h3>
                <p className="text-charcoal-500 text-sm leading-relaxed relative z-10">
                  {item.description}
                </p>
              </div>
              {i < process.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 text-primary-400 text-lg">
                  →
                </div>
              )}
            </motion.div>
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
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-white/10 rounded-full blur-[80px]" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Need a Custom{' '}
              <span className="text-white/90">Advertising Solution?</span>
            </h2>
            <p className="text-white/70 max-w-xl mx-auto mb-8">
              Every business is unique. Let&rsquo;s discuss your specific needs
              and create a campaign that delivers results.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 text-sm font-medium text-primary-600 bg-white rounded-lg hover:bg-cream-100 transition-all shadow-lg shadow-black/10"
              >
                Get a Free Quote
              </Link>
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center px-8 py-3 text-sm font-medium text-white border border-white/30 rounded-lg hover:bg-white/10 transition-all"
              >
                Call Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <>
      <PageHero />
      <ServicesList />
      <ProcessSection />
      <CTASection />
    </>
  );
}