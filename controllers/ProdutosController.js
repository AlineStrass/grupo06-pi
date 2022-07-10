const sequelize = require('sequelize');
const config = require('../database/config/config');
const db = require('../database/models');

const ProdutosController = {
    index: async (req, res) => {
        const produtos = await db.Produto.findAll({
            include: ['categoria']
        })
        console.log(produtos)
        res.render('produtos', {Produto: produtos})
    },

    cadastroProdutos: (req, res) => {
        res.send("enviado")
    },
    
    produtoInterno: (req, res) => {
        return res.render('produtoInterno')
    },

    /*categorias: async (req, res) => {
        const categoria = await db.Categoria.findByPk({
            where: {id: id}
        })
        console.log(categoria)
        return res.render('produtos',{Produto: categoria})
    }*/
}

module.exports = ProdutosController;