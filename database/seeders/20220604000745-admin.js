'use strict';

const bcrypt = require("bcryptjs");

module.exports = {
  async up(queryInterface, Sequelize) {
    // PARA RODAR NO TERMINAL: SEQUELIZE DB:SEED:ALL
    const senhaPadrao = bcrypt.hashSync('1234')
    await queryInterface.bulkInsert('admin', [
      {
        username: "asflores",
        senha: senhaPadrao
      },

    ])

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('admin', null, {});

  }
};
