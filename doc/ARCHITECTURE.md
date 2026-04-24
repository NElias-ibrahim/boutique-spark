# Architecture - Boutique Spark

## Stack Technologique

- **Vite** - Build tool ultra-rapide
- **React 18** - Librairie UI
- **TypeScript** - Typage statique
- **Shadcn/ui** - Composants réutilisables
- **Tailwind CSS** - Styles utilitaires
- **React Query** - Gestion d'état asynchrone
- **React Router** - Navigation SPA
- **Vitest** - Tests unitaires

## Structure du Projet

```
src/
├── components/        # Composants React
│   ├── ui/           # Composants Shadcn/ui
│   └── NavLink.tsx
├── pages/            # Pages de l'application
├── hooks/            # Hooks React personnalisés
├── lib/              # Utilitaires
├── App.tsx           # Composant principal
└── main.tsx          # Point d'entrée
```

## Scripts de Développement

- `npm run dev` - Serveur de développement
- `npm run build` - Build production
- `npm run preview` - Prévisualiser le build
- `npm run lint` - Vérifier ESLint
- `npm run test` - Tests unitaires
