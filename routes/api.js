var express = require('express');
var router = express.Router();
var apiController = require('../controllers/ApiController');


// lista de produtos
router.get('/produtos', apiController.getProdutos);
router.get('/admin', apiController.getAdmins);
router.get('/admin/:id', apiController.getAdmin);
router.post('/admin', apiController.createAdmin);
router.delete('/admin/:id', apiController.deleteAdmin);


module.exports = router;