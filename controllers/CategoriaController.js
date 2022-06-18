const Sequelize = require('sequelize');
const config = require('../database/config/config');
const {Produto, Categoria} = require('../database/models');


const CategoriaController = {
    index: async (req, res) => {
        const categorias = await Categoria.findAll({
            include: ['produtos']
        })
       
       return res.render('categorias', {categorias})

    }
}


module.exports = CategoriaController;
