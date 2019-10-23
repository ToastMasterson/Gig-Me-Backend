
exports.up = function(knex, Promise) {
  return knex.schema.createTable('events', t => {
    t.increments('id').primary()
    t.string('title')
    t.string('description')
    t.string('lineup')
    t.integer('spots')
    t.float('price')
    t.string('flyer', 1000)
    t.string('accommodations')
    t.string('time')
    t.string('date')
    t.string('soundcheck')
    t.boolean('all_ages')
    t.integer('venue_id')
    t.integer('booker_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('events')
};
