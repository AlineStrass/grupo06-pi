'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // PARA RODAR NO TERMINAL: SEQUELIZE DB:SEED:ALL
    await queryInterface.bulkInsert('admin', [
      {
        username: "alinestrass",
        senha: 123456
      },
      {
        username: "beatrice",
        senha: 854789
      },
      {
        username: "reginaldo",
        senha: 214567
      },
      {
        username: "flavia",
        senha: 215325
      },
      {
        username: "pablo",
        senha: 785641
      }

    ])

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('admin', null, {});
  }
};
