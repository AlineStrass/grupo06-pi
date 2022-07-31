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
router.get('/usuarios', AdminAutenticacao, AdminController.adminUsuarios);
router.get('/usuariosCadastrar',AdminAutenticacao, AdminController.adminUsuariosCadastrar);
router.post('/acaoCadastrarAdmin',AdminAutenticacao, AdminController.acaoCadastrarAdmin);
router.get('/editar/:id',AdminAutenticacao, AdminController.editarAdmin);
router.post('/editar/:id',AdminAutenticacao, AdminController.acaoEditarAdmin);
router.get('/deletar/:id',AdminAutenticacao, AdminController.deletarAdmin);


// PRODUTOS
router.get('/produtos',AdminAutenticacao,  AdminController.adminProdutos);
router.get('/produtosCadastrar',AdminAutenticacao, AdminController.adminProdutosCadastrar);
router.post('/acaoCadastrarProdutos',AdminAutenticacao, upload.single('imagemProduto'), AdminController.acaoCadastrarProdutos);
router.get('/editarProduto/:id',AdminAutenticacao, AdminController.editarProduto);
router.post('/editarProduto/:id',AdminAutenticacao,upload.single('imagemProduto'), AdminController.acaoEditarProduto);
router.get('/deletarProduto/:id',AdminAutenticacao, AdminController.deletarProduto);





module.exports = router;
