import endings from './endings.js'

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
        return this.spelling.substring(0, this.#spelling.length - endings[this.getPosition()].suffixSize);
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
                for(let n = this.#spelling.length - 3; n > 0; n--){
                    if(this.#spelling[n] === 'é') {
                        position = n;
                        break;
                    }
                }
                let prefix = this.#spelling.substring(0, position);
                let middle = this.#spelling.substring(position + 1, this.#spelling.length - 2);
                let e = endings[tabPosition].forms[mode][tense + 'Middle'][person];
                let suffix;
                if(middle[middle.length - 1] === 'c') {
                    middle = this.#spelling.substring(position + 1, this.#spelling.length - 3); // on retire le c
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
                for(let n = this.#spelling.length - 3; n > 0; n--){
                    if(this.#spelling[n] === 'e') {
                        position = n;
                        break;
                    }
                }
                let prefix = this.#spelling.substring(0, position);
                let middle = this.#spelling.substring(position + 1, this.#spelling.length - 2);
                let e = endings[tabPosition].forms[mode][tense + 'Middle'][person];
                let suffix;
                if(e[e.length-1] === 'c') suffix = endings[4].forms[mode][tense][person];  // <- endings pour -cer
                else if(e[e.length-1] === 'g') endings[5].forms[mode][tense][person];  // <- endings pour -ger
                else suffix =  endings[2].forms[mode][tense][person];  // <- 
                return prefix + e + middle + suffix;
            }
        }
        // return this.getPrefix() + endings[this.getPosition()].forms[mode][tense][person];



        // find in endings the tab position : [3, 7, 8, 9, 10, 11] in position 0, [6] in position 1 ...
     
        
        // tab 14
        // cél-é -br- er : br -> middle, cél -> préfixe
        // s- é - ch - er : ch -> middle, s -> préfixe
    }
}

export default Verb;