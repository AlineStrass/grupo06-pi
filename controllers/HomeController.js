const sequelize = require('sequelize');
const config = require('../database/config/config');
const db = require('../database/models');

const HomeController = {
    index: async (req, res) => {
        const produtosHome = await db.Produto.findAll({
            include: ['categoria']
        })
        // const imagens = await db.ImagemProduto.findAll();
        // findByPk(id, {where: {produtos_id: id}});
        
        return res.render('home', { 
            Produto: produtosHome, 
            // ImagemProduto: imagens 
        })
    },

    
}


module.exports = HomeController;