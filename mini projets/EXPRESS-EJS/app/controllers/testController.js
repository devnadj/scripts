// import users from './data.js'

import client from '../database/db.js'
import users from '../database/data.js';
import bcrypt from 'bcrypt';
import validator from 'validator';


const testController = {
    test: async function (req, res) {
        res.render('test', {
            title: 'Test',
            session: req.session,
            users: users,
        });
    }
}

export default testController;
