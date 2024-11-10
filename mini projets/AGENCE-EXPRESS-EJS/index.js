import express from "express";
import session from 'express-session';
import * as dotenv from 'dotenv';
import router from './app/router.js';

dotenv.config();
const port = process.env.PORT || 3000;

const app = express();

/* configuration du moteur de rendu */
app.set('view engine', 'ejs');
app.set('views', './app/views');

/* middleware pour parser le corps des requêtes POST*/
app.use(express.urlencoded({ extended: true }));

/* middleware de session */
app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: process.env.SECRET,
}));

/* middleware de fichiers statiques */
app.use(express.static('./public/'));

/* middleware pour gérer les utilisateurs connectés */
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
    console.log(`Server running on http://localhost:${port}/`)});