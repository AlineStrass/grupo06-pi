'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // PARA RODAR NO TERMINAL: SEQUELIZE DB:MIGRATE
     
    await queryInterface.createTable('categorias', {
      id: {
        type: Sequelize.DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    categoria: Sequelize.DataType.STRING,

    })


  },

  async down(queryInterface, Sequelize) {
    // PARA RODAR NO TERMINAL: SEQUELIZE DB:MIGRATE:UNDO
    
    queryInterface.dropTable('categorias');
  }
};
