'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // PARA RODAR NO TERMINAL: SEQUELIZE DB:SEED:ALL
    await queryInterface.bulkInsert('categorias', [
      {
        categoria: "ração",
      },
      {
        categoria: "petiscos",
      },
      {
        categoria: "brinquedos",
      },
      {
        categoria: "higiene",
      },
      {
        categoria: "camas",
      },
      {
        categoria: "outros acessorios"
      }
    ])

  },

  async down(queryInterface, Sequelize) {
     await queryInterface.bulkDelete('categorias', null, {});
  }
};