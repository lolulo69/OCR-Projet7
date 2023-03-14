# Kasa : 7ème projet pour la formation développeur web d'Openclassrooms

Projet bootstrapé grâce à [Create React App](https://github.com/facebook/create-react-app).

## But du projet

Ce projet est une single-page application basée sur React avec React router pour la gestion des routes.\
Cette application est prévue pour permettre la location de chambres (type AirBNB).\
L'application n'est pas complète, seul le front-end est réalisé ici.\
On se sert d'un fichier .json pour simuler un appel API.\
Un loader est implémenté, étant donné qu'il n'y a (quasiment) aucun délai de chargement ici, un délai de 3 secondes est simulé au chargement de la page d'accueil (oui c'est beaucoup, mais admirez le loader).

Pour en savoir plus, la documentation du projet (générée avec JSdoc) est disponible ici : [Documentation](https://lolulo69.github.io/OCR-Projet7/)

## Scripts utilisables

Vous pouvez utiliser les scripts suivants avec ce projet :

### `npm start`

Lance l'application en mode développement.\
Ouvrez [http://localhost:3000](http://localhost:3000) pour y accéder depuis votre navigateur.

La page se réactualise automatiquement à chaque changement.\
Vous pouvez aussi voir les erreurs dans la console.

### `npm run build`

Contruit l'application dans le dossier `build`.\
Cela configure correctement React en mode production et optimise la construction pour obtenir les meilleures performances.

La construction est minimisée et les noms de fichiers incluent les hachages.\
L'application est prête à être déployée !

Vous pouvez voir la section [deployment](https://facebook.github.io/create-react-app/docs/deployment) pour plus d'infos (en anglais).

### `npm run doc`

Construit la documentation du projet au format html dans le dossier "docs" grâce à JSdoc.

## ----------------

Il reste d'autres scripts implémentés par défaut avec Create React App que je ne documenterai pas ici.\
Pour plus d'infos : [Voir la documentation de Create React App](https://facebook.github.io/create-react-app/docs/getting-started)
