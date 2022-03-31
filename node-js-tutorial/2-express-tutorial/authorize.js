const { status } = require("express/lib/response");

// se use non provvede user queri allora USER NON AUTORIZZATO!
const authorize = (req,res,next)=>{
    const {user}=req.query;
    if(user==='john'){
        req.user = {name:'johm', id:3}
        next()
    }else{
        res.status(401).send('non autorizzato!')
    }
    
}

module.exports = authorize