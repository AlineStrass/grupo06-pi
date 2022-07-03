const Sequelize = require('sequelize');
const config = require('../database/config/config');
const {Endereco, Cliente} = require('../database/models');
const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs');
const db = require('../database/models')


const ClientesController = {
    index: async (req, res) => {
        const clientes = await Cliente.findAll({
            include: ['enderecos']
        })
       
       return res.render('clientes', {clientes})
    },

    criarConta: (req, res) => {
        return res.render('criarConta')
    },

    acaoCadastrar: async (req, res) => {
        const cadastrarUsuario = {
            nomeCompleto: req.body.nomeCompleto,
            foto: req.body.foto,
            email: req.body.email,
            telefone: req.body.telefone,
            sexo: req.body.sexo,
            datanascimento: req.body.datanascimento,
            cpf: req.body.cpf,
            senha: bcrypt.hashSync(req.body.senha),
            enderecos: {
                rua: req.body.rua,
                numero: req.body.numero,
                bairro: req.body.bairro,
                complemento: req.body.complemento,
                cidade: req.body.cidade,
                estado: req.body.estado,
                cep: req.body.cep
            }
        }

        await db.Cliente.create(cadastrarUsuario, { include: ["enderecos"] })
        .catch((error)=>console.log(error))

        res.redirect('/painelUsuario');
    }
}


module.exports = ClientesController;