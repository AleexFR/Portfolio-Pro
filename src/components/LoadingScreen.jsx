import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onComplete();
      }, 1000);
    }, 4000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const containerVariants = {
    initial: { opacity: 1 },
    exit: { 
      opacity: 0,
      transition: { duration: 1, ease: "easeInOut" }
    }
  };

  const textVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 2,
        delay: 0.5,
        ease: "easeInOut"
      }
    }
  };

  const signatureVariants = {
    initial: { pathLength: 0 },
    animate: {
      pathLength: 1,
      transition: {
        duration: 3,
        delay: 1,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      exit="exit"
      className="fixed inset-0 z-50 flex items-center justify-center bg-museum-50 dark:bg-museum-900"
    >
      <div className="text-center">
        <motion.div
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="mb-8"
        >
          <h1 className="signature text-6xl md:text-8xl lg:text-9xl font-bold text-museum-900 dark:text-museum-50">
            Alexandre Philip
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: [0, 1, 1, 0],
            y: [20, 0, 0, -20]
          }}
          transition={{
            duration: 3,
            delay: 1,
            times: [0, 0.2, 0.8, 1],
            ease: "easeInOut"
          }}
          className="text-museum-600 dark:text-museum-400 font-light tracking-widest text-sm md:text-base"
        >
          PORTFOLIO
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 0.5, 0.5, 0],
            scale: [0.8, 1, 1, 0.8]
          }}
          transition={{
            duration: 2,
            delay: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-1 h-16 bg-museum-400 dark:bg-museum-600"></div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
