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
