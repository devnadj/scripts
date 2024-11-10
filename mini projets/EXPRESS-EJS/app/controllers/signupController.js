import validator from "validator";
import bcrypt from "bcrypt";
import User from "../models/user.js";

const signupController = {
    signup:function(req, res) {
        if(req.session.isConnected)
            return res.redirect('/account');
        else {
            res.render('./signup/signup', {
                title: 'inscription',
                session: req.session,
                erreurs: [],
                errors: [],
                values: []
            })
        }
    },

    validation: async function(req, res) {
        validator.isEmail(req.body.email) ? console.log('--email valide') : console.log('--email invalide');

        const user = new User(req.body);    // création de l'utilisateur
        
        const options = { minLength: 12, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 };

        if(validator.isStrongPassword(req.body.password, options))
            user.password = await bcrypt.hash(req.body.password, 10);
        else
            user.errors.push('password');

        if(await User.isEmailExist(req.body.email)) {
            user.errors.push(`email already used`);
        }

        if(user.errors.length === 0) {
            const userid = await user.create();
            req.session.isConnected = true;
            req.session.user = {
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                cp: user.cp,
                city: user.city,
                address: user.address,
                phone: user.phone,
            };;
            req.session.userid = userid;
            res.redirect('/account');
        } else {
            console.log('user.errors:', user.errors);
            res.render('./signup/signup', {
                title: 'inscription',
                session: req.session,
                errors: user.errors,
                values: {
                    firstname: user.errors.includes('firstname') ? '' : user.firstname,
                    lastname: user.errors.includes('lastname') ? '' : user.lastname,
                    email: user.errors.includes('email') ? '' : user.email,
                    cp: user.errors.includes('cp') ? '' : user.cp,
                    city: user.errors.includes('city') ? '' : user.city,
                    address: user.errors.includes('address') ? '' : user.address,
                    phone: user.errors.includes('phone') ? '' : user.phone,
                }
            })
        }
    }
}

export default signupController;