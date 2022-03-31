console.log('Express Tutorial')
const {readFileSync} =require ('fs')

//get all file
//va usato xke nn viene invocato ognivolta che qualcuno entra nel server
// lo settimao 1 volta quando il server parte!
const homePage = readFileSync('./navbar-app/index.html') //se servo questo senza cambiare il contenuto ho problemi!!
//il web fa delle richieste per css e il logo e non le gestiamo!!! VANNO GESTITE!

const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

//se volessi piu roba da "servire"?

const http = require('http')
const { homedir } = require('os')

const server = http.createServer((req,res)=>{
    console.log('user hit server');
    console.log(req.method);
    console.log(req.url);
    const url = req.url;

    // home page
    if (url === '/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homePage)
        ///VA SEMPRE CHIAMATO!!!!!!!!!!!
        res.end() ///VA SEMPRE CHIAMATO!!!!!!!!!!!
    
    // Style
    }else if(url === '/styles.css'){
        res.writeHead(200,{'content-type':'text/css'})
        res.write(homeStyles)
        ///VA SEMPRE CHIAMATO!!!!!!!!!!!
        res.end() ///VA SEMPRE CHIAMATO!!!!!!!!!!!

    // Image
    }else if(url === '/logo.svg'){
        res.writeHead(200,{'content-type':'image/svg+xml'})
        res.write(homeImage)
        ///VA SEMPRE CHIAMATO!!!!!!!!!!!
        res.end() ///VA SEMPRE CHIAMATO!!!!!!!!!!!

    // Logic
    }else if(url === '/browser-app.js'){
        res.writeHead(200,{'content-type':'text/javascript'})
        res.write(homeLogic)
        ///VA SEMPRE CHIAMATO!!!!!!!!!!!
        res.end() ///VA SEMPRE CHIAMATO!!!!!!!!!!!

    // About
    }else if(url === '/about'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1> hola about page</h1>')
        ///VA SEMPRE CHIAMATO!!!!!!!!!!!
        res.end() ///VA SEMPRE CHIAMATO!!!!!!!!!!!

    // 404
    }else {
        res.writeHead(404,{'content-type':'text/html'})
        res.write('<h1> 404 page not found</h1>')
        ///VA SEMPRE CHIAMATO!!!!!!!!!!!
        res.end() ///VA SEMPRE CHIAMATO!!!!!!!!!!!
    }
    
})

server.listen(5000)