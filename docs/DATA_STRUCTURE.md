# 📐 Structure des Données - BotanIA

> Documentation technique complète de la structure JSON du catalogue de plantes

---

## 🎯 Vue d'ensemble

Le catalogue BotanIA est structuré en 6 sections hiérarchiques pour chaque plante, suivant une nomenclature botanique rigoureuse.

**Format :** JSON  
**Encodage :** UTF-8  
**Nombre de plantes actuel :** 200 (en expansion vers 1000+)

---

## 📦 Structure du catalogue
```json
{
  "catalogue": {
    "titre": "Catalogue des Plantes Adaptées à Paris",
    "description": "Sélection de X espèces végétales adaptées au contexte urbain parisien",
    "plantes": [ /* Array de plantes */ ]
  }
}
```

---

## 🌿 Structure d'une fiche plante

Chaque plante contient :
- `id` : number (identifiant unique séquentiel)
- `fiche_technique` : object (6 sections)

---

## 📋 I. IDENTITÉ
```json
"I_IDENTITE": {
  "nom_vernaculaire": string,
  "nom_latin": string,
  "famille": string,
  "genre": string,
  "espece": string,
  "cultivar": string,
  "categorie": string
}
```

### Champs détaillés :

#### `nom_vernaculaire` : string
**Description :** Nom commun français

**Exemples :**
```
"Platane commun"
"Tilleul à petites feuilles"
"Érable champêtre"
```

---

#### `nom_latin` : string
**Description :** Nom scientifique binomial (ou trinomial)

**Format :** `Genre espece` ou `Genre × espece` (hybride)

**Exemples :**
```
"Platanus × acerifolia"
"Tilia cordata"
"Acer campestre"
```

**Sources :** TAXREF v17, POWO (Kew)

---

#### `famille` : string
**Description :** Famille botanique (classification APG IV)

**Exemples :**
```
"Platanaceae"
"Malvaceae"
"Sapindaceae"
```

---

#### `genre` : string
**Exemples :**
```
"Platanus"
"Tilia"
"Acer"
```

---

#### `espece` : string
**Exemples :**
```
"× acerifolia" (hybride)
"cordata"
"campestre"
```

---

#### `cultivar` : string
**Description :** Cultivar ou statut de l'espèce

**Exemples :**
```
"Hybride naturel (P. orientalis × P. occidentalis)"
"Espèce type"
"'Columnare'" (cultivar colonnaire)
```

---

#### `categorie` : string
**Valeurs autorisées :**
```
"Arbre"
"Arbuste"
"Vivace"
"Annuelle"
"Graminée"
"Grimpante"
```

---

## 🌸 II. CYCLE DE VIE
```json
"II_CYCLE_DE_VIE": {
  "caduc_persistant": string,
  "type": string,
  "floraison_mois": string[],
  "couleur_floraison": string
}
```

### Champs détaillés :

#### `caduc_persistant` : string
**Valeurs autorisées :**
```
"Caduc"
"Persistant"
"Semi-persistant"
```

---

#### `type` : string
**Valeurs autorisées :**
```
"Vivace"
"Annuelle"
"Bisannuelle"
```

**Note :** Pour arbres/arbustes = toujours "Vivace" (ligneux)

---

#### `floraison_mois` : string[]
**Description :** Mois de floraison

**Format :** Array de mois avec majuscule

**Exemples :**
```json
["Avril", "Mai"]
["Juin", "Juillet"]
["Mars", "Avril", "Mai", "Juin"]
```

---

#### `couleur_floraison` : string
**Description :** Couleur et caractéristiques des fleurs

**Exemples :**
```
"Vert-jaune (inflorescences globuleuses discrètes)"
"Jaune pâle (très parfumée)"
"Blanc rosé"
"Bleu violacé"
```

---

## 🌡️ III. EXIGENCES
```json
"III_EXIGENCES": {
  "rusticite_celsius": number,
  "echelle_rusticite": string,
  "resistance_chaleur": string,
  "besoins_eau": string,
  "exposition": string,
  "sol_necessaire": string,
  "origines_espece": string
}
```

### Champs détaillés :

#### `rusticite_celsius` : number
**Description :** Température minimale supportée (en °C)

**Exemples :**
```
-25
-30
-15
-12
```

---

#### `echelle_rusticite` : string
**Description :** Zone climatique principale

**Valeurs autorisées :**
```
"EURO-SIBÉRIAN"
"MÉDITERRANÉEN"
"OCÉANIQUE"
"CONTINENTAL"
"MONTAGNARD"
```

---

#### `resistance_chaleur` : string
**Valeurs autorisées :**
```
"Élevé"
"Moyen"
"Faible"
```

---

#### `besoins_eau` : string
**Valeurs autorisées :**
```
"Élevé"
"Moyen"
"Faible"
```

---

#### `exposition` : string
**Description :** Besoins en lumière

**Exemples :**
```
"Plein Soleil"
"Plein Soleil / Mi-Ombre"
"Mi-Ombre"
"Ombre"
```

---

#### `sol_necessaire` : string
**Description :** Type de sol requis (texte libre descriptif)

**Exemples :**
```
"Profond, frais à humide, tolère sols compactés et calcaires"
"Tous types, tolère calcaire et sols secs"
"Drainant, léger, frais"
```

---

#### `origines_espece` : string
**Description :** Origine géographique de l'espèce

**Exemples :**
```
"Hybride horticole (Europe, XVIIe siècle)"
"Europe tempérée"
"Europe, Asie Mineure"
"Asie (Chine, Japon)"
"Amérique du Nord"
```

---

## 🌿 IV. CARACTÉRISTIQUES
```json
"IV_CARACTERISTIQUES": {
  "odorante": boolean,
  "mellifere_intensite": string,
  "envahissante_potentiel": string,
  "developpement_bac": string,
  "resistance_pietinement": string,
  "resistance_intemperies": string,
  "taille": {
    "hauteur_min_m": number,
    "hauteur_max_m": number,
    "largeur_min_m": number,
    "largeur_max_m": number
  }
}
```

### Champs détaillés :

#### `odorante` : boolean
**Valeurs :**
```
true  // Plante odorante
false // Non odorante
```

---

#### `mellifere_intensite` : string
**Valeurs autorisées :**
```
"Forte"
"Moyenne"
"Faible"
"Nulle"
```

---

#### `envahissante_potentiel` : string
**Valeurs autorisées :**
```
"Élevé" (liste noire)
"Moyen" (liste grise)
"Faible"
```

---

#### `developpement_bac` : string
**Valeurs autorisées :**
```
"Oui"
"Non"
"Possible (avec contraintes)"
```

---

#### `resistance_pietinement` : string
**Valeurs autorisées :**
```
"Élevé"
"Moyen"
"Faible"
```

---

#### `resistance_intemperies` : string
**Description :** Résistances diverses (texte libre)

**Exemples :**
```
"Élevé (Vent, Sécheresse temporaire, Pollution atmosphérique)"
"Élevé (Vent, Gel)"
"Moyen (Vent fort déconseillé)"
```

---

#### `taille` : object

**Sous-champs :**
- `hauteur_min_m` : number (hauteur minimum en mètres)
- `hauteur_max_m` : number (hauteur maximum en mètres)
- `largeur_min_m` : number (largeur minimum en mètres)
- `largeur_max_m` : number (largeur maximum en mètres)

**Exemple :**
```json
{
  "hauteur_min_m": 20,
  "hauteur_max_m": 30,
  "largeur_min_m": 15,
  "largeur_max_m": 25
}
```

---

## 🏙️ V. GESTION URBAINE
```json
"V_GESTION_URBAINE": {
  "facilite_entretien_score": number,
  "justification_entretien": string,
  "capacite_drainante": string,
  "resistance_pollution": string,
  "impact_biodiversite": string,
  "taux_couverture_ombrage": string,
  "perennite_sujet": string
}
```

### Champs détaillés :

#### `facilite_entretien_score` : number
**Description :** Score de facilité d'entretien

**Échelle :**
```
1 = Très facile (entretien minimal)
2 = Facile
3 = Moyen
4 = Difficile
5 = Très difficile (entretien intensif)
```

**Note :** Échelle inversée par rapport à la nouvelle structure (1 = meilleur)

---

#### `justification_entretien` : string
**Description :** Explication détaillée de l'entretien requis

**Format :** Commence par "Synthèse :" suivi de 2-4 phrases

**Exemple :**
```
"Synthèse : Taille de formation nécessaire en jeune âge, élagage structurel 
tous les 5-7 ans. Sensibilité modérée à l'anthracnose en climat humide IDF, 
mais résilience élevée. Nettoyage saisonnier des feuilles et fruits requis."
```

---

#### `capacite_drainante` : string
**Valeurs autorisées :**
```
"Élevé"
"Moyen"
"Faible"
```

**Contexte :** Gestion des eaux pluviales urbaines

---

#### `resistance_pollution` : string
**Description :** Résistance pollution urbaine (texte descriptif)

**Exemples :**
```
"Élevé (Atmosphère urbaine, tolérance modérée au sel de déneigement)"
"Élevé (Atmosphère urbaine, sel de déneigement)"
"Moyen (Sensible ozone et particules fines)"
```

---

#### `impact_biodiversite` : string
**Description :** Contribution à la biodiversité urbaine

**Exemples :**
```
"Moyen (Cavités pour nidification oiseaux et chiroptères, peu de ressources 
nectarifères, abri estival important)"

"Élevé (Mellifère exceptionnel, nidification, abri pour insectes)"

"Faible (Peu d'interactions avec la faune locale)"
```

---

#### `taux_couverture_ombrage` : string
**Description :** Capacité à créer de l'ombre

**Exemples :**
```
"Élevé (Couronne large et dense, ombrage optimal en été)"
"Moyen (Couronne arrondie, ombrage léger)"
"Faible (Feuillage clairsemé)"
```

---

#### `perennite_sujet` : string
**Description :** Durée de vie de la plante

**Format :** "Qualificatif (X-Y ans [conditions])"

**Exemples :**
```
"Longue (150-300 ans en conditions urbaines favorables)"
"Très longue (200-500 ans)"
"Moyenne (50-80 ans)"
"Courte (20-30 ans)"
```

---

## 🍃 VI. SANTÉ & USAGES
```json
"VI_SANTE_USAGES": {
  "comestible": string,
  "mode_consommation_note": string,
  "toxique_humains": boolean,
  "toxique_animaux": boolean,
  "alerte_toxicite_detail": string,
  "bouturage_difficulte": string
}
```

### Champs détaillés :

#### `comestible` : string
**Valeurs autorisées :**
```
"Oui"
"Non"
"Partiellement" (préciser parties)
```

---

#### `mode_consommation_note` : string
**Description :** Détails sur la consommation

**Exemples :**
```
"Fleurs en infusion (tilleul) - Note 4/5"
"Fruits comestibles crus ou cuits - Note 3/5"
"Non applicable" (si non comestible)
```

---

#### `toxique_humains` : boolean
**Valeurs :**
```
true  // Toxique pour humains
false // Non toxique
```

---

#### `toxique_animaux` : boolean
**Valeurs :**
```
true  // Toxique pour animaux
false // Non toxique
```

---

#### `alerte_toxicite_detail` : string
**Description :** Détails sur la toxicité ou absence de toxicité

**Format :** Si toxique, commence par "**ATTENTION :**"

**Exemples :**
```
"**ATTENTION :** Les poils des fruits et jeunes feuilles peuvent provoquer 
des irritations cutanées et respiratoires chez les personnes sensibles. 
Port de gants recommandé lors de la manipulation."

"Aucune toxicité connue."
```

---

#### `bouturage_difficulte` : string
**Valeurs autorisées :**
```
"Facile"
"Moyen"
"Difficile"
```

---

## ✅ Validation et contraintes

### Champs obligatoires

**Minimum requis pour une fiche valide :**
- Toutes les sections (I à VI) doivent être présentes
- Tous les champs de chaque section sont obligatoires
- Format strict selon TypeScript

### Types TypeScript
```typescript
interface Catalogue {
  catalogue: {
    titre: string;
    description: string;
    plantes: Plant[];
  };
}

interface Plant {
  id: number;
  fiche_technique: FicheTechnique;
}

interface FicheTechnique {
  I_IDENTITE: Identite;
  II_CYCLE_DE_VIE: CycleDeVie;
  III_EXIGENCES: Exigences;
  IV_CARACTERISTIQUES: Caracteristiques;
  V_GESTION_URBAINE: GestionUrbaine;
  VI_SANTE_USAGES: SanteUsages;
}

interface Identite {
  nom_vernaculaire: string;
  nom_latin: string;
  famille: string;
  genre: string;
  espece: string;
  cultivar: string;
  categorie: 'Arbre' | 'Arbuste' | 'Vivace' | 'Annuelle' | 'Graminée' | 'Grimpante';
}

interface CycleDeVie {
  caduc_persistant: 'Caduc' | 'Persistant' | 'Semi-persistant';
  type: 'Vivace' | 'Annuelle' | 'Bisannuelle';
  floraison_mois: string[];
  couleur_floraison: string;
}

interface Exigences {
  rusticite_celsius: number;
  echelle_rusticite: 'EURO-SIBÉRIAN' | 'MÉDITERRANÉEN' | 'OCÉANIQUE' | 'CONTINENTAL' | 'MONTAGNARD';
  resistance_chaleur: 'Élevé' | 'Moyen' | 'Faible';
  besoins_eau: 'Élevé' | 'Moyen' | 'Faible';
  exposition: string;
  sol_necessaire: string;
  origines_espece: string;
}

interface Caracteristiques {
  odorante: boolean;
  mellifere_intensite: 'Forte' | 'Moyenne' | 'Faible' | 'Nulle';
  envahissante_potentiel: 'Élevé' | 'Moyen' | 'Faible';
  developpement_bac: 'Oui' | 'Non' | string;
  resistance_pietinement: 'Élevé' | 'Moyen' | 'Faible';
  resistance_intemperies: string;
  taille: {
    hauteur_min_m: number;
    hauteur_max_m: number;
    largeur_min_m: number;
    largeur_max_m: number;
  };
}

interface GestionUrbaine {
  facilite_entretien_score: 1 | 2 | 3 | 4 | 5;
  justification_entretien: string;
  capacite_drainante: 'Élevé' | 'Moyen' | 'Faible';
  resistance_pollution: string;
  impact_biodiversite: string;
  taux_couverture_ombrage: string;
  perennite_sujet: string;
}

interface SanteUsages {
  comestible: 'Oui' | 'Non' | string;
  mode_consommation_note: string;
  toxique_humains: boolean;
  toxique_animaux: boolean;
  alerte_toxicite_detail: string;
  bouturage_difficulte: 'Facile' | 'Moyen' | 'Difficile';
}
```

---

## 📊 Exemple complet
```json
{
  "id": 1,
  "fiche_technique": {
    "I_IDENTITE": {
      "nom_vernaculaire": "Platane commun",
      "nom_latin": "Platanus × acerifolia",
      "famille": "Platanaceae",
      "genre": "Platanus",
      "espece": "× acerifolia",
      "cultivar": "Hybride naturel (P. orientalis × P. occidentalis)",
      "categorie": "Arbre"
    },
    "II_CYCLE_DE_VIE": {
      "caduc_persistant": "Caduc",
      "type": "Vivace",
      "floraison_mois": ["Avril", "Mai"],
      "couleur_floraison": "Vert-jaune (inflorescences globuleuses discrètes)"
    },
    "III_EXIGENCES": {
      "rusticite_celsius": -25,
      "echelle_rusticite": "EURO-SIBÉRIAN",
      "resistance_chaleur": "Élevé",
      "besoins_eau": "Moyen",
      "exposition": "Plein Soleil",
      "sol_necessaire": "Profond, frais à humide, tolère sols compactés et calcaires",
      "origines_espece": "Hybride horticole (Europe, XVIIe siècle)"
    },
    "IV_CARACTERISTIQUES": {
      "odorante": false,
      "mellifere_intensite": "Faible",
      "envahissante_potentiel": "Faible",
      "developpement_bac": "Non",
      "resistance_pietinement": "Élevé",
      "resistance_intemperies": "Élevé (Vent, Sécheresse temporaire, Pollution atmosphérique)",
      "taille": {
        "hauteur_min_m": 20,
        "hauteur_max_m": 30,
        "largeur_min_m": 15,
        "largeur_max_m": 25
      }
    },
    "V_GESTION_URBAINE": {
      "facilite_entretien_score": 3,
      "justification_entretien": "Synthèse : Taille de formation nécessaire en jeune âge, élagage structurel tous les 5-7 ans. Sensibilité modérée à l'anthracnose (Apiognomonia veneta) en climat humide IDF, mais résilience élevée. Nettoyage saisonnier des feuilles et fruits (akènes) requis.",
      "capacite_drainante": "Moyen",
      "resistance_pollution": "Élevé (Atmosphère urbaine, tolérance modérée au sel de déneigement)",
      "impact_biodiversite": "Moyen (Cavités pour nidification oiseaux et chiroptères, peu de ressources nectarifères, abri estival important)",
      "taux_couverture_ombrage": "Élevé (Couronne large et dense, ombrage optimal en été)",
      "perennite_sujet": "Longue (150-300 ans en conditions urbaines favorables)"
    },
    "VI_SANTE_USAGES": {
      "comestible": "Non",
      "mode_consommation_note": "Non applicable",
      "toxique_humains": false,
      "toxique_animaux": false,
      "alerte_toxicite_detail": "**ATTENTION :** Les poils des fruits et jeunes feuilles peuvent provoquer des irritations cutanées et respiratoires chez les personnes sensibles. Port de gants recommandé lors de la manipulation.",
      "bouturage_difficulte": "Moyen"
    }
  }
}
```

---

## 🔄 Évolution du schéma

**Version actuelle :** v1.0 (200 plantes)

**Prochaines évolutions :**
- v1.1 : Ajout photos (array d'URLs avec métadonnées)
- v1.2 : Ajout synonymes taxonomiques
- v2.0 : Intégration données phylogénétiques, prédictions changement climatique

---

<p align="center">
  <strong>🌿 Structure rigoureuse = Données fiables 🌿</strong><br>
  <sub>Basé sur catalogue.json réel de BotanIA</sub>
</p>
