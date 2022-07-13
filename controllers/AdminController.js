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

    //------ USUARIOS ------
    //renderiza a pg principal dos usuarios
    adminUsuarios: async (req, res) => { 
        const adminUsers = await db.Admin.findAll();

        return res.render('admin/adminUsuarios', {Admin: adminUsers})
    },
    //renderiza a página do formulario para adicionar usuarios
    adminUsuariosCadastrar: (req, res) => { 
        return res.render('admin/adminUsuariosCadastrar')
    },
        
    //cadastra novos usuarios Administrativos - ok
    acaoCadastrarAdmin: async (req, res) => {
        const cadastrarAdmin = {
            username: req.body.username,
            senha: bcrypt.hashSync(req.body.senha),  
        }
        await db.Admin.create(cadastrarAdmin)
        res.redirect('/admin/usuarios')
    },

    //login
    acaoLoginAdmin: async (req, res) => {
        const {username, senha} = req.body;
        const adminEncontrado = await db.Admin.findOne({
            where: {username: username}
        })
        if (adminEncontrado != null) {
            let sucessoSenha = bcrypt.compareSync(senha, adminEncontrado.senha);
            console.log(senha, adminEncontrado.senha)
            console.log(sucessoSenha)
            if (sucessoSenha) {
                req.session.logado = true;
                req.session.idUsuario = adminEncontrado.id;
                res.redirect('/');

            } else {
                res.redirect('/login');
            }
        }else{
            res.redirect('/login');
        }
    },

    efetuarLogin: function (req, res) {
        //acao login verificar se a senha esta certa, criptografar a senha
        // quando cadastrar
        let hash = bcrypt.hashSync(req.body.senha);
        let hashBanco = bcrypt.hashSync(req.body.senha);
        let sucessoSenha = bcrypt.compareSync(body.senha, hashBanco);

        res.send(hash);
        bcrypt.compareSync(req.body.senha, hashBanco);
    },


    //  --------- PRODUTOS -----------
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

    
}

module.exports = AdminController;
