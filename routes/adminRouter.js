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

// LOGIN E ROTA PRINCIPAL
router.get('/', AdminController.index);
router.get('/login', AdminController.adminLogin);
router.get('/efetuar',AdminController.efetuarLogin);
router.post('/acaologin',AdminController.acaoLoginAdmin);
router.get('/logout', AdminController.logout);

// ADMIN
//renderiza a pg principal dos usuarios
router.get('/usuarios', AdminController.adminUsuarios);
//renderiza a página do formulario para adicionar usuarios
router.get('/usuariosCadastrar', AdminController.adminUsuariosCadastrar);
//cadastra novos usuarios Administrativos
router.post('/acaoCadastrarAdmin', AdminController.acaoCadastrarAdmin);
//editar usuarios
router.get('/editar/:id', AdminController.editarAdmin);
router.post('/editar/:id', AdminController.acaoEditarAdmin);
// Deletar usuarios
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
