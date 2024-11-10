import users from '../data/users.js';

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

export default mainController;