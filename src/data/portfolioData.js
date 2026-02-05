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
    title: "Développeur Front-end Senior",
    company: "Tech Company",
    period: "2022 - Présent",
    description: "Développement d'applications web modernes avec React et TypeScript. Leadership technique sur des projets innovants.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js"]
  },
  {
    id: 2,
    title: "Développeur Web Full-stack",
    company: "Digital Agency",
    period: "2020 - 2022",
    description: "Création de sites web sur mesure pour des clients variés. Gestion complète du cycle de développement.",
    technologies: ["JavaScript", "PHP", "MySQL", "Vue.js"]
  },
  {
    id: 1,
    title: "Développeur Junior",
    company: "Start-up Innovante",
    period: "2019 - 2020",
    description: "Participation au développement d'une plateforme SaaS. Apprentissage des bonnes pratiques de développement.",
    technologies: ["HTML", "CSS", "JavaScript", "React"]
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
    name: "React Developer Certification",
    issuer: "Meta",
    date: "2023",
    credentialId: "RCT-2023-001",
    image: "/api/placeholder/100/100"
  },
  {
    id: 2,
    name: "Advanced CSS & Tailwind",
    issuer: "Frontend Masters",
    date: "2023",
    credentialId: "CSS-2023-002",
    image: "/api/placeholder/100/100"
  },
  {
    id: 3,
    name: "JavaScript Algorithms",
    issuer: "freeCodeCamp",
    date: "2022",
    credentialId: "JS-2022-003",
    image: "/api/placeholder/100/100"
  },
  {
    id: 4,
    name: "TypeScript Fundamentals",
    issuer: "Microsoft",
    date: "2022",
    credentialId: "TS-2022-004",
    image: "/api/placeholder/100/100"
  },
  {
    id: 5,
    name: "Web Accessibility",
    issuer: "Google",
    date: "2023",
    credentialId: "A11Y-2023-005",
    image: "/api/placeholder/100/100"
  },
  {
    id: 6,
    name: "Performance Optimization",
    issuer: "Web.dev",
    date: "2023",
    credentialId: "PERF-2023-006",
    image: "/api/placeholder/100/100"
  }
];
