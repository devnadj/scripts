import User from "../models/user.js";
import bcrypt from 'bcrypt';

const loginController = {
    logout: function(req, res) {
        req.session.destroy();
        res.redirect('/');
    },
    
    login: function(req, res) {
        console.log('connexion');
        if(req.session.isConnected) {
            console.log('déjà connecté');
            res.redirect('/');
        } else {
            res.render('./login/login', {
                title: 'Identification',
                session: req.session,
                error: ''
            });
        }
    },

    validation : async function(req, res) {
        if(req.session.isConnected) {
            res.redirect('/')
            return;
        }
        try {
            const user = await User.read(req.body.email);
            if(user) { // l'utilisarteur a été trouvé
                const result = await bcrypt.compare(req.body.password, user.password);

                if(result) { // mot de passe correct
                    req.session.isConnected = true;
                    req.session.user = user;
                    res.status(200).redirect('/account')
                    return;
                } else { // mot de passe incorrect
                    res.status(401).render('./login/login', {
                        title: 'Identification',
                        session: req.session,
                        error: 'Login ou mot de passe incorrect'
                    });
                    return;
                }
            } else { // l'utilisateur n'a pas été trouvé
                res.status(401).render('./login/login', {
                    title: 'Identification',
                    session: req.session,
                    error: `Login ou mot de passe incorrect`
                });
                return;
            }
        }
        catch (error) {
            console.log('catch', error);
            res.status(500).redirect('/login')
        }
    }
};

export default loginController;