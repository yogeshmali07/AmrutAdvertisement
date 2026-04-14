import { motion } from 'framer-motion';

const variants = {
  primary:
    'bg-primary-600 hover:bg-primary-700 text-white shadow-lg shadow-primary-600/25 hover:shadow-primary-600/40',
  secondary:
    'bg-transparent border border-white/20 hover:border-white/40 text-white hover:bg-white/5',
  gold: 'bg-gold-500 hover:bg-gold-600 text-dark-950 shadow-lg shadow-gold-500/25 hover:shadow-gold-500/40',
};

export function Button({
  children,
  variant = 'primary',
  className = '',
  href,
  ...props
}) {
  const baseClasses =
    'inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium text-sm tracking-wide transition-all duration-300 cursor-pointer';
  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
  };

  if (href) {
    return (
      <motion.a href={href} className={classes} {...motionProps} {...props}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button className={classes} {...motionProps} {...props}>
      {children}
    </motion.button>
  );
}
