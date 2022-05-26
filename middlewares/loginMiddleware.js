//const fs = require('fs');
/*
const loginMiddleware = [
    body('email').notEmpty().isEmail(),
];


module.exports = loginMiddleware;
*/

function loginMiddleware(req, res, next) {
    
        const usuarioEstaLogado = true;

        if(!usuarioEstaLogado)
            res.render('login');
        else
         res.render('painelUsuario');

        next();

}

module.exports = loginMiddleware;