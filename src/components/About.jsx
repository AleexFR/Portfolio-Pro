import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { personalInfo, experiences, education } from '../data/portfolioData';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
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
    <section id="about" className="py-20 bg-white dark:bg-museum-800">
      <div className="museum-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="museum-title mb-6">
            À propos
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="museum-text max-w-3xl mx-auto text-lg leading-relaxed"
          >
            Passionné par le développement web et le design d'interfaces, je combine expertise technique 
            et sens artistique pour créer des expériences numériques mémorables. Mon approche s'inspire 
            des principes du design minimaliste et fonctionnel, avec une attention particulière portée 
            aux détails et à l'expérience utilisateur.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants} className="flex items-center mb-8">
              <Briefcase className="w-6 h-6 text-museum-600 dark:text-museum-400 mr-3" />
              <h3 className="text-2xl font-serif font-bold text-museum-900 dark:text-museum-50">
                Expériences professionnelles
              </h3>
            </motion.div>
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={cardVariants}
                  custom={index}
                  className="museum-card group"
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                  }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-museum-900 dark:text-museum-50 mb-2 group-hover:text-museum-700 dark:group-hover:text-museum-300 transition-colors">
                        {exp.title}
                      </h4>
                      <p className="text-museum-600 dark:text-museum-400 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center text-museum-500 dark:text-museum-500 text-sm mt-2 md:mt-0">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.period}
                    </div>
                  </div>
                  
                  <p className="museum-text mb-4">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-museum-100 dark:bg-museum-700 text-museum-700 dark:text-museum-300 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants} className="flex items-center mb-8">
              <GraduationCap className="w-6 h-6 text-museum-600 dark:text-museum-400 mr-3" />
              <h3 className="text-2xl font-serif font-bold text-museum-900 dark:text-museum-50">
                Formation & Diplômes
              </h3>
            </motion.div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  variants={cardVariants}
                  custom={index}
                  className={`museum-card group relative ${
                    edu.isLatest ? 'border-2 border-museum-400 dark:border-museum-600' : ''
                  }`}
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                  }}
                >
                  {edu.isLatest && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="absolute -top-3 -right-3 bg-museum-600 dark:bg-museum-400 text-white text-xs px-3 py-1 rounded-full font-medium"
                    >
                      Dernier diplôme
                    </motion.div>
                  )}
                  
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-museum-900 dark:text-museum-50 mb-2 group-hover:text-museum-700 dark:group-hover:text-museum-300 transition-colors">
                        {edu.degree}
                      </h4>
                      <p className="text-museum-600 dark:text-museum-400 font-medium">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="flex items-center text-museum-500 dark:text-museum-500 text-sm mt-2 md:mt-0">
                      <Calendar className="w-4 h-4 mr-2" />
                      {edu.period}
                    </div>
                  </div>
                  
                  <p className="museum-text">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-4 p-6 bg-museum-50 dark:bg-museum-900 rounded-lg">
            <Award className="w-8 h-8 text-museum-600 dark:text-museum-400" />
            <div className="text-left">
              <p className="text-sm text-museum-600 dark:text-museum-400 mb-1">
                Formation continue
              </p>
              <p className="museum-text font-medium">
                Toujours en apprentissage pour rester à la pointe des technologies web
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
