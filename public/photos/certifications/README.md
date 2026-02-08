# Photos des Certifications

Ce dossier contient les photos de vos certifications.

## Comment ajouter des photos

1. Placez vos images de certifications dans ce dossier
2. Mettez à jour le fichier `src/data/portfolioData.js` avec les informations

## Exemple de structure dans portfolioData.js

```javascript
{
  id: 2,
  name: "Certification React",
  issuer: "Organisme émetteur",
  date: "10 Janvier 2024",
  credentialId: "ID-123456",
  image: "/photos/certifications/react-cert.jpg"
}
```

## Nouveautés

- **Support multi-dates** : Les expériences et formations peuvent maintenant avoir plusieurs périodes
- **Boutons conditionnels** : Les boutons Live Demo, GitHub et PDF n'apparaissent que si les URLs sont définies
- **Section diplômes** : Nouvelle section sur la page d'accueil pour afficher les diplômes obtenus

## Recommandations

- Utilisez des images claires et lisibles
- Taille recommandée : 800x800 pixels
- Formats acceptés : JPG, PNG
- Évitez les images trop compressées qui perdent en qualité
