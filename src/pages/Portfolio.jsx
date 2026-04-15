import { useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading, GlassCard, Modal, Button, FloatingElements } from '../components/ui';
import { portfolioItems } from '../config';

const categories = [
  'All',
  ...new Set(portfolioItems.map((item) => item.category)),
];

function PageHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-600/5 via-transparent to-transparent" />
      <div className="absolute top-20 left-1/3 w-[500px] h-[500px] bg-primary-600/5 rounded-full blur-[120px]" />
      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-primary-500 mb-4 block">
            Our Work
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-charcoal-800 mb-6">
            Projects That{' '}
            <span className="gradient-text">Speak Results</span>
          </h1>
          <p className="text-charcoal-500 text-lg leading-relaxed">
            Explore our portfolio of successful campaigns, brand transformations,
            and advertising projects that have helped businesses grow their
            visibility and impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function PortfolioCard({ item, onClick }) {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    ref.current.style.transform = `perspective(600px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = 'perspective(600px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)';
  };

  return (
    <div
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group cursor-pointer glass rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 will-change-transform"
      style={{ transformStyle: 'preserve-3d', transition: 'transform 0.2s ease-out, box-shadow 0.3s' }}
    >
      <div className="aspect-[4/3] relative overflow-hidden bg-cream-100">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-charcoal-900/0 group-hover:bg-charcoal-900/20 transition-colors duration-300" />
        {/* Billboard-style frame */}
        <div className="absolute inset-2 border-2 border-white/20 rounded-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-5" style={{ transform: 'translateZ(20px)' }}>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-primary-500 font-medium uppercase tracking-wider">
            {item.category}
          </span>
          <span className="text-xs text-charcoal-400">
            {item.year}
          </span>
        </div>
        <h3 className="text-charcoal-800 font-semibold group-hover:text-primary-600 transition-colors">
          {item.title}
        </h3>
      </div>
    </div>
  );
}

function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = useMemo(
    () =>
      activeCategory === 'All'
        ? portfolioItems
        : portfolioItems.filter((item) => item.category === activeCategory),
    [activeCategory],
  );

  return (
    <section className="section-padding relative">
      <FloatingElements />
      <div className="container-custom relative z-10">
        <SectionHeading
          subtitle="Portfolio"
          title="Featured Projects"
          description="A curated selection of our most impactful work across various advertising domains."
        />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/25'
                  : 'bg-white border border-cream-300 text-charcoal-600 hover:text-primary-600 hover:border-primary-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <PortfolioCard item={item} onClick={() => setSelectedItem(item)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal */}
        <Modal
          isOpen={!!selectedItem}
          onClose={() => setSelectedItem(null)}
        >
          {selectedItem && (
            <div>
              <div className="aspect-video rounded-xl overflow-hidden mb-6 bg-dark-900">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs text-primary-400 font-medium uppercase tracking-wider px-3 py-1 rounded-full bg-primary-600/10">
                  {selectedItem.category}
                </span>
                <span className="text-xs text-charcoal-400">
                  {selectedItem.year}
                </span>
              </div>
              <h3 className="text-2xl font-display font-bold text-charcoal-800 mb-3">
                {selectedItem.title}
              </h3>
              <p className="text-charcoal-500 leading-relaxed">
                {selectedItem.description}
              </p>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
}

export default function Portfolio() {
  return (
    <>
      <PageHero />
      <PortfolioGrid />
    </>
  );
}