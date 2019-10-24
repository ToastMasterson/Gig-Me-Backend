
exports.up = function(knex, Promise) {
  return knex.schema.createTable('bookers', t => {
      t.increments('id').primary()
      t.string('first_name')
      t.string('last_name')
      t.integer('age')
      t.string('phone')
      t.string('email')
      t.string('summary')
      t.string('avatar', 1000)
      t.integer('years')
      t.string('venues')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('bookers')
};
