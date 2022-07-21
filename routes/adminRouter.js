var express = require('express');
const fs = require('fs');
var router = express.Router();
const { body } = require('express-validator');
const session = require('express-session');
var multer = require('multer');
const path = require('path');
const AdminAutenticacao = require('../middlewares/adminAutenticacao')

const AdminController = require('../controllers/AdminController');

// MULTER PARA PRODUTOS
var upload = multer({
    dest: "public/images/produtos/"
});
// var multerDiskStorage = multer.diskStorage({
//     destination: (req, file, callback)=>{
//         const folder = path.join(__dirname, '../public/images/produtos');
//         callback(null, folder);
//     },
//     filename: (req, file, callback)=>{
//         const imagemProduto = Date.now() + path.extname(file.originalname);
//         callback(null, imagemProduto);
//     }
// });
// const upload = multer({storage: multerDiskStorage});

// LOGIN E ROTA PRINCIPAL
router.get('/', AdminController.index);
router.get('/login', AdminController.adminLogin);
router.get('/efetuar',AdminController.efetuarLogin);
router.post('/acaologin',AdminController.acaoLoginAdmin);
router.get('/logout', AdminController.logout);

// ADMIN
router.get('/usuarios', AdminController.adminUsuarios);
router.get('/usuariosCadastrar', AdminController.adminUsuariosCadastrar);
router.post('/acaoCadastrarAdmin', AdminController.acaoCadastrarAdmin);
router.get('/editar/:id', AdminController.editarAdmin);
router.post('/editar/:id', AdminController.acaoEditarAdmin);
router.get('/deletar/:id', AdminController.deletarAdmin);
//AdminAutenticacao,

// PRODUTOS
router.get('/produtos',  AdminController.adminProdutos);

router.get('/produtosCadastrar', AdminController.adminProdutosCadastrar);
router.post('/acaoCadastrarProdutos', upload.array('imagemProduto'), AdminController.acaoCadastrarProdutos);

router.get('/editarProduto/:id', AdminController.editarProduto);
router.post('/editarProduto/:id',upload.array('imagemProduto'), AdminController.acaoEditarProduto);

router.get('/deletarProduto/:id', AdminController.deletarProduto);












module.exports = router;
