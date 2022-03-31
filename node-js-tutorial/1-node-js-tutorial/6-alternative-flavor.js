//voglio esportare variabili come: 
// const items = ['item1','item2'];
const person= {
    name: 'bob',
}

// qua abiamo 2 opzioni di esport:
    // 1 dove non metto alcun tipo di const e vado diretto con export
module.exports.items = ['item1','item2']

    // 2 dove sono "pazzo"  e faccio :
module.exports.singlePerson= person
//posso fare sempre module.export.person senza fare cosi...