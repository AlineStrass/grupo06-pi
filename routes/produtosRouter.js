var express = require('express');
const fs = require('fs');
const path = require('path')
var router = express.Router();
const { body } = require('express-validator');
const session = require('express-session');
var multer = require('multer');

//CONTROLLERS
var ProdutosController = require("../controllers/ProdutosController");

var multerDiskStorage = multer.diskStorage({
    destination: (req, file, callback)=>{
        const folder = path.join(__dirname, '../public/imgages/produtos');
        callback(null, folder);
    },
    filename: (req, file, callback)=>{
        const imagemProduto = Date.now() + path.extname(file.originalname);
        callback(null, imagemProduto);
    }
});
const upload = multer({storage: multerDiskStorage});


//ROTAS
router.get('/', ProdutosController.index);
router.post('/', upload.any('imagemProduto'), ProdutosController.cadastroProdutos);
router.get('/produtointerno', ProdutosController.produtoInterno);
//router.get('/:id', ProdutosController.categorias);



module.exports = router;