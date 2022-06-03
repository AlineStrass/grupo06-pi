'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // PARA RODAR NO TERMINAL: SEQUELIZE DB:MIGRATE
     
    await queryInterface.createTable('itensPedido', {
      id: {
        type: Sequelize.DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    quantidade: Sequelize.DataType.INTEGER,
    valor: Sequelize.DataType.FLOAT,
    produtos_id: Sequelize.DataType.INTEGER,
    pedidos_id: Sequelize.DataType.INTEGER,
    })


  },

  async down(queryInterface, Sequelize) {
    // PARA RODAR NO TERMINAL: SEQUELIZE DB:MIGRATE:UNDO
    
    queryInterface.dropTable('itensPedido');
  }
};
