var express = require('express');
const fs = require('fs');
var router = express.Router();
const { body } = require('express-validator');
const session = require('express-session');


//CONTROLLERS
var HomeController = require("../controllers/HomeController");
var CarrinhoController = require("../controllers/CarrinhoController");


//ROTAS
//HOME
router.get('/', HomeController.index);

//CARRINHO DE COMPRAS
router.get('/carrinho', CarrinhoController.index);
router.post('/salvaCompra', CarrinhoController.salvaCompra);
router.get('/obrigado', CarrinhoController.obrigado);


module.exports = router;


