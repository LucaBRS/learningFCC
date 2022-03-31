//FS module (file module)
//sincrono e asyncrono per ora li consideriamo "differenti"

//ASYNCRONO (vedere anche qua i console.log())
//nel momento che inizia con 1 task "esce un attimo" continua con il codice e poi rientra dove era... POSSIBILE SERVIRE PIU USERS

// DESTRUTTURO fs
const {readFile,writeFile} = require('fs') // scrittpo in questa maniera non cambina NULLA rispetto ad averlo scritto const fs= require('fs')
                                    // e accedere al contenuto tramite fs.blabla
// è solo un modo differente per accedervi                                 

//per fare in modo che ASYNCRONO funzioni c'è da fare un CALLBACK e c'è da chiamarla quando abbiamo fatto!

console.log('start');

//ricordare... questo modo non è il migliore per scrivere le cose una nest dentro le altre

readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    const first = result;
    readFile('./content/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err);
            return
        }
        const second = result;
        writeFile('./content/result-async.txt',`here is the result: ${first}, ${second}`, (err,result)=>{
            if(err){
                console.log(err);
                return
            }
            console.log('fatto con task dentro write file');
        })
    })
    console.log(result);
})//otteniamo un buffer se non mettiuamo il coding utf!!!!

console.log('inizio con altro task');


//VEDI ASYNC PATTERN FOLDER!!!