// Ce script permet de générer le squelette d'une application Web Node Js / Express / EJS PostgreSQL prêt à l'emploi
// Il gère la connexion des utilisateurs et un mini système de messagerie interne

import fs from 'fs';
import { exec, execSync } from 'child_process';

fs.writeFileSync('package.json',
`{
    "name": "project-name",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "type": "module",
    "scripts": {
      "start": "node ./index.js",
      "dev": "node-dev index --clear --notify=false"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "dependencies": {
      "bcrypt": "^5.1.0",
      "dotenv": "^16.0.3",
      "ejs": "^3.1.8",
      "express": "^4.18.2",
      "express-session": "^1.17.3",
      "pg": "^8.11.3",
      "slugify": "^1.6.6",
      "validator": "^13.11.0"
    },
    "devDependencies": {
      "node-dev": "^8.0.0"
    }
  }`, 'utf-8');
exec('npm install');



// Créer les dossiers
const appFolders = ['controllers', 'database', 'models', 'views', 'views/partials'];
const publicFolders = ['css', 'img', 'js'];

for(const appFolder of appFolders) {
    fs.mkdirSync(`./app/${appFolder}`, { recursive: true }, (err) => err && console.error(err));
}

for(const publicFolder of publicFolders) {
    fs.mkdirSync(`./public/${publicFolder}`, { recursive: true }, (err) => err && console.error(err));
}

/* fichier css */

fs.writeFileSync('./public/css/style.css', 
`html, body { height: 100%; }
.header      { display: flex; background-color: #222; text-align:left; padding: 1.2rem 1rem; align-items: center;}
.header-link { color: #ffffffb3; margin: 0 0.25rem; padding: 0.5rem; display: inline-block; }
main { display: block; background-color: #746e6e; height: 50px;}
.footer      { display: block; background-color: #222; text-align: center; padding: 5rem 1rem;}
.footer-link { color: #ffffffb3; margin: 0 0.25rem; padding: 0.5rem; display: inline-block;}
body { background-color: #746e6e; display: flex; flex-direction: column; justify-content:space-between; }
.frm-login { display: flex; flex-direction: column; padding: 0.75rem; width: 25%; background-color: whitesmoke; border-radius: 15px;}
.frm-login label { margin: 0.2rem; padding: 0.25rem;}
.frm-login__title {text-align: center; color: rgb(41, 39, 39); margin: 0.2rem; padding: 0.5rem;}
.frm-login input[type=submit] { margin-top: 0.75rem;}
.container { display: flex; justify-content: center;}`,
`utf-8`);

fs.writeFileSync('./public/css/reset.css',
`html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed,  figure,figcaption, footer, header, hgroup,  menu, nav, output, ruby, section, summary, time, mark, audio, video { margin: 0; padding: 0; border: 0; font-size: 100%; font: inherit; vertical-align: baseline; }
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section { display: block; }
body { line-height: 1; }
ol, ul { list-style: none; }
blockquote, q { quotes: none; }
blockquote:before, blockquote:after, q:before, q:after { content: ''; content: none; }
table { border-collapse: collapse; border-spacing: 0; }`,
`utf-8`);

fs.writeFileSync('./public/css/variables.css',`:root { --darkbrown: #8e442f; --lightbrown: #c08552; --white: #f3e9dc; --black: #000000; --yellow: #fcf300; --darkblue: #072ac8; --lightblue: #a2d6f9; }`,
`utf-8`);

/* index.js */

fs.writeFileSync('./index.js', `
import express from "express";
import session from 'express-session';
import * as dotenv from 'dotenv';
import router from './app/router.js';

dotenv.config();
const port = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.urlencoded({ extended: true }));
app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: process.env.SECRET,
}));

app.use(express.static('./public/'));

/* middleware de session */
app.use((req, res, next)=>{
  if(req.session.user) {
    res.locals.user = req.session.user;
  } else {
    res.locals.user = false;
  }
  next();
});

app.use(router);

app.listen (port, () => {
    console.log(\`Server running on http://localhost:\${port}/\`)});`,
"utf-8");

/* router.js */

fs.writeFileSync('./app/router.js', 
`import express from 'express';
import mainController from './controllers/mainController.js';

const router = express.Router();

router.get ('/', mainController.home);
router.get ( '/login', mainController.login);
router.post('/login', mainController.validation);
router.get ('/sign-in', mainController.signin);
router.get ('/disconnect', mainController.disconnect);
router.get ('/account', mainController.account);
router.get ('*', mainController.notFound)

export default router;`
, 'utf-8');

/* mainController.js */

fs.writeFileSync('./app/controllers/mainController.js',
`import User from '../models/user.js';
import validator from 'validator';

const mainController = {
    home: function(req, res) {
        res.render('home', {
            title: 'Accueil'
        });
    },

    signin:function(req, res) {
        res.render('signin', {
            title: 'inscription'
        })
    },

    login: function(req, res) {
        if(req.session.user) {
            res.redirect('/');
        }        
        res.render('login', {
            title: 'Login'
        });
    },

    validation : async function(req, res) {
        console.log('req.body.username :', req.body.username);

        let user;
        try {
            user = await User.read(req.body.username);
            if(req.body.password === user.password) { // mot de passe correct
                req.session.user = user;
                res.redirect('/');
            } else { // mot de passe incorrect
                throw new Error('coupe identifiant / mot de passe invalide');
            }

            console.log(user);
        } catch (error) {
            console.log('catch', error);
        }
    },

    account: function(req, res) { // show the account informations
        console.log(req.session);
        if(!req.session.user) {
            console.log('Informations de compte non disponible');
            res.status(401).render('account-error', {
                title : 'veuiller vous identifier pour accéder à cette page'
            });
        } else {
            console.log('Informations de compte disponibles');
            res.render('account', {
                title: 'Compte',
                user: req.session.user
            });
        }
    },

    disconnect: function(req, res) {
        req.session.destroy();
        res.redirect('/');
    },

    notFound: function(req, res) {
        res.status(404).render('error', {
            title: 'Erreur'
        });
    }
}

export default mainController;`,
'utf-8');

/* génération des vues */

fs.writeFileSync('./app/views/error.ejs', 
`<!DOCTYPE html>
<html lang="en">
    <%- include('./partials/head')%>
<body>
    <%- include('./partials/header')%>
    <h1>Erreur - Page non trouvée</h1>
    <%- include('./partials/footer')%>
</body>
</html>`,
'utf-8');

fs.writeFileSync('./app/views/home.ejs', 
`<!DOCTYPE html>
<html lang="en">
    <%- include('./partials/head')%>
<body>
    <%- include('partials/header')%>
    <h1>Squelette prêt à l'emploi</h1>
    <%- include('./partials/footer')%>
</body>
</html>`,
'utf-8');

fs.writeFileSync('./app/views/partials/head.ejs', 
`<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/reset.css">
    <link rel="stylesheet" href="/css/style.css">
    <link rel="stylesheet" href="/css/variables.css">
    <title><%= title%></title>
</head>`,
'utf-8');

fs.writeFileSync('./app/views/partials/footer.ejs', 
`<footer class="footer">
    <a class="footer-link" href="/map">Plan du site</a>
    <a class="footer-link" href="/mentions">Mentions légales</a>
    <a class="footer-link" href="/contact">Contact</a>
</footer>`,
'utf-8');

fs.writeFileSync('./app/views/login.ejs', 
`<!DOCTYPE html>
<html lang="fr">
    <%- include('partials/head')%>
<body>
    <%- include('partials/header')%>
    <div class="container">
        <%- include('./partials/login') %>
    </div>
    <%- include('partials/footer')%>
</body>
</html>`,
'utf-8');

fs.writeFileSync('./app/views/account.ejs',
`<!DOCTYPE html>
<html lang="fr">
<%- include('./partials/head')%>
<body>
    <%- include('./partials/header')%>
    <h1>Compte</h1>
    <p>
        <%=user.firstname %><br>
        <%=user.lastname %><br>
        <%=user.email %><br>
        <%=user.address %><br>
        <%=user.cp %><br>
        <%=user.city %><br>
        <%=user.username %>
    </p>
    <p>
    </p>    
    <%- include('./partials/footer')%>
</body>
</html>`,
'utf-8');

fs.writeFileSync('./app/views/account-error.ejs',
`<!DOCTYPE html>
<html lang="fr">
<%- include('./partials/head')%>
<body>
    <%- include('./partials/header')%>
    <h1>Erreur</h1>
    <p>
        Cette page n'est accessible que si vous êtes connecté
    </p>
    <p>
    </p>    
    <%- include('./partials/footer')%>
</body>
</html>`,
'utf-8');

fs.writeFileSync('./app/views/partials/login.ejs',
`<form class="frm-login" action="/login" method="POST">
    <legend class="frm-login__title">Identification</legend>
    <label for="username">Identifiant</label>
    <input id="username" type="text" name="username">
    <label for="password">Mot de passe</label>
    <input id="password" type="password" name="password">
    <input type="submit" value="Valider">
</form>`,
'utf8')

fs.writeFileSync('./app/views/partials/header.ejs', 
`<header>
<nav class="header">
    <a class="header-link active" href="/">Accueil</a> 
    <a class="header-link" href="/contact">Contact</a> 
    <form id="search" role="search" action="/search" >
        <svg aria-hidden="true" class="s-input-icon s-input-icon__search svg-icon iconSearch" width="18" height="18" viewBox="0 0 18 18"><path d="m18 16.5-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5ZM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Z"></path></svg>
        <input type="text" name="search" placeholder="rechercher">
    </form>
    <%# if(!user) {>%>
    <% if(!user) {%>
        <a class="header-link" href="/sign-in">M'inscrire</a>
        <a class="header-link" href="/login">Me connecter</a>
    <%} else {%>
        <a class="header-link" href="/account">Compte</a>
        <a class="header-link" href="/disconnect">Se déconnecter</a>
    <%}%>
</nav>
</header>`,
'utf-8');

fs.writeFileSync('./app/models/user.js', 
`import client from "../database/db.js";
//import validator from "validator";

class User {
    #id;
    #firstname;
    #lastname;

    static async read(email) {
        const request = \`SELECT * FROM "User" WHERE email=$1\`;
        const values = [email];
        const result = await client.query(request, values);
        if(result.rowCount > 0) {
            return result.rows[0];
        } else {
            throw new Error('Utilisateur non trouvé');
        }
    }
}

export default User;
`, 'utf-8');

fs.writeFileSync('./app/database/db.js', 
`import pg from 'pg';
import * as dotenv from 'dotenv';

dotenv.config();

const client = new pg.Client();
client.connect();

export default client;`, 'utf-8');

fs.writeFileSync('./app/views/signin.ejs', `<!DOCTYPE html>
<html lang="fr">
    <%- include('partials/head')%>
<body>
    <%- include('partials/header')%>
    <div class="container">
        <form action="" class="frm-login">
            <label for="firstname">Prénom</label>
            <input type="text" name="firstname" id="firstname">
            <label for="lastname">Nom</label>
            <input type="text" name="lastname" id="lastname">
            <label for="email">Email</label>
            <input type="email" name="email" id="email">
            <label for="address">Adresse</label>
            <input type="text" name="address" id="address">
            <label for="cp">Code Postal</label>
            <input type="text" name="cp" id="cp">
            <label for="city">Ville</label>
            <input type="text" name="city" id="city">
            <input type="submit" value="Valider">
        </form>
    </div>
    <%- include('partials/footer')%>
</body>
</html>`, 'utf-8');



fs.writeFileSync('./app/database/users.js', `
const users = [
    { id: '1', password: 'prout', username: 'Emeric', avatar:'😹', motto:"prout"},
    { id: '2', password: 'ronron', username: 'Romain', avatar:'😻', motto: "Je ne peux rien faire mon chat dort sur mon clavier"},
    { id: '3', password: 'poils', username: 'Adama', avatar:'🍈', motto: "Moi, Moi, Moi !!!"} ,
    { id: '4', password: 'bio', username: 'Nadjette', avatar:'​👻', motto: "Coucou"},
    { id: '5', password: 'secret', username: 'Nadjim', avatar:'🐂', motto: "Dodo..."},
    { id: '6', password: 'bio', username: 'Korto', avatar:'🐐', motto: "Hi man"},
    { id: '7', password: 'GTAVI', username: 'Loïc', avatar:'🐦', motto: "M'en fou de GIT, veut jouer à GTA"},
    { id: '8', password: 'bio', username: 'Yolanda', avatar: '👧', motto: ''},
    { id: '8', password: 'kétamine', username: "Ethan", avatar: '🍄', motto: "Ketamine, Cocaïne, Héroïne"},
];

export default users;`,
`utf-8`);

fs.writeFileSync('.gitignore', `node_modules`, `utf-8`);


fs.writeFileSync('./app/database/script.sql',
`-- Création d'une table User
DROP TABLE IF EXISTS "User";

CREATE TABLE "User"(
   userid SERIAL,
   firstname varchar(32) NOT NULL,
   lastname varchar(32) NOT NULL,
   phone VARCHAR(10) ,
   email VARCHAR(255) NOT NULL UNIQUE,
   address VARCHAR(32) ,
   CP VARCHAR(50) ,
   city VARCHAR(32) ,
   password VARCHAR(16) NOT NULL,
   PRIMARY KEY(userid),
   UNIQUE(email)
);

INSERT INTO "User"(firstname, lastname, phone, email, address, CP, city, password)
VALUES
('Emeric', 'Mathis', '0102030405', 'emericmathis@gmail.com', 'rue des roses', '43000', 'Le-Puy-en-Velay', 'Prout'),
('Romain', 'Richard', '0102030405', 'romainrichard42400@gmail.com', 'rue des roses', '43400', 'Saint-Chaond', 'Minouche'),
('Nadjim', 'Kaabache', '0102030405', 'nadjimkaa@gmail.com', 'rue des roses', '43400', 'Langeac', 'transistor'),
('Hakim', 'Ismael', '0102030405', 'leboss@gmail.com', 'rue des roses', '43400', 'Langeac', 'jesuisleboss'),
('Ethan', 'Forestier', '0102030405', 'champignon@gmail.com', 'rue des roses', '42000', 'Saint-Étienne', 'kétamine'),
('Michel', 'Berginiat', '0102030405', 'jojobizard@gmail.com', 'rue des roses', '43400', 'La-Ricamarie', 'jojo');`, 'utf-8');

fs.writeFileSync('.env', `PORT=5000
SECRET='❤️‍🩹🕯️👻'
PGUSER=script
PGHOST=localhost
PGPASSWORD=script
PGDATABASE=script
PGPORT=5432`, `utf-8`);

exec('npm run dev');

console.log(`Suppression de l'utilisateur « script »`);
execSync(`psql -U postgres -c "drop user if exists script"`);

console.log(`Création de l'utilisateur « script » avec le mot de passe « script »`);
execSync(`psql -U postgres -c "create user script with password 'script';`);

console.log(`Suppression de la base « script »`);
execSync(`psql -U postgres -c "drop database if exists script;"`);

console.log(`Création de la base « script »`);
execSync(`psql -U postgres -c "create database script;"`);

console.log(`Ajout de l'utilisateur « script » à la base « script »`);
execSync(`psql -U postgres -c "alter database script owner to script;"`);

console.log(`Création de la structure de base de données`);
execSync(`psql -U script -d script -f "./app/database/script.sql"`);