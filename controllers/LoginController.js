const User = require('../database/models/User');
const session = require('express-session');
const bcrypt = require('bcrypt');
const fs = require('fs');



const LoginController = {
    index: (req, res) => {
        return res.render('login')
    },
    acaoLogin: (req, res) => {
      let {email, senha} = req.body
      let usuarioSalvo = fs.readFileSync

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

