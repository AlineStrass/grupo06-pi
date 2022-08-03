'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    // PARA RODAR NO TERMINAL: SEQUELIZE DB:SEED:ALL
    await queryInterface.bulkInsert('produtos', [
      {
        nome: "Ração Whiskas Carne para Gatos Adultos",
        preco: 17.9,
        descricao: "Embalagens de 500g; Indicada para gatos adultos; ração premium; 100% completa e balanceada para gatos adultos;",
        foto: "racao-gato.webp",
        categorias_id: 1
      },
      {
        nome: "Arranhador para Gatos",
        preco: 250,
        descricao: "Indicado para gatos; Mantém seu pet entretido e livre de estresse; Feito com material atóxico;",
        foto: "arranhador.png",
        categorias_id: 3
      },
      {
        nome: "Ração Magnus Premium para Cães Filhotes Sabor Carne 10,1kg",
        preco: 149.99,
        descricao: "Feita com proteínas de alta qualidade;",
        foto: "racao-cachorro.png",
        categorias_id: 1
      },
      {
        nome: "Caixa de Transporte",
        preco: 99.99,
        descricao: "Caixa de transporte para cães e gatos;",
        foto: "caixaTransporte5.png",
        categorias_id: 6
      },
      {
        nome: "Maquina de Tosa",
        preco: 89.99,
        descricao: "aparelho de tosa;",
        foto: "maquinatosa5.jpg",
        categorias_id: 6
      },
      {
        nome: "Cama para cães e gatos",
        preco: 69.9,
        descricao: "Camas;",
        foto: "cama6.jpg",
        categorias_id: 5
      },
      {
        nome: "Ração Úmida Whiskas Sachê para Gatos",
        preco: 2.99,
        descricao: "Indicada para gatos; Refeição completa e balanceada;",
        foto: "whiskas-gato-lata.png",
        categorias_id: 2
      },
      {
        nome: "Areia Higiênica para Gatos Viva Verde",
        preco: 59.99,
        descricao: "Areia preferida do encantador de gatos, jackson galaxy; Melhor rendimento; Sem poeira; Eliminação imediata e duradoura do odor da urina;",
        foto: "viva-verde.PNG",
        categorias_id: 4
      },
      {
        nome: "Antipulgas e Carrapatos Frontline Topspot para Gatos",
        preco: 34.43,
        descricao: "Indicado para gatos; Ação rápida; Pode ser usado em gatas gestantes ou em lactação; No caso de DAPP, recomenda-se a aplicação mensal do produto; Proteção prolongada;",
        foto: "frontline.PNG",
        categorias_id: 4
      },
      {
        nome: "Petisco Dreamies",
        preco: 5.94,
        descricao: "Sabor Carne Para Gatos Adultos 40 g",
        foto: "petisco.PNG",
        categorias_id: 2
      },
      {
        nome: "Almofada Furacão Pet Paris para Cães e Gatos",
        preco: 39.99,
        descricao: "A linha de almofadas e caminhas da Furacão Pet tem todo o conforto que seu pet merece; Uma variedade de cores e estampas; Disponível em embalagem com uma unidade.",
        foto: "almofadas.PNG",
        categorias_id: 5
      },
      {
        nome: "Cama Chevron para Cães Rosa",
        preco: 184.99,
        descricao: "Indicada para cães; Super macia e confortável; Dupla face; Excelente isolante térmico, firme resistente e lavável; Fácil remoção do enchimento através de zíper, pode ser lavado em máquina, Disponível no tamanhos P, M e G.",
        foto: "camaRosa01.PNG",
        categorias_id: 5
      },
      {
        nome: "Brinquedo Interativo Petball Pet Games",
        preco: 29.99,
        descricao: "Indicado para cães; É uma forma divertida e saudável de estimular seu pet; A brincadeira é mais proveitosa quando seu cão estiver com fome; É atóxico, lavável e super resistente; Disponível em quatro tamanhos PP, P e M.",
        foto: "bolinha-interativa.PNG",
        categorias_id: 3
      },
      {
        nome: "Macaco Chalesco Brinquedo Para Cães Pelúcia Marrom",
        preco: 31.00,
        descricao: " Indicado para cães; Ideal para os pets de todos os portes e idades; Diversão garantida para seu cão; Pelúcia macia e atrativa; Formato que permite a brincadeira de cabo de guerra,  Mantém seu cão livre de estresses.",
        foto: "brinquedo-macaco-pelucia.PNG",
        categorias_id: 3
      },
      {
        nome: "Petisco Whiskas Temptations Anti Bola de Pelo",
        preco: 10.35,
        descricao: "Indicado para gatos; Saboroso e funcional; Casquinha crocante por fora e macio por dentro; Auxilia na eliminação de bolas de pelo; Melhora o transito intestinal;",
        foto: "petisco-anti-bola-de-pelos.PNG",
        categorias_id: 2
      },
      {
        nome: "Sabonete Matacura 80g",
        preco: 15.50,
        descricao: " Indicado para cães; mata piolhos, carrapatos, pulgas e outros parasitas da pele; Combate caspas, coceiras e sarnas psorótica, sarcópitica e notoédrica; Conservando o pêlo fino e sedoso;",
        foto: "sabonete-matacura.PNG",
        categorias_id: 4
      },
    ])
    
  },
  async down(queryInterface, Sequelize) {
     await queryInterface.bulkDelete('produtos', null, {});
  }
};



















