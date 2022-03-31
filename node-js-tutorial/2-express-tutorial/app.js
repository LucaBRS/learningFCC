const { urlencoded } = require('express')
const express = require('express')
const app = express()
let {people} =require ('./data')

//fare static asset
//express.static è middlewere di express!
app.use(express.static('./methods-public'))

//parse form data!
app.use(express.urlencoded({extended:false}))

app.get('/api/people',(req,res)=>{
    res.status(200).json({success:true,data:people})
})


app.post('/login',(req,res)=>{
    console.log(req.body);
    const {name} = req.body;
    if(name){
        return res.status(200).send(`welcome ${name}`)
    }
    res.status(400).send('Provvedi credenziali')
})




/**SECONDA PARTE DOVE JAVASRIPTR MANDA LA RICHIESTA DI POST! */
app.use(express.json()) //per handling json

app.post('/api/people',(req,res)=>{
    const {name} =req.body
    if(!name){
        return res.status(400).json({success:false, msg:'metti il nome'})
    }
    res.status(201).json({success:true, person:name})
})




//*TERZA PARTE intanto per provare app postman!! */


app.post('/api/postman/people',(req,res)=>{
    const {name}= req.body
    console.log(req.body);
    if(!name) {
        return res.status(400).json({success:false,msg:'metti un nome'})
    }
    res.status(201).json({success:true, data:[...people,name]}) //spread operator
})



/**QUANRTA PARTE MODIFICA DEI DATI */






app.listen(5000,()=>{
    console.log('in ascolto a 5000...');
})