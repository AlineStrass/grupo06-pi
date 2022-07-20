var express = require('express');
const fs = require('fs');
var router = express.Router();
const { body } = require('express-validator');
const session = require('express-session');
var multer = require('multer');
const path = require('path');
const AdminAutenticacao = require('../middlewares/adminAutenticacao')

const AdminController = require('../controllers/AdminController');


var multerDiskStorage = multer.diskStorage({
    destination: (req, file, callback)=>{
        const folder = path.join(__dirname, '../public/images/produtos');
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
router.get('/efetuar',AdminController.efetuarLogin);
router.post('/acaologin',AdminController.acaoLoginAdmin);
router.get('/logout', AdminController.logout);

router.get('/usuarios',AdminAutenticacao, AdminController.adminUsuarios);
router.get('/usuariosCadastrar',AdminAutenticacao, AdminController.adminUsuariosCadastrar);
router.post('/acaoCadastrarAdmin',AdminAutenticacao, AdminController.acaoCadastrarAdmin);
router.get('/editar/:id',AdminAutenticacao, AdminController.editarAdmin);
router.put('/editar/:id',AdminAutenticacao, AdminController.acaoEditarAdmin);
router.delete('/deletar/:id',AdminAutenticacao, AdminController.deletarAdmin);


router.get('/produtos', AdminAutenticacao, AdminController.adminProdutos);
router.get('/produtosCadastrar',AdminAutenticacao, AdminController.adminProdutosCadastrar);
router.post('/acaoCadastrarProdutos',AdminAutenticacao, upload.array('imagemProduto'), AdminController.acaoCadastrarProdutos);
//router.put('/editarProduto/:id',AdminAutenticacao, AdminController.acaoEditarProduto);
router.delete('/deletarProduto/:id',AdminAutenticacao, AdminController.deletarProduto);












module.exports = router;
