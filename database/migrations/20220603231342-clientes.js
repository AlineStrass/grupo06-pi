'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('clientes', {
      id: { type: Sequelize.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      onDelete: 'CASCADE',
      nomeCompleto: { type: Sequelize.DataTypes.STRING, allowNull: true },
      email: { type: Sequelize.DataTypes.STRING, allowNull: true },
      telefone: { type: Sequelize.DataTypes.STRING, allowNull: true },
      dataDeNascimento: { type: Sequelize.DataTypes.DATE, allowNull: true },
      cpf: { type: Sequelize.DataTypes.STRING, allowNull: true },
      senha: { type: Sequelize.DataTypes.STRING, allowNull: true}
    });
  },

    async down(queryInterface, Sequelize) {
      // PARA RODAR NO TERMINAL: SEQUELIZE DB:MIGRATE:UNDO
      queryInterface.dropTable('clientes');
    }

};
