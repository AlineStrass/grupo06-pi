var express = require('express');
const fs = require('fs');
var router = express.Router();
const { body } = require('express-validator');
const session = require('express-session');

//CONTROLLERS
var ProdutosController = require("../controllers/ProdutosController");
//var ProdutoInternoController = require("../controllers/ProdutoInternoController");


//ROTAS
router.get('/', ProdutosController.index);
//router.get('/produtointerno', ProdutoInternoController.index);
//router.get('/produtointerno:id', ProdutoInternoController.buscarProduto);


module.exports = router;