const { body } = require('express-validator');

const validacoes = [
    body('email').notEmpty().isEmail(),
    body('nome').notEmpty().isString(),
    body('sobrenome').notEmpty().isString(),
    body('endereco').notEmpty().isString(),
    body('numero').notEmpty().isString(),
    body('complemento').notEmpty().isString(),
    body('complemento').notEmpty().isString(),
    body('cep').notEmpty().isString(),
    body('senha').notEmpty().isString()
];


module.exports = validacoes;


