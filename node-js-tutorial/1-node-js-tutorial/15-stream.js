                                        /*STREAMS*/
//serveno per leggere strema di dati, scrivere, duplicare ecc.
//estende classe emitter

//quando usiamo la sinc o async, leggiato tutto il file. Ma se abbiamo grande file,
// usiamo tutta la memoria e possiamo ottenere errore di size too big!

//Solozione ReedStreem!!

//Creiamo per primo un file GRANDE (usiamo il modulo del tizio: 15-create-big-file.js)

//facciamo un file synk/async come fatto durante 10 e 11
const {createReadStream} = require('fs')

// //passiamo quello creato:
// const stream = createReadStream('./content/big.txt');


// //"lanciando" la lettura, il file ci ricorda che ci sono molti byte!
// //qundi leggiamo i datti a "pezzi"
// stream.on('data',(result)=>{
//     console.log(result);
// })


/*SOLUZIONE 1 ( per big file) */
//dobbiamo passare il size del buffer che vogliamo!
const stream = createReadStream('./content/big.txt', {
    highWaterMark:90000,
    encoding:'utf-8'});

stream.on('data',(result)=>{
    console.log(result);
})

//facciamo evento anche per possibili errori.
// (per testarlo basta cambiare path)
stream.on('error',(err)=>console.log(err))

// ora LUI fa un file ancora piu grande!
//proviamo a settare un server per vedere "come si comporta"

var http = require('http')
var fs = require('fs')

http
    .createServer(function(req,res){
        const fileStream = fs.createReadStream('./content/big.txt','utf-8')
        fileStream.on('open',()=>{
            // METODO PIPE, che pusha da read stream a write stream!
            // se possiamo leggiamo dati in chunk li possiamo scrivere!
            fileStream.pipe(res)
        })
        fileStream.on('error',(err)=>{
           res.end(err) 
        })
    })
    .listen(5000)
// se fai ispeziona alemento: la mia responce è in chunk