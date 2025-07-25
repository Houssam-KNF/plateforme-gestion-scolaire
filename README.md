# Plateforme de Gestion Scolaire

Ce projet est une plateforme SaaS multi-tenant conçue pour la gestion des écoles de formation professionnelle. Elle propose des outils pour l'administration des cours, des étudiants, des inscriptions et des notes, avec un environnement séparé et sécurisé pour chaque école.

---

##  Stack Technique
- **Frontend** : Angular & SCSS
- **Backend** : Node.js & Express.js
- **Base de données** : PostgreSQL
- **Authentification** : JWT (JSON Web Tokens)

---

## Prérequis

Avant de commencer, assurez-vous d’avoir les outils suivants installés sur votre machine :

- [Node.js](https://nodejs.org/) (version LTS recommandée)
- [Git](https://git-scm.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Angular CLI](https://angular.io/cli) :
  ```bash
  npm install -g @angular/cli
  ```

---

## Installation et Configuration

Suivez ces étapes pour configurer votre environnement de développement :

### 1. Cloner le projet

```bash
git clone https://github.com/VOTRE_NOM/plateforme-gestion-scolaire.git
cd plateforme-gestion-scolaire
```

### 2. Configuration du Backend (`/server`)

```bash
cd server
```

- Installer les dépendances :
  ```bash
  npm install
  ```

- Créer le fichier `.env` (en se basant sur `.env.example`) :
  ```bash
  # macOS/Linux
  cp .env.example .env

  # Windows
  copy .env.example .env
  ```

- Modifier le fichier `.env` pour y mettre vos propres informations :

```env
DB_USER=postgres
DB_HOST=localhost
DB_DATABASE=gestion_scolaire_db
DB_PASSWORD=VOTRE_MOT_DE_PASSE
DB_PORT=5432

JWT_SECRET=VOTRE_CLE_SECRETE_PERSONNELLE_TRES_LONGUE
```

- Créer la base de données PostgreSQL :
  ```bash
  psql -U postgres
  ```

  Dans la console PostgreSQL :
  ```sql
  CREATE DATABASE gestion_scolaire_db;
  \q
  ```

### 3. Configuration du Frontend (`/client`)

```bash
cd ../client
npm install
```

---

##  Lancer l'Application

Ouvrez **deux terminaux distincts** pour faire fonctionner le backend et le frontend.

### Terminal 1 – Lancer le Backend

```bash
cd server
npm run dev
```

> L’API sera disponible à l’adresse : `http://localhost:5000`

---

### Terminal 2 – Lancer le Frontend

```bash
cd client
ng serve
```

> L’application Angular sera disponible à l’adresse : `http://localhost:4200`

---

## Votre environnement est prêt !

Vous pouvez maintenant commencer à développer et tester votre plateforme de gestion scolaire
