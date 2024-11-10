import https from 'https';
import fs from 'fs';

async function getAllPhonetics(verbs) {
    console.log(verbs.length);
    const url = 'https://fr.wiktionary.org/wiki/';
    let phoneticsTab = [];
    try {
        for (let index = 0; index < verbs.length; index++) {

            let data;
            const strStart = `<span class="API" title="Prononciation API">\\`;
            const strEnd   = `\</span>`            
            https.get(url + verbs[index], (res)=> {
                if(res.statusCode !== 200) {
                    throw new Error(`Request Failed.\n Status Code: ${statusCode}`);
                } else {
                    res.on('data', (chunk) => {data += chunk; });

                    res.on('end', ()=> {
                        const intStart = data.indexOf(strStart) + strStart.length;
                        const intEnd = data.indexOf(strEnd, intStart);
                        const phonetics = data.substring(intStart, intEnd-1);
                        
                        phoneticsTab.push();

                        if(phonetics.length < 32) {
                            console.log('getAllPhonetics:', res.statusCode)
                            phoneticsTab.push({
                                verbalForm: verbs[index],
                                phonetics: phonetics
                            });

                            if(index === verbs.length - 1) {
                                phoneticsTab = phoneticsTab.sort((a, b) => a.verbalForm.localeCompare(b.verbalForm, 'fr', {sensitivity: 'base'})).filter((item, pos, arr)=>{
                                    return !pos || item != arr[pos -1]});
                                console.log(phoneticsTab.length, phoneticsTab);
                                let str = '';
                                for (let index = 0; index < phoneticsTab.length; index++) {
                                    str += `${phoneticsTab[index].verbalForm};${phoneticsTab[index].phonetics};`;
                                    if(index !== phoneticsTab.length-1)
                                    str +='\n';
                                }
                                fs.writeFileSync('phonetics.txt', str, 'utf-8');
                                return phoneticsTab;
                            }
                        } else {
                            console.log('Error : ',  conjugation, 'intStart:', intStart);
                            fs.writeFileSync('error.txt', conjugation + '\n'+ data);
                        }
                    });

                    res.on('error', (error) => { throw new Error(`Erreur`)});
                }
            })
        }
    } catch (error) {
        console.log('Erreur:', error);
    }
}

export default getAllPhonetics;