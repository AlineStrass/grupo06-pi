const session = require('express-session');
const bcrypt = require('bcryptjs');
const req = require("express/lib/request");

const bancoUsuarios = [
    {
        email: "meuemail@email.com",
        senha: bcrypt.hashSync("123456")
    }
];

const LoginController = {
    index: (req, res) => {
        return res.render('login')
    },

    acaoLogin: (req, res) => {

        const { email , senha } = req.body;
       
        const usuarioEncontrado = bancoUsuarios.find((obj)=>obj.email == email)
        if (usuarioEncontrado != undefined) {
            let sucessoSenha = bcrypt.compareSync(senha, usuarioEncontrado.senha);
            if (sucessoSenha) {
                req.session.logado = true;
                res.redirect('/painelUsuario');
                req.session.logado = true;
            
            } else {
                res.redirect('/login');
            }

        }
        else {
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
    },
}


module.exports = LoginController;

