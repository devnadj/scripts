import validator from "validator";
import User from "../models/user.js";
import bcrypt from "bcrypt";

/**
 * Contrôleur de la page de modification du mot de passe
 * @password : GET
 * Affiche la page de modification du mot de passe
 * 
 * @validation : POST
 * Vérifie les données saisies par l'utilisateur et valide ou invalide la modification du mot de passe
 */
const passwordController = {
    password: (req, res) => {
        if(req.session.isConnected) {
            res.render('password/password',
                {
                    title: 'password',
                    session: req.session,
                    errors: [],
                });
        } else {
            res.redirect('/login');
        }
    },

    validation: async (req, res) => {
        if(!req.session.isConnected) {
            res.redirect('/login');
        }
        else { //@ProutDu43--
            if(req.body.password1 === req.body.password2) { // les deux mots de passe correspondent
                const options = { minLength: 12, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 };
                if(validator.isStrongPassword(req.body.password1, options)) {
                    const hash = await User.getPassword(req.session.user.email);
                    const result = await bcrypt.compare(req.body.password, hash);
                    if(result) { // ancien mot de passe correct => mise à jout du mot de passe
                        const newHash = await bcrypt.hash(req.body.password1, 10);
                        await User.updatePassword(req.session.user.email, newHash);
                        res.render('password/ok', {
                            title: 'password',
                            session: req.session,
                        });
                    } else {
                        res.render('password/password', {
                            title: 'password',
                            session: req.session,
                            errors: ['Ancien mot de passe invalide'],
                        });
                    }
                } else {
                    res.render('password/password', {
                        title: 'password',
                        session: req.session,
                        errors: ['password is too weak'],
                    });
                }
            } else {
                res.render('password/password', {
                    title: 'password',
                    session: req.session,
                    errors: ['passwords are different'],
                });
            }
        }
    },

    forgot: (req, res) => {
        res.render('password/forgot', {
            title: 'password',
            session: req.session,
        });
    }
};

export default passwordController;