var express = require('express');
const fs = require('fs');
var router = express.Router();
const { body } = require('express-validator');
const session = require('express-session');

//MIDDLEWARES
const loginMiddleware = require('../middlewares/loginMiddleware');


//CONTROLLERS
var HomeController = require("../controllers/HomeController");
var LoginController = require("../controllers/LoginController");
var CriarContaController = require("../controllers/CriarContaController");
var PainelUsuarioController = require("../controllers/PainelUsuarioController");
var ProdutoInternoController = require("../controllers/ProdutoInternoController");
var ObrigadoController = require("../controllers/ObrigadoController");
var FinalizarController = require("../controllers/FinalizarController");
var CarrinhoController = require("../controllers/CarrinhoController");


//validações de campos
//var validacoes = require('../middlewares/validacoes');


//ROTAS
router.get('/', HomeController.index);
router.get('/login', LoginController.index);
router.get('/login/efetuar',loginMiddleware, LoginController.login);
router.get('/criarconta', CriarContaController.index);
router.post('/acaoCadastrar', CriarContaController.acaoCadastrar);
router.get('/painelusuario', PainelUsuarioController.index);
router.get('/produtointerno', ProdutoInternoController.index);
router.get('/obrigado', ObrigadoController.index);
router.get('/finalizar', FinalizarController.index);
router.get('/carrinho', CarrinhoController.index);




module.exports = router;
