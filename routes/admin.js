var express = require('express');
const fs = require('fs');
var router = express.Router();
const { body } = require('express-validator');
const session = require('express-session');


const AdminController = require('../controllers/AdminController');



router.get('/admin', AdminController.index);




module.exports = router;
