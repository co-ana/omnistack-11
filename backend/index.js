const express = require('express'); // importa o pacote
const app = express(); // instancia o pacote

app.use(express.json());

/**
  * Rota / Recurso
  * */

/** MÉTODOS HTTP:
  *
  * Métodos são funções que executam uma ação em alguma informação no backend, e são elas:
  *
  * - GET: Buscar / Listar info
  * - POST: Criar info
  * - PUT: Alterar info
  * - DELETE: Deletar info
  * */


/** Tipos de Parâmetros
  *
  * QUERY: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação) => http://localhost/users?name=Ana&idade=24
  * ROUTE: Parâmetros utilizados para identificar recursos (um único rcurso!! ->  usa ID) => http://localhost/users/1
  * REQUEST BODY: Corpo da requisição, utilizado para criar ou alterar os recursos
  * */

  /** UTILIZANDO ROUTE
    * Utilizar método get -> http://localhost/users/1
    *
    * Para testar, descomentar linhas com "### =>" na frente
    *
    * */

   // ### => app.get('/users/:id', (request, response) => {

app.post('/users', (request, response) => {

  /** UTILIZANDO QUERY
    * Utilizar método GET -> http://localhost:3333/users?name=Ana&idade=24
    *
    * */
    // ### => const params = request.query;
    // ### => console.log(params);


  /** UTILIZANDO ROUTE
    * Utilizar método GET -> http://localhost/users/1
    *
    * */

    // const params = request.query;
    // console.log(params);


  /** UTILIZANDO REQUEST BODY
   *
   * Lembrar de:
   *  -> indicar que precisa acrescentar ao começo deste arquivo a funcao: app.use(express.json());
   *  -> Aqui no VSCode: Mudar o método de app!!!
   *  -> No insomnia: Utilizar método POST, com tipo TEXT = JSON
   * 
   * */
  const body = request.body;
  console.log(body)

  return response.json({
    evento: 'Semana OmniStack 11.0',
    aluno: 'Ana C.'
  })
});

app.listen(3333);