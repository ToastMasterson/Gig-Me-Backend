
exports.up = function(knex, Promise) {
  return knex.schema.createTable('artists', t => {
      t.increments('id').primary()
      t.string('username')
      t.string('email')
      t.string('artist_name')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('artists')
};
