const express = require('express');

const router = express.Router();


router.get('/criar',(req, res)=>res.send('criando'));
router.get('/deletar',(req, res)=>res.send('deletando'));


module.exports = router;