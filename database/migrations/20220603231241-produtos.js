'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // PARA RODAR NO TERMINAL: SEQUELIZE DB:MIGRATE
     
    await queryInterface.createTable('produtos', {
      id: {type: Sequelize.DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
      nome: Sequelize.DataTypes.STRING,
      preco: Sequelize.DataTypes.FLOAT,
      descricao: Sequelize.DataTypes.TEXT,
      foto: Sequelize.DataTypes.STRING,
      categorias_id: Sequelize.DataTypes.INTEGER
    })


  },

  async down(queryInterface, Sequelize) {
    // PARA RODAR NO TERMINAL: SEQUELIZE DB:MIGRATE:UNDO (ultima atualizaçao)
    //PARA RODAR NO TERMINAL: SEQUELIZE DB:MIGRATE:UNDO:ALL (tudo)
    
    queryInterface.dropTable('produtos');
  }
};
