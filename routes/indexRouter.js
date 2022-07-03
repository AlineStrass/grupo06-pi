var express = require('express');
const fs = require('fs');
var router = express.Router();
const { body } = require('express-validator');
const session = require('express-session');



//CONTROLLERS
var HomeController = require("../controllers/HomeController");
var ProdutoInternoController = require("../controllers/ProdutoInternoController");
var ObrigadoController = require("../controllers/ObrigadoController");
var FinalizarController = require("../controllers/FinalizarController");
var CarrinhoController = require("../controllers/CarrinhoController");


//ROTAS
router.get('/', HomeController.index);
router.get('/produtointerno', ProdutoInternoController.index);
router.get('/obrigado', ObrigadoController.index);
router.get('/finalizar', FinalizarController.index);
router.get('/carrinho', CarrinhoController.index);





module.exports = router;
