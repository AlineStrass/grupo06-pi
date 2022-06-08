/*const db = require('./database/models/index.js'); */

const ProdutoInternoController = {
    index: (req, res) => {
        return res.render('produtoInterno')
    }
}

module.exports = ProdutoInternoController;