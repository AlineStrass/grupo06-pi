const db = require('../database/models');

const PainelUsuarioController = {
    index: async(req, res) => {
        if (req.session.logado === true) {
            const detalhesCliente = await db.Cliente.findByPk(req.session.idUsuario, { include: ["enderecos"] });
        res.render('painelUsuario', { Cliente: detalhesCliente })
        } else {
            res.render('login')
        }
    },

}


module.exports = PainelUsuarioController;