/*Middleware*/
const logger = (req,res,next)=>{
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(`met: ${method}, url: ${url}, time: ${time}`);
    // //o fai il send o fai il next()
    // res.send('test')
    next() //C'E da invocarlo!! senno rimane inchiodato web
}

module.exports = logger