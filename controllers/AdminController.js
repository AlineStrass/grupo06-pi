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

    //editar usuarios - ok
    editarAdmin: async (req, res) =>{
        const {id} = req.params;
        const usuario = await db.Admin.findByPk(id);
        res.render('admin/editarAdmin', {Admin: usuario})
    },

    acaoEditarAdmin: async (req, res) => {
        const {id} = req.params;
        // console.log("aqui o id de açãoEditarAdmin",id)
        const {username, senha} = req.body;
        // console.log("aqui o username de acaoEditarAdmin",username)
        // console.log("aqui req.body:", req.body)
        const resultado = await db.Admin.update({
            username,
            senha: bcrypt.hashSync(req.body.senha)
        },
        {
            where:{id: id}
        })
        // console.log(resultado)
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
        const adminProdutos = await db.Produto.findAll({include: ['categoria', 'imagem']});
        const categoria = await db.Categoria.findAll();
        const imagens = await db.ImagemProduto.findAll();
        console.log("imagens:", imagens)
        console.log("req.file:",req.file)
        return res.render('admin/adminProdutos', {
            Produto: adminProdutos,
            Categoria: categoria,
            ImagemProduto: imagens
        })
    },

    //renderiza a página do formulario para adicionar produtos
    //funciona mas sem o option
    //está adicinando mais categorias, está errado, tem que adicionar produtos com o id da catgoria
    adminProdutosCadastrar: async (req, res) => {
        const categoria = await db.Categoria.findAll();
        const imagens = await db.ImagemProduto.findAll();
        const produto = await db.Produto.findAll();
        
        console.log("imagens:", imagens)
        console.log(req.file)
    
        return res.render('admin/adminProdutosCadastrar',{
            Categoria:categoria,
            ImagemProduto: imagens,
            Produto: produto
        })
        
    },
    
    //cadastra novos produtos
    acaoCadastrarProdutos: async (req, res) => {
        // const {nome, preco, descricao, categoria, imagem} = req.body;
        // console.log("aqui o req.body:", req.body)
        // await db.Produto.create({
        //     nome, preco, descricao, categoria: categoria, imagem
        // },{ include: ["categoria", "imagem"] })
        // res.redirect('/admin/produtos')
        
        const cadastrarProdutos = {
            nome: req.body.nome,
            preco: req.body.preco,
            descricao: req.body.descricao,
            categoria: {
                id: req.body.id,
                categoria: req.body.categoria,
            },
            imagemProduto: {
                id: req.body.id,
                imagem:req.file.imagemProduto,
            },
        }
        await db.Produto.create(cadastrarProdutos, 
            { include: ["categoria", "imagem"] })
        console.log(cadastrarProdutos)
        res.redirect('/admin/produtos')

    },

    editarProduto: async (req, res) => {
        const {id} = req.params;
        const resultado = await db.Produto.findByPk(id);
        const categoria = await db.Categoria.findAll();
        
        res.render('admin/editarProdutos', {
            Produto: resultado,
            Categoria:categoria,
            
        })
    },

    acaoEditarProduto: async (req, res) => {
        const {id} = req.params;
        console.log("aqui o id de açãoEditarProduto",id)
        const {nome, preco, descricao,categoria, imagem} = req.body;
        console.log("dados produto", nome, preco, descricao,categoria, imagem)
        const resultado = await db.Produto.update({
            nome,
            preco,
            descricao,
            categoria,
            imagem
        },
        {
            where:{id: id}
        })
        console.log(resultado)
        // mostra [1] para ok e [0] para erro
        res.redirect('/admin/produtos')
    },

    // excluir produto - ok
    deletarProduto: async (req, res) => {
        const {id} = req.params;
        const resultado = await db.Produto.destroy({
            where:{id: id}
        })
        console.log(resultado)
        res.redirect('/admin/produtos')
    },

  
}

module.exports = AdminController;
