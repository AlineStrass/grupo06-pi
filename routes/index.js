var express = require('express');
const fs = require('fs');
var router = express.Router();
const { body } = require('express-validator');
const session = require('express-session');

//CONTROLLES
var HomeController = require("../controllers/HomeController");
var LoginController = require("../controllers/LoginController");
var CriarContaController = require("../controllers/CriarContaController");
var ProdutosController = require("../controllers/ProdutosController");
var PainelUsuarioController = require("../controllers/PainelUsuarioController");
var ProdutoInternoController = require("../controllers/ProdutoInternoController");
var ObrigadoController = require("../controllers/ObrigadoController");
var FinalizarController = require("../controllers/FinalizarController");
var CarrinhoController = require("../controllers/CarrinhoController");

//MIDDLEWARES
//var loginMiddleware = require("../middlewares/loginMiddleware");

//validações de campos
var validacoes = require('../middlewares/validacoes');
const { route } = require('express/lib/application');


//ROTAS
router.get('/', HomeController.index);

router.get('/login', LoginController.index);
router.post('/acaoLogin', LoginController.acaoLogin);


//router.get('/areaCliente', LoginController.areaCliente);

router.get('/criarconta', CriarContaController.index);
//router.post('/criarconta', validacoes, CriarContaController.index);
router.post('/acaoCadastrar', CriarContaController.acaoCadastrar);

router.get('/produtos', ProdutosController.index);
router.get('/painelusuario', /*loginMiddleware,*/ PainelUsuarioController.index);
router.get('/produtointerno', ProdutoInternoController.index);
router.get('/obrigado', ObrigadoController.index);
router.get('/finalizar', FinalizarController.index);
router.get('/carrinho', CarrinhoController.index);




module.exports = router;
