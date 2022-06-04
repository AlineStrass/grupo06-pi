'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // PARA RODAR NO TERMINAL: SEQUELIZE DB:MIGRATE
     
    await queryInterface.createTable('itensPedido', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    quantidade: Sequelize.DataTypes.INTEGER,
    valor: Sequelize.DataTypes.FLOAT,
    produtos_id: Sequelize.DataTypes.INTEGER,
    pedidos_id: Sequelize.DataTypes.INTEGER,
    })


  },

  async down(queryInterface, Sequelize) {
    // PARA RODAR NO TERMINAL: SEQUELIZE DB:MIGRATE:UNDO
    
    queryInterface.dropTable('itensPedido');
  }
};
