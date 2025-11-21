# Diagnostic approfondi - Boucle de redirection

## Problème identifié

La redirection pointe vers `https://endurancejs.com/` (elle-même), créant une boucle infinie.

## Commandes de diagnostic à exécuter en SSH sur Upsun

```bash
# 1. Se connecter en SSH
upsun ssh

# 2. Vérifier que le serveur répond localement
curl -v http://localhost:8888
curl -v http://127.0.0.1:8888

# 3. Vérifier les processus en cours
ps aux | grep -E "(node|serve|http-server)"

# 4. Vérifier que le build existe
ls -la build/
ls -la build/index.html

# 5. Tester avec le header Host pour simuler le domaine
curl -v -H "Host: endurancejs.com" http://localhost:8888

# 6. Vérifier les variables d'environnement
env | grep -iE "(port|host|url)"

# 7. Vérifier les logs en temps réel
tail -f /var/log/app.log
```

## Hypothèses à vérifier

1. **Le serveur `serve` fait-il une redirection ?**
   - Tester avec `http-server` à la place
   - Vérifier les options de `serve`

2. **Le build Docusaurus contient-il des redirections ?**
   - Vérifier le fichier `build/index.html`
   - Chercher les balises `<meta http-equiv="refresh">` ou des redirections JavaScript

3. **Upsun fait-il une redirection automatique ?**
   - Vérifier les logs Upsun
   - Vérifier la configuration des routes

4. **Le problème vient-il de Cloudflare ?**
   - Les headers montrent `server: cloudflare`
   - Vérifier la configuration Cloudflare

## Solution de contournement à tester

Si le problème persiste, essayer de :
1. Utiliser `http-server` au lieu de `serve`
2. Désactiver temporairement Cloudflare
3. Vérifier si le problème vient du build Docusaurus

