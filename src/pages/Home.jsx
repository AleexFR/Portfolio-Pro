import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Mail, Phone, MapPin, ExternalLink, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { personalInfo, education, certifications } from '../data/portfolioData';

const Home = () => {
  const [latestDegree, setLatestDegree] = useState('');

  useEffect(() => {
    const latest = education.find(edu => edu.isLatest);
    if (latest) {
      setLatestDegree(latest.degree);
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const certificationVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-museum-50 via-white to-museum-100 dark:from-museum-900 dark:via-museum-800 dark:to-museum-900"></div>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="museum-container relative z-10 text-center pt-24"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="museum-title mb-4">
            {personalInfo.firstName} <span className="block">{personalInfo.lastName}</span>
          </h1>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mb-8 min-h-[2rem]"
        >
          <p className="museum-subtitle italic">
            {latestDegree || personalInfo.title}
          </p>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="museum-text max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {personalInfo.description}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mb-16"
        >
          <h3 className="text-sm font-medium tracking-widest text-museum-600 dark:text-museum-400 mb-6">
            CERTIFICATIONS PRINCIPALES
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.slice(0, 6).map((cert, index) => (
              <motion.div
                key={cert.id}
                variants={certificationVariants}
                custom={index}
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 }
                }}
                className="bg-white dark:bg-museum-800 border border-museum-200 dark:border-museum-700 rounded-lg p-3 shadow-sm hover:shadow-md transition-all duration-300 cursor-default"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 overflow-hidden rounded">
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'block';
                      }}
                    />
                    <Award className="w-4 h-4 text-museum-600 dark:text-museum-400" style={{display: 'none'}} />
                  </div>
                  <span className="text-xs font-medium text-museum-700 dark:text-museum-300">
                    {cert.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row items-center justify-center gap-8 text-museum-600 dark:text-museum-400 mb-12"
        >
          <motion.a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center space-x-2 hover:text-museum-900 dark:hover:text-museum-50 transition-colors duration-300"
            whileHover={{ x: 5 }}
          >
            <Mail className="w-4 h-4" />
            <span className="text-sm">{personalInfo.email}</span>
          </motion.a>
          
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ x: 5 }}
          >
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{personalInfo.location}</span>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <ChevronDown className="w-6 h-6 text-museum-400 dark:text-museum-600" />
      </motion.div>
    </section>
  );
};

export default Home;
