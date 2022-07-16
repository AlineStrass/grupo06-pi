const Sequelize = require('sequelize');
const config = require('../database/config/config');
const db = require('../database/models');

const CategoriaController = {
    index: async (req, res) => {
       const categorias = await db.Categoria.findAll()
       return res.render('adminProdutosCadastrar', {Categoria: categorias})
    },

}


module.exports = CategoriaController;
