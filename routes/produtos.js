var express = require('express');
const fs = require('fs');
var router = express.Router();
const { body } = require('express-validator');
const session = require('express-session');


var ProdutosController = require("../controllers/ProdutosController");


router.get('/produtos', ProdutosController.index);



module.exports = router;
