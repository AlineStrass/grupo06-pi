'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // PARA RODAR NO TERMINAL: SEQUELIZE DB:MIGRATE
     
    await queryInterface.createTable('produtos', {
      id: {type: Sequelize.DataType.INTEGER, primaryKey: true, autoIncrement: true},
      nome: Sequelize.DataType.STRING,
      preco: Sequelize.DataType.FLOAT,
      descricao: Sequelize.DataType.TEXT,
      foto: Sequelize.DataType.STRING,
      categorias_id: Sequelize.DataType.INTEGER

    })


  },

  async down(queryInterface, Sequelize) {
    // PARA RODAR NO TERMINAL: SEQUELIZE DB:MIGRATE:UNDO
    
    queryInterface.dropTable('produtos');
  }
};
