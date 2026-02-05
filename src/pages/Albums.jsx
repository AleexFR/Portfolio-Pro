import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, Camera } from 'lucide-react';
import { photosData } from '../data/photosData';

const Albums = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPhotos, setFilteredPhotos] = useState(photosData);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    const filtered = photosData.filter(photo =>
      photo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      photo.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPhotos(filtered);
  }, [searchTerm]);

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

  return (
    <section className="min-h-screen py-20 bg-museum-50 dark:bg-museum-900">
      <div className="museum-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12"
        >
          <motion.h2 variants={itemVariants} className="museum-title mb-6">
            Albums Photo
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="museum-text max-w-2xl mx-auto mb-8"
          >
            Decouvrez mes photographies à travers différentes collections
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="max-w-md mx-auto mb-8"
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-museum-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher par titre ou description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white dark:bg-museum-800 border border-museum-300 dark:border-museum-600 rounded-lg focus:ring-2 focus:ring-museum-500 focus:border-transparent transition-all duration-300 text-museum-900 dark:text-museum-50"
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              variants={itemVariants}
              custom={index}
              className="museum-card group overflow-hidden cursor-pointer"
              whileHover={{ 
                y: -8,
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
              }}
              onClick={() => setSelectedPhoto(photo)}
            >
              <div className="aspect-square bg-museum-200 dark:bg-museum-700 relative overflow-hidden rounded-lg">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = `https://picsum.photos/seed/${photo.id}/400/400.jpg`;
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <Camera className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-museum-900 dark:text-museum-50 mb-2 group-hover:text-museum-700 dark:group-hover:text-museum-300 transition-colors">
                  {photo.title}
                </h3>
                <p className="text-sm text-museum-600 dark:text-museum-400 line-clamp-2">
                  {photo.description}
                </p>
                <div className="flex items-center text-xs text-museum-500 dark:text-museum-500 mt-2">
                  <Calendar className="w-3 h-3 mr-1" />
                  {photo.date}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredPhotos.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-museum-600 dark:text-museum-400">
              Aucune photo trouvee pour "{searchTerm}"
            </p>
          </motion.div>
        )}

        {selectedPhoto && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedPhoto(null)}>
            <div className="bg-white dark:bg-museum-800 rounded-lg max-w-4xl max-h-[90vh] overflow-hidden relative">
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white dark:bg-museum-700 rounded-full shadow-lg hover:bg-museum-100 dark:hover:bg-museum-600 transition-colors duration-300"
              >
                ×
              </button>
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/3">
                  <img
                    src={selectedPhoto.image}
                    alt={selectedPhoto.title}
                    className="w-full h-auto max-h-[60vh] object-cover"
                    onError={(e) => {
                      e.target.src = `https://picsum.photos/seed/${selectedPhoto.id}/800/600.jpg`;
                    }}
                  />
                </div>
                
                <div className="md:w-1/3 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-museum-900 dark:text-museum-50 mb-4">
                      {selectedPhoto.title}
                    </h3>
                    <p className="text-museum-600 dark:text-museum-400 mb-6 leading-relaxed">
                      {selectedPhoto.description}
                    </p>
                    <div className="flex items-center text-sm text-museum-500 dark:text-museum-500">
                      <Calendar className="w-4 h-4 mr-2" />
                      {selectedPhoto.date}
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <span className="inline-block px-3 py-1 bg-museum-100 dark:bg-museum-700 text-museum-700 dark:text-museum-300 text-sm font-medium rounded-full">
                      {selectedPhoto.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
      </div>
    </section>
  );
};

export default Albums;
