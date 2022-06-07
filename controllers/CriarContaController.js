/*const db = require('./database/models/index.js'); */

const { validationResult } = require('express-validator')
const User = require('../database/models/User');
const bcrypt = require('bcryptjs')

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
            senha:bcrypt.hashSync(req.body.senha)
        }
    
        console.log(cadastrarUsuario);
        User.create(cadastrarUsuario)
        console.log(User.getUsers)
        res.redirect('/painelUsuario');
    }
}

module.exports = CriarContaController;