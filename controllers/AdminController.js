const db = require('../database/models'); 
const { Admin } = require('../database/models/Admin');


const AdminController = {
    index: (req, res) => {
        return res.render('admin/admin')
    },
    
    adminLogin: (req, res) => {
        return res.render('admin/adminLogin')
    },

    adminProdutos: async (req, res) => {
        const adminProdutos = await db.Produto.findAll({
            include: ['categoria']
        })

        return res.render('admin/adminProdutos', {Produto: adminProdutos})
    },

    adminUsuarios: async (req, res) => { 
        const adminUsers = await db.Admin.findAll();

        return res.render('admin/adminUsuarios', {Admin: adminUsers})
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

    /* petsho express
    acaoCadastrar: (req, res) => {
        const { nome, login, senha } = req.body;

        const objUsuario = {
            nome: nome,
            login: login,
            senha: bcrypt.hashSync(senha)
        };

        bancoUsuarios.push(objUsuario);

        res.redirect("/admin/usuarios/cadastrar");
    }, */

}

module.exports = AdminController;
