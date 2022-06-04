const User = require('../database/models/User');
const session = require('express-session');
const bcrypt = require('bcryptjs');


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

    },
    login: function(req, res){
        //acao login verificar se a senha esta certa, criptografar a senha 


        // quando cadastrar
        let hash = bcrypt.hashSync(req.body.senha);

        let hashBanco = bcrypt.hashSync(req.body.senha);
        let sucessoSenha = bcrypt.compareSync(body.senha, hashBanco);


        //let hash = bcrypt.hashSync("teste123");
        res.send(hash);


        bcrypt.compareSync(req.body.senha,hashBanco);


        //req.session.loginUsuario = "reginaldo";
        //res.send("Login feito com sucesso");
    },

       
}


module.exports = LoginController;