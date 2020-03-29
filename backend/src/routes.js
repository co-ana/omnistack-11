const express = require('express'); // Pacote utilziado para criar as rotas
const crypto = require('crypto'); // Utilizado para criar ID aleatório

const connection = require('./database/connection'); // Importa configurações do knexfile

const routes = express.Router(); // instancia o pacote

routes.get('/ongs', async (request, response) => {
  const ongs = await connection('ongs').select('*');

  return response.json(ongs);
});

routes.post('/ongs', async (request, response) => {
  const { name, email, whatsapp, city, uf } = request.body; // Garante que não receba qualquer dado inserido pelo user
  const id = crypto.randomBytes(4).toString('HEX'); // Cria id aleatório, com 4 números e converte para

  // Vai aguardar a execução dessa função
  await connection('ongs').insert({
    id,
    name,
    email,
    whatsapp,
    city,
    uf
  })

  return response.json({ id });
});

module.exports = routes; // Disponibiliza as rotas para importarmos no file ./index.js