const db = require('../database/models');

const ProdutosController = {
    index: async (req, res) => {
        const produtos = await Produto.findAll

        return res.render('produtos')
    }
}

module.exports = ProdutosController;