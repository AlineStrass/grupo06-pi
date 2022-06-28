var express = require('express');
const fs = require('fs');
var router = express.Router();
const { body } = require('express-validator');
const session = require('express-session');



//CONTROLLERS
var HomeController = require("../controllers/HomeController");
var ObrigadoController = require("../controllers/ObrigadoController");
var FinalizarController = require("../controllers/FinalizarController");
var CarrinhoController = require("../controllers/CarrinhoController");
var ClientesController = require('../controllers/ClientesController');
var ProdutoInternoController = require("../controllers/ProdutoInternoController");



//ROTAS
router.get('/', HomeController.index);
router.get('/obrigado', ObrigadoController.index);
router.get('/finalizar', FinalizarController.index);
router.get('/carrinho', CarrinhoController.index);
router.get('/clientes', ClientesController.index);
router.get('/produtointerno', ProdutoInternoController.index);




module.exports = router;
