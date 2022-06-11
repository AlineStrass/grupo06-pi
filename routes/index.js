var express = require('express');
const fs = require('fs');
var router = express.Router();
const { body } = require('express-validator');
const session = require('express-session');


//CONTROLLERS
var HomeController = require("../controllers/HomeController");
var LoginController = require("../controllers/LoginController");
var CriarContaController = require("../controllers/CriarContaController");
var PainelUsuarioController = require("../controllers/PainelUsuarioController");
var ProdutoInternoController = require("../controllers/ProdutoInternoController");
var ObrigadoController = require("../controllers/ObrigadoController");
var FinalizarController = require("../controllers/FinalizarController");
var CarrinhoController = require("../controllers/CarrinhoController");
var EnderecoController = require("../controllers/EnderecoController")


//MIDDLEWARES
const loginMiddleware = require('../middlewares/loginMiddleware');
var autenticacaoMiddleware =  require("../middlewares/autenticacaoMiddleware");

//ROTAS
router.get('/', HomeController.index);
router.get('/login', LoginController.index);
router.get('/login/efetuar',loginMiddleware, LoginController.login);
router.get('/criarconta', CriarContaController.index);
router.post('/acaoCadastrar', CriarContaController.acaoCadastrar);
router.post('/acaologin',LoginController.acaoLogin )
router.get('/painelusuario', PainelUsuarioController.index);
router.get('/produtointerno', ProdutoInternoController.index);
router.get('/obrigado', ObrigadoController.index);
router.get('/finalizar', FinalizarController.index);
router.get('/carrinho', CarrinhoController.index);
router.get('/enderecos', EnderecoController.index)




module.exports = router;
