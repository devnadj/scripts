# Atelier

## Initialisation du projet sur github


- Se rendre sur le github, sur votre compte dans l'onglet Repositories
- Cliquer sur le bouton <button style="font-size:16px; padding: 5px 16px; background-color:rgb(35, 134, 54); color:rgb(240, 246, 252); border-radius:6px;">
    <svg aria-hidden="true" fill="white" height="16" viewBox="0 -1 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo">
    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
</svg>  New </button>
- Dans la zone déroulante « Owner * » choisissez votre identifiant github.
- Dans la zone de texte « Repository name * » choisissez le nom de votre dépôt. On pourra choisir myDictionary.
- Cliquez sur le bouton <button style="font-size:16px; padding: 5px 16px; background-color:rgb(35, 134, 54); color:rgb(240, 246, 252); border-radius:6px;">Create repository</button> pour valider.

### Préparer un dossier dépôt git sur votre machine

Le dépôt est créé, tout se passe maintenant sur notre poste.

Création du dossier cible de notre dépôt githubhub
- Ouvrir un terminal gitbash dans le dossier voulu
- Créer le dossier cible de votre application
```
mkdir myDictionary
cd myDictionary
```

### Clonage du dépôt github

Pour cloner le dépôt github sur votre machine, il est nécessaire de copier l'adresse du dépôt github. Celle-ci devrait ressembler à :

- https://www.github.com/<utilisateur>/myDictionary

Dans l'invité de commande gitbash tapez la commande suivante :

```
git clone https://www.github.com/<utilisateur>/myDictionary
```

Créons maintenant un fichier readme.md avec la commande suivante :
```
touch readme.md
```

Nous pouvons lancer l'IDE, nous utiliserons VScode, mais libre à vous d'utiliser celui qui vous convient le mieux. Pour cela, lancer la commande suite :

```
code .
```

## Mise en place de l'environnement de développement Node JS

```
npm init -y
```

Ne pas oublier d'ajouter la ligne suivante :

```JSON
"type": "module"
```

### nodemon

Nodemon est un utilitaire qui permet de surveiller les fichiers de votre application Node.js et de redémarrer automatiquement le serveur lorsqu’un fichier est modifié. Il est souvent utilisé pour faciliter le développement en temps réel en évitant de devoir manuellement redémarrer le serveur chaque fois qu’un fichier est modifié. Il est simple à utiliser, il suffit de lancer votre application avec la commande « nodemon » au lieu de « node » et il se chargera de surveiller les fichiers pour vous. Il est compatible avec toutes les versions de Node.js et peut être utilisé avec tout type d’application, y compris les applications Express, Koa, etc. Il peut également être configuré pour ignorer certains fichiers ou dossiers pour éviter des redémarrages inutiles.

Pour l'installer il suffit d'utiliser la commande :

```
npm i -g nodemon
```

Pour pouvoir lancer nodemon, il sera nécessaire d'ajouter la commande suivante la partie script du fichier package.json:

```JSON
"start": "nodemon index.js"
```

### Les variables d'environnement

Les variables d'environnement sont des variables dynamiques utilisées par les différents processus d’un système d’exploitation (Windows, Unix...). Elles servent à communiquer des informations entre les programmes qui ne se trouvent pas sur la même ligne hiérarchique, et qui ont donc besoin d'une convention pour se communiquer mutuellement leurs choix. 

Dans Windows un certain nombre de variable d'environnement permettent d'obetnir un certain nombre d'informations sur le système. Quelques exemples de variables d'envrionnement sous Windows :

- APPDATA : le chemin de données des applications ;
- CommonProgramFiles : le chemin communs des applications ;
- COMPUTERNAME : le nom de l’ordinateur ;
- ...
- TEMP : le dossier temporaire de l’utilisateur ;
- USERDOMAIN : Le nom de l’utilisateur dans le domaine ;
- USERNAME : Le nom de l’utilisateur ;
- windir : le répertoire du dossier Windows.

Ainsi la commande 

```
echo %windir%

c:\windows
```
permet d'afficher l'emplace du dossier windows. Linux n'est pas en reste avec un certain nombre de variable d'environnement.

### dotenv

npm i dotenv --save <- installe le module dotenv

À la racine du projet créer un fichier .env dans lequel il faudra mettre la configuration sous la forme suivante :

```
KEY=VALUE
```

Exemple

```
SQL_USER=USER
SQL_PASSWORD=PASSWORD
```

modifier le fichier package.json

ajouter la ligne "type": "module"
ajouter une ligne pour démarrer le demon « nodemon »

## Express

```
npm i express
```


```JSON
"main": "index.js",
"type": "module",
"scripts": {
    "start": "nodemon index.js"
}
```



La base de données

