'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // PARA RODAR NO TERMINAL: SEQUELIZE DB:MIGRATE
     
    await queryInterface.createTable('enderecos', {
      id: {
        type: Sequelize.DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    rua: {
        type: Sequelize.DataType.STRING,
        allowNull: true,
    },
    numero: {
        type: Sequelize.DataType.STRING,
        allowNull: true,
    },
    bairro: {
        type: Sequelize.DataType.STRING,
        allowNull: true,
    },
    complemento: Sequelize.DataType.STRING,

    cidade: {
        type: Sequelize.DataType.STRING,
        allowNull: true,
    },
    estado: {
        type: Sequelize.DataType.STRING,
        allowNull: true,
    },
    cep: {
        type: Sequelize.DataType.STRING,
        allowNull: true,
    },
    clientes_id: Sequelize.DataType.INTEGER,
    })
  },

  async down(queryInterface, Sequelize) {
    // PARA RODAR NO TERMINAL: SEQUELIZE DB:MIGRATE:UNDO

    queryInterface.dropTable('enderecos');
  }
};
