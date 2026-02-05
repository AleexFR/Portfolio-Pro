# Photos des Projets

Ce dossier contient les photos de vos projets.

## Comment ajouter des photos

1. Placez vos images dans ce dossier
2. Mettez à jour le fichier `src/data/photosData.js` avec les informations de vos photos

## Exemple de structure dans photosData.js

```javascript
{
  id: 1,
  title: "Nom du projet",
  description: "Description du projet",
  image: "/photos/projets/image.png",
  technologies: ["HTML", "CSS"],
  features: ["Fonctionnalité 1", "Fonctionnalité 2"],
  liveUrl: "https://exemple.com",
  githubUrl: "https://github.com/utilisateur/projet",
  pdfUrl: "/documents/projet-documentation.pdf"  // ← Nouveau champ
}
```

## Recommandations

- Utilisez des images au format JPG ou PNG
- Taille recommandée : 800x800 pixels pour les aperçus
- Poids maximal : 500KB par image
- Noms de fichiers : utilisez des tirets (-) au lieu d'espaces
