const session = require('express-session');
const bcrypt = require('bcryptjs');
const req = require("express/lib/request");
const db = require('../database/models');

const LoginController = {
    index: (req, res) => {
        return res.render('login')
    },

    acaoLogin: async (req, res) => {
        const { email, senha } = req.body;
        const usuarioEncontrado = await db.Cliente.findOne({
            where: {email: email}
        })
        if (usuarioEncontrado != undefined) {
            let sucessoSenha = bcrypt.compareSync(senha, usuarioEncontrado.senha);
            if (sucessoSenha) {
                req.session.logado = true;
                req.session.idUsuario = usuarioEncontrado.id;
                res.redirect('/painelUsuario/dados');

            } else {
                res.redirect('/login');
            }

        } else {
            res.redirect('/login');
        }
    },
    
    login: function (req, res) {
        //acao login verificar se a senha esta certa, criptografar a senha
        // quando cadastrar
        let hash = bcrypt.hashSync(req.body.senha);
        let hashBanco = bcrypt.hashSync(req.body.senha);
        let sucessoSenha = bcrypt.compareSync(body.senha, hashBanco);
        //let hash = bcrypt.hashSync("teste123");
        res.send(hash);
        bcrypt.compareSync(req.body.senha, hashBanco);
        //req.session.loginUsuario = "reginaldo";
        //res.send("Login feito com sucesso");
    }
}


module.exports = LoginController;

