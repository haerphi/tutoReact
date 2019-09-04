<!-- prettier-ignore -->
# tutoReact

# Introduction
Bienvenue dans ce tuto sur React, pour ce tuto, je vais essayer de respecter les règles d’écriture de code Eslint de Becode.
Pour ce tuto, nous allons créer un compte à rebours.

## Fonctionnement du projet à venir
Notre compte à rebours aura un nombre qui décompte et un bouton start et reset. 
Le principe de react est crée plein de petit component qui n'ont qu'une utiliter (ou un utiliter modulable facilement) et d'avoir toute la logique dans le fichier principale.

# Setup

## Installation
0. Créer un dossier pour le projet
1. Setup les packages Npm
   1. Initialiser le projet : `npm init`
   2. Installer React : `npm install react`
   3. Installer React-Dom : `npm install react-dom`
   4. Installer Parcel : `npm install parcel-bundler`
2. Créer la structure de dossier
      1. Créer un dossier `src` qui possèdera les fichiers suviant:
            - `style.css` : Il sera importer mais pas implémenter
            - `idnex.html` : Il doit possèder une structure HTML de base. Il faut juster ajouter une div : <br />
            ```<dib id="root"> </div>```
            - `app.js`: Contiendra toute la logique du programme

      2. Créer un dossier `components` dans le dossier `src` qui possèdera tout nos "components" nous allons créer un component `timer` (créer un fichier `timer.js` dans le dossier `components`).<br />
      
## Récapitulatif
Normalement vous devriez obtnir un structure de dossier ressemblante à celle-ci:
```
- src
    - components
        - timer.js
    - app.js
    - index.html
    - style.css
- package.json
- ...
```
# index.html
Ce fichier est un fichier html de base dans le quel on doit juste rajouter une balise div avec un id (pour l'exemple je vais lui donner l'id root) et l'import du script app.js. <br />
```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Mon compte à rebours</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
  <script src="app.js"></script>
</html>
```

# app.js
Dans le fichier `app.js`vous aurez toute la logique du timer, c'est à dire, les fonction `start`, `reset`, `pause` mais aussi la fonction qui décrémente notre compte à rebours.
A la base votre fichier `app.js` doit contenir à ceci:
```javascript
//react imports
import React from "react";
import ReactDOM from "react-dom";
//css file
import "./style.css";

class App extends React.Component {
  render() {
    return <div className={"container"}>{"Hello world"}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
```
Les 2 premiers imports sont les imports dont react à besoin pour fonctionner correctement. <br />
`import "./style.css"` permet d'importer un fichier style à appliquer à la page. <br />
Après les imports, nous créer une `class` react qui hérite de la class `React.component` (utile pour faire une app en react) <br />
Ensuite nous avons la méthode `render()` qui sera appeler pour l'affichage de ce que doit contenir la page, vous remarquerez que nous avons de l'HTML dans le return de celui-ci mais j'y reviendrai bientôt. <br />
Pour finir, nous avons `ReactDOM.render(...)` ReactDOM prend en premier paramètre la class que l'on a crée juste avant (écris d'une manière un peu particulère qui appel aussi sa méthode render) et en second paramètre l'emplacement où il doit l'écrire sur la page HTM <br />
Avec ligne de code actuel, vous pouvez exectuer parcel et voir le résultat. Si vous êtes dans le dossier du projet: `parcel ./src/index.html`
# Les components
Comme dit plus haut, toute la logique sera dans un fichier (`app.js`) et les components n'auront qu'une tâche. Par exemple, nous avons déjà créer un component `timer.js` mais nous devons encore l'implémenter.
Voici les quelques étapes qu'il faut faire pour créer un component:
1. Créer un fichier dans le dossier `components`
2. Créer la base du fichier (soit en class ou en fonction, personnelement, j'ai une préférence pour les fonctions): <br />
```javascript
import React from "react";

function Timer() {
  return <div></div>;
}

export default Timer;
```
3. L'importer dans le fichier `app.js`, dans le haut du fichier après l'import CSS vous pouvez écrire : `import Timer from "./components/timer";` (l'extention du fichier n'est pas nécessaire)
4. Une fois l'import fait nous pouvons l'introduire dans la méthode `render()`
```javascript
render() {
    return (
      <div className={"container"}>
        {"Hello world"} 
        <Timer />
      </div>
    );
  }
```
Ceci est comme une structure HTML et tout ce qui se trouve dans le return de la function `Timer()` (du fichier `timer.js`) sera afficher à la place de `<Timer />`
