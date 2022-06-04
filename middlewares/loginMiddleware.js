
const loginMiddleware = (req, res, next) =>{
    if ("loginUsuario" in req.session && req.session.loginUsuario != ""){
        next();
    }else{
        res.redirect("/login");
    }
}



module.exports = loginMiddleware






/* 
1 - Instalar o express session
2 - Criar um middleware que valida se a variavel existe no req.session
3 - Criar no metodo de login uma declaracao da variavel de sesion (req.session.MINHAVARIAVEL= "")
4 - Instanciar o middleware nas rotas desejadas
5 - posso aplicar loginMiddleware na pagina que quiser proteger
*/


/*
//professor mandou fazer de outro modo
const User = require('../models/User');

//middleware de autenticação do usuario
function loginMiddleware(req, res, next) {
    
        const usuarioEstaLogado = User;

        if(!usuarioEstaLogado)
            res.render('login');
        else
         res.render('painelUsuario');

        next();

}

module.exports = loginMiddleware;
*/