Desafio backend Kafka

Descrição:

O projeto consiste em cadastrar um carrinho abandonado do ecommerce no CRM de um cliente. Uma mensagem é produzida pelo Ecommerce no tópico do Kafka “cart-abandoned”, conforme objeto abaixo:
{
  "id": 53,
  "items": [
    {
      "id": 152,
      "name": "Produto 1",
      "quantity": 1
    }
  ],
  "customer": {
    "id": 19,
    "email": "fulano@email.com",
    "firstName": "Fulano",
    "lastName": "Da Silva",
    "phone": "5527999643944"
  }
}

O sistema deve consumir esse tópico e salvar no CRM uma Oportunidade. A Oportunidade deve conter o cliente e um campo de observação com o produto e quantidade que o usuário deixou de comprar.

O ponto mais importante é que o ecommerce e o CRM são multitenant e esse único projeto irá atender todos os clientes. Ou seja eu preciso identificar de onde veio a mensagem e direcionar para o CRM do projeto específico.

Tecnologias Utilizadas
- Framework: Nestjs.js
- Swagger
- Docker
- Kakfajs
- Microserviços do Nestjs com Kafka

Rodando o Projeto Localmente

1 -Clonnar o repositório do projeto:
- git clone https://github.com/Leonardorossato/desafio-backend-kafka

2- instalar as dependências:
- npm install ou yarn

3 - Copiar o .env.example para .env e atualizar as variáveis.

4 - Rodar o projeto :
- docker coompose up -d --build;
- npm run:start ou yarn start:dev.
