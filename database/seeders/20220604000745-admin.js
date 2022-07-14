'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // PARA RODAR NO TERMINAL: SEQUELIZE DB:SEED:ALL
    await queryInterface.bulkInsert('admin', [
      {
        id: 1,
        username: "",
        senha: ""
      },

    ])

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('admin', null, {});

  }
};
