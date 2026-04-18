import { motion } from 'framer-motion';

// Fixed bubble positions so no Math.random (avoids ESLint pure-function warnings)
const BUBBLES = [
  { left: '6%',  size: 10, delay: 0,    dur: 1.0 },
  { left: '18%', size: 14, delay: 0.12, dur: 1.2 },
  { left: '32%', size: 8,  delay: 0.22, dur: 0.9 },
  { left: '48%', size: 16, delay: 0.07, dur: 1.1 },
  { left: '62%', size: 9,  delay: 0.3,  dur: 1.05 },
  { left: '76%', size: 13, delay: 0.16, dur: 1.3 },
  { left: '89%', size: 11, delay: 0.05, dur: 0.95 },
  { left: '41%', size: 7,  delay: 0.25, dur: 0.85 },
];

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
          className="inline-block text-sm font-semibold tracking-widest uppercase text-primary-500 mb-4"
        >
          {subtitle}
        </motion.span>
      )}

      {/* Heading wrapped in hover-group for bubble effect */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative inline-block w-full cursor-default"
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        {/* Bubble particles */}
        {BUBBLES.map((b, i) => (
          <motion.span
            key={i}
            variants={{
              rest: { opacity: 0, y: 0, scale: 0 },
              hover: {
                opacity: [0, 0.7, 0],
                y: [0, -55, -85],
                scale: [0, 1, 0.4],
                transition: {
                  delay: b.delay,
                  duration: b.dur,
                  repeat: Infinity,
                  repeatDelay: 0.5,
                  ease: 'easeOut',
                },
              },
            }}
            style={{
              position: 'absolute',
              left: b.left,
              bottom: '100%',
              width: b.size,
              height: b.size,
              borderRadius: '50%',
              background: light
                ? 'rgba(255,255,255,0.55)'
                : 'rgba(0,181,226,0.38)',
              border: `1.5px solid ${
                light ? 'rgba(255,255,255,0.65)' : 'rgba(0,181,226,0.55)'
              }`,
              pointerEvents: 'none',
            }}
          />
        ))}

        <motion.h2
          variants={{
            rest: { scale: 1, y: 0 },
            hover: {
              scale: 1.025,
              y: -4,
              transition: { type: 'spring', stiffness: 300, damping: 20 },
            },
          }}
          className={`text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight mb-4 ${
            light ? 'text-white' : 'text-charcoal-700'
          }`}
        >
          {title}
        </motion.h2>
      </motion.div>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-base md:text-lg leading-relaxed ${
            light ? 'text-white/70' : 'text-charcoal-400'
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
