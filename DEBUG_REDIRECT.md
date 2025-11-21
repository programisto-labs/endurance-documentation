# Guide de diagnostic pour la boucle de redirection

## 1. Vérifier les headers HTTP en détail

```bash
# Voir tous les headers de la réponse
curl -v https://endurancejs.com 2>&1 | head -50

# Voir uniquement les headers de redirection
curl -I https://endurancejs.com 2>&1 | grep -iE "(http|location|host)"

# Suivre les redirections (limité à 5 pour éviter la boucle infinie)
curl -I -L --max-redirs 5 https://endurancejs.com 2>&1 | grep -iE "(http|location)"
```

## 2. Tester en SSH directement sur le serveur Upsun

```bash
# Se connecter en SSH
upsun ssh

# Une fois connecté, tester le serveur localement
curl -v http://localhost:8888
curl -v http://127.0.0.1:8888

# Vérifier que le serveur écoute bien
netstat -tlnp | grep 8888
# ou
ss -tlnp | grep 8888

# Vérifier les processus Node.js
ps aux | grep -E "(node|serve|docusaurus)"

# Vérifier si le répertoire build existe
ls -la build/
ls -la build/index.html

# Tester avec le header Host pour simuler le domaine
curl -v -H "Host: endurancejs.com" http://localhost:8888
```

## 3. Vérifier les logs Upsun

```bash
# Voir les logs de l'application en temps réel
upsun log app

# Voir les logs d'erreur
upsun log error

# Voir les logs de déploiement
upsun log deploy

# Voir tous les logs
upsun log
```

## 4. Vérifier la configuration des routes Upsun

```bash
# Voir les routes configurées
upsun routes

# Voir les domaines configurés
upsun domains

# Voir les informations du projet
upsun project:info
```

## 5. Tester le build localement

```bash
# Build le site localement
DOCUSAURUS_URL="https://endurancejs.com" npm run build

# Vérifier que le build a bien été créé
ls -la build/

# Tester le serveur localement
npx serve -s build -l 3000

# Dans un autre terminal, tester
curl -v http://localhost:3000
```

## 6. Vérifier les fichiers générés par Docusaurus

```bash
# Vérifier le fichier index.html généré
cat build/index.html | grep -i "canonical\|base\|url"

# Vérifier les fichiers de configuration générés
ls -la build/
```

## 7. Tester avec différents outils

```bash
# Avec wget (si disponible)
wget --spider --server-response https://endurancejs.com 2>&1 | grep -iE "(http|location)"

# Avec httpie (si installé)
http -h https://endurancejs.com

# Vérifier les redirections avec un outil en ligne
# https://httpstatus.io/ ou https://redirect-checker.org/
```

## 8. Vérifier la configuration Docusaurus

```bash
# Vérifier la valeur de DOCUSAURUS_URL dans le build
grep -r "endurancejs.com" build/ | head -10

# Vérifier le fichier de config
cat docusaurus.config.js | grep -A 2 "url:"
```

## 9. Commandes de diagnostic rapide

```bash
# Test complet en une commande
echo "=== Test de redirection ===" && \
curl -I https://endurancejs.com 2>&1 | grep -iE "(http|location)" && \
echo "=== Test local (si SSH) ===" && \
echo "curl -v http://localhost:8888"
```

## 10. Vérifier les variables d'environnement sur le serveur

```bash
# En SSH sur Upsun
env | grep -iE "(doc|url|port|host)"
echo $PORT
echo $DOCUSAURUS_URL
```

