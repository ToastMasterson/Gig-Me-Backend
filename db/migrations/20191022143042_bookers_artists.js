
exports.up = function(knex, Promise) {
  return knex.schema.createTable('bookers_artists', t => {
      t.increments('id').primary()
      t.integer('artist_id')
      t.integer('booker_id')
      t.integer('quantity')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('bookers_artists')
};
