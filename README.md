<!-- prettier-ignore -->
# tutoReact

# Introduction
Bienvenue dans ce tuto sur React, pour ce tuto, je vais essayer de respecter les règles d’écriture de code Eslint de Becode.
Pour ce tuto, nous allons créer un compte à rebours.

## Fonctionnement du projet à venir
Notre compte à rebours aura un nombre qui décompte et un bouton start et reset. 
Le principe de react est crée plein de petit component qui n'ont qu'une utiliter (ou un utiliter modulable facilement) et d'avoir toute la logique dans le fichier principale.

# Setup
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
      Voici la base du fichier `timer.js`:<br />
      ```
      import React from 'react'

function timer() {
    return (
        <div>
            
        </div>
    )
}

export default timer
      ```