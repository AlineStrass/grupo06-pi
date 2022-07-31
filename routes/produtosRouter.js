var express = require('express');
const fs = require('fs');
const path = require('path')
var router = express.Router();
const { body } = require('express-validator');
const session = require('express-session');


//CONTROLLERS
var ProdutosController = require("../controllers/ProdutosController");


//ROTAS
router.get('/', ProdutosController.index);
router.get('/search', ProdutosController.search);
router.get('/produtointerno/:id', ProdutosController.produtoInterno);
router.get('/listarCategorias/:id',ProdutosController.listarCategorias);



module.exports = router;