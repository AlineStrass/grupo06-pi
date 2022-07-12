const sequelize = require('sequelize');
const config = require('../database/config/config');
const db = require('../database/models');

const HomeController = {
    index: async (req, res) => {
        const produtosHome = await db.Produto.findAll({
            include: ['categoria']
        })
        console.log("produtosHome")
        return res.render('home', { Produto: produtosHome })
    },

}


module.exports = HomeController;