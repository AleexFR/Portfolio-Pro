import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Calendar, Award, Code, FolderOpen } from 'lucide-react';
import { projects, certifications } from '../data/portfolioData';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const [selectedProject, setSelectedProject] = useState(null);

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

  const projectCardVariants = {
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

  const modalVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  const modalContentVariants = {
    hidden: { scale: 0.8, y: 50 },
    visible: {
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: {
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  const ProjectModal = ({ project, onClose }) => {
    return (
      <AnimatePresence>
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            variants={modalContentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-white dark:bg-museum-800 max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/80 dark:bg-museum-700/80 hover:bg-white dark:hover:bg-museum-700 transition-colors duration-300 z-10"
              >
                <X className="w-6 h-6 text-museum-900 dark:text-museum-50" />
              </button>
              
              <div className="aspect-video bg-museum-200 dark:bg-museum-700 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = `https://picsum.photos/seed/${project.id}/800/400.jpg`;
                  }}
                />
              </div>
              
              <div className="p-8">
                <h3 className="museum-title mb-4">{project.title}</h3>
                
                <p className="museum-text mb-6 text-lg leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-museum-900 dark:text-museum-50 mb-3">
                    Fonctionnalités principales
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-museum-600 dark:bg-museum-400 rounded-full"></div>
                        <span className="text-museum-700 dark:text-museum-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-museum-900 dark:text-museum-50 mb-3">
                    Technologies utilisées
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-museum-100 dark:bg-museum-700 text-museum-700 dark:text-museum-300 text-sm font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="museum-button inline-flex items-center justify-center space-x-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Voir le projet</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border-2 border-museum-900 dark:border-museum-100 text-museum-900 dark:text-museum-100 rounded-none font-medium tracking-wide transition-all duration-300 hover:bg-museum-900 dark:hover:bg-museum-100 hover:text-museum-100 dark:hover:text-museum-900 inline-flex items-center justify-center space-x-2"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code source</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <section className="min-h-screen py-20 bg-museum-50 dark:bg-museum-900">
      <div className="museum-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="museum-title mb-6">
            Projets & Certifications
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="museum-text max-w-2xl mx-auto"
          >
            Découvrez mes réalisations récentes et mes certifications professionnelles
          </motion.p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-white dark:bg-museum-800 rounded-lg p-1 shadow-sm">
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center space-x-2 ${
                activeTab === 'projects'
                  ? 'bg-museum-900 dark:bg-museum-100 text-museum-100 dark:text-museum-900'
                  : 'text-museum-600 dark:text-museum-400 hover:text-museum-900 dark:hover:text-museum-50'
              }`}
            >
              <FolderOpen className="w-4 h-4" />
              <span>Projets</span>
            </button>
            <button
              onClick={() => setActiveTab('certifications')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center space-x-2 ${
                activeTab === 'certifications'
                  ? 'bg-museum-900 dark:bg-museum-100 text-museum-100 dark:text-museum-900'
                  : 'text-museum-600 dark:text-museum-400 hover:text-museum-900 dark:hover:text-museum-50'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Certifications</span>
            </button>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {activeTab === 'projects' ? (
            <motion.div
              key="projects"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={projectCardVariants}
                  custom={index}
                  className="museum-card group cursor-pointer"
                  whileHover={{ 
                    y: -8,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                  }}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="aspect-video bg-museum-200 dark:bg-museum-700 mb-6 relative overflow-hidden rounded-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = `https://picsum.photos/seed/${project.id}/600/400.jpg`;
                      }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <Code className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-museum-900 dark:text-museum-50 mb-3 group-hover:text-museum-700 dark:group-hover:text-museum-300 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="museum-text mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-museum-100 dark:bg-museum-700 text-museum-700 dark:text-museum-300 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-museum-100 dark:bg-museum-700 text-museum-700 dark:text-museum-300 text-xs font-medium rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center text-museum-600 dark:text-museum-400 text-sm">
                    <span>Cliquez pour voir les détails</span>
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="certifications"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  variants={projectCardVariants}
                  custom={index}
                  className="museum-card group text-center"
                  whileHover={{ 
                    y: -8,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                    rotate: [0, -2, 2, 0]
                  }}
                >
                  <div className="w-20 h-20 mx-auto mb-4 overflow-hidden rounded-lg group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = `https://picsum.photos/seed/${cert.id}/80/80.jpg`;
                      }}
                    />
                  </div>
                  
                  <h4 className="font-semibold text-museum-900 dark:text-museum-50 mb-2 text-sm group-hover:text-museum-700 dark:group-hover:text-museum-300 transition-colors">
                    {cert.name}
                  </h4>
                  
                  <p className="text-xs text-museum-600 dark:text-museum-400 mb-1">
                    {cert.issuer}
                  </p>
                  
                  <div className="flex items-center justify-center text-xs text-museum-500 dark:text-museum-500">
                    <Calendar className="w-3 h-3 mr-1" />
                    {cert.date}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
