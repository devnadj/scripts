const endings_ = {
    '1':{  //  être
        suffix: '',
        indicatif: {
            présent: ['suis', 'es', 'est', 'sommes', 'êtes', 'sont'],
            imparfait: ['étais', 'étais', 'était', 'étions', 'étiez', 'étaient'],
            passé: ['fus', 'fus', 'fut', 'fûmes', 'fûtes', 'furent'],
            futur: ['serai', 'seras', 'sera', 'serons', 'serez', 'seront'],
        },
        subjonctif: {
            présent: ['sois', 'sois', 'soit', 'soyons', 'soyez', 'soient'],
            imparfait: ['fusse', 'fusses', 'fût', 'fussions', 'fussiez', 'fussent']
        },
        conditionnel: { present: ['serais', 'serais', 'serait', 'serions', 'seriez', 'seraient'], },
        participe: {
            présent: ['étant'],
            passé: ['été', 'été', 'été','été']
        },
        imperatif: { present: ['sois', 'soyons', 'soyez'] }
    },
    '2':{  //  avoir
        suffix: '',
        indicatif: {
            présent: ['ai', 'as', 'a', 'avons', 'avez', 'ont'],
            imparfait: ['avais', 'avais', 'avait', 'avions', 'aviez', 'avaient'],
            passé: ['eus', 'eus', 'eut', 'eûmes', 'eûtes', 'eurent'],
            futur: ['aurai', 'auras', 'aira', 'aurons', 'aurez', 'auront'],
        },
        subjonctif: {
            présent: ['aie', 'aies', 'ait', 'ayons', 'ayez', 'aient'],
            imparfait: ['eusse', 'eusses', 'eût', 'eussions', 'eussiez', 'eussent']
        },
        conditionnel: { present: ['aurais', 'aurais', 'aurait', 'aurions', 'auriez', 'auraient'], },
        participe: {
            présent: ['ayant'],
            passé: ['eu', 'eue', 'eues','eus']
        },
        imperatif: { présent: ['aie', 'ayons', 'ayez'] }
    },
    '3': { // 1st groupe general
        tableaux: [3, 7, 8, 9, 10, 11],
        suffix: 'er',
        indicatif: {
            présent: ['e', 'es', 'e', 'ons', 'ez', 'ent'],
            imparfait: ['ais', 'ais', 'ait', 'ions', 'iez', 'aient'],
            passé: ['ai', 'as', 'a', 'âmes', 'âtes', 'èrent'],
            futur: ['erai', 'eras', 'era', 'erons', 'erez', 'eront'],
        },
        subjonctif: {
            présent: ['e', 'es', 'e', 'ions', 'iez', 'ent'],
            imparfait: ['asse', 'asses', 'ât', 'assions', 'assiez', 'assent']
        },
        conditionnel: { présent: ['erais', 'erais', 'erait', 'erions', 'eriez', 'eraient'], },
        participe: {
            présent: ['ant'],
            passé: ['é', 'ée', 'ées','és']
        },
        imperatif: { présent: ['e', 'ons', 'ez'] }
    },
    '6': {  //  second group general
        suffix: 'ir',
        indicatif: {
            présent:   [`is`, `is`, `it`, `issons`, `issez`, `issent`],
            imparfait: ['issais', 'issais', 'issait', 'issions', 'issiez', 'issaient'],
            passé:     ['is', 'is', 'it', 'îmes', 'îtes', 'irent'],
            futur:     ['irai', 'iras', 'ira', 'irons', 'irez', 'iront'],
        },
        subjonctif: {
            présent: ['isse', 'isses', 'isse', 'issions', 'issiez', 'issent'],
            imparfait: ['isse', 'isses', 'ît', 'issions', 'issiez', 'issent']
        },
        conditionnel: { présent: ['irais', 'irais', 'irait', 'irions', 'iriez', 'iraient'], },
        participe: {
            présent: ['issant'],
            passé: ['i', 'ie', 'ies','is']
        },
        impératif: { présent: ['is', 'issons', 'issez'] }
    },
    '12':{  // verbes en cer - Retirer le -cer
        indicatif: {
            présent:   ['ce', 'ce', 'ce', 'çons', 'cez', 'cent'],
            imparfait: ['çais', 'çais', 'çait', 'cions', 'ciez', 'çaient'],
            passé:     ['çai', 'ças', 'ça', 'çâmes', 'çâtes', 'cèrent'],
            futur:     ['cerai', 'ceras', 'cera', 'cerons', 'cerez', 'ceront'],
        },
        subjonctif: {
            présent:   ['ce', 'ces', 'ce', 'cions', 'ciez', 'cent'],
            imparfait: ['çasse', 'çasses', 'çât', 'çassions', 'çassiez', 'çassent']
        },
        conditionnel: {
            présent:   ['cerais', 'cerais', 'cerait', 'cerions', 'ceriez', 'ceraient'],
        },
        participe: {
            présent:   [''],
            passé:     ['', '', '','']
        },
        impératif: {
            présent:   ['', '', '']
        }
    },
    '13':{  // Verbe en -ger. Retirer er
        suffixe: 'er',
        indicatif: {
            présent:   ['e', 'es', 'e', 'eons', 'ez', 'ent'],
            imparfait: ['eais', 'eais', 'eait', 'ions', 'iez', 'eaient'],
            passé:     ['eai', 'eas', 'eas', 'eâmes', 'eâtes', 'èrent'],
            futur:     ['era', 'eras', 'era', 'erons', 'egerz', 'eront'],
        },
        subjonctif: {
            présent:   ['e', 'es', 'e', 'ions', 'iez', 'ent'],
            imparfait: ['easse', 'easses', 'eât', 'eassions', 'eassiez', 'eassent']
        },
        conditionnel: {
            présent:   ['erais', 'erais', 'erait', 'erions', 'eriez', 'eraient'],
        },
        participe: {
            présent:   ['eant'],
            passé:     ['é', 'ée', 'ées','és']
        },
        impératif: { présent:   ['e', 'eons', 'ez'] }
    },
    '23':{  // verbes en -eter qui transforment le e en è. retirer le -eter
        suffixe: 'eter',
        indicatif: {
            présent:   ['ète', 'ètes', 'ète', 'etons', 'etez', 'ètent'],
            imparfait: ['etais', 'etais', 'etait', 'etions', 'etiez', 'etaient'],
            passé:     ['etai', 'etas', 'eta', 'etâmes', 'etâtes', 'etèrent'],
            futur:     ['èterai', 'èteras', 'ètera', 'èterons', 'èterez', 'èteront'],
        },
        subjonctif: {
            présent:   ['ète', 'ètes', 'ète', 'etions', 'etiez', 'ètent'],
            imparfait: ['etasse', 'etasses', 'etât', 'etassions', 'etassiez', 'etassent']
        },
        conditionnel: {
            présent:   ['èterais', 'èterais', 'èterait', 'èterions', 'èteriez', 'èteraient'],
        },
        participe: {
            présent:   ['etant'],
            passé:     ['eté', 'etée', 'etés','etés']
        },
        impératif: { présent:   ['ète', 'etons', 'etez'] }
    },
    '24':{  // verbes en -eter qui double le t. Retirer le suffixe er.
        suffixe: 'er',
        indicatif: {
            present:   ['te', 'tes', 'te', 'ons', 'ez', 'tent'],
            imparfait: ['ais', 'ais', 'ait', 'ions', 'iez', 'aient'],
            passe:     ['ai', 'as', 'a', 'âmes', 'âtes', 'èrent'],
            futur:     ['terai', 'teras', 'tera', 'terons', 'terez', 'teront'],
        },
        subjonctif: {
            present:   ['te', 'tes', 'te', 'tions', 'tiez', 'tent'],
            imparfait: ['asse', 'asse', 'ât', 'assions', 'assiez', 'assent']
        },
        conditionnel: { present:   ['terais', 'terais', 'terait', 'terions', 'teriez', 'teraient'] },
        participe: {
            present:   ['ant'],
            passé:     ['é', 'ée', 'ées','és']
        },
        imperatif: { présent:   ['te', 'ons', 'ez'] }
    },
    '25':{  //  verbes en -ayer et -eyer. Retirer le suffixe -yer / -yer
            //  balayer, payer... - essuyer, appuyez
        suffixe: 'ayer|eyer',
        indicatif: {
            présent:   ['ie|ye', 'ies|yes', 'ie|ye', 'yons', 'yez', 'ient|yent'],
            imparfait: ['yais', 'yais', 'yait', 'yions', 'yiez', 'yaient'],
            passé:     ['yai', 'yas', 'ya', 'yâmes', 'yâtes', 'yèrent'],
            futur:     ['ierai|yerai', 'ieras|yeras', 'iera|yera', 'ierons|yerons', 'ierez|yerez', 'ieront|yeront'],
        },
        subjonctif: {
            présent:   ['ie|ye', 'ies|yes', 'ie|ye', 'yions', 'yiez', 'ient|yent'],
            imparfait: ['yasse', 'yasses', 'yât', 'yassions', 'yassiez', 'yassent']
        },
        conditionnel: {
            présent:   ['ierais|yerais', 'ierais|yerais', 'ierait|yerait', 'ierions|yerions', 'ieriez|yeriez', 'ieraient|yeraient'],
        },
        participe: {
            présent:   ['yant'],
            passé:     ['yé', 'yée', 'yées','yés']
        },
        imperatif: { présent: ['ie|ye', 'yons', 'yez'] }
    },
    '26': {  //  verbes en -uyer. Retirer le suffixe -yer
        suffixe: 'yer',
        indicatif: {
            present:   ['ie', 'ies', 'ie', 'yons', 'yez', 'ient'],
            imparfait: ['yais', 'yais', 'yait', 'yions', 'yiez', 'yaient'],
            passe:     ['yai', 'yas', 'ya', 'yâmes', 'yâtes', 'yèrent'],
            futur:     ['ierai', 'ieras', 'iera', 'ierons', 'ierez', 'ieront'],
        },
        subjonctif: {
            present:   ['ie', 'ies', 'ie', 'yions', 'yiez', 'ient'],
            imparfait: ['yasse', 'yasses', 'yât', 'yassions', 'yassiez', 'yassent']
        },
        conditionnel: {
            present:   ['ierais', 'ierais', 'ierait', 'ierions', 'ieriez', 'ieraint'],
        },
        participe: {
            present:   ['yant'],
            passe:     ['yé', 'yée', 'yées','yés']
        },
        imperatif: { present: ['ie', 'yons', 'yez'] }
    }
    ,
    '27':{  //  verbes en -oyer. retirer le suffix -yer
        suffixe: 'yer',
        indicatif: {
            présent:   ['ie', 'ies', 'ie', 'yons', 'yez', 'ient'],
            imparfait: ['yais', 'yais', 'yait', 'yins', 'yiez', 'yaient'],
            passé:     ['yai', 'yas', 'ya', 'yâmes', 'yâtes', 'yèrent'],
            futur:     ['ierai', 'ieras', 'iera', 'ierns', 'ierez', 'iernt'],
        },
        subjonctif: {
            présent:   ['ie', 'ies', 'ie', 'yins', 'yiez', 'ient'],
            imparfait: ['yasse', 'yasses', 'yât', 'yassins', 'yassiez', 'yassent']
        },
        conditionnel: { présent:   ['ierais', 'ierais', 'ierait', 'ierions', 'ieriez', 'ieraient'], },
        participe: {
            présent:   ['yant'],
            passé:    ['é','ée', 'és','és']
        },
        imperatif: { présent: ['ie', 'yons', 'yez'] }
    },
    '28':{  // verbes en -oyer : exceptions. retirer le suffixer -oyer
        suffixe: 'oyer',
        indicatif: {
            présent:   ['oie', 'oies', 'oie', 'oyons', 'oyez', 'oient'],
            imparfait: ['oyais', 'oyais', 'oyait', 'oyions', 'oyiez', 'oyaient'],
            passé:     ['oyai', 'oyas', 'oya', 'oyâmes', 'oyâtes', 'oyèrent'],
            futur:     ['errai', 'erras', 'erra', 'errons', 'errez', 'erront'],
        },
        subjonctif: {
            présent:   ['oie', 'oies', 'oie', 'oyions', 'oyiez', 'oient'],
            imparfait: ['oyasse', 'oyasses', 'oyât', 'oyassions', 'oyassiez', 'oyassent']
        },
        conditionnel: { présent:   ['errais', 'errais', 'errait', 'errions', 'erriez', 'erraient'], },
        participe: {
            présent:   ['oyant'],
            passé:     ['oyé', 'oyée', 'oyées','oyés']
        },
        imperatif: { présent: ['oie', 'oyons', 'oyez'] }
    },
    '29': {  //  29 verbes du second groupe : exception
        suffixe: 'ir',
        indicatif: {
            présent:   [`is`, `is`, `it`, `ïssons`, `ïssez`, `ïssent`],
            imparfait: ['ïssais', 'ïssais', 'ïssait', 'ïssions', 'ïssiez', 'ïssaient'],
            passé:     ['ïs', 'ïs', 'ït', 'ïmes', 'ïtes', 'ïrent'],
            futur:     ['ïrai', 'ïras', 'ïra', 'ïrons', 'ïrez', 'ïront'],
        },
        subjonctif: {
            présent:   ['isse', 'isses', 'isse', 'issions', 'issiez', 'issent'],
            imparfait: ['isse', 'isses', 'ît', 'issions', 'issiez', 'issent']
        },
        conditionnel: { présent:   ['irais', 'irais', 'irait', 'irions', 'iriez', 'iraient'], },
        participe: {
            présent:   ['ïssant'],
            passé:     ['ï', 'ïe', 'ïes','ïs']
        },
        impératif: { présent: ['is', 'ïssons', 'ïssez'] }
    }
}

const endings = [
    {
        tabs:[1], //  verbe être
        forms: {
            indicatif: { présent: ['suis', 'es', 'est', 'sommes', 'êtes', 'sont'], imparfait: ['étais', 'étais', 'était', 'étions', 'étiez', 'étaient'], passé: ['fus', 'fus', 'fut', 'fûmes', 'fûtes', 'furent'], futur: ['serai', 'seras', 'sera', 'serons', 'serez', 'seront'], },
            subjonctif: { présent: ['sois', 'sois', 'soit', 'soyons', 'soyez', 'soient'], imparfait: ['fusse', 'fusses', 'fût', 'fussions', 'fussiez', 'fussent'] },
            conditionnel: { present: ['serais', 'serais', 'serait', 'serions', 'seriez', 'seraient'], },
            participe: { présent: ['étant'], passé: ['été', 'été', 'été','été'] },
            imperatif: { present: ['sois', 'soyons', 'soyez'] }
        }
    },
    {
        tabs: [2],  // verbe avoir
        forms: {
            indicatif: { présent: ['ai', 'as', 'a', 'avons', 'avez', 'ont'], imparfait: ['avais', 'avais', 'avait', 'avions', 'aviez', 'avaient'], passé: ['eus', 'eus', 'eut', 'eûmes', 'eûtes', 'eurent'], futur: ['aurai', 'auras', 'aira', 'aurons', 'aurez', 'auront'], },
            subjonctif: { présent: ['aie', 'aies', 'ait', 'ayons', 'ayez', 'aient'], imparfait: ['eusse', 'eusses', 'eût', 'eussions', 'eussiez', 'eussent'] },
            conditionnel: { present: ['aurais', 'aurais', 'aurait', 'aurions', 'auriez', 'auraient'], },
            participe: { présent: ['ayant'], passé: ['eu', 'eue', 'eues','eus'] },
            imperatif: { présent: ['aie', 'ayons', 'ayez'] }
        }
    },
    {
        tabs: [3, 7, 8, 9, 10, 11], //  -er, -ouer, -uer, -ier, -iller, -igner, -éer, -guer, -quer
        suffixSize: 2,
        forms:{  // 1st groupe géneral
            indicatif: { présent: ['e', 'es', 'e', 'ons', 'ez', 'ent'], imparfait: ['ais', 'ais', 'ait', 'ions', 'iez', 'aient'], passé: ['ai', 'as', 'a', 'âmes', 'âtes', 'èrent'], futur: ['erai', 'eras', 'era', 'erons', 'erez', 'eront'], },
            subjonctif: { présent: ['e', 'es', 'e', 'ions', 'iez', 'ent'], imparfait: ['asse', 'asses', 'ât', 'assions', 'assiez', 'assent'] },
            conditionnel: { présent: ['erais', 'erais', 'erait', 'erions', 'eriez', 'eraient'], },
            participe: { présent: ['ant'], passé: ['é', 'ée', 'ées','és'] },
            imperatif: { présent: ['e', 'ons', 'ez'] }
        },
    },
    {
        tabs: [6],
        suffixSize: 2,
        forms: {  //  second groupe géneral
            indicatif: { présent:   [`is`, `is`, `it`, `issons`, `issez`, `issent`], imparfait: ['issais', 'issais', 'issait', 'issions', 'issiez', 'issaient'], passé:     ['is', 'is', 'it', 'îmes', 'îtes', 'irent'], futur:     ['irai', 'iras', 'ira', 'irons', 'irez', 'iront'], },
            subjonctif: { présent: ['isse', 'isses', 'isse', 'issions', 'issiez', 'issent'], imparfait: ['isse', 'isses', 'ît', 'issions', 'issiez', 'issent'] },
            conditionnel: { présent: ['irais', 'irais', 'irait', 'irions', 'iriez', 'iraient'], },
            participe: { présent: ['issant'], passé: ['i', 'ie', 'ies','is'] },
            impératif: { présent: ['is', 'issons', 'issez'] }
        },
    },
    {
        tabs: [12],// verbes en cer - Retirer le -cer
        suffixSize: 3,
        forms: {  
            indicatif: { présent: ['ce', 'ces', 'ce', 'çons', 'cez', 'cent'], imparfait: ['çais', 'çais', 'çait', 'cions', 'ciez', 'çaient'], passé: ['çai', 'ças', 'ça', 'çâmes', 'çâtes', 'cèrent'], futur:     ['cerai', 'ceras', 'cera', 'cerons', 'cerez', 'ceront'], },
            subjonctif: { présent: ['ce', 'ces', 'ce', 'cions', 'ciez', 'cent'], imparfait: ['çasse', 'çasses', 'çât', 'çassions', 'çassiez', 'çassent'] },
            conditionnel: { présent: ['cerais', 'cerais', 'cerait', 'cerions', 'ceriez', 'ceraient'] },
            participe: { présent: ['çant'], passé: ['cé', 'cée', 'cées','cés'] },
            impératif: { présent: ['ce', 'çons', 'cez'] }
        }
    },
    {
        tabs: [13],  // Verbe en -ger. Retirer er
        suffixSize: 2,
        forms: {
            suffixe: 'er',
            indicatif: { présent: ['e', 'es', 'e', 'eons', 'ez', 'ent'], imparfait: ['eais', 'eais', 'eait', 'ions', 'iez', 'eaient'], passé: ['eai', 'eas', 'eas', 'eâmes', 'eâtes', 'èrent'], futur:     ['era', 'eras', 'era', 'erons', 'egerz', 'eront'], },
            subjonctif: { présent: ['e', 'es', 'e', 'ions', 'iez', 'ent'], imparfait: ['easse', 'easses', 'eât', 'eassions', 'eassiez', 'eassent'] },
            conditionnel: { présent: ['erais', 'erais', 'erait', 'erions', 'eriez', 'eraient'], },
            participe: { présent: ['eant'], passé: ['é', 'ée', 'ées','és'] },
            impératif: { présent: ['e', 'eons', 'ez'] }
        }
    },
    {  // verbes en é___er (accélérer, )
        tabs: [14, 15, 16, 17, 18],
        forms: {
            indicatif: { présentMiddle: ['è', 'è', 'è', 'é', 'é', 'è'], imparfaitMiddle: ['é', 'é', 'é', 'é', 'é', 'é'], passéMiddle: ['é', 'é', 'é', 'é', 'é', 'é'], futurMiddle:     ['é', 'é', 'é', 'é', 'é', 'é'], },
            subjonctif: { présentMiddle:   ['è', 'è', 'è', 'é', 'é', 'è'], imparfaitMidle: ['é', 'é', 'é', 'é', 'é', 'é'] },
            conditionnel: { présentMiddle:   ['é', 'é', 'é', 'é', 'é', 'é'] },
            participe: { présentMiddle: ['é'], passéMiddle: ['é', 'é', 'é','é'] },
            impératif: { présentMiddle:   ['è', 'é', 'é'] }
        }
    },
    {
        tabs: [19, 20],  // verbes en -ecer, -emer, -ener // -eler
        suffixSize: 2,
        forms:{
            indicatif: { présentMiddle: ['è', 'è', 'è', 'e', 'e', 'è'], imparfaitMiddle: ['e', 'e', 'e', 'e', 'e', 'e'], passéMiddle: ['e', 'e', 'e', 'e', 'e', 'e'], futurMiddle: ['è', 'è', 'è', 'è', 'è', 'è'], },
            subjonctif: { présentMiddle: ['è', 'è', 'è', 'e', 'e', 'è'], imparfaitMiddle: ['e', 'e', 'e', 'e', 'e', 'e'] },
            conditionnel: { présent: ['è', 'è', 'è', 'è', 'è', 'è'], },
            participe: { présentMiddle: ['e'], passéMiddle: ['e', 'e', 'e','e'] },
            impératif: { présentMiddle: ['è', 'e', 'e'] }
        },
    },
    {
        tabs: [21],  //  verbes en -eler qui double le l (appeler, amonceler...)
        suffixSize: 2,
        forms: {
            indicatif: { présent: ['le', 'les', 'le', 'ons', 'ez', 'lent'], imparfait: ['ais', 'ais', 'ait', 'ions', 'iez', 'aient'], passé: ['ai', 'as', 'a', 'âmes', 'âtes', 'èrent'], futur: ['lerai', 'leras', 'lera', 'lerons', 'lerez', 'leront'], },
            subjonctif: { présent: ['le', 'les', 'le', 'ions', 'iez', 'lent'], imparfait: ['asse', 'asses', 'ât', 'assions', 'assiez', 'assent'] },
            conditionnel: { présent:   ['lerais', 'lerais', 'lerait', 'lerions', 'leriez', 'leraient'] },
            participe: { présent: ['ant'], passé: ['é', 'ée', 'ées','és'] },
            impératif: { présent: ['le', 'ons', 'ez'] }
        }
    },
    {
        tabs: [22],  //  interpeller
        suffixSize: 2,
        forms: {
            indicatif:    { présent: ['e', 'es', 'e', 'ons', 'ez', 'ent'], imparfait: ['ais', 'ais', 'ait', 'ions', 'iez', 'aient'], passé: ['ai', 'as', 'a', 'âmes', 'âtes', 'èrent'], futur: ['erai', 'eras', 'era', 'erons', 'erez', 'eront'], },
            subjonctif:   { présent: ['e', 'es', 'e', 'ions', 'iez', 'ent'], imparfait: ['asse', 'asses', 'ât', 'assions', 'assiez', 'assent'] },
            conditionnel: { présent: ['erais', 'erais', 'erait', 'erions', 'eriez', 'eraient'], },
            participe:    { présent: ['ant'], passé: ['é', 'ée', 'ées','és'] },
            imperatif:    { présent: ['e', 'ons', 'ez'] }
        },
    },
    {
        tabs: [23],  //  verbes en -eter qui transforme e en è (acheter, corseter, fileter...)
        suffixSize: 4,
        forms:{
            indicatif:    { présent: ['ète', 'ètes', 'ète', 'etons', 'etez', 'ètent'], imparfait: ['etais', 'etais', 'etait', 'etions', 'etiez', 'etaient'], passé: ['etai', 'etas', 'eta', 'etâmes', 'etâtes', 'etèrent'], futur: ['èterai', 'èteras', 'ètera', 'èterons', 'èterez', 'èteront'], },
            subjonctif:   { présent: ['ète', 'ètes', 'ète', 'etions', 'etiez', 'ètent'], imparfait: ['etasse', 'etasses', 'etât', 'etassions', 'etassiez', 'etassent'] },
            conditionnel: { présent: ['èterais', 'èterais', 'èterait', 'èterions', 'èteriez', 'èteraient'], },
            participe:    { présent: ['etant'], passé: ['eté', 'etée', 'etées','etés'] },
            imperatif:    { présent: ['ète', 'etons', 'etez'] }
        },
    },
    {
        tabs: [24],  //  verbes en -eter (jeter, breveter; cacheter...)
        suffixSize: 2,
        forms:{
            indicatif:    { présent: ['te', 'tes', 'te', 'ons', 'ez', 'tent'], imparfait: ['ais', 'ais', 'ait', 'ions', 'iez', 'aient'], passé: ['ai', 'as', 'a', 'âmes', 'âtes', 'èrent'], futur: ['terai', 'teras', 'tera', 'terons', 'terez', 'teront'], },
            subjonctif:   { présent: ['te', 'tes', 'te', 'ions', 'iez', 'tent'], imparfait: ['asse', 'asses', 'ât', 'assions', 'assiez', 'assent'] },
            conditionnel: { présent: ['erais', 'erais', 'erait', 'erions', 'eriez', 'eraient'], },
            participe:    { présent: ['ant'], passé: ['é', 'ée', 'ées','és'] },
            imperatif:    { présent: ['te', 'ons', 'ez'] }
        },
    },
    {
        tabs: [25],  //  verbes en -ayer et -eyer. Retirer le suffixe -yer / -yer (balayer, payer...)
        suffixSize: 3,
        forms : {
            indicatif:    { présent: ['ie|ye', 'ies|yes', 'ie|ye', 'yons', 'yez', 'ient|yent'], imparfait: ['yais', 'yais', 'yait', 'yions', 'yiez', 'yaient'], passé: ['yai', 'yas', 'ya', 'yâmes', 'yâtes', 'yèrent'], futur: ['ierai|yerai', 'ieras|yeras', 'iera|yera', 'ierons|yerons', 'ierez|yerez', 'ieront|yeront'], },
            subjonctif:   { présent: ['ie|ye', 'ies|yes', 'ie|ye', 'yions', 'yiez', 'ient|yent'], imparfait: ['yasse', 'yasses', 'yât', 'yassions', 'yassiez', 'yassent'] },
            conditionnel: { présent: ['ierais|yerais', 'ierais|yerais', 'ierait|yerait', 'ierions|yerions', 'ieriez|yeriez', 'ieraient|yeraient'], },
            participe:    { présent: ['yant'], passé: ['yé', 'yée', 'yées','yés'] },
            imperatif:    { présent: ['ie|ye', 'yons', 'yez'] }
        }
    },
    {
        tabs: [26, 27],  //  choyer, déployer, employer... - essuyer, appuyez...
        suffixSize: 3,
        forms: {
            indicatif:    { présent: ['ie', 'ies', 'ie', 'yons', 'yez', 'ient'], imparfait: ['yais', 'yais', 'yait', 'yions', 'yiez', 'yaient'], passé: ['yai', 'yas', 'ya', 'yâmes', 'yâtes', 'yèrent'], futur: ['ierai', 'ieras', 'iera', 'ierns', 'ierez', 'iernt'], },
            subjonctif:   { présent: ['ie', 'ies', 'ie', 'yins', 'yiez', 'ient'], imparfait: ['yasse', 'yasses', 'yât', 'yassins', 'yassiez', 'yassent'] },
            conditionnel: { présent:   ['ierais', 'ierais', 'ierait', 'ierions', 'ieriez', 'ieraient'], },
            participe:    { présent: ['yant'], passé: ['yé','yée', 'yés','yés'] },
            imperatif:    { présent: ['ie', 'yons', 'yez'] }
        }
    },
    {
        tabs: [28],  //  envoyer, renvoyer
        suffixSize: 4, 
        forms: {
            indicatif:    { présent: ['oie', 'oies', 'oie', 'oyons', 'oyez', 'oient'], imparfait: ['oyais', 'oyais', 'oyait', 'oyions', 'oyiez', 'oyaient'], passé: ['oyai', 'oyas', 'oya', 'oyâmes', 'oyâtes', 'oyèrent'], futur: ['errai', 'erras', 'erra', 'errons', 'errez', 'erront'], },
            subjonctif:   { présent: ['oie', 'oies', 'oie', 'oyions', 'oyiez', 'oient'], imparfait: ['oyasse', 'oyasses', 'oyât', 'oyassions', 'oyassiez', 'oyassent'] },
            conditionnel: { présent: ['errais', 'errais', 'errait', 'errions', 'erriez', 'erraient'], },
            participe:    { présent: ['oyant'], passé: ['oyé', 'oyée', 'oyées','oyés'] },
            imperatif:    { présent: ['oie', 'oyons', 'oyez'] }
        }
    },
    {
        tabs: [29],  //  verbes du second groupe : exception (haïr, entre-haïr)
        suffixSize: 2,
        forms: {
            indicatif:    { présent: [`is`, `is`, `it`, `ïssons`, `ïssez`, `ïssent`], imparfait: ['ïssais', 'ïssais', 'ïssait', 'ïssions', 'ïssiez', 'ïssaient'], passé: ['ïs', 'ïs', 'ït', 'ïmes', 'ïtes', 'ïrent'], futur: ['ïrai', 'ïras', 'ïra', 'ïrons', 'ïrez', 'ïront'], },
            subjonctif:   { présent: ['isse', 'isses', 'isse', 'issions', 'issiez', 'issent'], imparfait: ['isse', 'isses', 'ît', 'issions', 'issiez', 'issent'] },
            conditionnel: { présent:   ['irais', 'irais', 'irait', 'irions', 'iriez', 'iraient'], },
            participe:    { présent: ['ïssant'], passé: ['ï', 'ïe', 'ïes','ïs'] },
            impératif:    { présent: ['is', 'ïssons', 'ïssez'] }
        }
    },
    {
        tabs: [30],
        forms: {
            indicatif:    { présent: ['vais', 'vas', 'va', 'allons', 'allez', 'vont'], imparfait: ['allais', 'allais', 'allait', 'allions', 'alliez', 'allaient'], passé: ['allai', 'allas', 'alla', 'allâmes', 'allâtes', 'allèrent'], futur: ['irai', 'iras', 'ira', 'irons', 'irez', 'iront'], },
            subjonctif:   { présent: ['aille', 'ailles', 'aille', 'allions', 'alliez', 'aillent'], imparfait: ['allasse', 'allasses', 'allât', 'allassions', 'allassiez', 'allassent'] },
            conditionnel: { présent: ['irais', 'irais', 'irait', 'irions', 'iriez', 'iraient'] },
            participe:    { présent: ['allant'], passé: ['allé', 'allée', 'allées','allés'] },
            impératif:    { présent: ['va', 'allons', 'allez'] }
        },
    }
]

export default endings;

/*
forms: {
    indicatif: {
        présent:   ['', '', '', '', '', ''],
        imparfait: ['', '', '', '', '', ''],
        passé:     ['', '', '', '', '', ''],
        futur:     ['', '', '', '', '', ''],
    },
    subjonctif: {
        présent:   ['', '', '', '', '', ''],
        imparfait: ['', '', '', '', '', '']
    },
    conditionnel: {
        présent:   ['', '', '', '', '', ''],
    },
    participe: {
        présent:   [''],
        passé:     ['', '', '','']
    },
    impératif: {
        présent:   ['', '', '']
    }
}
*/

/*
'1':{
    indicatif: {
        présent:   ['', '', '', '', '', ''],
        imparfait: ['', '', '', '', '', ''],
        passé:     ['', '', '', '', '', ''],
        futur:     ['', '', '', '', '', ''],
    },
    subjonctif: {
        présent:   ['', '', '', '', '', ''],
        imparfait: ['', '', '', '', '', '']
    },
    conditionnel: { présent:   ['', '', '', '', '', ''] },
    participe: {
        présent:   [''],
        passé:     ['', '', '','']
    },
    impératif: { présent:   ['', '', ''] }
},
*/