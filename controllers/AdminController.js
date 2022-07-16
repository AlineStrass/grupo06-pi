const Sequelize = require('sequelize');
const config = require('../database/config/config');
const db = require('../database/models'); 
const bcrypt = require('bcryptjs');


const AdminController = {
    //ADMIN - Rota principal
    index: async (req, res) => {
        if (req.session.logado === true) {
            const detalhesAdmin = await db.Admin.findByPk(req.session.idUsuario)
            return res.render('admin/admin', {Admin: detalhesAdmin})
        } else {
            res.render('admin/adminLogin')
        }
    },
    
    adminLogin: (req, res) => {
        return res.render('admin/adminLogin')
    },

    //login
    acaoLoginAdmin: async (req, res) => {
        const {username, senha} = req.body;
        const adminEncontrado = await db.Admin.findOne({
            where: {username: username}
        })
        if (adminEncontrado != null) {
            let sucessoSenha = bcrypt.compareSync(senha, adminEncontrado.senha);
            
            if (sucessoSenha) {
                req.session.logado = true;
                req.session.idUsuario = adminEncontrado.id;
                res.redirect('/admin');

            } else {
                res.redirect('/login', {

                });
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

    logout: (req, res) => {
        req.session.destroy();
        res.redirect('/admin')
    },

    //      ------ USUARIOS ------
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

    //editar usuarios
    editarAdmin: async (req, res) =>{
        const {id} = req.params;
        const usuario = await db.Admin.findByPk(id);
        res.render('admin/editarAdmin', {usuario})
    },

    //tras sempre o ultimo usuario cadastrado????
    acaoEditarAdmin: async (req, res) => {
        const {id} = req.params;
        const {username, senha} = bcrypt.hashSync(req.body.senha);
        const resultado = await db.Admin.update({
            username,
            senha
        },
        {
            where:{id: id}
        })
        console.log(resultado)
        // mostra [1] para ok e [0] para erro
        res.redirect('/admin/usuarios')
    },

    deletarAdmin: async (req, res) => {
        const {id} = req.params;
        const resultado = await db.Admin.destroy({
            where:{id: id}
        })
        console.log(resultado)
        res.redirect('/admin/usuarios')
    },
 

    //  --------- PRODUTOS -----------
    //renderiza a pg principal da lista de produtos
    adminProdutos: async (req, res) => {
        const adminProdutos = await db.Produto.findAll({
            include: ['categoria']
        })
        return res.render('admin/adminProdutos', {Produto: adminProdutos})
    },

    //renderiza a página do formulario para adicionar produtos
    adminProdutosCadastrar: (req, res) => { 
        return res.render('admin/adminProdutosCadastrar')
    },
    
    //cadastra novos produtos - está com ERRO
    //ver pq não esta funcionando + campo de selec
    acaoCadastrarProdutos: async (req, res) => {
        const cadastrarProdutos = {
            nome: req.body.nome,
            preco: req.body.preco,
            descricao: req.body.descricao,
            categoria: {
                id: req.body.id,
                nome: req.body.nome,
            },
            imagem: {
                id: req.body.id,
                imagem: req.body.imagem,
            },
        }
        await db.Produto.create(cadastrarProdutos, 
            { include: ["categoria", "imagem"] })
        console.log(cadastrarProdutos)
        res.redirect('/admin/produtos')

    },

 /*   acaoEditarProdutos: async (req, res) => {
        const {id} = req.params;
        const {nome, preco, descricao, imagem} = req.body;
        const resultado = await db.Produto.update({
            nome,
            preco,
            descricao,
            imagem
        },
        {
            where:{id: id}
        })
        console.log(resultado)
        // mostra [1] para ok e [0] para erro
        res.redirect('/admin/produtos')
    },
*/
    
    deletarProduto: async (req, res) => {
        const {id} = req.params;
        const resultado = await db.Admin.destroy({
            where:{id: id}
        })
        console.log(resultado)
        res.redirect('/admin/produtos')
    },

       
    
    
}

module.exports = AdminController;
