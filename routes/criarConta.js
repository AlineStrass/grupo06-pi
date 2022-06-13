var express = require('express');
const fs = require('fs');
var router = express.Router();
const { body } = require('express-validator');
const session = require('express-session');

//CONTROLLERS
var CriarContaController = require("../controllers/CriarContaController");


//ROTAS
router.get('/', CriarContaController.index);
router.post('/acaoCadastrar', CriarContaController.acaoCadastrar);




module.exports = router;