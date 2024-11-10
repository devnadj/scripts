import fs from 'fs';
import sqlite3 from 'sqlite3';
import {open} from 'sqlite';

const fread = fs.readFileSync('classeur1.csv', 'utf-8');
const vbs = fread.split('\r\n');

for(const vb of vbs) {
    console.log(`Spelling: ${vb.split(';')[0]},`, `Groupe: ${vb.split(';')[1]},`, `Tableau: ${vb.split(';')[2]}`);
}

