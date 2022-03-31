//esempio per vedere se co sono problemi...
//come leggere 2 file e scriverne 1
// una soluzione è fare un "Promise" e trattarlo come un ASYNC

 // la "prima parte" i si fanno dei test con la "promise" e serve per capire come funziona il modulo utils.
 // quindi si crea un "getText" dove all'interno ci si va a passare il "path" che mettiamo nella funzione async
 //tutto questo ci serve per poter "prendere" gli eventuali errori e poter gestire le cose in maniera Asyncrona

 //PARTE 2 VEDI SOTTO dove viene definito Utils



//*************************************************************************  la funzione è commentat xke dopo si usa un modulo per evitare i WRAPPING  */
// const {readFile, writeFile} = require('fs');
// const path = require('path');
//settiamo una funzione:                           
// const getText = (path)=>{
//     //ritorniamo una "PROMISE" e ci muoviamo il read file dentro!
//     return new Promise((resolve, reject)=>{
//         readFile(path,'utf-8',(err,data)=>{ //guarda come viene passato path
//             if(err){
//                 //questa è 1 CALL BACK e siccome ho accesso a resolve e reject:
//                 reject(err)
//                //al posto di "return";
//             }
//             else{
//                 resolve(data)
//             //al posto di  console.log(data);
//             }
//         })
//     })
// }



    //se voglio fare 2 lette file e 1 srittura, conviene unsa sync w8??

//voglio fare una funziona asyncrona e attacj eway

// const start = async()=>{
//     try{
//         const first= await getText('./content/first.txt'); //ora ho messo swait e solo quando la "Promise" è risolta ottengo la riposta!
//         const second= await getText('./content/second.txt');
//         console.log(first);    //SOLO quando la primise viene risolta, allora posso fare qualcosa con altro
//         console.log(second);
//     } catch(error){
//         console.log(error);
//     }      
// }



// start()
//******************************************************************************************************************************************************************************** */
//VA COMMENTATO PERCHE HO FATTO LA PARTE SOPRA CON Async!
// getText('./content/first.txt')
//     .then(result => console.log(result))
//     .catch(err => console.log(err))



//*******************************************SECONDA PARTE!!!!*************************************************************************** */
//come faccio a scrivere questo funzioni senza troppi WRAPPING?
//uso modulo "utils" e con questo possiamo prendere i file da leggere

// const {readFile, writeFile} = require('fs');
// const util = require('util');
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// const start = async()=>{
//         try{
//             const first= await readFilePromise('./content/first.txt','utf-8'); 
//             const second= await readFilePromise('./content/second.txt','utf-8');
//             await writeFilePromise('./content/result-mind-granate.thx',`THIS IS AWESOM!!!: ${first}  ${second}`)
//             console.log(first);    
//             console.log(second);
//         } catch(error){
//             console.log(error);
//         }      
//     }



//*************************************************************************************************************** */

//***********************************TERZA PARTE **************************************  */

const {readFile, writeFile} = require('fs').promises;

const start = async ()=>{
    try{
        const first= await readFile('./content/first.txt','utf-8'); 
        const second= await readFile('./content/second.txt','utf-8');
        await writeFile('./content/result-mind-granate.thx',`THIS IS AWESOM!!!: ${first}  ${second}`, {flag: 'a'})
        console.log(first);    
        console.log(second);
    }catch(error){
        console.log(error);
    }
}

start()