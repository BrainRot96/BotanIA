# 📚 Sources de Données Scientifiques - BotanIA

> Liste exhaustive des bases de données officielles utilisées pour garantir la rigueur scientifique de BotanIA

---

## 🎯 Principes de sélection des sources

BotanIA s'appuie **exclusivement** sur des sources scientifiques validées :

✅ **Bases de données officielles** (gouvernements, institutions scientifiques)  
✅ **Publications peer-reviewed** (articles scientifiques validés)  
✅ **Herbiers et jardins botaniques reconnus** (MNHN, Kew, etc.)  
✅ **Communautés scientifiques établies** (Tela Botanica, iNaturalist validé)  

❌ **Non utilisé :** Wikipedia (sauf validation croisée), blogs personnels, forums sans validation

---

## 🇫🇷 Sources Françaises (Priorité Absolue)

### 1. TAXREF v17 - MNHN

**Organisation :** Muséum National d'Histoire Naturelle  
**URL :** https://inpn.mnhn.fr/telechargement/referentiels/taxref  
**Type :** Nomenclature taxonomique officielle française  
**Contenu :** 200 000+ taxons (faune + flore)  
**Format :** CSV téléchargeable  
**Licence :** Libre (usage scientifique et commercial autorisé)  

**Utilisé pour :**
- Nomenclature scientifique de référence
- Validation des noms d'espèces
- Statut (indigène, naturalisé, cultivé, invasif)
- Synonymes taxonomiques
- Classification hiérarchique (famille, genre, espèce)

**Mise à jour :** Annuelle (version 17 publiée en 2024)

---

### 2. INPN - Inventaire National du Patrimoine Naturel

**Organisation :** Muséum National d'Histoire Naturelle  
**URL :** https://inpn.mnhn.fr/  
**API :** https://openobs.mnhn.fr/  
**Type :** Base de données nationale biodiversité  

**Utilisé pour :**
- Répartition géographique en France
- Statut de protection légale
- Écologie (habitats, altitudes)
- Occurrences géolocalisées
- Liens vers fiches TAXREF

**Couverture :** France métropolitaine + DOM-TOM

---

### 3. Tela Botanica

**Organisation :** Association réseau botanique francophone  
**URL :** https://www.tela-botanica.org/  
**API :** https://api.tela-botanica.org/  
**Base principale :** BDTFX (Base de Données de la Flore de France)  

**Utilisé pour :**
- Noms vernaculaires français
- Descriptions botaniques détaillées
- Photos validées par la communauté (500 000+)
- Écologie et répartition
- Synonymie nomenclaturale

**Communauté :** 50 000+ membres (botanistes, naturalistes, amateurs)  
**Licence :** CC-BY-SA pour les photos et données

---

### 4. Flora Gallica

**Auteurs :** Société Botanique de France  
**URL :** https://www.tela-botanica.org/bdtfx-nn-1-24308  
**Type :** Flore descriptive et illustrée de France  

**Utilisé pour :**
- Descriptions morphologiques précises
- Clés de détermination
- Écologie détaillée
- Phytosociologie (associations végétales)

**Référence :** Nomenclature alignée sur TAXREF

---

### 5. Conservatoire Botanique National du Bassin Parisien (CBNBP)

**Organisation :** Établissement public  
**URL :** https://cbnbp.mnhn.fr/  
**Type :** Conservation flore sauvage Île-de-France  

**Utilisé pour :**
- Flore indigène d'Île-de-France
- Statuts de rareté régionale
- Menaces locales
- Atlas de répartition IDF

**Territoire :** Île-de-France + Centre-Val de Loire + Haute-Normandie

---

### 6. Liste Rouge UICN France

**Organisation :** Comité français de l'UICN + MNHN  
**URL :** https://uicn.fr/liste-rouge-france/  
**Type :** Évaluation statut de conservation  

**Utilisé pour :**
- Statut UICN (LC, NT, VU, EN, CR, EW, EX)
- Critères de menace détaillés
- Tendances des populations
- Actions de conservation

**Couverture :** Flore vasculaire de France métropolitaine (complet)  
**Dernière évaluation :** 2019 (mise à jour en cours)

---

### 7. Florif - Flore d'Île-de-France

**Organisation :** CBN Bassin parisien + associations naturalistes  
**URL :** http://www.florif.fr/  
**Type :** Atlas floristique régional  

**Utilisé pour :**
- Cartes de répartition communales IDF
- Dates d'observation
- Statuts de rareté régionale
- Habitats préférentiels locaux

**Données :** 1 million+ d'observations depuis 1800

---

## 🌍 Sources Européennes

### 8. Plants of the World Online (POWO) - Kew Gardens

**Organisation :** Royal Botanic Gardens, Kew (UK)  
**URL :** https://powo.science.kew.org/  
**API :** https://powo.science.kew.org/about-the-data  
**Type :** Base taxonomique mondiale de référence  

**Utilisé pour :**
- Validation nomenclature internationale
- Synonymes taxonomiques
- Distribution mondiale
- Liens vers herbiers digitalisés

**Couverture :** 1,3 million+ noms scientifiques  
**Autorité :** Standard international pour taxonomie végétale

---

### 9. Euro+Med PlantBase

**Organisation :** Consortium jardins botaniques européens  
**URL :** https://europlusmed.org/  
**Type :** Checklist flore d'Europe et Méditerranée  

**Utilisé pour :**
- Validation taxonomique Europe
- Distribution par pays
- Statuts nomenclaturaux
- Synonymie complète

**Couverture :** 170 000+ taxons validés

---

### 10. Flora Europaea

**Organisation :** Projet académique européen  
**Type :** Flore de référence Europe (5 volumes)  

**Utilisé pour :**
- Descriptions morphologiques de référence
- Clés de détermination
- Distribution historique
- Classification (bien que partiellement obsolète)

**Note :** En cours de remplacement par Euro+Med PlantBase

---

## 🌏 Sources Mondiales

### 11. GBIF - Global Biodiversity Information Facility

**Organisation :** Réseau international gouvernemental  
**URL :** https://www.gbif.org/  
**API :** https://www.gbif.org/developer/summary  
**Type :** Base mondiale d'occurrences géolocalisées  

**Utilisé pour :**
- Occurrences géolocalisées (2+ milliards)
- Photos scientifiques validées
- Données d'observation citoyenne
- Distribution mondiale détaillée
- Métadonnées (date, observateur, institution)

**Filtrage utilisé pour BotanIA :**
- Latitude : 48.5 à 49.5 (Île-de-France)
- Longitude : 1.5 à 3.5
- Has Coordinate : true
- Has Image : true (quand photos nécessaires)

**API endpoint exemple :**
```
https://api.gbif.org/v1/occurrence/search?
  decimalLatitude=48.5,49.5&
  decimalLongitude=1.5,3.5&
  hasCoordinate=true&
  hasGeospatialIssue=false
```

**Licence :** Variable selon les datasets (majoritairement CC0, CC-BY)

---

### 12. World Flora Online (WFO)

**Organisation :** Consortium international  
**URL :** https://www.worldfloraonline.org/  
**Type :** Flore mondiale consensus scientifique  

**Utilisé pour :**
- Validation nomenclature mondiale
- Liens entre bases taxonomiques
- Descriptions standardisées
- Images types (holotypes)

**Couverture :** 1,3 million+ noms de plantes  
**Objectif :** Référence mondiale unifiée d'ici 2030

---

### 13. The Plant List

**Organisation :** Kew + Missouri Botanical Garden  
**URL :** http://www.theplantlist.org/  
**Type :** Checklist mondiale (archivé 2013, mais référence)  

**Utilisé pour :**
- Synonymes historiques
- Noms acceptés vs obsolètes
- Liens vers bases taxonomiques

**Note :** Remplacé par POWO, mais utile pour validation croisée

---

### 14. Catalogue of Life

**Organisation :** Species 2000 + ITIS  
**URL :** https://www.catalogueoflife.org/  
**Type :** Catalogue taxonomique mondial  

**Utilisé pour :**
- Hiérarchie taxonomique complète
- Classification APG IV (Angiosperm Phylogeny Group)
- Liens inter-bases

**Couverture :** 2 million+ espèces (tous règnes)

---

## 📷 Sources Photos et Images

### 15. iNaturalist

**Organisation :** California Academy of Sciences + National Geographic  
**URL :** https://www.inaturalist.org/  
**API :** https://api.inaturalist.org/v1/  
**Type :** Observations citoyennes géolocalisées  

**Utilisé pour :**
- Photos validées par communauté scientifique
- Observations géolocalisées récentes
- Phénologie (dates floraison, fructification)
- Variabilité morphologique

**Critère qualité :** Grade "Research" uniquement (2+ validations expertes)  
**Licence :** CC-BY, CC-BY-NC (selon contributeurs)

---

### 16. Wikimedia Commons - Catégorie Botanique

**Organisation :** Wikimedia Foundation  
**URL :** https://commons.wikimedia.org/  
**Type :** Média libre et ouvert  

**Utilisé pour :**
- Photos haute qualité domaine public ou CC
- Illustrations botaniques historiques
- Schémas anatomiques

**Licence :** CC0, CC-BY, CC-BY-SA majoritairement  
**Validation :** Croiser avec GBIF pour exactitude taxonomique

---

### 17. Pl@ntNet

**Organisation :** CIRAD + INRAE + INRIA  
**URL :** https://identify.plantnet.org/  
**API :** https://my.plantnet.org/  
**Type :** Base d'images pour reconnaissance IA  

**Utilisé pour :**
- Photos botaniques détaillées (fleur, feuille, fruit, écorce)
- Données d'entraînement IA (futur)
- Géolocalisation des observations

**Communauté :** Millions d'observations validées

---

## 📊 Sources de Données Complémentaires

### 18. Index Seminum - Jardins Botaniques

**Organisations :** Réseau mondial jardins botaniques  
**Exemples :**
- Jardin des Plantes Paris : https://www.jardindesplantesdeparis.fr/
- Royal Botanic Gardens Kew : https://www.kew.org/
- Missouri Botanical Garden : https://www.missouribotanicalgarden.org/

**Utilisé pour :**
- Cultivars et variétés horticoles
- Rusticité validée en culture
- Descriptions de cultures vivantes
- Collections spécialisées

---

### 19. Base SOPHY - Phytosociologie

**Organisation :** Université Aix-Marseille  
**URL :** http://sophy.u-3mrs.fr/  
**Type :** Base phytosociologique française  

**Utilisé pour :**
- Associations végétales naturelles
- Habitats préférentiels
- Conditions écologiques optimales
- Espèces compagnes

**Données :** 40 000+ relevés phytosociologiques

---

### 20. IPNI - International Plant Names Index

**Organisation :** Kew + Harvard + Melbourne  
**URL :** https://www.ipni.org/  
**Type :** Index nomenclatural mondial  

**Utilisé pour :**
- Auteurs taxonomiques (ex: "L." pour Linné)
- Dates de publication des noms
- Basionymes et combinaisons
- Validation nomenclaturale stricte

---

## 🔬 Hiérarchie de validation

### Processus de validation des données BotanIA :
```
1. TAXONOMIE :
   TAXREF v17 (base) 
   → Validation POWO (Kew) 
   → Croiser Euro+Med si divergence

2. NOMS VERNACULAIRES :
   Tela Botanica (français)
   → TAXREF (validation)
   → Livres flore référence (Flora Gallica)

3. DISTRIBUTION :
   GBIF (occurrences géolocalisées)
   → INPN (France)
   → Florif (Île-de-France)
   → CBNBP (validation locale)

4. CONSERVATION :
   Liste Rouge UICN France
   → INPN (protection légale)

5. PHOTOS :
   GBIF (priorité - validées scientifiquement)
   → iNaturalist (grade "Research")
   → Tela Botanica (communauté)
   → Wikimedia Commons (validation taxonomique requise)

6. ÉCOLOGIE :
   Tela Botanica + Flora Gallica
   → SOPHY (phytosociologie)
   → GBIF (occurrences)
```

---

## ✅ Critères de fiabilité des sources

### Sources de niveau 1 (Référence absolue)
- TAXREF v17
- Plants of the World Online (Kew)
- Liste Rouge UICN France
- GBIF (datasets validés)

### Sources de niveau 2 (Haute confiance)
- Tela Botanica
- Flora Gallica
- INPN
- Euro+Med PlantBase

### Sources de niveau 3 (Validation requise)
- iNaturalist (grade Research)
- Wikimedia Commons (avec vérification)
- Jardins botaniques
- Publications scientifiques récentes

---

## 🔄 Mise à jour des sources

### Fréquence de synchronisation :

- **TAXREF :** Annuelle (nouvelle version chaque année)
- **GBIF :** Hebdomadaire (nouvelles occurrences)
- **Tela Botanica :** Mensuelle (nouvelles photos/descriptions)
- **Liste Rouge UICN :** Tous les 3-5 ans (réévaluations)
- **POWO (Kew) :** Continue (mises à jour taxonomiques)

### Workflow automatisé (N8n - à venir) :
```
Cron : Tous les lundis 3h du matin
  ↓
1. TAXREF : Vérifier nouvelle version
  → Si oui : Télécharger + comparer avec BDD
  → Générer rapport différences
  
2. GBIF : Récupérer nouvelles occurrences IDF
  → Filtrer espèces manquantes
  → Proposer ajout via Issue GitHub
  
3. Liste Rouge : Vérifier mises à jour
  → Mettre à jour statuts conservation
  
4. Slack : Rapport hebdomadaire envoyé
```

---

## 📖 Citation des sources

### Dans les fiches BotanIA :

Chaque donnée cite sa source :
```json
{
  "nom_scientifique": "Rosa canina L.",
  "source_nomenclature": "TAXREF v17 - CD_NOM 114236",
  "statut_conservation": "LC (Liste Rouge UICN France 2019)",
  "photos": [
    {
      "url": "...",
      "source": "GBIF occurrence 123456789",
      "licence": "CC-BY 4.0",
      "auteur": "Jean Dupont"
    }
  ]
}
```

---

## 🙏 Remerciements

BotanIA remercie toutes les institutions, chercheurs, et communautés qui maintiennent ces bases de données ouvertes et de qualité :

- **MNHN** : Pour TAXREF et INPN, piliers de la biodiversité française
- **Kew Gardens** : Pour POWO, standard mondial
- **Tela Botanica** : Pour 25 ans de travail communautaire
- **GBIF** : Pour 2+ milliards d'occurrences en libre accès
- **UICN France** : Pour les évaluations de conservation
- Et tous les contributeurs de ces bases (milliers de botanistes, naturalistes, citoyens)

---

## 📜 Licences et conformité

BotanIA respecte scrupuleusement les licences de toutes les sources :

- **TAXREF :** Licence Ouverte / Open Licence Etalab 2.0
- **GBIF :** CC0, CC-BY selon datasets
- **Tela Botanica :** CC-BY-SA 3.0 ou 4.0
- **POWO (Kew) :** CC-BY 4.0
- **iNaturalist :** Variable (CC0, CC-BY, CC-BY-NC)

**Toutes les sources sont citées conformément à leurs termes de licence.**

---

<p align="center">
  <strong>🌿 Rigueur scientifique + Open Data = BotanIA 🌿</strong><br>
  <sub>La qualité des données dépend de la qualité des sources</sub>
</p>
