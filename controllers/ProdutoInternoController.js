const sequelize = require('sequelize');
const config = require('../database/config/config');
const req = require("express/lib/request");
const db = require('../database/models');

const ProdutoInternoController = {
    index: (req, res) => {
        return res.render('produtoInterno')
    },
/*
    buscarProduto: async (req, res) => {
        req.body.id;
        console.log(req.body.id)
        let detalhesProduto = await db.Produto.findOne({
            where: {id: 1}

        })
        console.log(id)
        return res.render('produtoInterno', {detalhesProduto})
    }
*/
    
        

}

module.exports = ProdutoInternoController;