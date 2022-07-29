'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('endereco', [
      {
        rua: "Dos Bobos",
        numero: "000",
        bairro: "Da Mágia",
        complemento: "casa 02",
        cidade: "Das Fadas",
        estado: "Do Nunca",
        cep: "0121111",
        clientes_id: 7,
      },
    ])
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('endereco', null, {});
  }
};
