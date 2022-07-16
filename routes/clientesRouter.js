var express = require('express');
const fs = require('fs');
var router = express.Router();
const { body } = require('express-validator');
const session = require('express-session');


//CONTROLLERS
var ClientesController = require('../controllers/ClientesController');

//MIDDLEWARES
const loginMiddleware = require('../middlewares/loginMiddleware');

//ROTAS
router.get('/', ClientesController.index);
router.get('/login', ClientesController.paginaLogin);
router.get('/efetuar',ClientesController.login);
router.post('/acaologin',ClientesController.acaoLogin);
router.get('/logout', ClientesController.logout);

router.get('/criarconta', ClientesController.criarConta);
router.post('/acaoCadastrar', ClientesController.acaoCadastrar);



module.exports = router;