# 🧚 ElfeJolo — Site Web Officiel

Site web professionnel d'ElfeJolo, la boutique de jouets de seconde main à Bourges.

## 🚀 Déploiement en 5 minutes sur Vercel

### Étape 1 — Créer un compte GitHub
Rendez-vous sur [github.com](https://github.com) et créez un compte gratuit.

### Étape 2 — Créer un nouveau repository
1. Cliquez sur le bouton vert **"New"**
2. Nommez-le `elfejolo-website`
3. Laissez en **Public**
4. Cliquez **"Create repository"**

### Étape 3 — Uploader les fichiers
1. Sur la page du repo, cliquez **"uploading an existing file"**
2. Glissez-déposez TOUS les fichiers de ce dossier
3. Cliquez **"Commit changes"**

### Étape 4 — Déployer sur Vercel
1. Allez sur [vercel.com](https://vercel.com) et connectez-vous avec GitHub
2. Cliquez **"Add New Project"**
3. Importez le repo `elfejolo-website`
4. Cliquez **"Deploy"** — c'est tout ! ✅

### Étape 5 — Connecter votre nom de domaine (optionnel)
1. Achetez `elfejolo.fr` sur [OVH](https://www.ovh.com) (~12€/an)
2. Dans Vercel → Settings → Domains → ajoutez `elfejolo.fr`
3. Suivez les instructions DNS de Vercel

## 🛠️ Stack technique

- **Next.js 14** — Framework React avec SSR
- **Tailwind CSS** — Styles utilitaires
- **TypeScript** — Code typé
- **Vercel** — Hébergement gratuit

## 📁 Structure

```
elfejolo/
├── app/
│   ├── page.tsx          # Page d'accueil
│   ├── catalogue/        # Page catalogue
│   ├── a-propos/         # Notre histoire
│   ├── contact/          # Nous trouver
│   ├── layout.tsx        # Layout global + SEO
│   └── globals.css       # Styles globaux
├── components/
│   ├── Navbar.tsx        # Navigation
│   └── Footer.tsx        # Pied de page
└── public/               # Images (à ajouter)
```

## ✏️ Modifier le contenu

Pour modifier un texte, ouvrez le fichier correspondant et éditez directement. 
Après avoir sauvegardé et poussé sur GitHub, Vercel redéploie automatiquement en 1-2 minutes.

## 📸 Ajouter des photos

Placez vos photos dans le dossier `public/images/` et référencez-les avec :
```tsx
import Image from 'next/image';
<Image src="/images/ma-photo.jpg" alt="Description" width={800} height={600} />
```

## 📞 Contact

Boutique ElfeJolo — 71 Rue d'Auron, 18000 Bourges — 06 73 88 32 26
