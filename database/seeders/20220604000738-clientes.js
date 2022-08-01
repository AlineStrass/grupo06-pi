'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // PARA RODAR NO TERMINAL: SEQUELIZE DB:SEED:ALL
    await queryInterface.bulkInsert('clientes', [
      {
        id: 1,
        email: "meuemail@email.com",
        telefone: "156654824574",
        nomeCompleto: "Fulano de tal",
        endereco: "rua dos bobos",
        numero: "4455",
        complemento: "135153",
        cep: "022551541",
        senha: "$2a$10$1A6DngQgxqlcY8ApP/H9oeohMGsggzyxvlpO2e6EH74TesalXjQke"
      },
      

    ])

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('clientes', null, {});

  }
};
