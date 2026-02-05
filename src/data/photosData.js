export const photosData = [
  {
    id: 1,
    title: "Projet Netmovie",
    description: "NetMovie est une plateforme communautaire interactive dédiée au 7ème art. Elle permet d'explorer une vaste base de données de films, d'acteurs et de réalisateurs grâce à une navigation fluide et croisée. Au-delà de la simple consultation, l'expérience repose sur l'engagement des utilisateurs via le module Swap, un système de vote influençant les classements globaux, et un forum d'échange. La création d'un compte personnel débloque ces fonctionnalités participatives, tandis qu'une section dédiée aux futurs partenariats souligne l'ambition de développement du projet.",
    image: "/photos/albums/affiche-netmovie.webp",
    category: "Projets",
    date: "2024-01-15"
  }
];

// Fonction pour ajouter de nouvelles photos
export const addPhoto = (photo) => {
  photosData.push({
    id: photosData.length + 1,
    ...photo,
    date: new Date().toISOString().split('T')[0]
  });
};

// Fonction pour filtrer par catégorie
export const getPhotosByCategory = (category) => {
  return photosData.filter(photo => photo.category === category);
};

// Catégories disponibles
export const categories = ['Projets', 'Certifications', 'Architecture', 'Photographie'];
