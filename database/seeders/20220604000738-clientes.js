'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // PARA RODAR NO TERMINAL: SEQUELIZE DB:SEED:ALL
    await queryInterface.bulkInsert('produtos', [
      {
        nomeCompleto: "Fulana de Tal",
        foto: "arquivo.jpg",
        email: "meuemail@email.com",
        telefone: "156654824574",
        sexo: "feminino",
        dataDeNascimento: "1999-02-15",
        cpf: "012.345.678-99",
        senha: "123456",
        endereco: {
          rua: "Rua dos Bobos",
          numero: "4455",
          bairro: "centro",
          complemento: "apto 153",
          cidade: "Cidade da Fantasia",
          estado: "Das Fadas",
          cep: "022551541"
          //clientes_id: 7  --???
        }
      },
      {
        nomeCompleto: "Beltrano de Alcantra",
        foto: "arquivo1.jpg",
        email: "alcantra@email.com",
        telefone: "11654872584",
        sexo: "masculino",
        dataDeNascimento: "1995-01-10",
        cpf: "012.345.678-99",
        senha: "123456",
        endereco: {
          rua: "Rua dos Bobos",
          numero: "4455",
          bairro: "centro",
          complemento: "apto 253",
          cep: "022551541"
          //clientes_id: 8  --???
        }
      },

    ])

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('produtos', null, {});

  }
};
