const sequelize = require('sequelize');
const config = require('../database/config/config');
const db = require('../database/models');
const Op =  sequelize.Op;

const ProdutosController = {
    index: async (req, res) => {
        const produtos = await db.Produto.findAll({
            include: ['categoria', 'imagem'],
        })
        
        return res.render('produtos', {Produto: produtos})
    },

    produtoInterno: (req, res) => {
        return res.render('produtoInterno')
    },

    //função para a barra de pesquisa do header - não está pronta
    search: async (req, res) => {
        let {key} = req.query

        let produtos = await db.Produto.findAll({
            where:{
                nome:{
                    [Op.like]:'%{key}%'
                }
            }
        });

        return res.render('produtos',{produtos} )
    },
 
    listarCategorias: async  (req, res) => {
        const {id} = req.params;
        const produtos = await db.Produto.findAll({
            include: ['categoria', 'imagem'],
        })
        const categoria = produtos.filter(({categorias_id}) => categorias_id == id)
       
        res.render("produtos", {Produto: categoria})
    },

}

module.exports = ProdutosController;