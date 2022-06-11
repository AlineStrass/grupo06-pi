const db = require('../database/models');

const CarrinhoController = {
    index: (req, res) => {
        return res.render('carrinho')
    }
}

module.exports = CarrinhoController;