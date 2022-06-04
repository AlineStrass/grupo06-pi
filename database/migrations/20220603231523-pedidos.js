'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // PARA RODAR NO TERMINAL: SEQUELIZE DB:MIGRATE

    await queryInterface.createTable('pedidos', {
      id: {
        type: Sequelize.DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      data: Sequelize.DataType.DATE,
      status: Sequelize.DataType.STRING,
      clientes_id: Sequelize.DataType.INTEGER,
    })
  },

  async down(queryInterface, Sequelize) {
    // PARA RODAR NO TERMINAL: SEQUELIZE DB:MIGRATE:UNDO

    queryInterface.dropTable('pedidos');
  }
};
