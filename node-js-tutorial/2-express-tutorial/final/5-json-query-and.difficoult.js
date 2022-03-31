const express = require('express')
const app = express()

//importo un file jhason!!
const {products} = require('./data')

app.get('/',(req,res)=>{
    res.send('<h1> home page<h1/> <a href="/api/products">products</a>')
})

// //questo serve per visualizzare solo una parte delle info dei prodotti!
app.get('/api/products',(req,res)=>{
    const newProducts = products.map((product)=>{
        const {id,name,image} =product;
        return {id,name,image}
    })
    res.json(newProducts)
})

// //voglio visualizzare il prodotto singolo
// //in questo modo pero è usare il cannone su una mosca!
// app.get('/api/products/1',(req,res)=>{
//     const singleProduct = products.find((product)=> product.id === 1)
//     res.json(singleProduct)
// })

// usiamo quindi ...ROUTE PARAMITER
app.get('/api/products/:productID',(req,res)=>{
    // console.log(req.params);
    //questo per prendere id che "inserisce" la persona
    const {productID} =req.params

    const singleProduct = products.find((product)=> product.id === Number(productID))

    if(!singleProduct){
        return res.status(404).send('product not exist')
    }
    res.json(singleProduct)
})

//esempio per vedere uando complesse pssono diventare!
app.get('/api/products/:productID/reviews/:reviewID',(req,res)=>{
    console.log(req.params);
    res.send('Hello world!')
})

app.get('/api/v1/query',(req,res)=>{
    console.log((req.query));
    const {search,limit}=req.query
                        //spread operator &uso il lat xke cambio alcune cose
    let sortedProducts = [...products]
    
    if(search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    } 
    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }
    if(sortedProducts.length < 1){
        console.log('entrato in caso no prodotti');
        //usando questo sotto vniene un errore che verrà spiegato:
        //se ometto return, mi da errore il server!!!xkè non posso ripondere con due res nella stessa richiesta!
        // res.status(200).send('si ma non ci sono abbastanza prodotti che mecciano')

        //qua nn da errore xke ho un return! quindi non 2 risposte.
        //ritornando "esce" dalla funzione !
        return res.status(200).json({success:true,data:[]})
    }

    res.status(200).json(sortedProducts)  
})

app.listen(5000,()=>{
    console.log('server in ascolto a porta 5000...');
})