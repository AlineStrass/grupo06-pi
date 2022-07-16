const { body } = require('express-validator');

const validacoes = [
    body('email').notEmpty().isEmail(),
    body('telefone').notEmpty().isString(),
    body('nomeCompleto').notEmpty().isString(),
    body('cpf').notEmpty().isString(),
    body('datanascimento').notEmpty().isString(),
    body('rua').notEmpty().isString(),
    body('numero').notEmpty().isString(),
    body('bairro').notEmpty().isString(),
    body('cidade').notEmpty().isString(),
    body('estado').notEmpty().isString(),
    body('senha').notEmpty().isString(),
];


module.exports = validacoes;


