import { motion } from 'framer-motion';

export function GlassCard({ children, className = '', hover = true, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={hover ? { y: -5, scale: 1.01 } : {}}
      className={`glass rounded-2xl p-6 md:p-8 transition-all duration-300 ${
        hover ? 'hover:shadow-lg hover:shadow-primary-600/10 hover:border-primary-500/20' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
