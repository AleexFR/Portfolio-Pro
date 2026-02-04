# Portfolio - Alexandre Philip

Un portfolio moderne et haut de gamme développé en React avec une direction artistique inspirée des musées et galeries contemporaines.

## 🎨 Direction Artistique

- **Style minimaliste** : Élégance et sobriété inspirées des musées contemporains
- **Typographies premium** : Playfair Display (serif), Inter (sans-serif), Dancing Script (signature)
- **Animations maîtrisées** : Transitions fluides et non intrusives avec Framer Motion
- **Design responsive** : Adaptation parfaite sur tous les écrans
- **Dark/Light mode** : Interface adaptable aux préférences utilisateur

## 🚀 Fonctionnalités

### Page de chargement
- Écran plein avec signature animée
- Transition élégante vers l'accueil
- Ambiance muséale et professionnelle

### Accueil
- Présentation personnelle avec nom et signature
- Affichage dynamique du dernier diplôme
- Badges de certifications visibles
- Navigation fluide vers les autres sections

### À propos
- Description personnelle détaillée
- Expériences professionnelles chronologiques
- Formations et diplômes avec mise en avant du dernier obtenu
- Design en cartes avec animations subtiles

### Projets & Certifications
- Navigation par onglets animés
- **Projets** : Grille interactive avec popup de détails
- **Certifications** : Affichage en badges élégants
- Modal détaillé pour chaque projet

### Contact
- Formulaire avec validation côté client
- Informations de contact claires
- Messages de confirmation visuels
- Design épuré et fonctionnel

## 🛠️ Technologies

- **React 18** : Framework principal
- **Vite** : Build tool ultra-rapide
- **Tailwind CSS** : Framework CSS utilitaire
- **Framer Motion** : Animations fluides
- **Lucide React** : Icônes modernes
- **React Router** : Navigation client

## 📦 Installation

```bash
# Cloner le projet
git clone <repository-url>
cd portfolio-pro

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev

# Construire pour la production
npm run build

# Prévisualiser la production
npm run preview
```

## 🎯 Contraintes respectées

- ✅ **Front-end uniquement** : Aucun backend requis
- ✅ **Pas de base de données** : Données statiques dans des fichiers JS
- ✅ **Pas d'espace admin** : Site statique simple
- ✅ **Responsive parfait** : Adaptation mobile-first
- ✅ **Performance** : Optimisé pour le web

## 📁 Structure du projet

```
src/
├── components/          # Composants React
│   ├── LoadingScreen.jsx
│   ├── Navigation.jsx
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── data/               # Données statiques
│   └── portfolioData.js
├── App.jsx             # Composant principal
├── main.jsx            # Point d'entrée
└── index.css           # Styles globaux
```

## 🎨 Personnalisation

Les données personnelles (expériences, formations, projets, certifications) peuvent être modifiées dans le fichier `src/data/portfolioData.js`.

## 🌟 Points forts

- **Design muséal** : Élégance et professionnalisme
- **Animations fluides** : Expérience utilisateur immersive
- **Code maintenable** : Structure claire et commentée
- **Performance optimisée** : Chargement rapide et fluide
- **Accessible** : Respect des bonnes pratiques d'accessibilité

## 📄 Licence

Ce projet est sous licence MIT.
