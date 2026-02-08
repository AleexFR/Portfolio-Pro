# Photos des Albums

Ce dossier contient les photos pour vos albums personnels et créatifs.

## Comment ajouter des photos

1. Placez vos images dans ce dossier
2. Mettez à jour le fichier `src/data/photosData.js` avec les informations

## Exemple de structure dans photosData.js

```javascript
{
  id: 3,
  title: "Architecture Moderne",
  description: "Photographie d'un bâtiment au design architectural contemporain",
  image: "/photos/albums/architecture-moderne.jpg",
  category: "Architecture",
  date: "2024-01-05"
}
```

## Nouveautés

- **Support multi-dates** : Les expériences et formations peuvent maintenant avoir plusieurs périodes
- **Boutons conditionnels** : Les boutons Live Demo, GitHub et PDF n'apparaissent que si les URLs sont définies
- **Section diplômes** : Nouvelle section sur la page d'accueil pour afficher les diplômes obtenus

## Catégories possibles

- Architecture
- Photographie
- Nature
- Portrait
- Urbain
- Abstrait
- Personnaliser selon vos besoins

## Recommandations

- Utilisez des images de haute qualité
- Taille recommandée : 1200x1200 pixels pour les albums
- Formats acceptés : JPG, PNG, WebP
- Poids maximal : 1MB par image pour la qualité
