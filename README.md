TP - WIK-DPS-TP01 - API TypeScript
Consignes
L'objectif est de mettre en place une API en TypeScript qui :


Retourne les headers de la requête HTTP au format JSON lorsque la requête est de type GET sur /ping.
Écoute sur un port configurable via la variable d'environnement PING_LISTEN_PORT (si la variable est définie) ou sur un port par défaut au choix (ex : 8080).
Gère les erreurs en renvoyant une réponse vide avec le code 404 pour toute requête autre que GET /ping.


Prérequis
Node.js : Assurez-vous d'avoir Node.js installé.
npm : Le gestionnaire de paquets de Node.js (installé automatiquement avec Node.js).


Installation et lancement du projet
Cloner le projet :

   Clonez le dépôt sur votre machine :
   git clone https://github.com/raqqaaaa/PING_API
   cd PING_API

Installer les dépendances :
npm install
A la racine du fichier crée un fichier .env avec dedans 
PING_LISTEN_PORT=3000


Lancer le serveur :
npm run start:dev

   Vous pouvez aussi définir un port personnalisé avec la variable d'environnement PING_LISTEN_PORT :
PING_LISTEN_PORT=3000 npm start (modifié)
