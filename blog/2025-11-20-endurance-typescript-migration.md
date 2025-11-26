---
slug: endurance-typescript-migration
title: Endurance migre vers TypeScript et unifie son repository
authors: [florianduport]
tags: [endurance, typescript, migration]
---

# Endurance migre vers TypeScript et unifie son repository

Nous sommes ravis d'annoncer une évolution majeure d'Endurance ! Le framework a migré vers TypeScript et a unifié son architecture en un seul repository.

## 🎯 Changements majeurs

### Migration vers TypeScript

Endurance est maintenant entièrement écrit en **TypeScript**, offrant une meilleure expérience de développement avec :
- **Type safety** : Détection d'erreurs à la compilation
- **Meilleure autocomplétion** : Support IDE amélioré
- **Documentation intégrée** : Types comme documentation
- **Refactoring plus sûr** : Modifications de code plus confiantes

### Repository unifié

Fini la séparation entre "Endurance Core" et le CLI ! Tout est maintenant dans un seul repository **Endurance** avec le package NPM `@programisto/endurance` qui contient :
- La bibliothèque principale du framework
- Le CLI intégré
- Le serveur MCP pour l'intégration avec les assistants IA

## 🚀 Nouvelles fonctionnalités

### Serveur MCP (Model Context Protocol)

Endurance inclut maintenant un **serveur MCP** qui permet aux assistants IA (comme Cursor, Claude Desktop, etc.) d'interagir avec vos projets Endurance. Le serveur MCP offre :
- Génération automatique de code (routers, schémas, modules, etc.)
- Compréhension de la structure du projet
- Liste des événements et variables d'environnement
- Création de composants suivant les conventions Endurance

### Nouvelles APIs basées sur des classes

Les APIs ont été refactorisées avec des classes TypeScript :

- **`EnduranceRouter`** : Classe abstraite à étendre pour créer vos routers
- **`EnduranceSchema`** : Classe abstraite utilisant Typegoose pour vos modèles
- **`EnduranceAuth`** et **`EnduranceAccessControl`** : Classes abstraites pour l'authentification
- Instances exportées : `enduranceListener`, `enduranceConsumer`, `enduranceCron`, etc.

## 📦 Migration depuis l'ancienne version

Si vous utilisez encore l'ancienne version JavaScript :

1. **Mise à jour du package** :
   ```bash
   npm install @programisto/endurance@latest
   ```

2. **Migration des imports** :
   - Remplacer `endurance-core/lib/router.js` par `@programisto/endurance`
   - Utiliser les nouvelles classes au lieu des fonctions

3. **Conversion TypeScript** :
   - Renommer vos fichiers `.js` en `.ts`
   - Ajouter les types TypeScript appropriés

## 📚 Documentation mise à jour

Toute la documentation a été mise à jour pour refléter ces changements :
- Exemples en TypeScript
- Nouvelles APIs documentées
- Guide du serveur MCP
- Tutoriels de migration

## 🎉 Ce qui reste identique

Les concepts fondamentaux d'Endurance restent les mêmes :
- Architecture modulaire
- Modules indépendants
- Système d'événements
- Support Kafka et AMQP
- Système de CRON

## 🔮 Prochaines étapes

Nous continuons à améliorer Endurance avec :
- Plus d'outils MCP
- Amélioration des types TypeScript
- Nouvelles fonctionnalités basées sur vos retours

## 💬 Retour d'expérience

Nous serions ravis d'avoir votre retour sur cette migration ! N'hésitez pas à :
- Créer des issues sur [GitHub](https://github.com/programisto-labs/endurance)
- Partager vos expériences
- Proposer des améliorations

Merci de faire partie de la communauté Endurance ! 🚀






