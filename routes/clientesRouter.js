var express = require('express');
const fs = require('fs');
var router = express.Router();
const { body } = require('express-validator');
const session = require('express-session');

//CONTROLLERS
var ClientesController = require('../controllers/ClientesController');


//ROTAS
router.get('/', ClientesController.index);
router.get('/criarconta', ClientesController.criarConta);
router.post('/acaoCadastrar', ClientesController.acaoCadastrar);


module.exports = router;