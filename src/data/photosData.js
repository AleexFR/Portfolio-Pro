export const photosData = [
  {
    id: 1,
    title: "Projet Web Design",
    description: "Création d'une interface moderne et responsive pour une application web de gestion de projets. Design épuré avec des animations fluides et une expérience utilisateur optimisée.",
    image: "/api/placeholder/400/400",
    category: "Projets",
    date: "2024-01-15"
  },
  {
    id: 2,
    title: "Certification React",
    description: "Certification obtenue après validation des compétences avancées en React, incluant les hooks, le routing et la gestion d'état complexe.",
    image: "/api/placeholder/400/400",
    category: "Certifications",
    date: "2024-01-10"
  },
  {
    id: 3,
    title: "Architecture Moderne",
    description: "Photographie d'un bâtiment au design architectural contemporain avec des lignes épurées et des matériaux innovants.",
    image: "/api/placeholder/400/400",
    category: "Architecture",
    date: "2024-01-05"
  },
  {
    id: 4,
    title: "Interface Mobile",
    description: "Design d'une application mobile avec focus sur l'ergonomie et l'accessibilité. Interface intuitive et adaptative.",
    image: "/api/placeholder/400/400",
    category: "Projets",
    date: "2023-12-28"
  },
  {
    id: 5,
    title: "Workshop Design",
    description: "Participation à un workshop sur les nouvelles tendances du design UX/UI et les méthodes de prototypage rapide.",
    image: "/api/placeholder/400/400",
    category: "Certifications",
    date: "2023-12-20"
  },
  {
    id: 6,
    title: "Paysage Urbain",
    description: "Capture d'un paysage urbain au coucher du soleil, mettant en valeur les lumières de la ville et l'architecture moderne.",
    image: "/api/placeholder/400/400",
    category: "Photographie",
    date: "2023-12-15"
  },
  {
    id: 7,
    title: "Dashboard Analytics",
    description: "Création d'un tableau de bord interactif pour la visualisation de données complexes avec des graphiques dynamiques.",
    image: "/api/placeholder/400/400",
    category: "Projets",
    date: "2023-12-10"
  },
  {
    id: 8,
    title: "Formation TypeScript",
    description: "Certification complète sur TypeScript et son intégration dans des projets React de grande envergure.",
    image: "/api/placeholder/400/400",
    category: "Certifications",
    date: "2023-12-05"
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
