'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // PARA RODAR NO TERMINAL: SEQUELIZE DB:MIGRATE

    await queryInterface.createTable('pedidos', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      data: Sequelize.DataTypes.DATE,
      status: Sequelize.DataTypes.STRING,
      clientes_id: Sequelize.DataTypes.INTEGER,
    })
  },

  async down(queryInterface, Sequelize) {
    // PARA RODAR NO TERMINAL: SEQUELIZE DB:MIGRATE:UNDO

    queryInterface.dropTable('pedidos');
  }
};
