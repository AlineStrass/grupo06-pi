var express = require('express');
const fs = require('fs');
var router = express.Router();
const { body } = require('express-validator');
const session = require('express-session');


//CONTROLLERS
var HomeController = require("../controllers/HomeController");
var CarrinhoController = require("../controllers/CarrinhoController");


//ROTAS
router.get('/', HomeController.index);

router.get('/carrinho', CarrinhoController.index);
router.get('/finalizar', CarrinhoController.finalizar);
router.get('/obrigado', CarrinhoController.obrigado);



module.exports = router;
