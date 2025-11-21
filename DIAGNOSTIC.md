# Commandes de diagnostic pour Upsun

## 1. Vérifier la résolution DNS

```bash
# Vérifier que le domaine pointe vers Upsun
dig endurancejs.com
dig www.endurancejs.com

# Vérifier les enregistrements A et CNAME
nslookup endurancejs.com
nslookup www.endurancejs.com

# Vérifier avec curl depuis le serveur
curl -I https://endurancejs.com
curl -I http://endurancejs.com
curl -I https://www.endurancejs.com
```

## 2. Vérifier les routes Upsun (depuis le serveur SSH)

```bash
# Vérifier les routes configurées
upsun relationships

# Vérifier les variables d'environnement liées aux routes
env | grep -i route
env | grep -i platform
env | grep -i upsun

# Vérifier les variables PLATFORM_ROUTES (si disponibles)
echo $PLATFORM_ROUTES
```

## 3. Tester les connexions HTTP depuis le serveur

```bash
# Tester la connexion au serveur local
curl -v http://localhost:8888
curl -v http://127.0.0.1:8888

# Tester avec les headers pour simuler le domaine
curl -v -H "Host: endurancejs.com" http://localhost:8888
curl -v -H "Host: www.endurancejs.com" http://localhost:8888

# Tester les redirections
curl -I -L https://endurancejs.com
curl -I -L http://endurancejs.com
curl -I -L https://www.endurancejs.com
```

## 4. Vérifier les logs en temps réel

```bash
# Voir les logs de l'application
tail -f /var/log/app.log

# Voir les logs système
tail -f /var/log/syslog

# Voir les logs d'erreur
tail -f /var/log/error.log
```

## 5. Vérifier les processus et ports

```bash
# Vérifier que le serveur écoute bien
netstat -tlnp | grep 8888
ss -tlnp | grep 8888

# Vérifier les processus Node.js
ps aux | grep node
ps aux | grep docusaurus
```

## 6. Tester avec curl depuis votre machine locale

```bash
# Tester avec verbose pour voir les redirections
curl -v https://endurancejs.com
curl -v http://endurancejs.com

# Suivre les redirections
curl -L -v https://endurancejs.com

# Tester avec différents headers
curl -v -H "Host: endurancejs.com" https://endurancejs.com
```

## 7. Vérifier les certificats SSL

```bash
# Vérifier le certificat SSL
openssl s_client -connect endurancejs.com:443 -servername endurancejs.com

# Vérifier la chaîne de certificats
openssl s_client -showcerts -connect endurancejs.com:443
```

## 8. Vérifier la configuration Upsun

```bash
# Voir la configuration actuelle
upsun project:info

# Voir les routes actives
upsun routes

# Voir les domaines configurés
upsun domains
```

