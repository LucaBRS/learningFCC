                                                            /*MIDDLEWARE*/
                                                            /*QUANDO LAVORO CON MIDDLEWARE C?é DA PAssarlo al prossimo
                                                            middleware a meno che nn passo la risposta io
                                                            dentro il middleware!!!!!!*/
//req=> middleware => res
//middleware siede nel "mezzo"
//prende la richiesta, fa qualcosa, da la risposta!


const express = require('express')
const app = express()
const authorize = require('./authorize')

//installato morgan!
const morgan = require('morgan')
app.use(morgan('tiny'))

/*
esempio: 2 route, home e about.
in queste rotte volgo mettere i metodi e url che user richiede e anche la DATA
*/
//******************************************************************************** */
//  E STATO MOSSO IN FILE SEPARATO X TENERE PULITO
//dove c'è app.js -->logger.js
//******************************************************************************** */
// //express aiuta a passare cio che serve al middleware!
// /*Middleware*/
// const logger = (req,res,next)=>{
//     const method = req.method;
//     const url = req.url;
//     const time = new Date().getFullYear();
//     console.log(`met: ${method}, url: ${url}, time: ${time}`);
//     // //o fai il send o fai il next()
//     // res.send('test')
//     next() //C'E da invocarlo!! senno rimane inchiodato web
// }
//************************************************************************************ */
const logger = require('./logger.js')

                                    /** PRIMA PARTE 1 */
//il "logger" E' un middleware!!
app.get('/',logger,(req,res)=>{

    // //se volessi la stessa cosa nell about, dovrei fare copia incolla
    // //é meglio una funzione da attaccare dove voglio!
    // const method = req.method;
    // const url = req.url;
    // const time = new Date().getFullYear();
    // console.log(`met: ${method}, url: ${url}, time: ${time}`);

    res.send('HOme')
})
app.get('/about',logger,(req,res)=>{
    res.send('About')
})
                                    /** SECONDA PARTE 2 */
//Come applicare "logger" a tutti le rotte
// posso farlo manualmente MA è problematico...
// posso selezionarle tutte e usare app.use(logger)
 //(notare anche come l'ordine E' importante!!!)
app.use(logger)
//volendo posso applicare logger solo a rotte specifiche come:
// app.use('/api',logger)
/*NOTA bene cosa viene scritto in console!*/


app.use('/api',authorize)

app.get('/api/products',(req,res)=>{
    console.log(req.user);
    res.send('prodotti')
})

app.get('/api/items',(req,res)=>{
    res.send('items')
})


app.listen(5000,()=>{
    console.log('in ascolto a porta 5000...');
})