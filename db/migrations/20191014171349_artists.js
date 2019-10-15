
exports.up = function(knex, Promise) {
  return knex.schema.createTable('artists', t => {
      t.increments('id').primary()
      t.string('name')
      t.string('location')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable()
};
