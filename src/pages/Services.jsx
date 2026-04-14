import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SectionHeading, GlassCard, Button } from '../components/ui';
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
          <span className="text-sm font-semibold tracking-widest uppercase text-gold-400 mb-4 block">
            Our Services
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Comprehensive{' '}
            <span className="gradient-text">Advertising Solutions</span>
          </h1>
          <p className="text-dark-400 text-lg leading-relaxed">
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
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <GlassCard key={service.id} className="group">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary-600/10 flex items-center justify-center mb-5 group-hover:bg-primary-600/20 transition-colors duration-300">
                  <ServiceIcon name={service.icon} className="w-7 h-7" />
                </div>
                <h3 className="text-white font-semibold text-xl mb-3 group-hover:text-primary-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-dark-400 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex items-center text-primary-400 text-sm font-medium group-hover:text-primary-300 transition-colors">
                  <span>Learn More</span>
                  <motion.span
                    className="ml-2 inline-block"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </div>
              </motion.div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="section-padding relative">
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
              className="relative"
            >
              <div className="glass rounded-2xl p-6 h-full">
                <span className="text-4xl font-display font-bold gradient-text opacity-30">
                  {item.step}
                </span>
                <h3 className="text-white font-semibold text-lg mt-2 mb-3">
                  {item.title}
                </h3>
                <p className="text-dark-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
              {i < process.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 text-dark-600">
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
          className="glass-strong rounded-3xl p-8 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 to-gold-500/10" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Need a Custom{' '}
              <span className="gradient-text-gold">Advertising Solution?</span>
            </h2>
            <p className="text-dark-400 max-w-xl mx-auto mb-8">
              Every business is unique. Let&rsquo;s discuss your specific needs
              and create a campaign that delivers results.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="gold">
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
              <Button variant="secondary">
                <a href={`tel:${siteConfig.phone}`}>Call Us</a>
              </Button>
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
