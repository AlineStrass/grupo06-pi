'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('clientes', {
      id: { type: Sequelize.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      nomeCompleto: { type: Sequelize.DataTypes.STRING, allowNull: true },
      foto: Sequelize.DataTypes.STRING,
      email: { type: Sequelize.DataTypes.STRING, allowNull: true },
      telefone: { type: Sequelize.DataTypes.STRING, allowNull: true },
      sexo: Sequelize.DataTypes.STRING,
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
