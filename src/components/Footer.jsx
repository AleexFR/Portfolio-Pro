import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, Twitter, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com',
      color: 'hover:text-blue-600 dark:hover:text-blue-400'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      href: 'https://twitter.com',
      color: 'hover:text-blue-400 dark:hover:text-blue-300'
    }
  ];

  return (
    <footer className="bg-museum-900 dark:bg-black text-museum-100">
      <div className="museum-container py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-12 mb-12"
        >
          <motion.div variants={itemVariants}>
            <h3 className="signature text-2xl font-bold mb-6 text-museum-50">
              {personalInfo.firstName} {personalInfo.lastName}
            </h3>
            <p className="text-museum-400 leading-relaxed mb-6">
              Développeur web passionné par la création d'expériences numériques élégantes et fonctionnelles.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-museum-800 dark:bg-museum-950 rounded-full flex items-center justify-center text-museum-400 transition-all duration-300 ${social.color}`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 text-museum-50">
              Navigation rapide
            </h4>
            <nav className="space-y-3">
              {[
                { name: 'Accueil', href: '/' },
                { name: 'À propos', href: '/about' },
                { name: 'Projets & Certifications', href: '/projects' },
                { name: 'Albums', href: '/albums' }
              ].map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ x: 5 }}
                >
                  <Link
                    to={item.href}
                    className="block text-museum-400 hover:text-museum-50 transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 text-museum-50">
              Contact
            </h4>
            <div className="space-y-4">
              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center space-x-3 text-museum-400 hover:text-museum-50 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-5 h-5" />
                <span className="text-sm">{personalInfo.email}</span>
              </motion.a>
              
              <motion.div
                className="flex items-center space-x-3 text-museum-400"
                whileHover={{ x: 5 }}
              >
                <MapPin className="w-5 h-5" />
                <span className="text-sm">{personalInfo.location}</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="pt-8 border-t border-museum-800 dark:border-museum-950"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-museum-400 text-sm mb-4 md:mb-0">
              © {currentYear} {personalInfo.firstName} {personalInfo.lastName}. 
              Tous droits réservés.
            </p>
            
            <div className="flex items-center space-x-6 text-museum-400 text-sm">
              <span>Fait avec ❤️ et React</span>
              <span>•</span>
              <span>Design muséal</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-museum-600 dark:bg-museum-400 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-museum-700 dark:hover:bg-museum-500 transition-all duration-300 z-40"
        whileHover={{ scale: 1.1, rotate: 180 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        aria-label="Retour en haut"
      >
        <ChevronUp className="w-6 h-6" />
      </motion.button>
    </footer>
  );
};

export default Footer;
