# SuperHeroManager
Full-stack React + TypeScript + Vite (front) • Node/Express + TypeScript (back) • MongoDB • JWT • Upload images.

SuperHero Manager

SuperHero Manager est une application web développée dans le cadre du cours de développement web (L3 Informatique – UPHF).
Le but du projet est d’afficher, gérer et consulter des fiches de super-héros à partir d’un fichier JSON fourni par l’enseignant.
Le site propose un système d’authentification, une page listant tous les héros et une page de détails pour chacun d’entre eux.

Fonctionnalités principales
Authentification

* Inscription
* Connexion
* Stockage du token utilisateur
* Affichage conditionnel de la navigation selon l’état de connexion

Liste des héros

* Lecture du fichier JSON fourni
* Affichage des images depuis le dossier public
* Grille responsive construite manuellement (sans le composant Grid de MUI, qui posait des problèmes)
* Informations principales affichées pour chaque héros (nom, éditeur, etc.)

Page de détails

* Informations complètes d’un héros : statistiques, biographie, apparence
* Affichage des images en différents formats (xs, sm, md, lg)

Dashboard

* Accessible uniquement après connexion
* Raccourcis vers les différentes pages

Architecture du projet:

superhero-manager/
│
├── backend/
│   ├── package.json
│   ├── package-lock.json
│   ├── .env
│   ├── server.js
│   └── src/
│       ├── config/
│       │   └── db.js
│       ├── models/
│       │   └── User.js
│       ├── controllers/
│       │   └── authController.js
│       ├── routes/
│       │   ├── authRoutes.js
│       │   └── userRoutes.js
│       └── middlewares/
│           └── authMiddleware.js
│
└── frontend/
    ├── package.json
    ├── package-lock.json
    ├── vite.config.js
    ├── index.html
    ├── public/
    │   └── images/
    │       ├── xs/
    │       ├── sm/
    │       ├── md/
    │       └── lg/
    └── src/
        ├── App.tsx
        ├── main.tsx
        ├── context/
        │   └── AuthContext.tsx
        ├── data/
        │   └── SuperHerosComplet.json
        ├── components/
        │   └── Navbar.tsx
        └── pages/
            ├── HeroListePage.tsx
            ├── HeroDetails.tsx
            ├── LoginPage.tsx
            └── RegisterPage.tsx


Technologies utilisées
Frontend

* React avec Vite
* TypeScript
* Material UI
* Context API pour l’authentification
* React Router

Outils

* Git / GitHub
* VS Code

Installation et lancement

* Cloner le projet :
git clone https://github.com/kyliandeffaut/SuperHero_Manager.git

* Installer les dépendances :
cd superhero-manager/frontend
npm install

Lancer l’application :
npm run dev

Le site sera ensuite disponible à l’adresse :
http://localhost:5173/

Difficultés rencontrées

* Le composant Grid de Material UI ne fonctionnait pas correctement, ce qui m’a obligé à créer la grille manuellement avec des Box et du CSS.
* Les chemins des images du JSON ne correspondaient pas exactement aux fichiers présents dans le projet. Il a fallu reconstruire dynamiquement les chemins pour que les images s’affichent.
* Le projet contenait beaucoup de fichiers, ce qui a nécessité l’utilisation d’un .gitignore propre pour l’envoyer correctement sur GitHub.
* Quelques ajustements ont été nécessaires au niveau du routage React et de la structure globale.

Axes d’amélioration

* Ajouter une base de données réelle (MongoDB)
* Pouvoir modifier ou ajouter des héros depuis l’interface
* Ajouter une barre de recherche ou des filtres
* Ajouter un mode sombre
* Développer un backend complet avec API REST
