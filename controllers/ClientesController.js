const Sequelize = require('sequelize');
const config = require('../database/config/config');
const { Endereco, Cliente } = require('../database/models');
const req = require("express/lib/request");
const session = require('express-session');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require('../database/models')


const ClientesController = {
    index: async (req, res) => {
        const clientes = await Cliente.findAll({
            include: ['enderecos']
        })

        return res.render('clientes', { clientes })
    },

    paginaLogin: (req, res) => {
        return res.render('login')
    },

    //antigo do projeto -funcionando
  /*  acaoLogin: async (req, res) => {
        const { email, senha } = req.body;
        const usuarioEncontrado = await db.Cliente.findOne({
            where: { email: email }
        })
        if (usuarioEncontrado != null) {
            let sucessoSenha = bcrypt.compareSync(senha, usuarioEncontrado.senha);
            console.log(senha, usuarioEncontrado.senha)
            console.log(sucessoSenha)
            if (sucessoSenha) {
                req.session.logado = true;
                req.session.idUsuario = usuarioEncontrado.id;
                res.redirect('/painelUsuario');

            } else {
                res.redirect('/clientes/login');
            }

        } else {
            res.redirect('/clientes/login');
        }
    },*/

    // ------ Pablo
    acaoLogin: async (req, res) => {
        const { email, senha } = req.body;
        const usuarioEncontrado = await db.Cliente.findOne({
            where: { email: email }
        });

        if (usuarioEncontrado === null) {
            res.render("login", {
                error: "Usuário ou senha incorretos, por favor tente novamente."
            });
            return;
        }

        if (!bcrypt.compareSync(senha, usuarioEncontrado.senha)) {
            res.render("login", {
                error: "Usuário ou senha incorretos, por favor tente novamente."
            });
            return;
        }

        req.session.emailUsuario = usuarioEncontrado.email;
        res.redirect("/painelUsuario");
    },

    login: function (req, res) {
        //acao login verificar se a senha esta certa, criptografar a senha
        // quando cadastrar
        let hash = bcrypt.hashSync(req.body.senha);
        let hashBanco = bcrypt.hashSync(req.body.senha);
        let sucessoSenha = bcrypt.compareSync(body.senha, hashBanco);

        res.send(hash);
        bcrypt.compareSync(req.body.senha, hashBanco);
    },

    logout: (req, res) => {
        req.session.destroy();
        res.redirect('/')
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
            datanascimento: req.body.datanascimento,
            cpf: req.body.cpf,
            enderecos: {
                cep: req.body.cep,
                rua: req.body.endereco,
                numero: req.body.numero,
                complemento: req.body.complemento,
                bairro: req.body.bairro,
                cidade: req.body.cidade,
                estado: req.body.estado,
            },
            senha: bcrypt.hashSync(req.body.senha),
            sexo: req.body.sexo

        }
        await db.Cliente.create(cadastrarUsuario, { include: ["enderecos"] })
            .catch((error) => console.log(error))
        res.redirect('/painelUsuario');
    }

}

module.exports = ClientesController;