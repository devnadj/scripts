import User from '../models/user.js';
import validator from 'validator';

const mainController = {
    home: function(req, res) {
        res.render('home', {
            title: 'Accueil',
            session: req.session
        });
    },

    account: function(req, res) { // show the account informations
        if(!req.session.isConnected) {
            res.status(401).render('./errors/401', {
                title : 'veuiller vous identifier pour accéder à cette page',
                session: req.session
            });
        } else {
            res.render('./account/account', {
                title: 'Compte',
                session: req.session
            });
        }
    },

    about: function (req, res) {
        res.status(200).render('about', {
            title: 'À Propos',
            session: req.session
        })
    },

    notFound: function(req, res) {
        res.status(404).render('./errors/404', {
            title: 'Erreur',
            session: req.session
        });
    },
};

export default mainController;