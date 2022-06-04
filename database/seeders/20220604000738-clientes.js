'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // PARA RODAR NO TERMINAL: SEQUELIZE DB:SEED:ALL
    await queryInterface.bulkInsert('produtos', [
      {
        id: 1,
        email: "meuemail@email.com",
        telefone: "156654824574",
        nome: "Fulano",
        sobrenome: "de Tal",
        endereco: "rua dos bobos",
        numero: "4455",
        complemento: "135153",
        cep: "022551541",
        senha: "123456"
      },
      {
        id: 2,
        email: "alcantra@email.com",
        telefone: "156654824574",
        nome: "Beltrano",
        sobrenome: "de Alcantra",
        endereco: "rua dos bobos",
        numero: "4455",
        complemento: "135153",
        cep: "022551541",
        senha: "123456"
       },

    ])

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('produtos', null, {});

  }
};
