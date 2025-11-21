# 🤝 Guide de contribution - BotanIA

Merci de votre intérêt pour BotanIA ! Ce guide vous explique comment contribuer au projet.

---

## 🌟 Tous les types de contribution sont les bienvenus !

Vous n'avez pas besoin d'être développeur pour contribuer :

- 🌱 **Botanistes** : Validation scientifique, ajout d'espèces, corrections
- 📸 **Photographes** : Photos botaniques haute qualité
- 💻 **Développeurs** : Code, fonctionnalités, corrections de bugs
- 📝 **Rédacteurs** : Descriptions, conseils de culture, traductions
- 🎨 **Designers** : Interface, expérience utilisateur, identité visuelle
- 🧪 **Testeurs** : Tests, remontée de bugs, suggestions d'améliorations
- 📚 **Documenteurs** : Documentation, tutoriels, guides

---

## 🚀 Pour commencer

### 1. Lisez le Code de Conduite

Consultez [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) - nous attendons de tous les contributeurs un comportement respectueux et bienveillant.

### 2. Explorez le projet

- Lisez le [README.md](README.md) pour comprendre la vision
- Consultez la [ROADMAP.md](ROADMAP.md) pour voir où nous allons
- Parcourez les [Issues](https://github.com/VotrePseudo/BotanIA/issues) existantes
- Rejoignez les [Discussions](https://github.com/VotrePseudo/BotanIA/discussions)

### 3. Trouvez comment contribuer

Consultez les sections ci-dessous selon votre profil.

---

## 🌱 Contributions botaniques

### Ajouter une nouvelle espèce

**Prérequis :**
- La plante doit être validée scientifiquement (nom dans TAXREF ou GBIF)
- Avoir au minimum : nom scientifique, famille, rusticité, origine

**Processus :**

1. **Créez une Issue** avec le label `nouvelle-espèce`
   - Titre : `[Espèce] Nom scientifique - Nom commun`
   - Description : Nom scientifique, famille, zone géographique, sources

2. **Attendez validation** d'un botaniste du projet (délai : 2-7 jours)

3. **Une fois validée**, la fiche sera créée par l'équipe technique

**Format de données :** Voir [DATA_STRUCTURE.md](docs/DATA_STRUCTURE.md)

---

### Corriger/Enrichir une fiche existante

**Si vous constatez :**
- Erreur taxonomique (nom scientifique, famille)
- Informations manquantes ou incomplètes
- Erreurs dans les conseils de culture
- Photos manquantes ou de mauvaise qualité

**Processus :**

1. **Créez une Issue** avec le label `correction-fiche`
   - Titre : `[Correction] ID plante - Nom scientifique`
   - Description : Ce qui est incorrect + source de la correction

2. **Proposez la correction** avec sources scientifiques (TAXREF, Flora Gallica, etc.)

3. **Validation** par botaniste + intégration par équipe technique

---

### Valider scientifiquement des fiches

**Profil requis :**
- Diplôme en botanique, écologie végétale ou équivalent
- OU Expérience professionnelle reconnue (5+ ans)

**Processus :**

1. **Contactez-nous** via Issue avec label `devenir-validateur`
   - Présentez votre parcours
   - Domaines d'expertise (familles botaniques, zones géographiques)

2. **Après validation**, vous recevrez le rôle "Validateur Scientifique"

3. **Vous pourrez alors :**
   - Valider les propositions d'ajout d'espèces
   - Corriger directement les fiches
   - Participer au comité scientifique

---

## 📸 Contributions photographiques

### Critères photos acceptées

✅ **Format :** JPEG, PNG (min 1920x1080px)  
✅ **Licence :** CC-BY-SA 4.0 ou domaine public  
✅ **Qualité :** Nette, bien éclairée, contexte botanique clair  
✅ **Contenu :** Plante entière OU détail (fleur, feuille, fruit)  

❌ **Non accepté :** Photos floues, sur-exposées, avec watermark commercial

### Processus de soumission

1. **Créez une Issue** avec label `photo`
   - Titre : `[Photo] Nom scientifique - Type (plante entière/fleur/feuille)`
   - Uploadez la photo (ou lien vers stockage cloud)
   - Indiquez : Lieu, date, auteur, lic
