# 🌿 BotanIA - Encyclopédie Botanique Intelligente

> Une encyclopédie botanique open source alimentée par l'IA et les données scientifiques officielles, dédiée à la flore d'Île-de-France et au-delà.

[![License: GPL-3.0](https://img.shields.io/badge/License-GPL%203.0-blue.svg)](https://opensource.org/licenses/GPL-3.0)
[![Plant Data: CC-BY-SA 4.0](https://img.shields.io/badge/Data-CC--BY--SA%204.0-green.svg)](https://creativecommons.org/licenses/by-sa/4.0/)
[![Plants](https://img.shields.io/badge/Plantes-200+-success.svg)](./frontend/ftv-platane/client/public/catalogue.json)
[![Status](https://img.shields.io/badge/Statut-En%20développement-yellow.svg)]()

---

## 📸 Aperçu

> **Note :** Ajoute ici des captures d'écran de ton application
> 
> Exemple :
> ```markdown
> ![Interface de recherche](./docs/images/screenshot-recherche.png)
> ![Fiche détaillée d'une plante](./docs/images/screenshot-fiche.png)
> ```

---

## 🎯 À propos

**BotanIA** est une encyclopédie botanique moderne et collaborative qui combine :
- 🔬 **Rigueur scientifique** : Données issues de TAXREF v17, GBIF, INPN, Tela Botanica
- 🤖 **Intelligence Artificielle** : Enrichissement automatique avec Claude (Anthropic)
- 🌍 **Open Source** : Code et données 100% libres
- 🏙️ **Focus urbain** : Adapté à la gestion végétale des espaces publics parisiens

### Objectifs du projet

1. **Démocratiser** l'accès à l'information botanique de qualité
2. **Faciliter** la gestion des espaces verts urbains
3. **Créer** une référence francophone libre et collaborative
4. **Développer** des outils IA pour enrichir les connaissances botaniques

---

## ✨ Fonctionnalités actuelles

### 🔍 Recherche avancée
- Recherche par nom commun, nom scientifique, famille
- Filtres multi-critères (rusticité, exposition, floraison, etc.)
- Suggestions intelligentes en temps réel

### 📋 Gestion de données
- **200+ espèces** documentées avec 50+ champs de données
- Fiches techniques complètes (cycle de vie, exigences, gestion urbaine)
- Sources scientifiques citées pour chaque donnée

### 🎨 Interface moderne
- Design responsive (desktop, tablette, mobile)
- Composants UI shadcn/ui
- Thème clair/sombre
- Animations fluides (Framer Motion)

### 💾 Fonctionnalités utilisateur
- ⭐ Système de favoris
- 🏷️ Tags personnalisés
- 📤 Export PDF/CSV des sélections
- 🔖 Listes de plantes multiples

---

## 🚀 Démarrage rapide

### Prérequis

- **Node.js** 18+ ([Télécharger](https://nodejs.org/))
- **pnpm** (recommandé) ou npm

### Installation
```bash
# 1. Clone le repository
git clone https://github.com/BrainRot96/BotanIA.git
cd BotanIA/frontend/ftv-platane

# 2. Installe les dépendances
pnpm install

# 3. Lance en mode développement
pnpm dev

# 4. Ouvre ton navigateur
# L'app sera disponible sur http://localhost:3000
```

### Build pour production
```bash
pnpm build
```

Les fichiers optimisés seront dans `dist/`.

---

## 🗂️ Structure du projet
```
BotanIA/
├── README.md                    # Ce fichier
├── ROADMAP.md                   # Feuille de route du projet
├── CONTRIBUTING.md              # Guide de contribution
├── CODE_OF_CONDUCT.md           # Code de conduite
├── ARCHITECTURE.md              # Architecture technique
├── LICENSE                      # Licence GPL-3.0
│
├── docs/                        # Documentation
│   ├── SOURCES.md               # Sources de données scientifiques
│   └── DATA_STRUCTURE.md        # Structure JSON des plantes
│
└── frontend/                    # Application React
    └── ftv-platane/
        ├── client/              # Code source
        │   ├── public/
        │   │   └── catalogue.json   # 200 plantes
        │   └── src/
        │       ├── components/      # Composants React
        │       ├── contexts/        # State management
        │       ├── hooks/           # Custom hooks
        │       └── lib/             # Utilitaires
        ├── package.json
        └── vite.config.ts
```

---

## 🛠️ Stack technologique

### Frontend
- **Framework** : React 18 + TypeScript
- **Build** : Vite
- **Styling** : Tailwind CSS 4
- **UI Components** : shadcn/ui (Radix UI)
- **Animations** : Framer Motion
- **Export** : jsPDF + CSV

### Données
- **Format** : JSON structuré
- **Sources** : TAXREF v17, GBIF, INPN, Tela Botanica
- **Validation** : TypeScript strict

### Futur (Roadmap)
- **Backend** : FastAPI (Python 3.11+)
- **Base de données** : PostgreSQL 15+
- **Automatisation** : N8n (workflows)
- **IA** : Claude API (Anthropic)
- **Déploiement** : Docker + Docker Compose

---

## 📊 Données et sources

### Sources scientifiques officielles

Toutes les données de BotanIA proviennent de sources validées scientifiquement :

- 🇫🇷 **[TAXREF v17](https://inpn.mnhn.fr/telechargement/referentiels/taxref)** (MNHN) - Nomenclature taxonomique de référence
- 🌍 **[GBIF](https://www.gbif.org/)** - Global Biodiversity Information Facility
- 🇫🇷 **[INPN](https://inpn.mnhn.fr/)** - Inventaire National du Patrimoine Naturel
- 🌿 **[Tela Botanica](https://www.tela-botanica.org/)** - Réseau botanique francophone
- 🇬🇧 **[POWO (Kew)](https://powo.science.kew.org/)** - Plants of the World Online

**Voir [docs/SOURCES.md](./docs/SOURCES.md) pour la liste complète.**

### Licences des données

- **Code** : GPL-3.0 (libre et open source)
- **Données botaniques** : CC-BY-SA 4.0 (partage avec attribution)
- **Photos** : Variable selon sources (CC0, CC-BY, CC-BY-SA)

---

## 🤝 Contribuer

**BotanIA est un projet collaboratif ouvert à tous !**

### Types de contributions bienvenues

- 🌱 **Botanistes** : Validation scientifique, ajout d'espèces
- 📸 **Photographes** : Photos botaniques haute qualité
- 💻 **Développeurs** : Code, fonctionnalités, corrections
- 📝 **Rédacteurs** : Descriptions, traductions
- 🎨 **Designers** : Interface, UX/UI
- 🧪 **Testeurs** : Tests, bugs, suggestions

### Comment contribuer

1. **Lis le guide** : [CONTRIBUTING.md](./CONTRIBUTING.md)
2. **Lis le code de conduite** : [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md)
3. **Explore les Issues** : [Issues ouvertes](https://github.com/BrainRot96/BotanIA/issues)
4. **Rejoins les Discussions** : [Discussions](https://github.com/BrainRot96/BotanIA/discussions)

### Contribution rapide
```bash
# 1. Fork le projet sur GitHub

# 2. Clone ton fork
git clone https://github.com/TonUsername/BotanIA.git

# 3. Crée une branche
git checkout -b feature/ma-contribution

# 4. Fais tes modifications

# 5. Commit et push
git add .
git commit -m "feat: ajout fonctionnalité X"
git push origin feature/ma-contribution

# 6. Ouvre une Pull Request sur GitHub
```

---

## 🗓️ Roadmap

**Consulte la [ROADMAP.md](./ROADMAP.md) pour le plan détaillé.**

### Phase 1 : MVP (✅ En cours - Q4 2024)
- [x] Frontend React fonctionnel
- [x] 200 espèces documentées
- [x] Recherche et filtres avancés
- [x] Export PDF/CSV
- [ ] Déploiement en ligne

### Phase 2 : Enrichissement (Q1 2025)
- [ ] Backend FastAPI
- [ ] Base de données PostgreSQL
- [ ] API REST publique
- [ ] 1000 espèces
- [ ] Système de contribution

### Phase 3 : Intelligence (Q2-Q3 2025)
- [ ] Workflows N8n (synchronisation automatique)
- [ ] Enrichissement IA (Claude API)
- [ ] Reconnaissance d'images
- [ ] Application mobile

### Phase 4 : Expansion (Q4 2025)
- [ ] 5000 espèces
- [ ] Couverture France métropolitaine
- [ ] API GraphQL
- [ ] Communauté active (100+ contributeurs)

---

## 📈 Statistiques

- **🌱 Plantes** : 200+ espèces
- **👥 Contributeurs** : 1 (cherche des contributeurs !)
- **📊 Champs de données** : 50+ par plante
- **🔬 Sources scientifiques** : 20+ bases officielles
- **📜 Lignes de code** : ~10 000 (frontend)
- **📦 Dépendances** : 50+ packages npm

---

## 🏆 Crédits

### Créateur et mainteneur principal

**VicDaHood** (Victor Costil)
- 🌱 Jardinier à la Ville de Paris (DEVE)
- 🎓 En reconversion vers Développeur IA / Prompt Engineer
- 💼 [LinkedIn](https://www.linkedin.com/in/victor-costil/)
- 🐙 [GitHub](https://github.com/BrainRot96)

### Remerciements

- **Anthropic** pour Claude (IA utilisée pour enrichissement)
- **MNHN** pour TAXREF et INPN
- **Tela Botanica** pour la communauté et les données
- **GBIF** pour les occurrences géolocalisées
- **Kew Gardens** pour POWO
- **Communauté open source** (React, Vite, Tailwind, shadcn/ui)

---

## 📜 Licence

- **Code** : GPL-3.0 - Voir [LICENSE](./LICENSE)
- **Données** : CC-BY-SA 4.0

**En résumé :**
- ✅ Utilisation libre (commercial ou non)
- ✅ Modification libre
- ✅ Distribution libre
- ⚠️ Obligation de citer la source
- ⚠️ Partage à l'identique (même licence)
- ⚠️ Code dérivé doit rester open source

---

## 📞 Contact

- **Issues GitHub** : [Créer une issue](https://github.com/BrainRot96/BotanIA/issues)
- **Discussions** : [GitHub Discussions](https://github.com/BrainRot96/BotanIA/discussions)
- **Email** : contact@botania.org
- **Twitter/X** : [@BotanIA_Project](https://twitter.com/BotanIA_Project)

---

## 🌟 Soutenir le projet

### Moyens de soutenir BotanIA

- ⭐ **Star le repo** sur GitHub
- 🐛 **Signaler des bugs** via les Issues
- 💡 **Proposer des fonctionnalités**
- 🌱 **Ajouter des espèces** (botanistes)
- 📸 **Contribuer des photos**
- 💻 **Contribuer au code**
- 📢 **Partager le projet** sur les réseaux sociaux
- 📝 **Écrire un article** sur BotanIA

---

## 🔮 Vision long terme

**BotanIA vise à devenir :**

1. **La référence francophone** en données botaniques open source
2. **Un outil essentiel** pour les gestionnaires d'espaces verts
3. **Une plateforme collaborative** pour la communauté botanique
4. **Un exemple réussi** d'IA au service de la science citoyenne

**Objectif 2030 :**
- 50 000 espèces documentées
- Couverture Europe + Méditerranée
- 1000+ contributeurs actifs
- Référence mondiale en botanique urbaine

---

## 📚 Documentation

- 📖 [Guide de contribution](./CONTRIBUTING.md)
- 🗺️ [Feuille de route](./ROADMAP.md)
- 🏗️ [Architecture technique](./ARCHITECTURE.md)
- 📚 [Sources de données](./docs/SOURCES.md)
- 📐 [Structure des données](./docs/DATA_STRUCTURE.md)
- 🤝 [Code de conduite](./CODE_OF_CONDUCT.md)

---

## 🙏 Mentions spéciales

Ce projet a été rendu possible grâce à :
- **Manus AI** pour le développement rapide de l'interface
- **Claude (Anthropic)** pour l'assistance au code et à la rédaction
- **GitHub** pour l'hébergement et la collaboration
- **La communauté open source** pour les outils et bibliothèques

---

<p align="center">
  <strong>🌿 Fait avec passion pour la botanique et l'open source 🌿</strong><br>
  <sub>Si vous aimez ce projet, n'oubliez pas de lui donner une ⭐ !</sub>
</p>

<p align="center">
  <a href="https://github.com/BrainRot96/BotanIA/stargazers">
    <img src="https://img.shields.io/github/stars/BrainRot96/BotanIA?style=social" alt="GitHub Stars">
  </a>
  <a href="https://github.com/BrainRot96/BotanIA/network/members">
    <img src="https://img.shields.io/github/forks/BrainRot96/BotanIA?style=social" alt="GitHub Forks">
  </a>
  <a href="https://github.com/BrainRot96/BotanIA/watchers">
    <img src="https://img.shields.io/github/watchers/BrainRot96/BotanIA?style=social" alt="GitHub Watchers">
  </a>
</p>
