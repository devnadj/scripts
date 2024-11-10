import https from 'https';
import EventEmitter from 'events';

const myEvent = new EventEmitter();

myEvent.on('one', ()=>{ console.log('Event one :1occured !'); })
myEvent.on('one', ()=>{ console.log('Event one :2 occured !'); })
myEvent.on('one', ()=>{ console.log('Event one :3 occured !'); })
myEvent.on('one', ()=>{ console.log('Event one :4 occured !'); })
myEvent.once('two', ()=>{ console.log('Event two :1 occured !'); })


myEvent.off('event name', ()=>{
    console.log('Event one terminated !');
})


myEvent.emit('one');
myEvent.emit('two');
myEvent.emit('two');
myEvent.emit('two');
myEvent.emit('two');
myEvent.emit('two');

const url = "https://fr.wiktionary.org/wiki/avoir"
// const strStart = `<span class="api" title="Prononciation API">`;
// const strStart = `<span class="api" title="Prononciation API">`;
const strStart = `<span class="API" title="Prononciation API">\\`;
const strEnd   = `\</span>`

let data = '';
https.get(url, (res) => {
    res.on('data', (chunk) => {
        data += chunk;
    });


    res.on('end', () => {
        console.log(data);
        const intStart = data.indexOf(strStart) + strStart.length;
        console.log('instart:', intStart);
        const intEnd = data.indexOf(strEnd, intStart);
        console.log(intEnd);
        const phonetics = data.substring(intStart, intEnd-1);
        console.log('phonetics:', phonetics);
    });
});


// function resp(rsp) {
//     rsp.on('data', (chunk)=>{

//     })
//     console.log(rsp);
// }

// const response = https.get('https://google.fr');
// console.log(response);