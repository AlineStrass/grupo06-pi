'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // PARA RODAR NO TERMINAL: SEQUELIZE DB:SEED:ALL
    await queryInterface.bulkInsert('enderecos', [
      {
        rua: "Rua dos Bobos",
        numero: "4455",
        bairro: "centro",
        complemento: "apto 153",
        cidade: "Cidade da Fantasia",
        estado: "Das Fadas",
        cep: "022551541",
        clientes_id: 7
      },
     
    ])

  },

  async down(queryInterface, Sequelize) {
     await queryInterface.bulkDelete('enderecos', null, {});
  }
};
