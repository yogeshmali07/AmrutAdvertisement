import { motion } from 'framer-motion';

export function SectionHeading({
  subtitle,
  title,
  description,
  align = 'center',
  light = false,
}) {
  const alignment = {
    center: 'text-center mx-auto',
    left: 'text-left',
  };

  return (
    <div className={`max-w-3xl mb-16 ${alignment[align]}`}>
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block text-sm font-semibold tracking-widest uppercase text-gold-400 mb-4"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight mb-4 ${
          light ? 'text-dark-900' : 'text-white'
        }`}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-base md:text-lg leading-relaxed ${
            light ? 'text-dark-500' : 'text-dark-400'
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
