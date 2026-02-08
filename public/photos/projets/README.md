# Photos des Projets

Ce dossier contient les photos de vos projets.

## Comment ajouter des photos

1. Placez vos images dans ce dossier
2. Mettez à jour le fichier `src/data/photosData.js` avec les informations de vos photos

## Exemple de structure dans portfolioData.js

```javascript
{
  id: 1,
  title: "Nom du projet",
  description: "Description du projet",
  image: "/photos/projets/image.png",
  technologies: ["HTML", "CSS"],
  features: ["Fonctionnalité 1", "Fonctionnalité 2"],
  liveUrl: "https://exemple.com",        // Optionnel
  githubUrl: "https://github.com/utilisateur/projet", // Optionnel
  pdfUrl: "/documents/projet-documentation.pdf"       // Optionnel
}
```

## Nouveautés

- **Support multi-dates** : Les expériences et formations peuvent maintenant avoir plusieurs périodes
- **Boutons conditionnels** : Les boutons Live Demo, GitHub et PDF n'apparaissent que si les URLs sont définies
- **Section diplômes** : Nouvelle section sur la page d'accueil pour afficher les diplômes obtenus

## Recommandations

- Utilisez des images au format JPG ou PNG
- Taille recommandée : 800x800 pixels pour les aperçus
- Poids maximal : 500KB par image
- Noms de fichiers : utilisez des tirets (-) au lieu d'espaces
