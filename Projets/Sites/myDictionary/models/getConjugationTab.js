function getConjugationTab(vb) {
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
        conjugations = conjugations.sort((a, b) => a.localeCompare(b, 'fr', { sensitivity: 'base' })).filter((item, pos, arr)=>{ return !pos || item != arr[pos -1]});
        return conjugations;
    } else {
         throw new Error('variable non valable. Doit-être du type Object')
    }
}

export default getConjugationTab;