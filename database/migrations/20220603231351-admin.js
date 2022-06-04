'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // PARA RODAR NO TERMINAL: SEQUELIZE DB:MIGRATE
    await queryInterface.createTable('admin', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
      },
      senha: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true,
      }
    })
  },

  async down(queryInterface, Sequelize) {
    // PARA RODAR NO TERMINAL: SEQUELIZE DB:MIGRATE:UNDO

    queryInterface.dropTable('admin');
  }
};
