# Portfolio KiViK - Victor Landwerlin

Portfolio personnel construit avec Astro, Tailwind CSS et DaisyUI.

## 🚀 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Builder pour la production
npm run build
```

Le site sera accessible sur `http://localhost:4321`

## 📦 Technologies

- **Astro 4** - Framework statique
- **Tailwind CSS** - Utility-first CSS
- **DaisyUI** - Composants Tailwind
- **PocketBase** - Backend (optionnel)
- **TypeScript** - Typage

## 🎨 Design System

### Couleurs
- Vert foncé : `#057020` (kivik-green)
- Vert clair : `#C1DBC7` (kivik-light)  
- Crème : `#F5F5F0` (kivik-cream)

### Typographie
- Police : **Sora** (Google Fonts)
- Poids : 300, 400, 500, 600, 700, 800

## 📁 Structure

```
portfolio-kivik/
├── src/
│   ├── components/       # Composants Astro
│   ├── layouts/          # Layout principal
│   ├── pages/            # Pages du site
│   ├── lib/              # Utilitaires (PocketBase)
│   └── styles/           # CSS global
└── public/               # Assets statiques
    └── images/          # Images des projets
```

## 📝 Pages

- `/` - Accueil avec hero et projets récents
- `/a-propos` - Présentation et compétences
- `/projets` - Liste des projets
- `/projets/[slug]` - Page détail d'un projet
- `/contact` - Formulaire et réseaux sociaux

## ✅ TODO

- [ ] Ajouter tes vraies images dans `/public/images/`
- [ ] Modifier les liens des réseaux sociaux
- [ ] Configurer PocketBase (optionnel)
- [ ] Personnaliser les textes
- [ ] Configurer le formulaire de contact
- [ ] Tester le responsive
- [ ] Déployer

## 🗄️ PocketBase (Optionnel)

Voir le fichier `POCKETBASE.md` pour le guide complet.

Pour l'instant, les projets sont en dur dans les pages. Tu peux commencer sans PocketBase !

## 🚀 Déploiement

### Netlify
```bash
npm run build
# Upload le dossier "dist" sur Netlify
```

### Vercel
Connecte ton repo GitHub, Vercel build automatiquement.

---

Made with 💚 by KiViK
