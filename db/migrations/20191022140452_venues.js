
exports.up = function(knex, Promise) {
  return knex.schema.createTable('venues', t => {
      t.increments('id').primary()
      t.string('name')
      t.string('location')
      t.string('hours')
      t.string('image', 1000)
      t.string('stage', 1000)
      t.string('stage_plot')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('venues')
};
