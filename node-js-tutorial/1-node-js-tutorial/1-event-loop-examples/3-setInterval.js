setInterval(() => {
  console.log('hello world')
}, 2000)
console.log(`I will run first`) // va prima questo perchè è ASYNCRONO!!!
// process stays alive unless
// Kill Process CONTROL + C
// unexpected error

//in questo caso rispetto agli altri 2... la prima cosa che fa è i will rin first... poi non usciamo dall internvallo!
// setIntervall lavoro ogni 2 secondi e invoca la CALL BACK