const db = require('../database/models');


//não está funcionando, erro não encontra os métodos fndAll, findByPk, create e delete

let ApiController = {
    getProdutos: function(req, res) {
        return res.json('oi')
    },

    getAdmins: function(req, res) {
        db.Admin
        .findAll()
        .then(retornoAdmin => {
            console.log('entrou no then')
            return res.status(200).json(retornoAdmin)
            console.log(retornoAdmin)
        })
    },

    getAdmin: function(req, res) {
        db.Admin
        .findByPk(req.params.id)
        .then(OneUserAdmin => {
            return res.status(200).json(OneUserAdmin)
        })
    },

    createAdmin: function(req, res) {
        db.Admin
        .create(req.body)
        .then(newAdmin => {
            return res.status(200).json(newAdmin)
        })
    },
    deleteAdmin: function(req, res) {
        db.Admin
        .destroy({
            where: {
                id: req.params.id
            }
        })
        .then(deleteAdmin => {
            return res.json(deleteAdmin)
        })
    }

}


module.exports = ApiController;