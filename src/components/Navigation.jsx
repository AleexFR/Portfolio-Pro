import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { personalInfo } from '../data/portfolioData';

const Navigation = ({ isDarkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/about' },
    { name: 'Projets & Certifications', href: '/projects' },
    { name: 'Albums', href: '/albums' }
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/90 dark:bg-museum-900/90 backdrop-blur-md border-b border-museum-200 dark:border-museum-700' 
            : 'bg-transparent'
        }`}
      >
        <div className="museum-container">
          <div className="flex items-center justify-between h-20">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/"
                className="signature text-2xl md:text-3xl font-bold text-museum-900 dark:text-museum-50 hover:text-museum-700 dark:hover:text-museum-300 transition-colors duration-300"
              >
                {personalInfo.firstName} {personalInfo.lastName}
              </Link>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ y: -2 }}
                >
                  <Link
                    to={item.href}
                    className={`museum-subtitle hover:text-museum-900 dark:hover:text-museum-50 transition-colors duration-300 relative group ${
                      location.pathname === item.href ? 'text-museum-900 dark:text-museum-50' : ''
                    }`}
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-museum-900 dark:bg-museum-50 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </motion.div>
              ))}
              
              <motion.button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg hover:bg-museum-100 dark:hover:bg-museum-800 transition-colors duration-300"
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-museum-300" />
                ) : (
                  <Moon className="w-5 h-5 text-museum-700" />
                )}
              </motion.button>
            </div>

            <div className="md:hidden flex items-center space-x-4">
              <motion.button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg hover:bg-museum-100 dark:hover:bg-museum-800 transition-colors duration-300"
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-museum-300" />
                ) : (
                  <Moon className="w-5 h-5 text-museum-700" />
                )}
              </motion.button>
              
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg hover:bg-museum-100 dark:hover:bg-museum-800 transition-colors duration-300"
                whileTap={{ scale: 0.9 }}
              >
                {isOpen ? (
                  <X className="w-6 h-6 text-museum-900 dark:text-museum-50" />
                ) : (
                  <Menu className="w-6 h-6 text-museum-900 dark:text-museum-50" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 bg-white dark:bg-museum-900 md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`museum-title text-2xl md:text-3xl text-museum-900 dark:text-museum-50 hover:text-museum-700 dark:hover:text-museum-300 transition-colors duration-300 ${
                      location.pathname === item.href ? 'text-museum-700 dark:text-museum-300' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
