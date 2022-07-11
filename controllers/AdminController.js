const db = require('../database/models'); 
const { Admin } = require('../database/models/Admin');


const AdminController = {
    index: (req, res) => {
        return res.render('admin/admin')
    },
    
    adminLogin: (req, res) => {
        return res.render('admin/adminLogin')
    },

    adminProdutos: (req, res) => {
        return res.render('admin/adminProdutos')
    },

    adminUsuarios: (req, res) => { 
        return res.render('admin/adminUsuarios')
    },

    adminUsuariosCadastrar: (req, res) => { 
        return res.render('admin/adminUsuariosCadastrar')
    },

    adminProdutosCadastrar: (req, res) => { 
        return res.render('admin/adminProdutosCadastrar')
    },


   
    cadastroProdutos: (req, res) => {
        res.send("enviado")
    },


}

module.exports = AdminController;
