import { motion } from 'framer-motion';

const variants = {
  primary:
    'bg-primary-500 hover:bg-primary-600 text-white shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40',
  secondary:
    'bg-transparent border border-charcoal-200 hover:border-primary-500 text-charcoal-600 hover:text-primary-600 hover:bg-primary-50',
  accent: 'bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40',
  gold: 'bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40',
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
