export const personalInfo = {
  firstName: "Alexandre",
  lastName: "Philip",
  title: "Technicien informatique",
  description: "Technicien informatique passionné par la création d'expériences numériques élégantes et fonctionnelles. Spécialisé dans le développement front-end moderne avec une attention particulière portée au design et à l'expérience utilisateur.",
  email: "alexandre@aleexp.fr",
  phone: "+33 6 12 34 56 78",
  location: "Ansauvillers, France",
};

export const experiences = [
  {
    id: 4,
    title: "Employé Polyvalent",
    company: "McDonald's, Ressons-sur-Matz",
    periods: ["Juillet 2025"],
    description: "Cette expérience m'a permis de développer mon sens du service client, ma réactivité et ma capacité à travailler en équipe dans un environnement rapide.",
    technologies: ["CLAM", "SAT", "Frites", "UHC"]
  },
  {
    id: 3,
    title: "Stagiaire Informatique",
    company: "Centre hospitalier Simone Veil, Beauvais",
    periods: ["6 Janv - 14 Fév 2025"],
    description: "Interventions dans les différents services de l'hôpital pour résoudre les problèmes informatiques. Création du projet Pandora-BOX.",
    technologies: ["Assistance", "Pandora-BOX"]
  },
  {
    id: 2,
    title: "Stagiaire Informatique",
    company: "Conseil départemental de l'Oise, Beauvais",
    periods: ["Juin 2024"],
    description: "Interventions dans les différents collèges de l'Oise pour changer les équipements informatiques.",
    technologies: ["Maintenance"]
  },
  {
    id: 1,
    title: "Employé Territorial",
    company: "Mairie d'Ansauvillers, Ansauvillers",
    periods: ["Juillet 2021", "Août 2022", "Juillet & Août 2023", "Vac Pâques 2024 (2 Semaines)", "Vac Pâques 2025 (1 Semaine)"],
    description: "Interventions dans les différents collèges de l'Oise pour changer les équipements informatiques.",
    technologies: ["Débroussailleuse", "Tondeuse", "Désherbage"]
  }
];

export const education = [
  {
    id: 4,
    degree: "Bachelor Chef de Projet Développement et Data",
    institution: "La Manu, Amiens",
    periods: ["2026 - 2027"],
    rhythm: "Alternance 1 semaine école / 3 semaines entreprise",
    description: "Spécialisation en architecture Fullstack et intégration de solutions d'IA. Pilotage de projets agiles et sécurisation d'applications web."
  },
  {
    id: 3,
    degree: "BTS SIO [SISR]",
    institution: "Lycée Jean Rostand, Chantilly",
    periods: ["2023 - 2025"],
    rhythm: "Présentiel",
    description: "Expertise en administration systèmes et réseaux. Mise en œuvre, sécurisation et maintenance des infrastructures informatiques en entreprise.",
    isLatest: true
  },
  {
    id: 2,
    degree: "Baccalauréat Technologique [SIN]",
    institution: "Lycée Paul Langevin, Beauvais",
    periods: ["2019 - 2023"],
    rhythm: "Présentiel",
    description: "Spécialisation en Systèmes d'Information et Numérique. Apprentissage des bases de l'algorithmique, de la programmation et de la gestion des flux de données."
  },
  {
    id: 1,
    degree: "Brevet des Collèges",
    institution: "Collège Compère Morel, Breteuil",
    periods: ["2018 - 2019"],
    rhythm: "Présentiel",
    description: "Formation technique en informatique avec stages en entreprise."
  }
];

export const diplomas = [
  {
    id: 1,
    name: "Brevet des Collèges",
    institution: "Collège Compère Morel, Breteuil",
    date: "2019",
    description: "Diplôme national du brevet avec mention"
  },
  {
    id: 2,
    name: "Baccalauréat Technologique [SIN]",
    institution: "Lycée Paul Langevin, Beauvais",
    date: "2023",
    description: "Baccalauréat Sciences de l'Ingénieur spécialité Numérique et Sciences Informatiques"
  },
  {
    id: 3,
    name: "BTS SIO [SISR]",
    institution: "Lycée Jean Rostand, Chantilly",
    date: "2025",
    description: "Brevet de Technicien Supérieur Services Informatiques aux Organisations option Solutions d'Infrastructure, Systèmes et Réseaux"
  }
];

export const projects = [
  {
    id: 1,
    title: "Site Physique Quantique",
    description: "Site web pour le site physique quantique, créer pendant ma première année de BTS SIO.",
    image: "/photos/projets/screen-quantique.png",
    technologies: ["HTML", "CSS"],
    features: ["Formulaire de contact", "Tableau"],
    liveUrl: "https://aleexfr.github.io/Site-Physique-Quantique/",
    githubUrl: "https://github.com/AleexFR/Site-Physique-Quantique"
  },
  {
    id: 2,
    title: "Crackage Wi-Fi et Test de Sécurité sur Base de Données",
    description: "Exercices pratiques de pentesting : Wifite contre WEP et Hydra sur MySQL.",
    image: "/photos/projets/wifite.jpeg",
    technologies: ["Hydra", "Wifite", "MySQL"],
    features: ["Crackage", "Test de Sécurité"]
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
