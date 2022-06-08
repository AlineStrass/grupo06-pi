/*const db = require('./database/models/index.js'); */

const ObrigadoController = {
    index: (req, res) => {
        return res.render('obrigado')
    }
}

module.exports = ObrigadoController;