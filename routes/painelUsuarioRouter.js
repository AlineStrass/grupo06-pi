var express = require('express');
const fs = require('fs');
var router = express.Router();
const { body } = require('express-validator');
const session = require('express-session');
const loginMiddleware = require("../middlewares/loginMiddleware");


//CONTROLLERS
var PainelUsuarioController = require("../controllers/PainelUsuarioController");


//ROTAS
router.get('/',loginMiddleware, PainelUsuarioController.index);

router.get('/editarCadastro/:id',loginMiddleware, PainelUsuarioController.editarCadastro);
router.post('/editarCadastro/:id',loginMiddleware, PainelUsuarioController.acaoEditarCadastro);

router.get('/deletar/:id', PainelUsuarioController.deletarCadastro);




module.exports = router;