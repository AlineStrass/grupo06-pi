const { validationResult } = require('express-validator')
const User = require('../database/models/User');
const bcrypt = require('bcryptjs');
const db = require('../database/models/index')

const CriarContaController = {
    index: (req, res) => {
        return res.render('criarConta')
    },
    //acaoCadastrar: async (req, res)=> (substitui depois que concluir o sequelize)
    acaoCadastrar: (req, res) => {
        //console.log('entrou açaõ acadastrar')
        const cadastrarUsuario = {
            nomeCompleto: req.body.nomeCompleto,
            foto: req.body.foto,
            email: req.body.email,
            telefone: req.body.telefone,
            sexo: req.body.sexo,
            dataDeNascimento: req.body.dataDeNascimento,
            cpf: req.body.cpf,
            senha:bcrypt.hashSync(req.body.senha),
            rua: req.body.rua,
            numero: req.body.numero,
            bairro: req.body.bairro,
            complemento: req.body.complemento,
            cidade: req.body.cidade,
            estado: req.body.estado,
            cep: req.body.cep
            
        }
        
        User.create(cadastrarUsuario)
        //await db.Cliente.create(cadastrarUsuario);
        //(substitui depois que concluir o sequelize) 
        
        res.redirect('/painelUsuario');
    }
}

module.exports = CriarContaController;