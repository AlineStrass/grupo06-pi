const Sequelize = require('sequelize');
const config = require('../database/config/config');
const {ItemPedido, Pedido} = require('../database/models');


const PedidoController = {
    index: async (req, res) => {
        const pedidos = await Pedido.findAll({
            include: ['itensPedido']
        })
       
       return res.render('pedidos', {pedidos})

    }
}


module.exports = PedidoController;