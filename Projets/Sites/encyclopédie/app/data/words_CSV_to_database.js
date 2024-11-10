import fs from 'fs';
import sqlite3 from 'sqlite3';
import {open} from 'sqlite';


const fread = fs.readFileSync('words.csv', 'utf-8');
const tab = fread.split('\r\n');
console.log(tab.length);


const partOfTab = tab.slice(0,100);
console.log(partOfTab);

// open database
const db = await open({
    filename: 'words.sqlite',
    driver: sqlite3.Database
});


// synchrone
const db_ = open({filename : 'words.sqlite', driver: sqlite3.Database});

let position = 0;
while(position < tab.length) {
    let rqst = `INSERT INTO word(spelling, phonetics) VALUES`;
    const tabSlice = tab.slice(position, position + 1000);
    console.log(tabSlice, `size: ${tabSlice.length}`);
    for(let i = 0; i < tabSlice.length; i++) {
        const spelling = tabSlice[i].split(';')[0].replace(`'`,`''`);
        const phonetics = tabSlice[i].split(';')[1].replace(`'`,`''`);
        rqst += `('${spelling}', '${phonetics}')`;

        if(i < tabSlice.length - 1)
            rqst += ',';
        else
            rqst += ';';
        
    }
    // (async()=> {
    //     await db.get(rqst);
    // })();
    try {
        db.get(rqst);
    } catch(error) {
        console.log(error);
    }
    position += 1000;
}