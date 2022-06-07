/*const db = require('./database/models/index.js'); */

const ProdutosController = {
    index: (req, res) => {
        return res.render('produtos')
    }
}

module.exports = ProdutosController;