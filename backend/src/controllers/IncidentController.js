const connection = require('../database/connection'); // Importa configurações do knexfile

module.exports = {
  async index(request, response){
    const incidents = await connection('incidents').select('*');

    return response.json(incidents);
  },

  async create(request, response){
    const { title, description, value } = request.body;
    const ong_id = request.headers.authorization // "Haders" -> Guarda infos do contexto dessa requisição -> dados de autenticacao, localizacao, etc.

    const [id] = await connection('incidents').insert({
      title,
      description,
      value,
      ong_id
    });

    return response.json({ id });
  },

  async delete(request, response){
    const { id } = request.params;
    const ong_id = request.headers.authorization;

    const incident = await connection('incidents')
      .where('id', id)
      .select('ong_id')
      .first();

    if(incident.ong_id != ong_id) { // Não permite que uma ong exclua o caso de outra ong!
      return response.status(401).json({ error: 'Operation not permitted.' });
    }

    // Status -> See https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status

    await connection('incidents').where('id', id).delete();
    return response.status(204).send();
  }
};