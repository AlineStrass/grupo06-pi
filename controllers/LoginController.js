/*const db = require('./database/models/index.js'); */

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
        let usuarioSalvo = fs.readFileSync(users, {encoding:'utf-8'});
        usuarioSalvo = JSON.parse(usuarioSalvo);

        //console.log(emailLogin)


        if(email != usuarioSalvo.email){
            return res.send('Usuario invalido!')
        }
if(!bcrypt.compareSync(senha, usuarioSalvo.senha)){
    return res.send("Senha invalida!")
}else{
    res.redirect('/criarConta');
}


req.session.usuario = usuarioSalvo

res.redirect('/produtos')

    }
}




        /*if(User.findUserByField('email', emailLogin)){
            req.session.logado = true;

            
            //console.log("teste:")
            //console.log(req.session.logado)
            
            res.redirect('/painelUsuario');
        }
        else{
            res.redirect('/criarConta');
        }

    }

    
}*/


module.exports = LoginController;