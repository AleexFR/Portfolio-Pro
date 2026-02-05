export const personalInfo = {
  firstName: "Alexandre",
  lastName: "Philip",
  title: "Titulaire du BTS SIO option SISR",
  description: "Développeur web passionné par la création d'expériences numériques élégantes et fonctionnelles. Spécialisé dans le développement front-end moderne avec une attention particulière portée au design et à l'expérience utilisateur.",
  email: "alexandre@aleexp.fr",
  phone: "+33 6 12 34 56 78",
  location: "Ansauvillers, France",
};

export const experiences = [
  {
    id: 3,
    title: "Employé Polyvalent",
    company: "McDonald's, Ressons-sur-Matz",
    period: "Juillet 2025",
    description: "Cette expérience m’a permis de développer mon sens du service client, ma réactivité et ma capacité à travailler en équipe dans un environnement rapide.",
    technologies: ["CLAM", "SAT", "Frites", "UHC"]
  },
  {
    id: 2,
    title: "Stagiaire Informatique",
    company: "Centre hospitalier Simone Veil, Beauvais",
    period: "6 Janv - 14 Fév 2025",
    description: "Interventions dans les différents services de l'hôpital pour résoudre les problèmes informatiques. Création du projet Pandora-BOX.",
    technologies: ["Assiatnce", "Pandora-BOX"]
  },
  {
    id: 1,
    title: "Stagiaire Informatique",
    company: "Conseil départemental de l'Oise, Beauvais",
    period: "Juin 2024",
    description: "Interventions dans les différents collèges de l'Oise pour changer les équipements informatiques.",
    technologies: ["Maintenance"]
  }
];

export const education = [
  {
    id: 3,
    degree: "BTS SIO [SISR]",
    institution: "Lycée Jean Rostand, Chantilly",
    period: "2023 - 2025",
    description: "Spécialisation en développement web et applications mobiles. Projet de fin d'études sur les PWA.",
    isLatest: true
  },
  {
    id: 2,
    degree: "Baccalauréat Technologique [SIN]",
    institution: "Lycée Paul Langevin, Beauvais",
    period: "2019 - 2023",
    description: "Formation fondamentale en informatique avec focus sur le développement logiciel."
  },
  {
    id: 1,
    degree: "Brevet des Collèges",
    institution: "Collège Compère Morel, Breteuil",
    period: "2018 - 2019",
    description: "Formation technique en informatique avec stages en entreprise."
  }
];

export const projects = [
  {
    id: 1,
    title: "Portfolio Designer",
    description: "Portfolio moderne pour designer graphique avec animations avancées et système de gestion de projets.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Framer Motion", "Tailwind CSS"],
    features: ["Design responsive", "Animations fluides", "Dark mode", "Optimisé SEO"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "Plateforme e-commerce complète avec panier, paiement et gestion des stocks.",
    image: "/api/placeholder/600/400",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
    features: ["Panier interactif", "Paiement sécurisé", "Admin dashboard", "API RESTful"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  },
  {
    id: 3,
    title: "Task Management App",
    description: "Application de gestion de tâches collaborative avec temps réel et notifications.",
    image: "/api/placeholder/600/400",
    technologies: ["Vue.js", "Firebase", "Vuex", "Vuetify"],
    features: ["Collaboration temps réel", "Notifications", "Tableaux Kanban", "Rapports"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "Dashboard météo interactif avec prévisions détaillées et visualisations de données.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Chart.js", "OpenWeather API", "Geolocation"],
    features: ["Prévisions 7 jours", "Cartes interactives", "Alertes météo", "Historique"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  }
];

export const certifications = [
  {
    id: 1,
    name: "Introduction to Linux (LFS101)",
    issuer: "The Linux Foundation",
    date: "23 Avril 2025",
    credentialId: "LF-06dbp4x506",
    image: "/photos/certifications/intro-badge.png"
  },
  {
    id: 2,
    name: "Cybersecurity Essentials (LFC108)",
    issuer: "The Linux Foundation",
    date: "21 Mai 2025",
    credentialId: "LF-9I2bq0iy68",
    image: "/photos/certifications/cyber-badge.png"
  },
  {
    id: 3,
    name: "XSS Exploits and Defenses (LFEL1010)",
    issuer: "The Linux Foundation",
    date: "24 Mai 2025",
    credentialId: "LF-cd0gtxw8nh",
    image: "/photos/certifications/xss-badge.png"
  }
];
