
exports.up = function(knex, Promise) {
  return knex.schema.createTable('requests', t => {
      t.increments('id').primary()
      t.integer('artist_id')
        .references('artists.id')
      t.integer('booker_id')
        .references('bookers.id')
      t.integer('event_id')
        .references('events.id')
      t.string('message')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('requests')
};
