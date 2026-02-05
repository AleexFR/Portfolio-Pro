import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'L\'email n\'est pas valide';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Le sujet est requis';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Le message doit contenir au moins 10 caractères';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <section className="min-h-screen py-20 bg-white dark:bg-museum-800">
      <div className="museum-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="museum-title mb-6">
            Contact
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="museum-text max-w-2xl mx-auto"
          >
            N'hésitez pas à me contacter pour discuter de vos projets ou pour toute question
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-2xl font-serif font-bold text-museum-900 dark:text-museum-50 mb-6">
                Informations de contact
              </h3>
              
              <div className="space-y-6">
                <motion.a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center space-x-4 p-4 museum-card hover:border-museum-400 dark:hover:border-museum-600 transition-all duration-300 group"
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 bg-museum-100 dark:bg-museum-700 rounded-full flex items-center justify-center group-hover:bg-museum-200 dark:group-hover:bg-museum-600 transition-colors duration-300">
                    <Mail className="w-6 h-6 text-museum-600 dark:text-museum-400" />
                  </div>
                  <div>
                    <p className="font-medium text-museum-900 dark:text-museum-50">Email</p>
                    <p className="text-museum-600 dark:text-museum-400">{personalInfo.email}</p>
                  </div>
                </motion.a>

                <motion.div
                  className="flex items-center space-x-4 p-4 museum-card"
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 bg-museum-100 dark:bg-museum-700 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-museum-600 dark:text-museum-400" />
                  </div>
                  <div>
                    <p className="font-medium text-museum-900 dark:text-museum-50">Localisation</p>
                    <p className="text-museum-600 dark:text-museum-400">{personalInfo.location}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="p-6 bg-museum-50 dark:bg-museum-900 rounded-lg"
            >
              <h4 className="text-lg font-semibold text-museum-900 dark:text-museum-50 mb-3">
                Disponibilité
              </h4>
              <p className="museum-text">
                Je suis actuellement disponible pour des missions freelance et des opportunités 
                professionnelles intéressantes. N'hésitez pas à me contacter pour discuter de 
                votre projet.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-serif font-bold text-museum-900 dark:text-museum-50 mb-6">
                Envoyer un message
              </h3>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-center"
                >
                  <CheckCircle className="w-16 h-16 text-green-600 dark:text-green-400 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-green-800 dark:text-green-200 mb-2">
                    Message envoyé avec succès !
                  </h4>
                  <p className="text-green-700 dark:text-green-300">
                    Je vous répondrai dans les plus brefs délais.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-museum-700 dark:text-museum-300 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white dark:bg-museum-700 border rounded-lg focus:ring-2 focus:ring-museum-500 focus:border-transparent transition-all duration-300 ${
                        errors.name 
                          ? 'border-red-500 dark:border-red-400' 
                          : 'border-museum-300 dark:border-museum-600'
                      } text-museum-900 dark:text-museum-50`}
                      placeholder="Votre nom"
                    />
                    {errors.name && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center"
                      >
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.name}
                      </motion.p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-museum-700 dark:text-museum-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white dark:bg-museum-700 border rounded-lg focus:ring-2 focus:ring-museum-500 focus:border-transparent transition-all duration-300 ${
                        errors.email 
                          ? 'border-red-500 dark:border-red-400' 
                          : 'border-museum-300 dark:border-museum-600'
                      } text-museum-900 dark:text-museum-50`}
                      placeholder="votre.email@example.com"
                    />
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center"
                      >
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.email}
                      </motion.p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-museum-700 dark:text-museum-300 mb-2">
                      Sujet *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white dark:bg-museum-700 border rounded-lg focus:ring-2 focus:ring-museum-500 focus:border-transparent transition-all duration-300 ${
                        errors.subject 
                          ? 'border-red-500 dark:border-red-400' 
                          : 'border-museum-300 dark:border-museum-600'
                      } text-museum-900 dark:text-museum-50`}
                      placeholder="Sujet de votre message"
                    />
                    {errors.subject && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center"
                      >
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.subject}
                      </motion.p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-museum-700 dark:text-museum-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={`w-full px-4 py-3 bg-white dark:bg-museum-700 border rounded-lg focus:ring-2 focus:ring-museum-500 focus:border-transparent transition-all duration-300 resize-none ${
                        errors.message 
                          ? 'border-red-500 dark:border-red-400' 
                          : 'border-museum-300 dark:border-museum-600'
                      } text-museum-900 dark:text-museum-50`}
                      placeholder="Votre message..."
                    />
                    {errors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center"
                      >
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.message}
                      </motion.p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full museum-button flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-museum-100 dark:border-museum-900 border-t-transparent rounded-full animate-spin"></div>
                        <span>Envoi en cours...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Envoyer le message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
