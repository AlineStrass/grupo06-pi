const Sequelize = require('sequelize');
const config = require('../database/config/config');
const {Endereco, Cliente} = require('../database/models');


const EnderecoController = {
    index: async (req, res) => {
        const enderecos = await Endereco.findAll({
            include: {
                model: Cliente,
                as: "cliente",
                required: true
            }
        })
        console.log(enderecos)
       return res.render('enderecos')
    }
}



module.exports = EnderecoController;