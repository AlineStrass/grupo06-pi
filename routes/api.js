var express = require('express');
var router = express.Router();
var apiController = require('../controllers/apiController');

// lista de produtos
router.get('/produtos', apiController.getProdutos);

module.exports = router;