const db = require('../database/models');

const PainelUsuarioController = {
    index: (req, res) => {
        if (req.session.logado === true) {
            return res.render('painelUsuario')
        } else {
            res.render('login')
        }
    },

    dadosCliente: async (req, res) => {
        const detalhesCliente = await db.Cliente.findByPk(
            req.session.idUsuario,
            {
                include: ['enderecos']
            });
            console.log(detalhesCliente)
        res.render('painelUsuario', { Cliente: detalhesCliente })
        
    },

    /*
    dadosCliente: (req, res) => {
        db.Cliente.findByPk(
            req.params.id,
            {include:[
                {association: 'enderecos'}
            ]}
        )
        .then(function(detalhesCliente){
            res.render('painelUsuario',{Cliente: detalhesCliente})
        })
        .catch((error)=> console.log(error))
    },
    */
}


module.exports = PainelUsuarioController;