const express = require('express')
const path = require('path')

const app = express()

//SOPRA TUTTE LE GET!! si fa app.use!
//e serve per servire ualunque cosa di static!!
app.use(express.static('./public'))

// app.get('/',(req,res)=>{
//     //ora voglo mandare l'index!
//     // mando il send che è con express e mando il path
//     res.status(200).sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
//     //è chiaro che SOLO con questo abbiamo errori di CSS, LOGO ecc.
// })

// HO MESSO INDEX IN PUBLIC E, NON CAMBIA NULLA! E PER UN SITO SEMPLICE FUNZIONA...

app.get('*',(req,res)=>{
    res.status(404).send('pagina non trovata')
})

//listen
app.listen(5000,()=>{
    console.log('server in ascolto a porta 5000...');
})

