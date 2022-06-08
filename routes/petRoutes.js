var express = require('express');
const fs = require('fs');
var router = express.Router();
const { body } = require('express-validator');
const session = require('express-session');


router.get('/', HomeController.index);

router.get('/admin', AdminController.index);

router.get('/login', LoginController.index);
router.post('/acaoLogin', LoginController.acaoLogin);




//router.get('/areaCliente', LoginController.areaCliente); - acho que não será usado.

router.get('/criarconta', CriarContaController.index);
//router.post('/criarconta', validacoes, CriarContaController.index); - estava interferindo no post da ação cadastrar.
router.post('/acaoCadastrar', CriarContaController.acaoCadastrar);




router.get('/produtos', ProdutosController.index);
router.get('/painelusuario', /*loginMiddleware,*/ PainelUsuarioController.index);
router.get('/produtointerno', ProdutoInternoController.index);
router.get('/obrigado', ObrigadoController.index);
router.get('/finalizar', FinalizarController.index);
router.get('/carrinho', CarrinhoController.index);




module.exports = router;