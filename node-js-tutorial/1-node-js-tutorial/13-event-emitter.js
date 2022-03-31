// in questo caso andrevo a vedere EVENT e possibili "logiche" come gestire click bottoni!
//                                      RICORDARE L'ORDINE CONTA!!!!

//pratica comune è chiamare modulo events e assegnare a variabile EventEmitter
//(se voglio creare qualcosa di mio devo estendere la classe)
const EventEmitter = require('events');

//creiamo istanza della nostra classe
const customEmitter = new EventEmitter();

// //vedremo metodi : "on" e "emit"
// //"on"  -> ascolta per specifici eventi
// //"emit"-> emette specifici eventi

                                                
//                                             /*  ON (subscribe)*/ 
// // passo cio che deve ascoltare e dopo la funzione CallBack-> ()=> ( cioè cosa deve rispndere 
// // quando ascolta 'response)

// customEmitter.on('response',()=>{
//     console.log(`data recived...`);
// })

//                                             /* EMIT */
// // in questo caso l'evento deve mecciare le due stringhe 'response'

// customEmitter.emit('response')

// /*                              SPIEGAZIONE
// In pratica faccio emettere un evento con nome "response" da customEmitter.emit
// questo evento poi lo "catturo" con customEmitter.on() andando a passare il nome
// dell'evento e in piu la funzione di CallBack per dire cosa fare in caso cattuarto 
// l'evento.
// */


// 1 Possiamo avere quanti eventi vogliamo!

customEmitter.on('response',(name,id)=>{
    console.log(`data recived...${name} con id ${id}`);
})

customEmitter.on('response',()=>{
    console.log(`altra logica per vedere possibilità numero eventi`);
})

customEmitter.emit('response','john',34)// attenzione all'ordine xke conta!

/**********************************************************************************************/

//FACCIO VELOCEMENTE SERVER!

const http = require('http')

// const server = http.createServer((req, res) => {
//   res.end('Welcome')
// })

// Using Event Emitter API piuttosto che passare CallBack function
// server ha metodo ".on" come visto primo con event!! *
// se andiamo infatti sulla documentazione di server... vediamo che etende EventEmitter
const server = http.createServer()
// emits request event
// subcribe to it / listen for it / respond to it
server.on('request', (req, res) => {
  res.end('Welcome')
})

server.listen(5000)
