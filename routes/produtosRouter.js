var express = require('express');
const fs = require('fs');
var router = express.Router();
const { body } = require('express-validator');
const session = require('express-session');

//CONTROLLERS
var ProdutosController = require("../controllers/ProdutosController");

//ROTAS
router.get('/', ProdutosController.index);



module.exports = router;