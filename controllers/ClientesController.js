const Sequelize = require('sequelize');
const config = require('../database/config/config');
const {Endereco, Cliente} = require('../database/models');


const ClientesController = {
    index: async (req, res) => {
        const clientes = await Cliente.findAll({
            include: ['enderecos']
        })
       
       return res.render('clientes', {clientes})
    }
}


module.exports = ClientesController;