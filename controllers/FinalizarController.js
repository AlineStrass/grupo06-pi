const db = require('../database/models');

const FinalizarController = {
    index: (req, res) => {
        return res.render('finalizar')
    }
}

module.exports = FinalizarController;