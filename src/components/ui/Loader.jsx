import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import logo from '../../assets/images/logo.png';

export function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete?.(), 400);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[200] bg-dark-950 flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <img
          src={logo}
          alt="Amrut Advertising"
          className="w-24 h-24 mx-auto mb-4 object-contain"
        />
        <h1 className="text-3xl md:text-4xl font-display font-bold gradient-text mb-2">
          Amrut Advertising
        </h1>
        <p className="text-dark-400 text-sm tracking-widest uppercase mb-8">
          Since 2013
        </p>
        <div className="w-48 h-[2px] bg-dark-800 rounded-full overflow-hidden mx-auto">
          <motion.div
            className="h-full bg-gradient-to-r from-primary-500 to-gold-400 rounded-full"
            style={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ duration: 0.2 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
