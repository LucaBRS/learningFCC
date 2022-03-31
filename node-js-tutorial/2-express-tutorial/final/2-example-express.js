const express = require('express');
const res = require('express/lib/response');
const app = express()

        //app.listen
app.listen(5000,()=>{
    console.log('server is listening on port 5000...');
})

//la call back qua viene invocata ogni volta che un user fa una get
app.get('/',(req,res)=>{
    console.log('user nella Homepage');
    res.status(200).send('Home page')
})

app.get('/about',(req, res)=>{
    res.status(200).send('ABOUT PAGE')
})


//qua vado ad alterare la mia risposta 404!
        //app.all
app.all('*',(req,res)=>{
    res.status(404).send('<h1>404 risorce not found</h1>')
    //voglio chiaramente mandare indietro anche lo status!!!
})

//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use

