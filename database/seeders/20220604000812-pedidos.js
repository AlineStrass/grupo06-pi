'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // PARA RODAR NO TERMINAL: SEQUELIZE DB:SEED:ALL
    await queryInterface.bulkInsert('pedidos', [
      {
        data: '2022-05-25',
        status: "entregue",
        clientes_id: 1,
      },
     
    ])

  },

  async down(queryInterface, Sequelize) {
     await queryInterface.bulkDelete('pedidos', null, {});
  }
};
