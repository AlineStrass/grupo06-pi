const User = require('../database/models/User');
const session = require('express-session');
const bcrypt = require('bcrypt');
const req = require("express/lib/request");
const clientes = require('../database/seeders/20220604000738-clientes');

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

    /*acaoLogin: async (req, res) => {
        const usuarioLogin = await User.findUserByField({where: {usuario: req.body.email}});
        console.log('entrou no usuario login')
        console.log(usuarioLogin)
        if(usuarioLogin === undefined) {
            res.redirect('login');
        }else{
            const senha = usuarioLogin.senha;
            const validacaoSenha = (req.body.senha, senha);
            if(!validacaoSenha){
                res.render('login');
            }else{
                req.session.usuarioLogin = true;
                console.log("teste: session")
                console.log(req.session.usuarioLogin)
                res.render('painelUsuario')
            }
    
        }

    },
    */
/*
    logout: (req, res) => {
        req.session.destroy();
        res.redirect("/");
    }
    */
}


module.exports = LoginController;

