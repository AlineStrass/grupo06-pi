var express = require('express');
const fs = require('fs');
var router = express.Router();
const { body } = require('express-validator');
const session = require('express-session');

//CONTROLLER
var LoginController = require("../controllers/LoginController");

//MIDDLEWARES
const loginMiddleware = require('../middlewares/loginMiddleware');
var autenticacaoMiddleware = require("../middlewares/autenticacaoMiddleware");

//ROTAS
router.get('/', LoginController.index);
router.get('/efetuar',loginMiddleware, LoginController.login);
router.post('/acaologin',LoginController.acaoLogin);


module.exports = router;