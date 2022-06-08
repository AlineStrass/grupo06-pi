/*const db = require('./database/models/index.js'); */

const PainelUsuarioController = {
    index: (req, res) => {
        if (req.session.logado === true) {
            return res.render('painelUsuario')
        } else {
            res.render('login')
        }
    }

}

module.exports = PainelUsuarioController;