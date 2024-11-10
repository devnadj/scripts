import express from 'express'
import Word from './models/word.js';
import Verb from './models/verb.js';
import getConjugationTab from './models/getConjugationTab.js'
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

app.get('/', (req, res)=>{
    console.log('route /');
    res.send('route /')
});

app.get('/add/verb', (req, res)=>{
    console.log(`route /add/verb`);
    res.send(`Ajout d'un verbe`)
});

app.get('/add/word', (req, res)=>{
    console.log(`route /add/word`);
    res.send(`Ajout d'un nom`)
});


// const t = {
//     all: await Word.all(),
//     exec: await Word.exec('abaissée'),
//     get: await Word.get('abaissée'),
//     run: await Word.run('abaissée'),
//     getBy: await Word.startBy('abai')
// }

// const page = await Word.getPhonetics('lancer');
// const unVerbe0 = new Verb(verbes[0].spelling, verbes[0].group, verbes[0].table);
// const unVerbe1 = new Verb(verbes[1].spelling, verbes[1].group, verbes[1].table);
// const unVerbe2 = new Verb(verbes[2].spelling, verbes[2].group, verbes[2].table);
// const unVerbe3 = new Verb(verbes[3].spelling, verbes[3].group, verbes[3].table);

console.log('accenser', await Word.getPhonetics('accenser'));
console.log('acenser', await Word.getPhonetics('acenser'));

const ascencer = getConjugationTab(new Verb('accenser', 1, 3));
const acenser = getConjugationTab(new Verb('acenser', 1, 3));

const ascencerPhonetics = [];
for(const asc of ascencer) {
    // console.log(`${asc};${await Word.getPhonetics(asc)};`);
    ascencerPhonetics.push(`${asc};${await Word.getPhonetics(asc)};`);
}


const acenserPhonetics = [];
for(const ac of acenser) {
    // console.log(`${ac};${await Word.getPhonetics(ac)};`);
    acenserPhonetics.push(`${ac};${await Word.getPhonetics(ac)};`);
}

console.log(ascencerPhonetics.length, ascencerPhonetics, acenserPhonetics.length, acenserPhonetics);

// const conjs = getConjugationTab(unVerbe3);

// const phonetics = []
// for(const conj of conjs) {
//     phonetics.push(await Word.getPhonetics(conj));
// }

// await Word.loadCSV('./words.csv');
// await Verb.loadCSV('./verbes.csv');


// console.log(conjs.length, conjs);
// console.log(phonetics.length, phonetics);

// Word.loadCSV(process.env.WORDS);
Verb.__loadCSV__(process.env.VERBS);

app.listen(PORT, () => { console.log(`listen http://localhost:${PORT}`); });