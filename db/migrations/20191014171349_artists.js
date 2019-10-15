
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', t => {
      t.increments('id')
      t.string('')
  })
};

exports.down = function(knex, Promise) {
  
};
