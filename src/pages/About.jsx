import { motion } from 'framer-motion';
import { SectionHeading, GlassCard, TiltCard, ParallaxLayer, FloatingElements } from '../components/ui';
import { siteConfig, stats } from '../config';
import logo from '../assets/images/logo.png';

const milestones = [
  {
    year: '2013',
    title: 'The Beginning',
    description:
      'Amrut Advertising was founded in Washim with a vision to provide world-class advertising solutions to local businesses.',
  },
  {
    year: '2015',
    title: 'Expanding Services',
    description:
      'Extended our portfolio to include digital printing, large-format banners, and outdoor advertising across the region.',
  },
  {
    year: '2018',
    title: 'Digital Transformation',
    description:
      'Embraced digital marketing and online advertising, combining offline and online strategies for maximum impact.',
  },
  {
    year: '2021',
    title: 'Regional Growth',
    description:
      'Expanded operations to serve clients across multiple cities in Maharashtra, becoming a trusted regional brand.',
  },
  {
    year: '2024',
    title: 'Innovation Forward',
    description:
      'Continuing to innovate with cutting-edge advertising technologies and creative solutions for the modern market.',
  },
];

const values = [
  {
    title: 'Quality First',
    description:
      'Every project receives meticulous attention to detail, ensuring premium output that exceeds expectations.',
    icon: '◆',
  },
  {
    title: 'Client Partnership',
    description:
      'We work as an extension of your team, understanding your goals to deliver solutions that drive real results.',
    icon: '◆',
  },
  {
    title: 'Creative Innovation',
    description:
      'Combining traditional expertise with modern approaches to create advertising that captures attention and inspires action.',
    icon: '◆',
  },
  {
    title: 'Reliable Delivery',
    description:
      'Consistent on-time delivery with transparent communication throughout every project lifecycle.',
    icon: '◆',
  },
];

function PageHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-600/5 via-transparent to-transparent" />
      <div className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-primary-600/5 rounded-full blur-[100px]" />
      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-primary-500 mb-4 block">
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-charcoal-800 mb-6">
            Your Trusted{' '}
            <span className="gradient-text">Advertising Partner</span>
          </h1>
          <p className="text-dark-400 text-lg leading-relaxed">
            For over a decade, Amrut Advertising has been helping businesses
            across Washim and Maharashtra build powerful brands and expand their
            visibility through innovative advertising solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function StorySection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionHeading
              subtitle="Our Story"
              title="From Local Roots to Regional Impact"
              align="left"
            />
            <div className="space-y-6 text-charcoal-500 leading-relaxed">
              <p>
                Founded in 2013 in the heart of Washim, Amrut Advertising began
                with a simple mission: to provide businesses with advertising
                solutions that truly make a difference. What started as a small
                flex printing shop has grown into a comprehensive advertising
                agency serving clients across Maharashtra.
              </p>
              <p>
                Our journey has been built on a foundation of trust, creativity,
                and an unwavering commitment to quality. We understand the local
                market deeply, and we combine that knowledge with professional
                expertise to deliver campaigns that resonate with your audience.
              </p>
              <p>
                Today, Amrut Advertising is proud to offer a full spectrum of
                services — from traditional outdoor advertising and flex printing
                to modern digital marketing and brand strategy — all under one
                roof.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <ParallaxLayer speed={0.12}>
              <div className="relative aspect-square rounded-2xl overflow-hidden glass">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 to-gold-500/10" />
                <img
                  src={logo}
                  alt={siteConfig.name}
                  className="absolute inset-0 w-full h-full object-contain p-10"
                />
                <div className="absolute bottom-6 left-0 right-0 text-center">
                  <div className="text-4xl font-display font-bold gradient-text">
                    11+
                  </div>
                  <p className="text-charcoal-600 text-sm">
                    Years of Creative Excellence
                  </p>
                </div>
              </div>
            </ParallaxLayer>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MissionVision() {
  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600/5 via-transparent to-gold-500/5" />
      <FloatingElements />
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TiltCard intensity={8}>
            <div className="glass rounded-2xl p-8">
              <span className="text-primary-500 text-sm font-semibold tracking-widest uppercase mb-4 block">
                Our Mission
              </span>
              <h3 className="text-2xl font-display font-bold text-charcoal-800 mb-4">
                Empowering Businesses Through{' '}
                <span className="gradient-text">Strategic Visibility</span>
              </h3>
              <p className="text-charcoal-500 leading-relaxed">
                To provide innovative, high-quality advertising solutions that help
                businesses of all sizes grow their brand presence, reach new
                audiences, and achieve measurable results. We are committed to
                combining creative excellence with strategic thinking to deliver
                campaigns that truly make an impact.
              </p>
            </div>
          </TiltCard>

          <TiltCard intensity={8}>
            <div className="glass rounded-2xl p-8">
              <span className="text-primary-500 text-sm font-semibold tracking-widest uppercase mb-4 block">
                Our Vision
              </span>
              <h3 className="text-2xl font-display font-bold text-charcoal-800 mb-4">
                The Leading{' '}
                <span className="gradient-text">Advertising Force</span> in
                Maharashtra
              </h3>
              <p className="text-charcoal-500 leading-relaxed">
                To become the most trusted and innovative advertising agency in
                Maharashtra, known for transforming businesses through powerful
                branding, cutting-edge technology, and campaigns that inspire. We
                envision a future where every business, regardless of size, has
                access to world-class advertising.
              </p>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          subtitle="Our Journey"
          title="Milestones That Define Us"
          description="A decade-long journey of growth, innovation, and commitment to excellence."
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-gold-400/50 to-primary-500/50" />

          {milestones.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex items-start gap-8 mb-12 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary-500 ring-4 ring-cream-200 z-10" />

              <div
                className={`ml-12 md:ml-0 md:w-1/2 ${
                  i % 2 === 0
                    ? 'md:pr-12 md:text-right'
                    : 'md:pl-12 md:text-left'
                }`}
              >
                <span className="text-primary-600 font-display font-bold text-xl">
                  {item.year}
                </span>
                <h3 className="text-charcoal-800 font-semibold text-lg mt-1 mb-2">
                  {item.title}
                </h3>
                <p className="text-charcoal-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-600/5 to-transparent" />
      <div className="container-custom relative z-10">
        <SectionHeading
          subtitle="Our Values"
          title="What Drives Us Forward"
          description="The core principles that guide every project and every client relationship."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((v, i) => (
            <TiltCard key={v.title} intensity={8}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-6 flex gap-4"
              >
                <span className="text-primary-400 text-lg mt-1 flex-shrink-0">
                  {v.icon}
                </span>
                <div>
                  <h3 className="text-charcoal-800 font-semibold text-lg mb-2">
                    {v.title}
                  </h3>
                  <p className="text-charcoal-500 text-sm leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsBar() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 via-transparent to-gold-500/10" />
      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-display font-bold gradient-text mb-2">
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

export default function About() {
  return (
    <>
      <PageHero />
      <StorySection />
      <StatsBar />
      <MissionVision />
      <Timeline />
      <ValuesSection />
    </>
  );
}