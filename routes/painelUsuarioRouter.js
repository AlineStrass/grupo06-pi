var express = require('express');
const fs = require('fs');
var router = express.Router();
const { body } = require('express-validator');
const session = require('express-session');



//CONTROLLERS
var PainelUsuarioController = require("../controllers/PainelUsuarioController");


//ROTAS
router.get('/', PainelUsuarioController.index);





module.exports = router;