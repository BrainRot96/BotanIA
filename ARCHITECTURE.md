# 🏗️ Architecture Technique - BotanIA

> Documentation complète de l'architecture système, stack technologique, et infrastructure

---

## 🎯 Vue d'ensemble

BotanIA est conçu comme une application web moderne, scalable, et open source avec une architecture orientée données et automatisation.

### Principes architecturaux :
- **Modulaire** : Composants découplés et réutilisables
- **Scalable** : Prêt pour 50 000+ espèces
- **Open Source** : 100% du code et des données libres
- **API-First** : Données accessibles via API REST/GraphQL
- **Data-Driven** : Sources scientifiques validées uniquement

---

## 📊 Architecture globale
```
┌─────────────────────────────────────────────────────────────┐
│                    UTILISATEURS FINAUX                       │
│         (Web, Mobile, API Consumers, Contributeurs)          │
└──────────────────┬──────────────────────────────────────────┘
                   │
        ┌──────────▼──────────┐
        │   CDN (CloudFlare)  │  ← Cache statique
        └──────────┬──────────┘
                   │
┌──────────────────▼─────────────────────────────────────────┐
│                    FRONTEND LAYER                           │
│  ┌────────────────────────────────────────────────────┐    │
│  │  React App (TypeScript + Tailwind CSS)            │    │
│  │  - Interface de recherche                         │    │
│  │  - Fiches détaillées                              │    │
│  │  - Système de favoris (localStorage)              │    │
│  │  - Export PDF/CSV                                 │    │
│  └────────────────┬───────────────────────────────────┘    │
└────────────────────┼──────────────────────────────────────┘
                     │ HTTPS/REST API
┌────────────────────▼──────────────────────────────────────┐
│                   BACKEND LAYER (à venir)                  │
│  ┌─────────────────────────────────────────────────┐      │
│  │  API REST (FastAPI / Python 3.11+)              │      │
│  │  - Endpoints CRUD plantes                       │      │
│  │  - Recherche full-text (PostgreSQL)             │      │
│  │  - Authentification contributeurs               │      │
│  │  - Validation botanistes                        │      │
│  └────────────────┬────────────────────────────────┘      │
└────────────────────┼─────────────────────────────────────┘
                     │
┌────────────────────▼─────────────────────────────────────┐
│                  DATABASE LAYER                           │
│  ┌──────────────────────────────────────────────┐        │
│  │  PostgreSQL 15+ (avec extensions)            │        │
│  │  - Tables : plants, families, photos         │        │
│  │  - Full-text search (tsvector + GIN index)   │        │
│  │  - Réplication master/slave                  │        │
│  └──────────────────────────────────────────────┘        │
└───────────────────────────────────────────────────────────┘
                     │
┌────────────────────▼─────────────────────────────────────┐
│               AUTOMATION LAYER (N8n)                      │
│  ┌──────────────────────────────────────────────┐        │
│  │  N8n Workflows                                │        │
│  │  - Sync TAXREF (hebdo)                       │        │
│  │  - Sync GBIF (quotidien)                     │        │
│  │  - Enrichissement IA (Claude API)            │        │
│  │  - Monitoring + Alertes                      │        │
│  └──────────────────────────────────────────────┘        │
└───────────────────────────────────────────────────────────┘
                     │
┌────────────────────▼─────────────────────────────────────┐
│              EXTERNAL SERVICES                            │
│  - TAXREF v17 (MNHN)                                     │
│  - GBIF API                                              │
│  - Tela Botanica API                                     │
│  - Claude API (Anthropic)                                │
│  - AWS S3 (photos)                                       │
└───────────────────────────────────────────────────────────┘
```

---

## 💻 Stack Technologique

### Frontend (Actuel)

**Framework :** React 18+ avec TypeScript  
**Build Tool :** Vite  
**Styling :** Tailwind CSS 3+  
**UI Components :** shadcn/ui  
**State Management :** React Hooks (useState, useContext)  
**Storage :** localStorage (favoris, tags, listes)  
**Export :** jsPDF + jspdf-autotable (PDF), CSV natif  

**Structure :**
```
frontend/
├── src/
│   ├── components/
│   │   ├── CatalogueAdvanced.tsx    # Recherche + filtres
│   │   ├── PlantDetail.tsx          # Fiche détaillée
│   │   ├── FavoritesList.tsx        # Gestion favoris
│   │   └── ...
│   ├── contexts/
│   │   ├── FavoriteListsContext.tsx # Listes multiples
│   │   ├── PlantTagsContext.tsx     # Tags personnalisés
│   │   └── PlantSelectionContext.tsx # Export PDF
│   ├── hooks/
│   │   └── useSearchEngine.ts       # Moteur de recherche
│   ├── lib/
│   │   ├── pdfGenerator.ts          # Export PDF
│   │   └── usageIcons.ts            # Icônes usages
│   └── data/
│       └── catalogue.json           # 200 plantes (200+ prochainement)
├── public/
└── package.json
```

**Dépendances principales :**
```json
{
  "react": "^18.2.0",
  "typescript": "^5.0.0",
  "tailwindcss": "^3.3.0",
  "@radix-ui/react-*": "^1.0.0",  // shadcn/ui
  "jspdf": "^2.5.1",
  "jspdf-autotable": "^3.8.0",
  "lucide-react": "^0.263.1"       // Icônes
}
```

---

### Backend (À développer - Phase 2)

**Framework :** FastAPI (Python 3.11+)  
**ORM :** SQLAlchemy 2.0  
**Migrations :** Alembic  
**Validation :** Pydantic v2  
**Auth :** JWT (PyJWT)  
**Tests :** pytest + pytest-cov  

**Structure prévue :**
```
backend/
├── app/
│   ├── api/
│   │   ├── v1/
│   │   │   ├── endpoints/
│   │   │   │   ├── plants.py        # CRUD plantes
│   │   │   │   ├── search.py        # Recherche avancée
│   │   │   │   ├── contribute.py    # Contributions
│   │   │   │   └── auth.py          # Authentification
│   │   │   └── router.py
│   │   └── deps.py                  # Dépendances communes
│   ├── models/
│   │   ├── plant.py
│   │   ├── user.py
│   │   └── contribution.py
│   ├── schemas/
│   │   └── plant.py                 # Pydantic models
│   ├── services/
│   │   ├── plant_service.py
│   │   ├── search_service.py
│   │   └── validation_service.py
│   ├── core/
│   │   ├── config.py                # Settings
│   │   ├── security.py              # Auth + JWT
│   │   └── database.py              # DB connection
│   └── main.py                      # FastAPI app
├── tests/
├── alembic/                         # Migrations DB
├── requirements.txt
└── Dockerfile
```

**Endpoints API prévus :**
```
GET    /api/v1/plants              # Liste plantes (pagination)
GET    /api/v1/plants/{id}         # Détail plante
POST   /api/v1/plants/search       # Recherche avancée
GET    /api/v1/families            # Liste familles
GET    /api/v1/stats               # Statistiques

POST   /api/v1/contribute/plant    # Proposer plante
POST   /api/v1/contribute/photo    # Soumettre photo
POST   /api/v1/contribute/correction # Corriger fiche

POST   /api/v1/auth/register       # Inscription
POST   /api/v1/auth/login          # Connexion
GET    /api/v1/auth/me             # Profil utilisateur
```

---

### Base de données (À développer - Phase 2)

**SGBD :** PostgreSQL 15+  
**Extensions :**
- `pg_trgm` : Recherche full-text trigram
- `unaccent` : Recherche insensible aux accents
- `uuid-ossp` : Génération UUID

**Schéma principal :**
```sql
-- Table principale des plantes
CREATE TABLE plants (
    id SERIAL PRIMARY KEY,
    
    -- Identité
    nom_vernaculaire TEXT NOT NULL,
    nom_latin VARCHAR(255) NOT NULL UNIQUE,
    famille VARCHAR(100) NOT NULL,
    genre VARCHAR(100) NOT NULL,
    espece VARCHAR(100) NOT NULL,
    cultivar TEXT,
    categorie VARCHAR(50) NOT NULL,
    
    -- Cycle de vie
    caduc_persistant VARCHAR(50),
    type_plante VARCHAR(50),
    floraison_mois TEXT[],
    couleur_floraison TEXT,
    
    -- Exigences
    rusticite_celsius INTEGER,
    echelle_rusticite VARCHAR(50),
    resistance_chaleur VARCHAR(50),
    besoins_eau VARCHAR(50),
    exposition TEXT,
    sol_necessaire TEXT,
    origines_espece TEXT,
    
    -- Caractéristiques
    odorante BOOLEAN,
    mellifere_intensite VARCHAR(50),
    envahissante_potentiel VARCHAR(50),
    developpement_bac VARCHAR(50),
    resistance_pietinement VARCHAR(50),
    resistance_intemperies TEXT,
    hauteur_min_m DECIMAL,
    hauteur_max_m DECIMAL,
    largeur_min_m DECIMAL,
    largeur_max_m DECIMAL,
    
    -- Gestion urbaine
    facilite_entretien_score INTEGER CHECK (facilite_entretien_score BETWEEN 1 AND 5),
    justification_entretien TEXT,
    capacite_drainante VARCHAR(50),
    resistance_pollution TEXT,
    impact_biodiversite TEXT,
    taux_couverture_ombrage TEXT,
    perennite_sujet TEXT,
    
    -- Santé & usages
    comestible VARCHAR(50),
    mode_consommation_note TEXT,
    toxique_humains BOOLEAN,
    toxique_animaux BOOLEAN,
    alerte_toxicite_detail TEXT,
    bouturage_difficulte VARCHAR(50),
    
    -- Métadonnées
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    validated BOOLEAN DEFAULT FALSE,
    validator_id INTEGER REFERENCES users(id),
    
    -- Recherche full-text
    search_vector tsvector GENERATED ALWAYS AS (
        setweight(to_tsvector('french', coalesce(nom_vernaculaire, '')), 'A') ||
        setweight(to_tsvector('french', coalesce(nom_latin, '')), 'A') ||
        setweight(to_tsvector('french', coalesce(famille, '')), 'B')
    ) STORED
);

-- Index pour performances
CREATE INDEX idx_plants_famille ON plants(famille);
CREATE INDEX idx_plants_categorie ON plants(categorie);
CREATE INDEX idx_plants_nom_latin ON plants(nom_latin);
CREATE INDEX idx_plants_search_vector ON plants USING GIN(search_vector);
CREATE INDEX idx_plants_rusticite ON plants(rusticite_celsius);

-- Table photos
CREATE TABLE photos (
    id SERIAL PRIMARY KEY,
    plant_id INTEGER REFERENCES plants(id) ON DELETE CASCADE,
    url TEXT NOT NULL,
    source VARCHAR(255),  -- GBIF, iNaturalist, Tela Botanica
    source_id VARCHAR(255),
    licence VARCHAR(50),  -- CC0, CC-BY, CC-BY-SA
    auteur TEXT,
    date_prise DATE,
    type_photo VARCHAR(50), -- plante_entiere, fleur, feuille, fruit, ecorce
    validated BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_photos_plant_id ON photos(plant_id);

-- Table familles (cache)
CREATE TABLE families (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(100) UNIQUE NOT NULL,
    ordre VARCHAR(100),
    description TEXT,
    nb_especes_botania INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Table utilisateurs
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    hashed_password TEXT NOT NULL,
    username VARCHAR(100) UNIQUE NOT NULL,
    full_name TEXT,
    role VARCHAR(50) DEFAULT 'contributor',  -- contributor, validator, admin
    expertise TEXT[],  -- Familles botaniques d'expertise
    bio TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Table contributions
CREATE TABLE contributions (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    type VARCHAR(50), -- new_plant, correction, photo
    plant_id INTEGER REFERENCES plants(id),
    data JSONB,  -- Données proposées
    status VARCHAR(50) DEFAULT 'pending',  -- pending, approved, rejected
    validator_id INTEGER REFERENCES users(id),
    validator_comment TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    reviewed_at TIMESTAMP
);

-- Table synonymes taxonomiques
CREATE TABLE synonyms (
    id SERIAL PRIMARY KEY,
    plant_id INTEGER REFERENCES plants(id) ON DELETE CASCADE,
    synonyme_latin VARCHAR(255) NOT NULL,
    source VARCHAR(255),  -- TAXREF, POWO, Flora Gallica
    created_at TIMESTAMP DEFAULT NOW()
);

-- Table sources (traçabilité)
CREATE TABLE sources (
    id SERIAL PRIMARY KEY,
    plant_id INTEGER REFERENCES plants(id) ON DELETE CASCADE,
    field_name VARCHAR(100) NOT NULL,  -- Champ concerné
    source_name VARCHAR(255) NOT NULL, -- TAXREF, GBIF, etc.
    source_url TEXT,
    retrieved_at TIMESTAMP DEFAULT NOW()
);
```

**Requêtes optimisées :**
```sql
-- Recherche full-text
SELECT * FROM plants 
WHERE search_vector @@ plainto_tsquery('french', 'rose');

-- Recherche par famille
SELECT * FROM plants 
WHERE famille = 'Rosaceae' 
ORDER BY nom_latin;

-- Plantes rustiques pour climat parisien
SELECT * FROM plants 
WHERE rusticite_celsius <= -15 
AND resistance_chaleur IN ('Élevé', 'Moyen');

-- Statistiques par famille
SELECT famille, COUNT(*) as nb_especes
FROM plants
WHERE validated = TRUE
GROUP BY famille
ORDER BY nb_especes DESC;
```

---

### Automatisation (N8n)

**Workflows principaux :**

#### 1. Synchronisation TAXREF (hebdomadaire)
```
Cron : Tous les lundis 3h
  ↓
HTTP Request : Vérifier nouvelle version TAXREF
  ↓
IF nouvelle version :
  ├─> Download fichier TAXREF
  ├─> Parse CSV
  ├─> Compare avec PostgreSQL
  ├─> Générer rapport différences
  └─> Slack : Notification équipe
```

#### 2. Enrichissement GBIF (quotidien)
```
Cron : Tous les jours 2h
  ↓
PostgreSQL : SELECT plantes sans photos
  ↓
Loop : Pour chaque plante (max 50/jour)
  ↓
  GBIF API : Recherche occurrences + photos
  ↓
  IF photos trouvées :
    ├─> Télécharger photos (max 5/plante)
    ├─> Upload AWS S3
    └─> PostgreSQL : INSERT photos table
  ↓
Slack : "50 plantes enrichies (photos)"
```

#### 3. Génération descriptions IA (quotidien)
```
Cron : Tous les jours 4h
  ↓
PostgreSQL : SELECT plantes description manquante (LIMIT 20)
  ↓
Loop : Pour chaque plante
  ↓
  Claude API : Générer description botanique
  ↓
  PostgreSQL : UPDATE justification_entretien
  ↓
GitHub : Créer PR avec changements
  ↓
Slack : "20 descriptions générées, validation requise"
```

#### 4. Monitoring + Alertes
```
Cron : Toutes les 5 minutes
  ↓
HTTP Request : Healthcheck API (/health)
  ↓
IF erreur OU latence > 3s :
  ├─> Slack : ALERTE site down/lent
  └─> Email : admin@botania.org
  
Cron : Tous les jours 9h
  ↓
PostgreSQL : Statistiques quotidiennes
  ↓
Slack : Rapport (nb plantes, contributions, nouveaux users)
```

---

## 🐳 Containerisation (Docker)

### docker-compose.yml (complet)
```yaml
version: '3.8'

services:
  # Base de données PostgreSQL
  postgres:
    image: postgres:15-alpine
    container_name: botania-db
    environment:
      POSTGRES_DB: botania
      POSTGRES_USER: ${DB_USER}
      POSTGRES_PASSWORD: ${DB_PASSWORD}
    volumes:
      - postgres_data:/var/lib/postgresql/data
      - ./database/init.sql:/docker-entrypoint-initdb.d/init.sql
    ports:
      - "5432:5432"
    networks:
      - botania-network
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U ${DB_USER}"]
      interval: 10s
      timeout: 5s
      retries: 5

  # Backend API FastAPI
  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile
    container_name: botania-api
    environment:
      DATABASE_URL: postgresql://${DB_USER}:${DB_PASSWORD}@postgres:5432/botania
      SECRET_KEY: ${SECRET_KEY}
      ANTHROPIC_API_KEY: ${ANTHROPIC_API_KEY}
    ports:
      - "8000:8000"
    depends_on:
      postgres:
        condition: service_healthy
    networks:
      - botania-network
    volumes:
      - ./backend:/app
    command: uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload

  # Frontend React
  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile
    container_name: botania-web
    ports:
      - "3000:3000"
    depends_on:
      - backend
    networks:
      - botania-network
    environment:
      VITE_API_URL: http://backend:8000

  # N8n pour automatisation
  n8n:
    image: n8nio/n8n:latest
    container_name: botania-n8n
    ports:
      - "5678:5678"
    environment:
      - N8N_HOST=0.0.0.0
      - N8N_PORT=5678
      - N8N_PROTOCOL=http
      - NODE_ENV=production
      - WEBHOOK_URL=http://localhost:5678/
      - GENERIC_TIMEZONE=Europe/Paris
    volumes:
      - n8n_data:/home/node/.n8n
      - ./n8n-workflows:/workflows
    networks:
      - botania-network

  # Redis pour cache (optionnel)
  redis:
    image: redis:7-alpine
    container_name: botania-cache
    ports:
      - "6379:6379"
    networks:
      - botania-network
    volumes:
      - redis_data:/data

  # Nginx reverse proxy
  nginx:
    image: nginx:alpine
    container_name: botania-proxy
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx/nginx.conf:/etc/nginx/nginx.conf
      - ./nginx/ssl:/etc/nginx/ssl
    depends_on:
      - frontend
      - backend
    networks:
      - botania-network

volumes:
  postgres_data:
  n8n_data:
  redis_data:

networks:
  botania-network:
    driver: bridge
```

---

## 🚀 Déploiement

### Environnement de développement (local)
```bash
# 1. Cloner le repo
git clone https://github.com/TonPseudo/BotanIA.git
cd BotanIA

# 2. Configuration environnement
cp .env.example .env
# Éditer .env avec tes valeurs

# 3. Lancer avec Docker
docker-compose up -d

# 4. Accès
# Frontend : http://localhost:3000
# Backend API : http://localhost:8000/docs
# N8n : http://localhost:5678
```

---

### Environnement de production

**Option 1 : VPS (DigitalOcean, OVH)**
```bash
# 1. Serveur Ubuntu 22.04 LTS (4 GB RAM min)
ssh root@votreserveur.com

# 2. Installation Docker + Docker Compose
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh

# 3. Clone repo
git clone https://github.com/TonPseudo/BotanIA.git
cd BotanIA

# 4. Configuration
cp .env.example .env
nano .env  # Configurer

# 5. Build et lancement
docker-compose -f docker-compose.prod.yml up -d

# 6. SSL avec Certbot (Let's Encrypt)
docker-compose exec nginx certbot --nginx -d botania.org
```

**Option 2 : AWS (scalable)**

**Services utilisés :**
- **EC2** : Backend API (t3.medium)
- **RDS** : PostgreSQL managé
- **S3** : Stockage photos
- **CloudFront** : CDN frontend
- **ECS** : Container orchestration
- **Route 53** : DNS

**Coût estimé :** ~50-100€/mois

---

## 📊 Monitoring & Observabilité

### Prometheus + Grafana
```yaml
# docker-compose.monitoring.yml
services:
  prometheus:
    image: prom/prometheus:latest
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml
      - prometheus_data:/prometheus
    ports:
      - "9090:9090"

  grafana:
    image: grafana/grafana:latest
    ports:
      - "3001:3000"
    environment:
      - GF_SECURITY_ADMIN_PASSWORD=${GRAFANA_PASSWORD}
    volumes:
      - grafana_data:/var/lib/grafana
```

**Métriques surveillées :**
- Uptime API
- Latence requêtes (p50, p95, p99)
- Taux erreurs 4xx/5xx
- Nombre de requêtes/sec
- Temps de réponse PostgreSQL
- Utilisation CPU/RAM/Disque

---

## 🔒 Sécurité

### Mesures de sécurité

**Authentification :**
- JWT avec refresh tokens
- Rate limiting (10 req/sec max par IP)
- CORS configuré strictement

**Base de données :**
- Mots de passe hashés (bcrypt)
- SQL injection protection (ORM)
- Backups quotidiens automatiques

**API :**
- HTTPS obligatoire
- API keys pour accès externe
- Validation Pydantic sur tous les inputs

**Infrastructure :**
- Firewall (ufw) sur VPS
- Fail2ban contre brute force
- Updates automatiques sécurité

---

## 📈 Scalabilité

### Stratégie de scaling

**Horizontal (Phase 4 - 50k+ espèces) :**
- Load balancer (Nginx/HAProxy)
- Plusieurs instances backend (Docker Swarm ou Kubernetes)
- Réplication PostgreSQL (master/slave)
- CDN pour images (CloudFlare ou AWS CloudFront)

**Vertical (Phase 2-3 - 2k-10k espèces) :**
- Augmenter RAM serveur
- SSD NVMe pour PostgreSQL
- Redis cache pour requêtes fréquentes

**Optimisations :**
- Pagination stricte (max 100 résultats/page)
- Cache Redis 1h pour listes familles/stats
- Images optimisées (WebP, lazy loading)
- API GraphQL pour requêtes complexes

---

## 🧪 Tests

### Stratégie de tests

**Frontend :**
- Unit tests : Vitest
- Component tests : React Testing Library
- E2E tests : Playwright

**Backend :**
- Unit tests : pytest
- Integration tests : TestClient FastAPI
- Load tests : Locust

**Couverture cible :** 80%+ code critique

---

## 📚 Documentation API

**Swagger UI :** Automatique avec FastAPI  
**URL :** https://api.botania.org/docs

**ReDoc :** https://api.botania.org/redoc

**Exemples de code :**
```python
# Python
import requests

response = requests.get("https://api.botania.org/v1/plants/1")
plant = response.json()
```
```javascript
// JavaScript
const response = await fetch('https://api.botania.org/v1/plants/1');
const plant = await response.json();
```

---

## 🔄 CI/CD (GitHub Actions)
```yaml
# .github/workflows/ci.yml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test-backend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-python@v4
        with:
          python-version: '3.11'
      - run: pip install -r backend/requirements.txt
      - run: pytest backend/tests --cov

  test-frontend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run test
      - run: npm run build

  deploy-production:
    needs: [test-backend, test-frontend]
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to production
        run: |
          ssh ${{ secrets.PROD_SERVER }} 'cd /app/BotanIA && git pull && docker-compose up -d --build'
```

---

## 🗓️ Roadmap Technique

### Phase 1 (Actuel)
- [x] Frontend React fonctionnel
- [x] Recherche locale (JSON)
- [x] Export PDF/CSV
- [x] Système favoris + tags

### Phase 2 (3 mois)
- [ ] Backend FastAPI complet
- [ ] Migration PostgreSQL
- [ ] API REST publique
- [ ] Docker Compose production

### Phase 3 (6 mois)
- [ ] N8n workflows actifs
- [ ] Système de contribution
- [ ] Authentification utilisateurs
- [ ] Monitoring Prometheus/Grafana

### Phase 4 (12 mois)
- [ ] API GraphQL
- [ ] Applications mobiles (React Native)
- [ ] Kubernetes (si scaling nécessaire)
- [ ] IA reconnaissance images

---

<p align="center">
  <strong>🌿 Architecture évolutive pour une référence mondiale 🌿</strong><br>
  <sub>De 200 plantes locales à 50 000 espèces mondiales</sub>
</p>
