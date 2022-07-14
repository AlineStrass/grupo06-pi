const sequelize = require('sequelize');
const config = require('../database/config/config');
const db = require('../database/models');
const Op =  sequelize.Op;

const ProdutosController = {
    index: async (req, res) => {
        const produtos = await db.Produto.findAll({
            include: ['categoria', 'imagem'],
        })
        console.log(produtos)
        return res.render('produtos', {Produto: produtos})
    },

    produtoInterno: (req, res) => {
        return res.render('produtoInterno')
    },

    //função para a barra de pesquisa do header - não está pronta
    search: async (req, res) => {
        let {key} = req.query

        let produtos = await db.produtos.findAll({
            where:{
                nome:{
                    [Op.like]:'%{key}%'

                
                }
            }
        });

        return res.render('produtos',{produtos} )
    }
 
    /*categorias: async (req, res) => {
        const categoria = await db.Categoria.findByPk({
            where: {id: id}
        })
        console.log(categoria)
        return res.render('produtos',{Produto: categoria})
    }*/
}

module.exports = ProdutosController;