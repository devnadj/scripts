import sequelize from "../database/db-sequelize.js";
import User from '../models-sequilize/user.js'

const sequelizeController = {

    connexion: async function(req, res) {
        console.log('/login-s - get');
        if(req.session.user) {
            res.render('home', {
                title: 'Connexion'
            });
        }
        res.status(200).render('login-s', {
            title: 'connexion par sequilize'
        });
    },

    validation: async function(req, res) {
        console.log('/login-s - post');
        let result;
        try {
            result = await User.findOne( { where: {
                email: req.body.email,
                password: req.body.password
            }})
            console.log('result', result);
            if(result) {
                req.session.user = result;
                res.status(200).send('<p>Connexion établie</p>')
            }
            else {
                res.status(401).send('<p>connexion refusée email ou mot de passe non valide</p>')
            }
        } catch(error) {
            console.log('/login-s erreur', error.detail);
        }
    },

    ajout: async function(req, res) {

    },

    test: async function(req, res) {
        console.log('sequelizeController.connexion');
        try {
            await sequelize.authenticate();
            console.log('Connection has been established successfully.');
            // const john = User.create(
            //     {
            //         firstname: 'un utilisateur',
            //         lastname: 'un utilisateur',
            //         email: 'toto1',
            //         password: 'toto'
            //     }
            // );

            const users = await User.findAll();
            users.map(user => console.log(user.dataValues));

            const romain = await User.findAll(  {
                where: {
                    email: 'romainrichard42400@gmail.com'
                }
            });
            console.log('---------------------------------------------');
            console.log('user.dataValues', romain[0].dataValues);

            const emeric = await User.findOne( {
                where: {
                    email: 'emericmathis@gmail.com'
                }
            })
            console.log('---------------------------------------------');
            console.log('emeric.dataValues', emeric.dataValues);
            res.status(200).send('<h1></h1>');

          } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
        //res.send(200).send('<h1>connexion</h1>'); //('/');
    }
}

export default sequelizeController;