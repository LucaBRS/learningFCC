//qua ci meto i nomi che ho creato da un altra parte per esempio
//LOCAL
const secret= 'super secret' 
//LOCAL
const joni='jonni'
const peter='peter'

// qua voglio fare il consol log de GLOBAL del modulo

console.log(module)
// facendo node 4-first_module.js in console vediamo il "module" e una voce con export:{}.
//ci dice che export è un oggetto ... QUESTA è LA CHIAVE e bogliamo condividere il meno possibile!!!
//DECIDIAMO NOI cosa condividere!!!

module.exports = { joni, peter} // questo è l'esaport!!!