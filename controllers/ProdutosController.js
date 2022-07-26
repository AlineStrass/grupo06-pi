const sequelize = require('sequelize');
const config = require('../database/config/config');
const db = require('../database/models');
const Op =  sequelize.Op;

const ProdutosController = {
    // Trás todos os produtos 
    index: async (req, res) => {
        const produtos = await db.Produto.findAll({
            include: ['categoria'],
        })
        return res.render('produtos', {Produto: produtos})
    },

    // redireciona para a página do produto interno
    produtoInterno: async (req, res) => {
        const {id} = req.params;
        const produtos = await db.Produto.findByPk(id);
        // const imagens = await db.ImagemProduto.findAll();

        return res.render('produtoInterno',{
            produto: produtos,
            // ImagemProduto: imagens
        })
    },

    // //mostra as informações da pg de produto interno
    // infoProduto: async (req, res) => {
    //     db.Produto.findByPk(
    //         req.params.id,
    //         {
    //             include: ['categoria', 'imagem'],
    //         }
    //     )
    //     .then(function(informacoes){
    //         res.render('produtoInterno', {Produto: informacoes})
    //     })
    //     .catch((error)=> console.log(error))
    // },

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
 
    //tras os produtos por categoria no menu do header - ok
    listarCategorias: async  (req, res) => {
        const {id} = req.params;
        const produtos = await db.Produto.findAll({
            include: ['categoria'],
        })
        // const imagens = await db.ImagemProduto.findAll();
        const categoria = produtos.filter(({categorias_id}) => categorias_id == id)
        res.render("produtos", {
            Produto: categoria,
            // ImagemProduto: imagens
        })
    },

}

module.exports = ProdutosController;