//middleware de autenticação do usuario
function loginMiddleware(req, res, next) {
    
        const usuarioEstaLogado = false;

        if(!usuarioEstaLogado)
            res.render('login');
        else
         res.render('painelUsuario');

        next();

}

module.exports = loginMiddleware;
