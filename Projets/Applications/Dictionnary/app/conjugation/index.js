import fs from 'fs';
// import net from 'net';
// import dgram from 'dgram';
// import { Socket } from 'ugram';
// import { Socket } from 'net';
import Verb from './src/Verb.js'
import getAllPhonetics from "./src/getAllPhonetics.js";
import getPhonetics from "./src/getPhonetics.js";
import verbes from "./data/data.js";
import getConjugationTab from './src/getConjugationTab.js';


// attente d'une requête port 7654

// const r = dgram.createSocket('udp4');
// r.on('message', function(msg, rinfo) {
//   console.log('I got this message: ' + msg.toString());
// });
// r.bind(7654);


// const s = dgram.createSocket('udp4');
// s.send(Buffer.from('abc'), 7654, 'localhost');


try {
    const vbu = verbes.find((element)=> element.spelling === 'jouer');
    const vb = new Verb(vbu.spelling, vbu.group, vbu.table)
    console.log(vbu);
    console.log(`spelling: ${vb.spelling}, group: ${vb.group}, table: ${vb.table}`);

    let conj = getConjugationTab(vb);
    console.log(conj);

    // let str = '';
    // for (let index = 0; index < conj.length; index++) {
    //     str += conj[index];
    //     if(index !== conj.length-1)
    //         str +='\n';
    // }
    // fs.writeFileSync('conjugation.txt', str, {flag:'w+' , encoding: 'utf8'});

    let phon = '';
    for(let index = 0; index < conj.length; index++) {
        const url = 'https://fr.wiktionary.org/wiki/' + conj[index];
        console.log(url, vb.spelling);
        const phonetics = await getPhonetics(url, conj[index]);
        console.log(phonetics);
    }

    const phons = getAllPhonetics(conj);
    console.log('count:', phons.length);

    //fs.writeFileSync('phonetics.txt', phon, {flag:'w+' , encoding: 'utf8'});
} catch (error) {
   console.log(error.message);
}