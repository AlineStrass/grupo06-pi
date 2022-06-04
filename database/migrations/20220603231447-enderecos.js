'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // PARA RODAR NO TERMINAL: SEQUELIZE DB:MIGRATE
     
    await queryInterface.createTable('enderecos', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    rua: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
    },
    numero: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
    },
    bairro: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
    },
    complemento: Sequelize.DataTypes.STRING,

    cidade: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
    },
    estado: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
    },
    cep: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
    },
    clientes_id: Sequelize.DataTypes.INTEGER,
    })
  },

  async down(queryInterface, Sequelize) {
    // PARA RODAR NO TERMINAL: SEQUELIZE DB:MIGRATE:UNDO

    queryInterface.dropTable('enderecos');
  }
};
