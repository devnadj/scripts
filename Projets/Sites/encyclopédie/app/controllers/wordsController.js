import sqlite3 from 'sqlite3';
import {open} from 'sqlite';

const wordsController = {
    word: async function(req, res) {
        // open database
        const db = await open({
            filename: 'app/data/words.sqlite',
            driver: sqlite3.Database
        });
            const result = await db.get('SELECT * FROM myTable');
            for(let i=0; i< 10; i++) 
                await db.get(`INSERT INTO MyTable(id) VALUES(${i})`);
            console.log(result)

        if(!req.params.word) {
            res.status(404).render('error', {
                title: 'Mot'
            });
        } else {
            res.render('word', {
                title : req.params.word
            });    
        }

    },
    addVerb: function(req, res) {
        res.render('vb-frm', {
            title: `Ajout d'un verbe`
        });
    }
}

export default wordsController;