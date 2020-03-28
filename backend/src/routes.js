const express = require('express'); // importa o pacote
const routes = express.Router(); // instancia o pacote

routes.post('/users', (request, response) => {

  const body = request.body;
  console.log(body)

  return response.json({
    evento: 'Semana OmniStack 11.0',
    aluno: 'Ana C.'
  })
});

module.exports = routes; // Disponibiliza as rotas para importarmos no file ./index.js