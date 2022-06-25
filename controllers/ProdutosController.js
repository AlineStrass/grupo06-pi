const sequelize = require('sequelize');
const config = require('../database/config/config');
const db = require('../database/models');

const ProdutosController = {
    index: async (req, res) => {
        const produtos = await db.Produto.findAll({
            include: {
                model:Categoria,
                as: "categoria",
                required: true
            }
        })
        console.log(produtos)
        return res.render('produtos')
    }
}

module.exports = ProdutosController;