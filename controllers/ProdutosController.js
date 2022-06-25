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
    }
}

module.exports = ProdutosController;