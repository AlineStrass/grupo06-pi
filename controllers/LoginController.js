const User = require('../models/User');

const LoginController = {
    index: (req, res) => {
        return res.render('login')
    },

    acaoLogin: (req, res) => {
        console.log('entrou no login')
        const emailLogin = req.body.email;
        console.log(emailLogin)

        if(User.findUserByField('email', emailLogin)){
            res.redirect('/painelUsuario');
        }else{
            res.redirect('/criarConta');
        }
    }
    

   /* 
   //parte aula ao vivo prof. rafael - não funcionou

    acaoLogin: (req, res) => {
        //consulta infos no banco

        req.session.emailUsuario = "";

        res.redirect('/painelUsuario');
    },
    

    areaCliente: (req, res) => {
        
        if(req.session.emailUsuario === undefined){
            res.redirect('/login');
        }else {
            res.render('painelUsuario', {
               emailUsuario: req.session.emailUsuario
            });
        }
       
    }
    */
}


module.exports = LoginController;

