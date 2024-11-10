import conj from "./endings.js";

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
        // console.log('préfix', this.spelling.substring(0, this.#spelling.length - conj[this.getPosition()].suffixSize));
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

try {

    const essai = [
        { spelling: 'être', group: 3, table: 1 },      { spelling: 'avoir', group: 3, table: 2 },
        { spelling: 'aimer', group: 1, table: 3 },     { spelling: 'finir', group: 2, table: 6 },
        { spelling: 'jouer', group: 1, table: 7 },     { spelling: 'étudier', group: 1, table: 8 },
        { spelling: 'piller', group: 1, table: 9 },    { spelling: 'créer', group: 1, table: 10 },
        { spelling: 'naviguer', group: 1, table: 11 }, { spelling: 'placer', group: 1, table: 12 },
        { spelling: 'manger', group: 1, table: 13 },   { spelling: 'céder', group: 1, table: 14 },
        { spelling: 'régner', group: 1, table: 15 },   { spelling: 'léguer', group: 1, table: 16 },
        { spelling: 'rapiécer', group: 1, table: 17 }, { spelling: 'protéger', group: 1, table: 18 },
        { spelling: 'lever', group: 1, table: 19 },    { spelling: 'achever', group: 1, table: 19 },
        { spelling: 'modeler', group: 1, table: 20 },  { spelling: 'celer', group: 1, table: 20 },
        { spelling: 'appeler', group: 1, table: 21 },  { spelling: 'interpeller', group: 1, table: 22 },
        { spelling: 'acheter', group: 1, table: 23 },  { spelling: 'jeter', group: 1, table: 24 },
        { spelling: 'payer', group: 1, table: 25 },    { spelling: 'essuyer', group: 1, table: 26 },
        { spelling: 'employer', group: 1, table: 27 }, { spelling: 'envoyer', group: 1, table: 28 },
        { spelling: 'haïr', group: 2, table: 29 },     { spelling: 'aller', group: 3, table: 30 }
        // { verbe: '', groupe:'', tableau:'' },
    ];

    const vbu = essai.find((element)=> element.spelling === 'aller');
    console.log(vbu);
    const vb = new Verb(vbu.spelling, vbu.group, vbu.table)

    for(let n = 0; n < 6; n++)
        console.log(vb.getConjugation('indicatif', 'présent', n));
    console.log('-----');
    for(let n = 0; n < 6; n++)
        console.log(vb.getConjugation('indicatif', 'imparfait', n));
    console.log('-----');
    for(let n = 0; n < 6; n++)
        console.log(vb.getConjugation('indicatif', 'futur', n));
} catch (error) {
    console.log(error.message);
}