/*const db = require('./database/models/index.js'); */

const CarrinhoController = {
    index: (req, res) => {
        return res.render('carrinho')
    }
}

module.exports = CarrinhoController;