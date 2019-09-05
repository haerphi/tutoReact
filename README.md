# tutoReact
(Ceci est un tuto personnel avec ce que j'ai compris, tout n'est pas parfait/correcte)
# Introduction
Bienvenue dans ce tuto sur React, pour ce tuto, je vais essayer de respecter les règles d’écriture de code Eslint de Becode.
Pour ce tuto, nous allons créer un compte à rebours.

## Fonctionnement du projet à venir
Notre compte à rebours aura un nombre qui décompte et un bouton +, -, start, stop etreset. 
Le principe de react est de crée plein de petit component qui n'ont qu'une utiliter (ou un utiliter modulable facilement) et d'avoir toute la logique dans le fichier principale.

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
      `<dib id="root"> </div>`
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

## Création + import
Comme dit plus haut, toute la logique sera dans un fichier (`app.js`) et les components n'auront qu'une tâche. Par exemple, nous avons déjà créer un component `timer.js` mais nous devons encore l'implémenter.
Voici les quelques étapes qu'il faut faire pour créer un component:
1. Créer un fichier dans le dossier `components` (`timer.js` pour l'exemple)
2. Créer la base du fichier (soit en class ou en fonction, personnelement, j'ai une préférence pour les fonctions): <br />
```javascript
import React from "react";

function Timer() {
  return <div></div>;
}

export default Timer;
```
3. L'importer dans le fichier `app.js`, dans le haut du fichier `app.js` après l'import CSS vous pouvez écrire : `import Timer from "./components/timer";` (l'extention du fichier n'est pas obligatoire)
4. Une fois l'import fait nous pouvons l'introduire dans la méthode `render()` du fichier `app.js`
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
Ceci est comme une structure HTML et tout ce qui se trouve dans le return de la function `Timer()` (du fichier `timer.js`) sera afficher à la place de `<Timer />` <br />
Actuellement, rien ne changera dans le rendu sur le navigateur car la balise `div` dans la function `Timer()` est vide.
/!\ La manière dont est déclarée `this.seconde` changera dans la partie sur les [**states**](#state)

## Paramètre & propriété
Il est possible de donner des variables de `app.js` vers nos componenents. Pour ce faire, lors de l'appel de notre componenent il suffit de rajouter : `clé={valeur}` par example si je veux que mes secondes s'affiches via le component `Timer`, il faudra écrire : <br />
```javascript
<Timer seconde={this.seconde} />
```
et ma variable seconde sera acceccible dans timer. (Il ne faut pas oublié de déclarer seconde dans le constructeur). <br />
Actuellement, votre fichier app.js doit ressembler à ceci: <br />
```javacript
//react imports
import React from "react";
import ReactDOM from "react-dom";
//css file
import "./style.css";
import Timer from "./components/timer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.seconde = 60;
  }

  render() {
    return (
      <div className={"container"}>
        {"Temps restant : "}
        <Timer seconde={this.seconde} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
```

pour récuperer seconde dans `timer.js`, nous allons utiler son paramètre (que l'on va devoir rajouter): <br />
```javascript
import React from "react";

function Timer(props) {
  return <div>{props.seconde}</div>;
}

export default Timer;
```
/!\ Veuillez noter que seconde est le nom que j'ai donné lorsque j'ai fais `seconde=...` dans le fichier `app.js` si à la place de seconde, j'avais mis `truc=...` j'aurai fais `props.truc`.<br />
Et voilà maintenant la valeur de votre variable seconde s'affiche !

## Le binding
Exporter une méthode ? C'est possible ! <br />
Le binding sert à rendre une méthode acceccible dans un autre component. <br />
Par exemple si nous souhaitons créer un component `bouton.js` et que celui modulable pour ne pas devoir faire :
  - boutonPlay
  - boutonStop
  - ...
Nous, nous n'aurons qu'un `bouton.js` qui fera la fonction play, stop... <br />
Pour commmencer nous allons créer la méthode `plus` dans le fichier `app.js` <br />
```javascript
plusFunction() {
    this.seconde++;
    console.log(this.seconde);
  }
```
Ensuite, il va falloir la "binder" dans le constructeur: <br />
```javascript
this.plus = this.plusFunction().bind(this);
```
Ensuite, il ne nous reste plus qu'a mettre en place de le component: (`bouton.js`) <br />
```javascript
import React from "react";

function Bouton(props) {
  return (
    <button type={"button"} onClick={props.handleFunction}>
      {props.value}
    </button>
  );
}

export default Bouton;
```
On peut noter que j'utilise 2 proporiétés qui se trouve dans `props` :
 - `handleFunction` : qui va contenir la fonction que le bouton doit executer
 - `value` : qui va contenir le texte de notre bouton
Ensuite il faut l'importer dans le fichier `app.js` comme ici plus haut dans la partie sur les imports. <br />
Une fois importer on peut l'introduire dans la méthode `render()` de la manière suivante: <br />
```javascript
<Bouton value={"+"} handleFunction={this.plus} />
```
Pour rappel : `this.plus` correspond au binding vu juste avant. <br />
Maintenant que tout ça est fait, vous avez un petit bouton "+" **MAIS** rien ne se passe... C'est normal, l'affichage ne se met pas à jour et pour celà, nous verrons ça au point qui suit avec les "states". En attendant, vous devrez vous contenter de la console comme preuve que les secondes avance quand on appuie sur le "+". <br />

# States <a id="state"></a>

## Introduction
Les states sont des variables qui sont écoutées en permanence par react et mettent à jour l'affichage lorsque celle(s)-ci change(nt) de valeur. <br />
Dans cette partie du tuto, nous allons re-éditer du code de `app.js`, nous allons surtout modifier les choses qui concerne la variable `this.seconde`. <br />
A la place de déclarer seconde comme une variable normal, nous allons déclarer seconde de la manière suivante: <br />
```javascript
this.state = {
      second: 60
    };
```
Maintenant que nous avons modifier la déclaration de `seconde` il va falloir modifier les méthodes qui l'utilise : dans notre cas, nous n'avons pour le moment que la méthode `plusFunction()`. <br />
Pour modifier une variable dans un `this.state`, nous allons devoir utiliser la méthode `this.setState()`<br />
```javascript
plusFunction() {
    this.setState(prevState => ({
      second: prevState.second + 1
    }));
    console.log(this.state.second);
  }
```
Vous pouvez voir que j'utilise une variable nommée `prevState`, cette variable possède l'état "actuel" de `this.state`, très utile pour le cas actuel où je dois décrémenter une valeur. <br />
/!\ `prevStae` est un pramètre optionel, si n'utilise `prevState` vous pouvez mettre des parenthèses vide à la place. <br /> 
Vous pouvez aussi constater que je n'ai plus `console.log(this.seconde)` mais `console.log(this.state.second);`, c'est de cette manière que l'on peut "lire" la valeur d'une variable dans l'objet `this.state`. <br />
 Il ne nous reste plus la modifier dans le render et ça sera bon ! <br />
 ```javascript
 <Timer seconde={this.state.second} />
 ```
PS: c'est normal que le `this.state.second` soit en avance de 1 sur le `console.log()`. (C'est une question d'asynchrone) <br />
Avant la suite du tuto sur les `React.portal` pour faire une notification qui appraîtra à la fin du compte à rebourd, je vais déjà écrire toute la logique du compte à rebours. C'est à dire créer les boutons start/reset/stop reset à partir du component `bouton.js` créer précédement et utiliser un `setInterval()` pour l'écoulement de celui ci.
Voilà mon fichier `app.js`: <br />
<details>
<summary>app.js</summary>

```javascript
//react imports
import React from "react";
import ReactDOM from "react-dom";
//css file
import "./style.css";
import Timer from "./components/timer";
import Bouton from "./components/bouton";

class App extends React.Component {
  constructor(props) {
    super(props);
    //state
    this.state = {
      second: 60
    };
    //binding
    this.plus = this.plusFunction.bind(this);
    this.moins = this.moinsFunction.bind(this);
    this.reset = this.resetFunction.bind(this);
    this.start = this.startFunction.bind(this);
    this.stop = this.stopFunction.bind(this);
    //variable
    this.defaultTimer = 60;
    this.intervalID = null;
  }

  plusFunction() {
    this.setState(prevState => ({
      second: prevState.second + 1
    }));
  }

  moinsFunction() {
    this.setState(prevState => ({
      second: prevState.second - 1
    }));
  }

  decrementFunction() {
    this.setState(prevState => ({
      second: prevState.second - 1
    }));
    if (this.state.second <= 0) {
      clearInterval(this.intervalID);
      this.intervalID = null;
      console.log("FIN");
      //AFFICHER L'ALERT
    }
  }

  startFunction() {
    if (this.intervalID === null) {
      this.intervalID = setInterval(() => {
        this.decrementFunction();
      }, 200);
      console.log("START");
    } else {
      console.log("Already started");
    }
  }

  stopFunction() {
    clearInterval(this.intervalID);
    this.intervalID = null;
    console.log("STOP");
  }

  resetFunction() {
    clearInterval(this.intervalID);
    this.intervalID = null;
    this.setState(() => ({
      second: this.defaultTimer
    }));
    console.log("RESET");
  }

  render() {
    return (
      <div className={"container"}>
        {"Temps restant : "}
        <Timer seconde={this.state.second} />
        <Bouton value={"+"} handleFunction={this.plus} />
        <Bouton value={"-"} handleFunction={this.moins} />
        <Bouton value={"Start"} handleFunction={this.start} />
        <Bouton value={"Stop"} handleFunction={this.stop} />
        <Bouton value={"Reset"} handleFunction={this.reset} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
```
</details>

# React.portal / Modal
React portal permet de créer et manipuler des `div`(ou d'autre balise) en dehors de sa `<div id="root">`. <br />
Cela va nous être utile pour créer une alert sans modifier notre HTML ou CSS. <br />
Nous allons commencer par créer un component `modal.js` mais il sera légerement différent de nos autres components: <br />

## Commencement
Créer un fichier `modal.js` avec les autres components: <br />
```javascript
import React from "react";
import ReactDOM from "react-dom";

function Modal(props) {
  return ReactDOM.createPortal(<div id={"modal"}></div>, document.body);
}

export default Modal;
```
Pas de panique, je vais revenir sur les éléments inconu juste après l'import dans le fichier `app.js`. <br />
Il va falloir l'importer dans le fichier `app.js` et le rajouter dans le `render()`: <br />
```javascript
render() {
    return (
      <div className={"container"}>
        {"Temps restant : "}
        <Timer seconde={this.state.second} />
        <Bouton value={"+"} handleFunction={this.plus} />
        <Bouton value={"-"} handleFunction={this.moins} />
        <Bouton value={"Start"} handleFunction={this.start} />
        <Bouton value={"Stop"} handleFunction={this.stop} />
        <Bouton value={"Reset"} handleFunction={this.reset} />

        <Modal />
      </div>
    );
  }
```

## Explications
Commençons par le fichier `modal.js` il se compose comme les 2 autres components que l'on a déjà à la différence qu'il ne retourne pas du JSX mais un `ReactDOM.createPortal()`. <br />
`ReactDOM.createPortal()` possède 2 paramètres, le premier est ce qu'il doit ajotuer dans l'HTML et l'emplacement où il doit l'injecter dans l'HTML (un peu comme le `render()` de `app.js`). <br />
Maintenant si vous examiner votre page avec l'inspecteur vous pourrez voir une nouvelle `<div id="modal>` en-dessous de la `<div id="root">`. Et bien, c'est notre modal ! Et si on lui rajoutait un peu de texte comme par exemple `"Temps écouler !"` et il va aussi falloir faire en sorte qu'il apparaisse une fois le temps écouler. <br />
Pour le le faire disparaître et apparaître nous allons lui passer un paramètre booléen (True/False) et `return null` si le paramètre est `false`. <br />
```javascript
import React from "react";
import ReactDOM from "react-dom";

function Modal(props) {
  if (props.show) {
    return ReactDOM.createPortal(
      <div id={"modal"}>{"Temps écouler ! "}</div>,
      document.body
    );
  }
  return null;
}

export default Modal;
```
Maintenant il va falloir implémenter ce système dans `app.js`. Pour ce faire on va rajouter une variable (que je nomme `show`). **Mais**, il est important de mettre cette variable dans le state sinon il ne prendra pas en compte son changement d'état et n'affichera pas le chamgement. <br />
```javascript
//state
    this.state = {
      second: 60,
      show: false
    };
```
La variable est déclarée à `false` pour ne pas que le modal soit afficher au début. <br />
## implémentation du changement affichier/cacher
Maintenant que la variable est déclarée dans le state<br />
Il faut le rendre `true` lorsque le timer atteint 0. (voir `decrementFunction()` dans l'exemple)

Une fois il ne reste plus qu'à modifier l'appel de `<Modal />` dans le `render()` <br />
```javascript
<Modal show={this.state.show} />
```
