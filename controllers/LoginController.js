const User = require('../database/models/User');
const session = require('express-session');

const LoginController = {
    index: (req, res) => {
        return res.render('login')
    },

    acaoLogin: (req, res) => {
        //console.log('entrou no login')
        const emailLogin = req.body.email;
        //console.log(emailLogin)

        if(User.findUserByField('email', emailLogin)){
            req.session.logado = true;
            //console.log("teste:")
            //console.log(req.session.logado)
            
            res.redirect('/painelUsuario');
        }
        else{
            res.redirect('/criarConta');
        }

    }
    
}


module.exports = LoginController;

