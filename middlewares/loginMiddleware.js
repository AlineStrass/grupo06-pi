/*
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