const db = require('../database/models');

const CarrinhoController = {
    index: (req, res) => {
        return res.render('carrinho')
    },

    finalizar: (req, res) => {
        return res.render('finalizar')
    },

    obrigado: (req, res) => {
        return res.render('obrigado')
    },

}

module.exports = CarrinhoController;