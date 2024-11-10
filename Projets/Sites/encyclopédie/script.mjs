import fs from 'fs';
import exec from 'child_process';

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
      "dotenv": "^16.0.3",
      "ejs": "^3.1.8",
      "express": "^4.18.2",
      "slugify": "^1.6.6",
      "express-session": "^1.17.3"
    },
    "devDependencies": {
      "node-dev": "^8.0.0"
    }
  }`, 'utf-8');
exec.exec('npm install');



// Créer les dossiers
const appFolders = ['controllers', 'data', 'models', 'views', 'views/partials'];
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
import * as dotenv from 'dotenv';
import session from 'express-session';
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
    console.log(\`Server running on http://localhost:\${port}/\`)});
`, "utf-8");

/* router.js */

fs.writeFileSync('./app/router.js', 
`import express from 'express';
import mainController from './controllers/mainController.js';

const router = express.Router();

router.get('/', mainController.home);
router.get('/account', mainController.login);
router.post('/account', mainController.validation);
router.get('/disconnect', mainController.disconnect);
router.get('*', mainController.notFound)

export default router;`
, 'utf-8');

/* mainController.js */

fs.writeFileSync('./app/controllers/mainController.js',
`import users from '../data/users.js';

const mainController = {
    home: function(req, res) {
        res.render('home', {
            title: 'Accueil'
        });
    },

    login: function(req, res) {
        if(req.session.user) {
            res.redirect('/');
        }        
        res.render('login', {
            title: 'Login'
        });
    },

    validation : function(req, res) {
        const user = users.find((element) => element.username.toLowerCase() === req.body.id);
        if(user) {
            if(req.body.password === user.password) {
                // coupe utilisateur / mot de passe ok -> création d'une session
                req.session.user = 'found';
                // on repart sur la page d'accueil
                res.redirect('/');
                
            } else {
                res.redirect('/account');
            }

        } else {
            res.redirect('/account')
        }
        console.log(user);
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
    <button class="footer-totop" title="Retour en haut de page"><i data-feather="arrow-up-circle"></i></button>
</footer>`,
'utf-8');

fs.writeFileSync('./app/views/login.ejs', 
`<!DOCTYPE html>
<html lang="en">
    <%- include('partials/head')%>
<body>
    <%- include('partials/header')%>
    <%- include('./partials/login)%>
    <%- include('./partials/footer')%>
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
        <%=user.avatar %>
        <%=user.username %>
    </p>
    <p>
    </p>    
    <%- include('./partials/footer')%>
</body>
</html>`,
'utf-8');


fs.writeFileSync('./app/views/partials/login.ejs',
`<form class="frm-login" action="/account" method="POST">
    <legend class="frm-login__title">Identification</legend>
    <label for="id">Identifiant</label>
    <input id="id" type="text" name="id" value="monIdentifiant">
    <label>Mot de passe</label>
    <input id="password" type="password" name="password" value="totolitoto">
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
        <a class="header-link" href="/login">Me connecter</a>
    <%} else {%>
        <a class="header-link" href="/disconnect">Se déconnecter</a>
    <%}%>
</nav>
</header>`,
'utf-8');

fs.writeFileSync('./app/data/users.js', `
const users = [
    { id: '1', password: 'prout', username: 'Emeric', avatar:'😹'},
    { id: '2', password: 'ronron', username: 'Romain', avatar:'😻'},
    { id: '3', password: 'poils', username: 'Adama', avatar:'🧑🏿‍🚒'} ,
    { id: '4', password: 'bio', username: 'Nadjette', avatar:'​👻'},
    { id: '5', password: 'bio', username: 'Nadjim', avatar:'🐂'},
    { id: '6', password: 'bio', username: 'Korto', avatar:'🐐'},
    { id: '7', password: 'bio', username: 'Loïc', avatar:'🐦'},
    { id: '8', password: 'bio', username: 'Yolanda', avatar: '👧'},
    { id: '8', password: 'bio', username: 'Ethan', avatar: '🍄'},
];

export default users;`,
`utf-8`);

fs.writeFileSync('.gitignore', `node_modules`, `utf-8`);

fs.writeFileSync('.env', `PORT=5000
SECRET='❤️‍🩹🕯️👻'`, `utf-8`);


exec.exec('npm run dev');