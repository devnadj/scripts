
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
    console.log(`Server running on http://localhost:${port}/`)});
