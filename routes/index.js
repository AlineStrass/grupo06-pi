var express = require('express');
var router = express.Router();

var HomeController = require("../controllers/HomeController");
var LoginController = require("../controllers/LoginController");
var CriarContaController = require("../controllers/CriarContaController");
var ProdutosController = require("../controllers/ProdutosController");
var PainelUsuarioController = require("../controllers/PainelUsuarioController");
var ProdutoInternoController = require("../controllers/ProdutoInternoController");
var ObrigadoController = require("../controllers/ObrigadoController");
var FinalizarController = require("../controllers/FinalizarController");
var CarrinhoController = require("../controllers/CarrinhoController");

router.get('/', HomeController.index);
router.get('/login', LoginController.index);
router.get('/criarconta', CriarContaController.index);
router.get('/produtos', ProdutosController.index);
router.get('/painelusuario', PainelUsuarioController.index);
router.get('/produtointerno', ProdutoInternoController.index);
router.get('/obrigado', ObrigadoController.index);
router.get('/finalizar', FinalizarController.index);
router.get('/carrinho', CarrinhoController.index);




module.exports = router;
