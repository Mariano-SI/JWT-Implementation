# Microserviço de Autenticação com JWT em Node.js e MongoDB

Este repositório foi criado como parte de um estudo pessoal sobre autenticação de microserviços utilizando JSON Web Tokens (JWT). Optei por implementar essa solução usando o framework Node.js e o banco de dados NoSQL MongoDB, considerando essa uma stack simples de se implementar e entender.

## Bibliotecas Utilizadas

### 1. Express

O [Express](https://expressjs.com/) é um framework Node.js amplamente utilizado para criar aplicativos da web e APIs RESTful. Ele simplifica a criação de rotas, o tratamento de solicitações e respostas, bem como a configuração do servidor. O Express é uma escolha sólida para criar aplicativos Node.js.

### 2. Mongoose

[Mongoose](https://mongoosejs.com/) é uma biblioteca de modelagem de objetos MongoDB para Node.js. Ela facilita a definição de modelos de dados e a interação com o banco de dados MongoDB. Mongoose fornece uma camada de abstração para simplificar a comunicação com o MongoDB, permitindo que você defina esquemas de dados, execute consultas e execute operações de CRUD de forma mais eficiente.

### 3. Bcrypt

[Bcrypt](https://www.npmjs.com/package/bcrypt) é uma biblioteca de criptografia utilizada para proteger senhas. Ela é especialmente adequada para armazenar senhas de forma segura em bancos de dados, pois gera hashes seguros e resistentes a ataques de força bruta. O Bcrypt é uma escolha sólida para armazenar senhas de forma segura.

### 4. Jsonwebtoken (JWT)

[Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) é uma biblioteca para criação e verificação de JSON Web Tokens (JWT). JWT é uma maneira segura de transmitir informações entre partes em formato JSON. Neste projeto, o JWT é utilizado para gerar tokens de autenticação após o login do usuário e para verificar a autenticidade do token nas rotas protegidas.

### 5. Body-Parser

[Body-Parser](https://www.npmjs.com/package/body-parser) é uma biblioteca que ajuda a analisar os corpos das solicitações HTTP em aplicativos Node.js. Ele é usado para analisar os dados enviados pelo cliente no formato JSON e torná-los acessíveis no objeto de solicitação (req.body). Essa funcionalidade é necessária para processar dados de login e registro enviados pelo usuário.

## Observações finais
Este projeto serve como um guia básico para a implementação de autenticação com JWT em Node.js e MongoDB. Lembre-se de que, em ambientes de produção, você deve adotar medidas adicionais de segurança, como gerenciamento adequado de chaves secretas e proteção contra ataques comuns, como injeção de SQL e ataques de força bruta.

Sinta-se à vontade para explorar o código-fonte e adaptá-lo às necessidades do seu projeto. Se você desejar expandir este projeto, considere a implementação de recursos adicionais, como a renovação de tokens, controle de acesso com base em funções e a integração com sistemas de terceiros.
