import { error } from "console";
import essai from "../data/data.js";
import conj from "./endings.js";
import fs from 'fs';
import https from 'https';

class Verb {
    #spelling;
    #group;
    #prefix;
    #table;
    #suffix;

    get group() {
        return this.#group;
    }

    get spelling() {
        return this.#spelling
    }

    get table() {
        return this.#table;
    }
    
    constructor(spelling, group, table) {
        if(group < 1 || group > 3)
            throw new Error('The group must be between 1 and 3');
        else
            this.#group = group

        if(typeof spelling !== 'string')
            throw new Error('The spelling must be a string');
        else
            this.#spelling = spelling;

        this.#checkValidity();

        this.#table = table;
    }

    /* check the verb's validity */
    #checkValidity(){
        this.#suffix = this.#spelling.substring(this.#spelling.length - 2, this.#spelling.length);

        if(this.#group === 2 && !(this.#suffix  ==='ir' || this.#suffix  ==='ïr'))
            throw new Error(`suffix error : a second group verb connot ends with ${this.#suffix }.`);
        
        if(this.#group === 1 && this.#suffix  !== 'er')
            throw new Error(`suffix error : a firt group verb connot ends with ${this.#suffix }.`);
    }


    getSuffixSize(tab){
        for(groups of conj) {
            if(groups.tabs.includes(tab)) {
                return groups.suffixSize;
            }
        }
    }

    getPosition() {  //  get position of group
        for(let counter = 0; counter < conj.length; counter ++) {
            if(conj[counter].tabs.includes(this.#table))
                return counter;
        }
    }

    getPrefix() {
        return this.spelling.substring(0, this.#spelling.length - conj[this.getPosition()].suffixSize);
    }
    

    getConjugation(mode, tense, person) {
        const tabPosition = this.getPosition();
        switch(this.#table) {
            case 1:
                return conj[tabPosition].forms[mode][tense][person];
            case 2:
                return conj[tabPosition].forms[mode][tense][person];
            case 12:
                return this.getPrefix() + conj[tabPosition].forms[mode][tense][person];
            case 30:
                return conj[tabPosition].forms[mode][tense][person];
            case 13:
                return this.getPrefix() + conj[tabPosition].forms[mode][tense][person];
            case 3: case 6: case 7: case 8: case 9: case 10: case 11: case 21: 
            case 22: case 23: case 24: case 25 : case 26: case 27: case 28: case 29:
                if(conj[this.getPosition()].forms[mode][tense][person].includes('|')) {
                    const ret = []
                    ret.push(this.getPrefix() + conj[tabPosition].forms[mode][tense][person].split('|')[0]);
                    ret.push(this.getPrefix() + conj[tabPosition].forms[mode][tense][person].split('|')[1]);
                    return ret;
                }
                else
                    return this.getPrefix() + conj[tabPosition].forms[mode][tense][person];
            case 14: case 15: case 16: case 17: case 18: {
                let position;
                for(let n = this.#spelling.length - 3; n > 0; n--){
                    if(this.#spelling[n] === 'é') {
                        position = n;
                        break;
                    }
                }
                let prefix = this.#spelling.substring(0, position);
                let middle = this.#spelling.substring(position + 1, this.#spelling.length - 2);
                let e = conj[tabPosition].forms[mode][tense + 'Middle'][person];
                let suffix;
                if(middle[middle.length - 1] === 'c') {
                    middle = this.#spelling.substring(position + 1, this.#spelling.length - 3); // on retire le c
                    suffix = conj[4].forms[mode][tense][person]; 
                }  // <- conj pour -cer
                else if(middle[middle.length-1] === 'g'){
                    suffix = conj[5].forms[mode][tense][person];  // <- conj pour -ger
                }
                else suffix =  conj[2].forms[mode][tense][person];  // <- 
                return prefix + e + middle + suffix;
            }
            case 19: case 20: {
                // console.log('case 19 / case 20');
                let position;
                for(let n = this.#spelling.length - 3; n > 0; n--){
                    if(this.#spelling[n] === 'e') {
                        position = n;
                        break;
                    }
                }
                let prefix = this.#spelling.substring(0, position);
                let middle = this.#spelling.substring(position + 1, this.#spelling.length - 2);
                let e = conj[tabPosition].forms[mode][tense + 'Middle'][person];
                let suffix;
                if(e[e.length-1] === 'c') suffix = conj[4].forms[mode][tense][person];  // <- conj pour -cer
                else if(e[e.length-1] === 'g') conj[5].forms[mode][tense][person];  // <- conj pour -ger
                else suffix =  conj[2].forms[mode][tense][person];  // <- 
                return prefix + e + middle + suffix;
            }
        }
        // return this.getPrefix() + conj[this.getPosition()].forms[mode][tense][person];



        // find in conj the tab position : [3, 7, 8, 9, 10, 11] in position 0, [6] in position 1 ...
     
        
        // tab 14
        // cél-é -br- er : br -> middle, cél -> préfixe
        // s- é - ch - er : ch -> middle, s -> préfixe
    }
}

// const p = new Promise();


async function getPhonetics(url, conjugation) {
    let data = '';
    const strStart = `<span class="API" title="Prononciation API">\\`;
    const strEnd   = `\</span>`

    https.get(url, (res) => {
        try{
        if(res.statusCode !== 200) {
            throw new Error(`Request Failed.\n Status Code: ${statusCode}`);
        } else {
            res.on('data', (chunk) => { data += chunk; });
            
            res.on('error', (error)=> {
                console.log('Erreur', error);
            });
            
            res.on('end', () => {
                const intStart = data.indexOf(strStart) + strStart.length;
                const intEnd = data.indexOf(strEnd, intStart);
                const phonetics = data.substring(intStart, intEnd-1);

                if(phonetics.length < 32) {
                    // console.log(`${conjugation};${phonetics};`);
                    fs.writeFileSync('phonetics.txt', `${conjugation};${phonetics};\n`, {flag:'a' , encoding: 'utf8'})
                    return phonetics;
                } else {
                    console.log('Error : ',  conjugation, 'intStart:', intStart);
                    fs.writeFileSync('error.txt', conjugation + '\n'+ data);
                }
            });
        }
    } catch (error) {}

    });
}

function conjugation(vb) {
    let conjugations = [];
    if(typeof vb === 'object') {
        conjugations.push(vb.spelling);
        for(let n = 0; n < 6; n++) conjugations.push(vb.getConjugation('indicatif', 'présent', n));
        for(let n = 0; n < 6; n++) conjugations.push(vb.getConjugation('indicatif', 'imparfait', n));
        for(let n = 0; n < 6; n++) conjugations.push(vb.getConjugation('indicatif', 'passé', n));
        for(let n = 0; n < 6; n++) conjugations.push(vb.getConjugation('indicatif', 'futur', n));
        for(let n = 0; n < 6; n++) conjugations.push(vb.getConjugation('subjonctif', 'présent', n));
        for(let n = 0; n < 6; n++) conjugations.push(vb.getConjugation('subjonctif', 'imparfait', n));
        for(let n = 0; n < 6; n++) conjugations.push(vb.getConjugation('conditionnel', 'présent', n));
        for(let n = 0; n < 1; n++) conjugations.push(vb.getConjugation('participe', 'présent', n));
        for(let n = 0; n < 4; n++) conjugations.push(vb.getConjugation('participe', 'passé', n));   
        conjugations = conjugations.sort((a, b) => a.localeCompare(b, 'fr', { sensitivity: 'base' })).filter((item, pos, arr)=>{
            return !pos || item != arr[pos -1]});
        return conjugations;
    } else {
         throw new Error('variable non valable. Doit-être du type Object')
    }
}

try {
    const vbu = essai.find((element)=> element.spelling === 'jouer');
    console.log(vbu);
    const vb = new Verb(vbu.spelling, vbu.group, vbu.table)

    let conj = conjugation(vb);

    let str = '';
    for (let index = 0; index < conj.length; index++) {
        str += conj[index];
        if(index !== conj.length-1)
            str +='\n';
    }
    fs.writeFileSync('conjugation.txt', str, {flag:'w+' , encoding: 'utf8'});

    let phon = '';
    for(let index = 0; index < conj.length; index++) {
        const url = 'https://fr.wiktionary.org/wiki/' + conj[index];
        console.log(url, vb.spelling);
        const phonetics = await getPhonetics(url, conj[index]);
        console.log(phonetics);
        // if(index !== conj.length-1)
        // phon +='\n';
    }
    fs.writeFileSync('phonetics.txt', phon, {flag:'w+' , encoding: 'utf8'});
} catch (error) {
   console.log(error.message);
}