var express = require('express');
const fs = require('fs');
var router = express.Router();
const { body } = require('express-validator');
const session = require('express-session');
var multer = require('multer');


const AdminController = require('../controllers/AdminController');


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


router.get('/', AdminController.index);
router.get('/login', AdminController.adminLogin);
//router.get('/efetuar',ClientesController.efetuarLogin);
//router.post('/acaologin',ClientesController.acaoLoginAdmin);

router.get('/produtos', AdminController.adminProdutos);
router.get('/produtosCadastrar', AdminController.adminProdutosCadastrar);
router.post('/', upload.any('imagemProduto'), AdminController.cadastroProdutos);

router.get('/usuarios', AdminController.adminUsuarios);
router.get('/usuariosCadastrar', AdminController.adminUsuariosCadastrar);
router.post('/acaoCadastrarAdmin', AdminController.acaoCadastrarAdmin)







module.exports = router;
