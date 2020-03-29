const crypto = require('crypto'); // Utilizado para criar ID aleatório
const connection = require('../database/connection'); // Importa configurações do knexfile

module.exports = {

  // Listagem de todos os itens
  async index(request, response) {
    const ongs = await connection('ongs').select('*');

    return response.json(ongs);
  },

  // Cria ONG
  async create(request, response) {
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
  }
};