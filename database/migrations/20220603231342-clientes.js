'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('clientes', {
      id: { type: Sequelize.DataType.INTEGER, primaryKey: true, autoIncrement: true },
      nomeCompleto: { type: Sequelize.DataType.STRING, allowNull: true },
      foto: Sequelize.DataType.STRING,
      email: { type: Sequelize.DataType.STRING, allowNull: true },
      telefone: { type: Sequelize.DataType.STRING, allowNull: true },
      sexo: Sequelize.DataType.STRING,
      dataDeNascimento: { type: Sequelize.DataType.DATE, allowNull: true },
      cpf: { type: Sequelize.DataType.STRING, allowNull: true },
      senha: { type: Sequelize.DataType.STRING, allowNull: true}
    });
  },

    async down(queryInterface, Sequelize) {
      // PARA RODAR NO TERMINAL: SEQUELIZE DB:MIGRATE:UNDO
      queryInterface.dropTable('clientes');
    }

};
