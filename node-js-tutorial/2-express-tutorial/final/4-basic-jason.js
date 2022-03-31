const express = require('express')
const app = express()

//importo un file jhason!!
const {products} = require('./data')

app.get('/',(req,res)=>{
    res.json(products)
})

app.listen(5000,()=>{
    console.log('server in ascolto a porta 5000...');
})