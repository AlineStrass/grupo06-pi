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


router.get('/editarCadastro/:id', PainelUsuarioController.editarCadastro);
//router.put('/editarCadastro/:id', PainelUsuarioController.acaoEditarCadastro);
router.delete('/deletar/:id', PainelUsuarioController.deletarCadastro);




module.exports = router;