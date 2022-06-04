'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // PARA RODAR NO TERMINAL: SEQUELIZE DB:SEED:ALL
    await queryInterface.bulkInsert('itensPedido', [
      {
        quantidade: 5,
        valor: 19.50,
        produtos_id: 2,
        pedidos_id: "2022-03-17",
      },
     
    ])

  },

  async down(queryInterface, Sequelize) {
     await queryInterface.bulkDelete('itensPedido', null, {});
  }
};
