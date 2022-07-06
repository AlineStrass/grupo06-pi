var express = require('express');
const fs = require('fs');
var router = express.Router();
const { body } = require('express-validator');
const session = require('express-session');


const AdminController = require('../controllers/AdminController');



router.get('/', AdminController.index);
router.get('/admin/login', AdminController.adminLogin);
router.get('/admin/produtos', AdminController.adminProdutos);
router.get('/admin/usuarios', AdminController.adminUsuarios);



module.exports = router;
