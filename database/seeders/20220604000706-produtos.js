'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    // PARA RODAR NO TERMINAL: SEQUELIZE DB:SEED:ALL
    await queryInterface.bulkInsert('produtos', [
      {
        nome: "Ração Whiskas Carne para Gatos Adultos",
        preco: 17.9,
        descricao: "Embalagens de 500g; Indicada para gatos adultos; ração premium; 100% completa e balanceada para gatos adultos;",
        foto: "",
        categorias_id: 1
      },
      {
        nome: "Arranhador para Gatos",
        preco: 250,
        descricao: "Indicado para gatos; Mantém seu pet entretido e livre de estresse; Feito com material atóxico;",
        foto: "",
        icategorias_id: 3
      },
      {
        nome: "Ração Magnus Premium para Cães Filhotes Sabor Carne 10,1kg",
        preco: 149.99,
        descricao: "Feita com proteínas de alta qualidade;",
        foto: "",
        categorias_id: 1
      },
      {
        nome: "Caixa de Transporte",
        preco: 99.99,
        descricao: "Caixa de transporte para cães e gatos;",
        foto: "",
        categorias_id: 6
      },
      {
        nome: "Maquina de Tosa",
        preco: 89.99,
        descricao: "aparelho de tosa;",
        foto: "",
        categorias_id: 6
      },
      {
        nome: "Cama para cães e gatos",
        preco: 69.9,
        descricao: "Camas;",
        foto: "",
        categorias_id: 5
      },
      {
        nome: "Ração Úmida Whiskas Sachê para Gatos",
        preco: 2.99,
        descricao: "Indicada para gatos; Refeição completa e balanceada;",
        foto: "",
        categorias_id: 2
      },
      {
        nome: "Areia Higiênica para Gatos Viva Verde",
        preco: 59.99,
        descricao: "Areia preferida do encantador de gatos, jackson galaxy; Melhor rendimento; Sem poeira; Eliminação imediata e duradoura do odor da urina;;",
        foto: "",
        categorias_id: 4
      },
      {
        nome: "Antipulgas e Carrapatos Frontline Topspot para Gatos",
        preco: 34.43,
        descricao: "Indicado para gatos; Ação rápida; Pode ser usado em gatas gestantes ou em lactação; No caso de DAPP, recomenda-se a aplicação mensal do produto; Proteção prolongada;",
        foto: "",
        categorias_id: 4
      },
    ])
  },
  async down(queryInterface, Sequelize) {
     await queryInterface.bulkDelete('produtos', null, {});
  }
};



















