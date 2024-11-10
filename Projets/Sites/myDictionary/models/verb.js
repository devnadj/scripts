import db from '../databases/database.js'
import Word from './word.js'
import endings from './endings.js'
import fs from 'fs';

class Verb extends Word{
    #group;
    #prefix;
    #table;
    #suffix;
    #t;
    #ti;
    #i;
    #p;
    #exp;
    #d;
    #imp;


    get group() {
        return this.#group;
    }

    get table() {
        return this.#table;
    }

    static async loadCSV(path) {
        console.log('LOAD CSV');
        const fread = fs.readFileSync(path, 'utf8');
        let tab = fread.split('\r\n');
        let verbs = [];
        for(const line of tab) {
            const split = line.split(';');
            const verb = {
                spelling: split[0],
                group: split[1],
                tab: split[2],
                prefix: split[3],
                inter: split[4],
                t: split[5] === 't' || split[6] === 't' || split[7] === 't' || split[8] === 't'? true : false,
                ti: split[5] === 'ti' || split[6] === 'ti' || split[7] === 'ti' || split[8] === 'ti'? true : false,
                i: split[5] === 'i' || split[6] === 'i' || split[7] === 'i' || split[8] === 'i'? true : false,
                p: split[5] === 'p' || split[6] === 'p' || split[7] === 'p' || split[8] === 'p'? true : false,
                xp: split[5] === 'xp' || split[6] === 'xp' || split[7] === 'xp' || split[8] === 'xp'? true : false,
                d: split[5] === 'd' || split[6] === 'd' || split[7] === 'd' || split[8] === 'd'? true : false,
                imp: split[5] === 'imp' || split[6] === 'imp' || split[7] === 'imp' || split[8] === 'imp'? true : false,
                auxiliaire: split[9],
                other: split[10]
            }
            verbs.push(verb);
        }
        let start = 0, length = 100;

        verbs = verbs.slice(0, 100);
        while(start < verbs.length) {
            await this.insertVerbs(verbs.slice(start, start + length));
            start +=length;
        }
    }

    static async __loadCSV__(path) {
        const fread = fs.readFileSync(path, 'utf8');
        let tab = fread.split('\r\n');
        let verbs = [];
        for(const line of tab) {
            const split = line.split(';');
            const verb = {
                spelling: split[0],
                group: split[1],
                tab: split[2],
                prefix: split[3],
                inter: split[4],
                t: split[5] === 't' || split[6] === 't' || split[7] === 't' || split[8] === 't'? true : false,
                ti: split[5] === 'ti' || split[6] === 'ti' || split[7] === 'ti' || split[8] === 'ti'? true : false,
                i: split[5] === 'i' || split[6] === 'i' || split[7] === 'i' || split[8] === 'i'? true : false,
                p: split[5] === 'p' || split[6] === 'p' || split[7] === 'p' || split[8] === 'p'? true : false,
                xp: split[5] === 'xp' || split[6] === 'xp' || split[7] === 'xp' || split[8] === 'xp'? true : false,
                d: split[5] === 'd' || split[6] === 'd' || split[7] === 'd' || split[8] === 'd'? true : false,
                imp: split[5] === 'imp' || split[6] === 'imp' || split[7] === 'imp' || split[8] === 'imp'? true : false,
                auxiliaire: split[9],
                other: split[10]
            }
            verbs.push(verb);
        }

        console.log(verbs);

        // find word
        for(const verb of verbs) {
            const response = await this.getId(verb.spelling);
            console.log(verb.spelling, response);
            if(response !== undefined)
                fs.writeFileSync('./output.txt', `${verb.spelling} ${ response.id }\n`, { flag: 'a' })
            else
            fs.writeFileSync('./output.txt', `${verb.spelling} undefined \n`, { flag: 'a' })
        }

        // insert verb
        console.log(`c'est fini`);
        let start = 0, length = 100;

    }


    static async insertVerbs(vbs) {
        try {
            let request = `INSERT INTO "verb"("word_id", "group", "tab", "t", "ti", "i", "p", "d", "imp", "xp") VALUES`;

            for(let i = 0; i < vbs.length; i ++) {
                request += `((SELECT "id" FROM "word" WHERE "spelling"='${vbs[i].spelling}'), ${vbs[i].group}, ${vbs[i].tab}, ${vbs[i].t}, ${vbs[i].ti}, ${vbs[i].i}, ${vbs[i].p}, ${vbs[i].d}, ${vbs[i].imp}, ${vbs[i].xp})`;
                request += i >= vbs.length-1 ? ';' : `, `;
            }
            console.log(request);
            await db.run(request);
        } catch(error) {
            console.log('insertVerbs error', error.message);
        }
    }

    constructor(spelling, group, table, ) {
        super(spelling, '');
        if(group < 1 || group > 3)
            throw new Error(`The group must be between 1 and 3`);
        else
            this.#group = group

        this.#checkValidity();

        this.#table = table;
    }

    /* check the verb's validity */
    #checkValidity(){
        this.#suffix = this.spelling.substring(this.spelling.length - 2, this.spelling.length);

        if(this.#group === 2 && !(this.#suffix  ==='ir' || this.#suffix  ==='ïr'))
            throw new Error(`suffix error : a second group verb connot ends with ${this.#suffix }.`);
        
        if(this.#group === 1 && this.#suffix  !== 'er')
            throw new Error(`suffix error : a firt group verb connot ends with ${this.#suffix }.`);
    }

    getSuffixSize(tab){
        for(groups of endings) {
            if(groups.tabs.includes(tab)) {
                return groups.suffixSize;
            }
        }
    }

    getPosition() {  //  get position of group
        for(let counter = 0; counter < endings.length; counter ++) {
            if(endings[counter].tabs.includes(this.#table))
                return counter;
        }
    }

    getPrefix() {
        return this.spelling.substring(0, this.spelling.length - endings[this.getPosition()].suffixSize);
    }

    getConjugation(mode, tense, person) {
        const tabPosition = this.getPosition();
        switch(this.#table) {
            case 1:
                return endings[tabPosition].forms[mode][tense][person];
            case 2:
                return endings[tabPosition].forms[mode][tense][person];
            case 12:
                return this.getPrefix() + endings[tabPosition].forms[mode][tense][person];
            case 30:
                return endings[tabPosition].forms[mode][tense][person];
            case 13:
                return this.getPrefix() + endings[tabPosition].forms[mode][tense][person];
            case 3: case 6: case 7: case 8: case 9: case 10: case 11: case 21: 
            case 22: case 23: case 24: case 25 : case 26: case 27: case 28: case 29:
                if(endings[this.getPosition()].forms[mode][tense][person].includes('|')) {
                    const ret = []
                    ret.push(this.getPrefix() + endings[tabPosition].forms[mode][tense][person].split('|')[0]);
                    ret.push(this.getPrefix() + endings[tabPosition].forms[mode][tense][person].split('|')[1]);
                    return ret;
                }
                else
                    return this.getPrefix() + endings[tabPosition].forms[mode][tense][person];
            case 14: case 15: case 16: case 17: case 18: {
                let position;
                for(let n = this.spelling.length - 3; n > 0; n--){
                    if(this.spelling[n] === 'é') {
                        position = n;
                        break;
                    }
                }
                let prefix = this.spelling.substring(0, position);
                let middle = this.spelling.substring(position + 1, this.spelling.length - 2);
                let e = endings[tabPosition].forms[mode][tense + 'Middle'][person];
                let suffix;
                if(middle[middle.length - 1] === 'c') {
                    middle = this.spelling.substring(position + 1, this.spelling.length - 3); // on retire le c
                    suffix = endings[4].forms[mode][tense][person]; 
                }  // <- endings pour -cer
                else if(middle[middle.length-1] === 'g'){
                    suffix = endings[5].forms[mode][tense][person];  // <- endings pour -ger
                }
                else suffix =  endings[2].forms[mode][tense][person];  // <- 
                return prefix + e + middle + suffix;
            }
            case 19: case 20: {
                // console.log('case 19 / case 20');
                let position;
                for(let n = this.spelling.length - 3; n > 0; n--){
                    if(this.spelling[n] === 'e') {
                        position = n;
                        break;
                    }
                }
                let prefix = this.spelling.substring(0, position);
                let middle = this.spelling.substring(position + 1, this.spelling.length - 2);
                let e = endings[tabPosition].forms[mode][tense + 'Middle'][person];
                let suffix;
                if(e[e.length-1] === 'c') suffix = endings[4].forms[mode][tense][person];  // <- endings pour -cer
                else if(e[e.length-1] === 'g') endings[5].forms[mode][tense][person];  // <- endings pour -ger
                else suffix =  endings[2].forms[mode][tense][person];  // <- 
                return prefix + e + middle + suffix;
            }
        }
    }
}

export default Verb;