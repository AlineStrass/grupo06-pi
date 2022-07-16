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
 
 /*   listarCategorias: async (req, res) => {
    const {id} = req.params;
        const categoria = await db.Categoria.findByPk({
            where: {id: id}
        })
        
        return res.render('produtos',{Produto: categoria})
    }
  */  
    listarCategorias: async  (req, res) => {
        console.log("ooooiiii 01")
        const {id} = req.params;
        const produtos = await db.Produto.findAll({
            include: ['categoria', 'imagem'],
        })
        // console.log("aqui produto", produtos)
        //console.log("id:::", id)
       
        // console.log("categ", Produto.categoria)
        const categoria = produtos.filter(({categorias_id}) => categorias_id == id)
        //console.log("aqui categoria!!!!!!!!!!!!!!!!!!!!!!!!!")
       // console.log("aqui categoria", categoria)
        res.render("produtos", {Produto: categoria})
    },

}

module.exports = ProdutosController;