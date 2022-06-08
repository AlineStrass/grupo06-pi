var express = require('express');
const fs = require('fs');
var router = express.Router();
const { body } = require('express-validator');
const session = require('express-session');

const loginMiddleware = require('../middlewares/loginMiddleware');





//CONTROLLES
var AdminController = require('../controllers/AdminController');
var HomeController = require("../controllers/HomeController");
var LoginController = require("../controllers/LoginController");
var CriarContaController = require("../controllers/CriarContaController");
var ProdutoController = require("../controllers/ProdutoController");
var PainelUsuarioController = require("../controllers/PainelUsuarioController");
var ProdutoInternoController = require("../controllers/ProdutoInternoController");
var ObrigadoController = require("../controllers/ObrigadoController");
var FinalizarController = require("../controllers/FinalizarController");
var CarrinhoController = require("../controllers/CarrinhoController");

//MIDDLEWARES
//var loginMiddleware = require("../middlewares/loginMiddleware");

//validações de campos
//var validacoes = require('../middlewares/validacoes');

var autenticacaoMiddleware =  require("../middlewares/autenticacaoMiddleware");

//ROTAS
router.get('/', HomeController.index);

router.get('/admin', autenticacaoMiddleware,AdminController.index);

router.get('/login', LoginController.index);
router.post('/acaoLogin', LoginController.acaoLogin);


router.get('/login/efetuar',loginMiddleware, LoginController.login);


//router.get('/areaCliente', LoginController.areaCliente); - acho que não será usado.

router.get('/criarconta', CriarContaController.index);
//router.post('/criarconta', validacoes, CriarContaController.index); - estava interferindo no post da ação cadastrar.
router.post('/acaoCadastrar', CriarContaController.acaoCadastrar);

router.get('/produtos', ProdutosController.index);


router.get('/painelusuario', PainelUsuarioController.index);

router.get('/produtointerno', ProdutoInternoController.index);
router.get('/obrigado', ObrigadoController.index);
router.get('/finalizar', FinalizarController.index);
router.get('/carrinho', CarrinhoController.index);




module.exports = router;
