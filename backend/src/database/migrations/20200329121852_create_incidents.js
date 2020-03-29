exports.up = function(knex) {
  return knex.schema.createTable('incidents', function(table) {
    table.increments(); // Gera o ID de forma automática
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();


    // Relacionamento (PrimaryKey)
    table.string('ong_id').notNullable();

    // Relacionamento (ForignKey)
    table.foreign('ong_id').references('id').inTable('ongs');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};