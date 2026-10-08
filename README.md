# Māmā · les promos du fenua — TEST VIRTUEL

Version de démonstration de l'application, à montrer à un futur client sur son téléphone. Elle fonctionne comme la vraie app (promos, filtres par commune et secteur, espace commerçant avec publication de promos et **photo prise avec le téléphone**), mais sans serveur : ce qu'un commerçant publie reste sur son appareil.

Un bandeau **TEST VIRTUEL** est affiché en permanence, un tampon « Test virtuel » figure sur l'écran d'accueil, et la note en bas des écrans précise que les enseignes citées ne sont pas partenaires.

## Ce qu'il y a dedans

- 13 promotions réelles : Hyper U Pirae (relevées le 6 octobre 2026 sur hyperutahiti.com) et Tahiti Pas Cher Punaauia, Arue et Taravao (relevées le 5 octobre sur tahitipascher.pf).
- Chaque promo a un petit dessin ; si un fichier photo du même nom est présent (voir ci-dessous), la photo remplace le dessin.
- Espace commerçant : identifiant `hyper-u-pirae`, `tahiti-pas-cher-punaauia`, `tahiti-pas-cher-arue` ou `tahiti-pas-cher-taravao`, mot de passe `demo`.

## Mettre en ligne (dépôt séparé, pour ne pas toucher à la vraie app)

1. Sur GitHub, **New repository**, nom `mama-test` (public), **Create repository**.
2. **Add file → Upload files**, déposer tous les fichiers de ce dossier (ils sont à plat, sans sous-dossier), **Commit changes**.
3. **Settings → Pages → Deploy from a branch → main / (root) → Save**. Au bout d'une ou deux minutes, l'adresse est `https://brian-1844.github.io/mama-test/`.

Le client ouvre ce lien sur son téléphone. Il peut l'ajouter à son écran d'accueil : l'icône s'appelle « Māmā test ».

## Montrer la démo à un client (3 minutes)

1. **Promos** : faire défiler, filtrer par commune et par secteur, toucher une promo pour ouvrir la fiche du commerce.
2. **Mon commerce** : se connecter avec `hyper-u-pirae` / `demo`.
3. **Publier une promo** : saisir un produit, les deux prix, la date, puis **Prendre ou choisir une photo** : l'appareil photo du téléphone s'ouvre. Publier.
4. Revenir sur **Promos** : la promo et sa photo apparaissent dans la liste. Expliquer que, dans la vraie version, tout le monde la voit en quelques secondes.
5. **Retirer** la promo de test pour laisser la démo propre (ou effacer les données du site dans le navigateur).

Hyper U a déjà 4 promos sur 4 : retirer d'abord l'une d'elles pour montrer la publication, ou se connecter avec `tahiti-pas-cher-taravao` (2 promos sur 4).

## Mettre de vraies photos sur les promos existantes

Prendre la photo en rayon, la renommer avec le nom indiqué dans `promos.json` (`photo-mayonnaise.jpg`, `photo-biscuits.jpg`, `photo-chocolat.jpg`, `photo-glace.jpg`, `photo-airfryer.jpg`…) et la déposer dans le dépôt à côté des autres fichiers. Une photo d'environ 800 pixels de large suffit. Les photos des sites des enseignes ne sont pas libres de droits : mieux vaut les tiennes.

## Mettre à jour les promos

Tout est dans `promos.json`. Après modification, régénérer la copie hors ligne :

```
printf 'window.MAMA_SECOURS = %s;\n' "$(cat promos.json)" > secours.js
```

Chaque commerce a 4 promos au maximum ; une promo dont la date `fin` est passée disparaît toute seule.

## Et la vraie app ?

La vraie app (dépôt `mama-promos`, avec Firebase) fait la même chose pour de vrai : comptes avec mot de passe, promos et photos envoyées au serveur, visibles par tous. Pour une démo « en vrai » avec un client, créer depuis le tableau de bord administrateur un commerce dont le nom commence par **[TEST]**, publier avec lui, puis le suspendre après la présentation.

## Les fichiers

```
index.html             structure de la page, bandeau de test, onglets
style.css              couleurs, style BD, animations
icones.js              dessins : tiare, soleil, nuage, orage
dessins.js             petits dessins des articles
app.js                 écrans, connexion simulée, publication avec photo
promos.json            commerces et promotions
secours.js             copie de promos.json utilisée hors ligne
icone.svg              icône de l'application
manifest.webmanifest   installation sur l'écran d'accueil
```
