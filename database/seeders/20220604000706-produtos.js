'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // PARA RODAR NO TERMINAL: SEQUELIZE DB:SEED:ALL
    await queryInterface.bulkInsert('produtos', [
      {
        nome: "Ração Hills Science Diet para Cães Adultos",
        preco: 64.99,
        descricao: "Pacote de 1kg - Ração super premium. Ideal para cães adultos a partir dos 7 anos. Feita com ingredientes selecionados e desenvolvida para atender as necessidades de cães",
        foto: "",
        categorias_id: 1
      },
      {
        nome: "Ração GranPlus Menu Para Cães",
        preco: 59.99,
        descricao: "Contribui para ótimo funcionamento do organismo e mobilidade das articulações. Para que eles possam manter-se ativos durante mais tempo. Com fonte rica em ômega 3 (EPA & DHA). Com condroitina e glicosamina. Auxilia na redução da formação de tártaro. Sem corantes e aromas artificiais;",
        foto: "",
        icategorias_id: 1
      },
      {
        nome: "Ração Royal Canin Bulldog Inglês para Cães Adultos - 12kg",
        preco: 353.89,
        descricao: "Indicada para cães adultos. Específica para pets da raça Bulldog Inglês. Auxilia a manter o peso ideal. Proporciona saúde dos ossos e articulações. Contém EPA/DHA, que mantém a saúde da pele e pelagem do pet. - Disponível em embalagem de 12 kg.",
        foto: "",
        categorias_id: 1
      },

    ])

  },

  async down(queryInterface, Sequelize) {
     await queryInterface.bulkDelete('produtos', null, {});
     
  }
};
