// OS module!!!
//
const os = require('os') //in questo caso NON SI METTE ./
//possiamo accedere ai metodi con os.

//info about current usere
const user = os.userInfo()
console.log(user);

//uptime of the system in seconds
console.log(`the system uptime is: ${os.uptime/3600} hours`);

// è na specie di LISTA!
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS);