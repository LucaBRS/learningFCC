const http = require('http');

//creiamo server!
const server= http.createServer((req,res)=>{ // req-> rappresenta la richiesta che sta arrivando e ci saranno le varie richieste.
                                            // res-> ci saranno risposte al req
if(req.url === '/'){
    res.end('welcome so far to home page');
}
else if(req.url === '/about'){
    res.end('about page');
}
else res.end(`
<h1> me disp non ce sta na sega! </h1>
<a href="/"> torna indieto </a>
`);
})

server.listen(5000)