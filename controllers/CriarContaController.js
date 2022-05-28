const User = require('../models/User');

const CriarContaController = {
    index: (req, res) => {
        return res.render('criarConta')
    },
    
    acaoCadastrar: (req, res) => {
        console.log('entrou açaõ acadastrar')
        const cadastrarUsuario = {
            email: req.body.email,
            telefone: req.body.telefone,
            nome: req.body.nome,
            sobrenome: req.body.sobrenome,
            endereco: req.body.endereco,
            numero: req.body.numero,
            complemento: req.body.complemento,
            cep: req.body.cep,
            senha: req.body.senha
        }
    
        console.log(cadastrarUsuario);
        User.create(cadastrarUsuario)
        console.log(User.getUsers)
        res.redirect('/painelUsuario');
    }
}

module.exports = CriarContaController;