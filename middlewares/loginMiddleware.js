
const loginMiddleware = (req, res, next) =>{
    if ("logado" in req.session && req.session.logado != ""){
        next();
    }else{
        res.redirect("/clientes/login");
    }
}



module.exports = loginMiddleware
