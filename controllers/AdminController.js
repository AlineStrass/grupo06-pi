const Sequelize = require('sequelize');
const config = require('../database/config/config');
const db = require('../database/models'); 
const bcrypt = require('bcryptjs');


const AdminController = {
    //ADMIN - Rota principal
    index: (req, res) => {
        return res.render('admin/admin')
    },
    
    adminLogin: (req, res) => {
        return res.render('admin/adminLogin')
    },

    //acaoLoginAdmin: 

    //Produtos
    adminProdutos: async (req, res) => {
        const adminProdutos = await db.Produto.findAll({
            include: ['categoria']
        })

        return res.render('admin/adminProdutos', {Produto: adminProdutos})
    },

    adminProdutosCadastrar: (req, res) => { 
        return res.render('admin/adminProdutosCadastrar')
    },
   
    cadastroProdutos: (req, res) => {
        res.send("enviado")
    },

    //Usuarios
    //renderiza a pg principal dos usuarios
    adminUsuarios: async (req, res) => { 
        const adminUsers = await db.Admin.findAll();

        return res.render('admin/adminUsuarios', {Admin: adminUsers})
    },
    //renderiza a página do formulario para adicionar usuarios
    adminUsuariosCadastrar: (req, res) => { 
        return res.render('admin/adminUsuariosCadastrar')
    },
    //cadastra novos usuarios Administrativos
    acaoCadastrarAdmin: async (req, res) => {
        const cadastrarAdmin = {
            username: req.body.username,
            senha: req.body.senha
            //bcrypt.hashSync(req.body.senha),
        }
        await db.Admin.create(cadastrarAdmin)
        res.redirect('admin/adminUsuarios')
    }
    
}

module.exports = AdminController;
