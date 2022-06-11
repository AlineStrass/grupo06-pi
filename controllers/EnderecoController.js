const Sequelize = require('sequelize');
const config = require('../config/config');
const {Endereco, Cliente} = require('../database/models');

const EnderecoController = {
    index: async (req, res) => {
        const enderecos = await Endereco.findAll({
            include: {
                model: Cliente,
                require: true
            }
        })
       return res.render('')
    }
}



module.exports = EnderecoController;