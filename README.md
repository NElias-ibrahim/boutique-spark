# Boutique Spark

Une application web moderne construite avec Vite, React, TypeScript et Shadcn/ui components.

## 🚀 Déploiement sur GitHub Pages

### Configuration
- **Base URL**: `/boutique-spark/` (configurée dans `vite.config.ts`)
- **Dossier de build**: `dist/`

### Installation des dépendances
```bash
npm install
```

### Développement
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Déploiement
```bash
npm run deploy
```

Cette commande va:
1. Builder le projet (`npm run build`)
2. Déployer le dossier `dist/` sur la branche `gh-pages`

**Note**: Assure-toi que `gh-pages` est installé en tant que dépendance de développement.

## 📦 Stack technologique

- **Vite** - Build tool ultra-rapide
- **React 19** - Librairie UI
- **TypeScript** - Typage statique
- **Shadcn/ui** - Composants réutilisables
- **Tailwind CSS** - Styles utilitaires
- **Vitest** - Tests unitaires

## 🔧 Scripts disponibles

- `npm run dev` - Lancer le serveur de développement
- `npm run build` - Builder pour la production
- `npm run build:dev` - Builder en mode développement
- `npm run preview` - Prévisualiser le build
- `npm run lint` - Vérifier les erreurs ESLint
- `npm run test` - Lancer les tests une fois
- `npm run test:watch` - Tests en mode watch
- `npm run deploy` - Déployer sur GitHub Pages

## 📝 Structure du projet

```
src/
├── components/     # Composants React
├── pages/         # Pages de l'application
├── hooks/         # Hooks React personnalisés
├── lib/           # Utilitaires
├── App.tsx        # Composant principal
└── main.tsx       # Point d'entrée
```
