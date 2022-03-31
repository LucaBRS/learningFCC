//FS module (file module)
//sincrono e asyncrono per ora li consideriamo "differenti"

//SYNCRONO (per comprendere vedere i file console.log() con "start" "fatto con primo task" e "inizio altro task")
//il sincrono blocca in parte la possibilità di usare node per altri users!


// DESTRUTTURO fs
const {readFileSync,writeFileSync, read} = require('fs') // scrittpo in questa maniera non cambina NULLA rispetto ad averlo scritto const fs= require('fs')
                                    // e accedere al contenuto tramite fs.blabla
// è solo un modo differente per accedervi    

console.log('start');

//leggiamo file first e second!!!
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

console.log(first , second);

//ora creiamo un file NUOVO!!!! se non c'è altrimenti lo riscrive!
writeFileSync(
    './content/reult-sync.txt',`here is the result: ${first}, ${second}`
)

console.log('fatto con questo task');
console.log('inizio con altro task');

//se voglio appendere al file!! devo mettere un argomento in + il "flag"
// writeFileSync(
//     './content/reult-sync.txt',`here is the result: ${first}, ${second}`,{flag:'a'}
// )