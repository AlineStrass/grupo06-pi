const Sequelize = require('sequelize');
const config = require('../database/config/config');const db = require('../database/models');

const CarrinhoController = {
    index: async (req, res) => {
        if (req.session.logado === true) {
            const carrinhoCliente = await db.Cliente.findByPk(req.session.idUsuario, { include: ["enderecos"]});
            res.render('carrinho', { Cliente: carrinhoCliente })
        } else {
            res.render('login')
        }
    },
    salvaCompra: async (req, res) => {
        console.log("entrou no salvar compra")
        console.log("aqui o req.body",req.body)
        
        const salvar = {
            quantidade: req.body.quantidade,
            valor: req.body.valor,
            produtos_id: req.body.produtos_id,
        }
        await db.ItemPedido.create(salvar)
            

            res.redirect('/')
            
            console.log("aqui o salvar",salvar)
    },

    finalizar: (req, res) => {
        return res.render('finalizar')
    },

    obrigado: (req, res) => {
        return res.render('obrigado')
    },

}

module.exports = CarrinhoController;