//MODULI!!
//qualunque file in node è un MODULO!
//in pratica separare le funzioni poer avere piu struttura...

//per far funzionare i "moduli"

//qua voglio accedere a delle variabile esportate!
const names= require('./4-first_module') //OGNI VOLTA SI METTE UN MODULO SI INIZIA CON ./

console.log(names) // in questo caso ci DA L'OGGETTO!!!! xkè lo abbiamo esportato in quel modo!

const sayHI= require('./5-second_module')
sayHI('susanna')
sayHI(names.joni) //usare la propietà del nome xke non è definito da nessuna parte se non nei moduli!!!!
sayHI(names.peter)

//per alternate flavor:
const data= require('./6-alternative-flavor')
console.log(data)

require('./7-mind-granate') //nonostante che non vi sia stato fatto alcun export, ma lo invochiamo,
//IL CODICE PARTE