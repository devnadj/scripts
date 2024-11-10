import https from 'https';
import fs from 'fs'
import { log } from 'console';

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
            
            res.on('end', () => {
                const intStart = data.indexOf(strStart) + strStart.length;
                const intEnd = data.indexOf(strEnd, intStart);
                const phonetics = data.substring(intStart, intEnd-1);
                
                if(phonetics.length < 32) {
                    //fs.writeFileSync('./output/phonetics.txt', `${conjugation};${phonetics};\n`, {flag:'a' , encoding: 'utf8'});
                    fs.writeFileSync('./output/phonetics.txt', `.`, {flag:'a' , encoding: 'utf8'});
                    // return phonetics;
                    console.log('getPhonetics:', res.statusCode);
                    return res.statusCode;
                } else {
                    fs.writeFileSync('./output/error.txt', conjugation + '\n'+ data);
                }
            });

            res.on('error', (error)=> {
                console.log('Erreur', error);
            });
        }
    } catch (error) {}
    });
}

export default getPhonetics;