const http = require('http');

const server = http.createServer((req,res)=>{
if(req.url === '/'){
    res.end('HOME')
}
 else if(req.url === '/about'){    //se io dovessi andare ora nella pagina about, TUTTI gli user si bloccherebbero fino
                                   // all uscita dei cicli for! (soluzione ASYNCRONO)
     //Se metto BLOCKING CODE!!!!!!
     //esempio for loop
     for(let i=0; i<1000;i++){
        for(let j=0; j<1000;j++){
            console.log(`${i} ${j}`);
        }
     }
     res.end('ABOUT')
 }

 else res.end('ERROR')
})

server.listen(5000,()=>{
    console.log('serverl listening at 5000...');
})