# grupo06-pi
Projeto Integrador realizado em equipe pelo Grupo 06 - turma0122 - Digital House

Projeto realizado no decorrer do aprendizado das aulas de programaçõ fullstack. Foi desenvolvido um e-commerce de um Petshop.
Tecnologias utilizadas: Express.JS, Node.JS, CSS, JS, Sequelize, EJS, SQL.
Descrição do projeto: 
-> O mesmo apresenta área de administração do e-commerce, contendo cadastro de usuários e de produtos (adicionar, editar e deletar); 
-> Área do usuário, contendo login, criação de cadastro e login, localização automática de endereço com base no CEP e página do perfil do usuários, onde o mesmo pode editar seus dados ou deletar sua conta; 
-> Área de vendas, com menus por tipo de produto, barra de pesquisa e carrinho de compras que calcula o total do pedido, permite alterar a quantidade de itens ou excluí-lo.
Outras especificações: o projeto conta com criptografia de senha e validação da mesma ao fazer login; com o middleware Multer, para upload de imagens de produtos; Uso das dependênciad Migration e Seeder; Aproveitamento de código via Partials; Criação de rotas, models e controllers; Além de validações de segurança.

- npm install
- npm install multer
- npm install cookie-parser
- npm install express-session-sequelize
- sequelize db:migrate
- sequelize db:seed:all

