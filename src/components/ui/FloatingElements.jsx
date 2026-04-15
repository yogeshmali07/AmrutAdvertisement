import { motion } from 'framer-motion';

const shapes = [
  { size: 120, x: '10%', y: '20%', delay: 0, duration: 20 },
  { size: 80, x: '80%', y: '15%', delay: 2, duration: 25 },
  { size: 60, x: '70%', y: '70%', delay: 4, duration: 22 },
  { size: 100, x: '20%', y: '75%', delay: 1, duration: 18 },
  { size: 40, x: '50%', y: '50%', delay: 3, duration: 24 },
];

export function FloatingElements({ className = '' }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {shapes.map((s, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary-500/[0.03] blur-2xl"
          style={{ width: s.size, height: s.size, left: s.x, top: s.y }}
          animate={{
            y: [0, -30, 0, 20, 0],
            x: [0, 15, 0, -15, 0],
            scale: [1, 1.1, 1, 0.95, 1],
          }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
      {/* Subtle gradient orbs */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-br from-primary-400/[0.04] to-accent-500/[0.03] blur-3xl"
        style={{ right: '5%', top: '30%' }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[250px] h-[250px] rounded-full bg-gradient-to-br from-accent-400/[0.03] to-primary-500/[0.04] blur-3xl"
        style={{ left: '10%', bottom: '20%' }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 10, delay: 2, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}
