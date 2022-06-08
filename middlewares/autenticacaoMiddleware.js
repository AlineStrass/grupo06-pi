const autenticacaoMiddleware = (req, res, next) => {
    //if(req.session.loginUsuario !== "")
    
        if ("loginUsuario" in req.session && req.session.loginUsuario != ""){
            next();
    }else{
        res.redirect("/acaologin");
    }
}

module.exports = autenticacaoMiddleware;