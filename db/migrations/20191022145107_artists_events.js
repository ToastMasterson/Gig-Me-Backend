
exports.up = function(knex, Promise) {
    return knex.schema.createTable('artists_events', t => {
        t.increments('id').primary()
        t.integer('artist_id')
          .unsigned()
          .references('id')
          .inTable('artists')
          .onDelete('CASCADE')
          .index();
        t.integer('event_id')
          .unsigned()
          .references('id')
          .inTable('events')
          .onDelete('CASCADE')
          .index();
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('artists_events')
  };