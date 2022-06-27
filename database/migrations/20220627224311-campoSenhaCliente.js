'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('clientes', 'senha',
      { type: Sequelize.DataTypes.STRING(100), allowNull: true}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('clientes', 'senha',
      { type: Sequelize.DataTypes.STRING, allowNull: true}
    );
  }
};
