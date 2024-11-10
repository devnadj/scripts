import db from '../databases/database.js'
import sqlite3 from 'sqlite3';
import fs from 'fs';
import { query } from 'express';


class Word {
    #number;
    #spelling;
    #phonetics;

    constructor(spelling, phonetics) {
        if(typeof spelling !== 'string')
            throw new Error('The spelling must be a string');
        else {
            this.#spelling = spelling;
        }
        if(typeof phonetics !== 'string') {
            throw new Error('The phonetics must be a string');
        } else {
            this.#phonetics = phonetics;
        }
    }

    get spelling() {
        return this.#spelling;
    }

    get phonetics() {
        return this.#phonetics;
    }

    static async getPhonetics(spelling) {
        const page = await fetch(`https://fr.wiktionary.org/wiki/${spelling}`);
        const text = await page.text();
        // fs.writeFileSync('test-fetch.txt', text, '');
        const stringSearchStart = `<p><b>${spelling}</b> `;
        const stringSearchEnd = `</p>`;

        const start = text.indexOf(stringSearchStart, 0);
        const end = text.indexOf(stringSearchEnd, start)
        // console.log('start:', start, 'end:', end);

        const p = text.substring(start, end + 4);
        
        const APIStart = p.indexOf(`<span class="API" title="Prononciation API">`);
        const APIEnd = p.indexOf(`\</span>`, APIStart);

        const phonetics = p.substring(APIStart + 45, APIEnd - 1);
        // console.log('phonetics', phonetics);
        return phonetics;
    }

    static async loadCSV(path) {
        const fread = fs.readFileSync(path, 'utf8');
        let tab = fread.split('\r\n');
 
        const words = [];
        for(const line of tab) {
            const word = {
                spelling: line.split(';')[0],
                phonetics: line.split(';')[1]
            }
            words.push(word);
        }


        let start = 0, length = 1000;

        while(start < words.length) {
            await this.insertWords(words.slice(start, start + length));
            start +=length;
        }
    }

    static async all() {
        try {
            const request = `SELECT * FROM "word" LIMIT 5;`;
            console.log('all', request);
            const rows = await db.all(request);
            return rows;

        } catch(error) {
            console.log('all:', error);
        }
    }

    static async insertWord(spelling, phonetics) {
        try {
            spelling = spelling.replace('\'', '\'\'');
            const request = `INSERT INTO "word"("spelling", "phonetics") VALUES('${spelling}','${phonetics}');`;
            return await db.run(request);
        } catch (error) {
            console.error('insertWord', error.message)
        }
    }

    static async insertWords( words) {
        try {
            let request = `INSERT INTO "word"("spelling", "phonetics") VALUES`;

            for(let counter = 0; counter < words.length; counter ++) {
                request += `('${words[counter].spelling}', '${words[counter].phonetics}')`;
                request += counter >= words.length-1 ? ';' : `, `;
            }
            await db.run(request);
        } catch(error) {
            console.log('insertWords error', error.message);
        }
    }

    static async getId(spelling) {
        try {
            const request = `SELECT "id" FROM "word" WHERE "spelling"= '${spelling.replace('\'', '\'\'')}';`
            // console.log('getId', request);
            return await db.get(request);
        } catch(error) {
            console.log('getId', error);
        }
    }

    static async startBy(start) {
        try {
            // const request = `SELECT "id" FROM "word" WHERE "spelling" LIKE '%${start.replace('\'', '\'\'')}';`
            const request = `SELECT * FROM "word" WHERE "id" < 20;`
            console.log('startBy', request);
            return await db.get(request);
        } catch(error) {
            console.log('getId', error);
        }
    }

    static async get(spelling) {
        try {
            const request = `SELECT * FROM "word" WHERE "spelling"= '${spelling}';`;
            console.log('get', request);
            const result = await db.get(request);
            return result;
        } catch(error) {
            console.log('get', 'catch', error);
        }
    }

    static async run(spelling) {
        try {
            const request = `SELECT * FROM "word" WHERE "spelling"= '${spelling}';`;
            console.log('run', request);
            const result = await db.run(request);
            return result;
        } catch(error) {
            console.log('run', 'catch', error);
        }
    }

    static async exec(spelling) {
        
        try {
            const request = `SELECT * FROM "word" WHERE "spelling"= '${spelling}';`;
            console.log('exec', request);
            const result = await db.exec(request);
            return result;
        } catch(error) { 
            console.log('erreur requête:', error);
        }
    }

    get spelling() { return this.#spelling; }

    get phonetics() { return this.#phonetics; }
}

export default Word;