const Sequelize = require('sequelize');
const config = require('../database/config/config'); const db = require('../database/models');

const CarrinhoController = {
    index: async (req, res) => {
        if (req.session.logado === true) {
            const carrinhoCliente = await db.Cliente.findByPk(req.session.idUsuario, { include: ["enderecos"] });
            res.render('carrinho', { Cliente: carrinhoCliente })
        } else {
            res.render('login')
        }
    },
    salvaCompra: async (req, res) => {
        const produtos = await db.Produto.findAll();
        console.log("entrou no salvar compra")
        console.log("aqui o req.body", req.body)
        // console.log("aqui o produtos", produtos)
        const compras = req.body;

        let resultado = [];
        for (let c = 0; c < compras.length; c++) {
            // console.log("itens", compras[c])
            let findArrayProdutos = produtos.find(
                produto => produto.nome === compras[c].chave)
            console.log("aqui o findArrayProdutos", findArrayProdutos)

            const salvar = {
                quantidade: compras[c].quantidade,
                valor: compras[c].valor,
                produtos_id: findArrayProdutos.id,
            }
            await db.ItemPedido.create(salvar)
        }

        res.redirect('/obrigado')
        // console.log("aqui o salvar", salvar)
    },

    obrigado: (req, res) => {
        return res.render('obrigado')
    },

}

module.exports = CarrinhoController;