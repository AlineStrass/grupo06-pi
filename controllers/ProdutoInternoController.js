const db = require('../database/models');

const ProdutoInternoController = {
    index: (req, res) => {
        return res.render('produtoInterno')
    }
}

module.exports = ProdutoInternoController;