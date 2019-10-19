
exports.up = function(knex) {
  return knex.schema.createTable('artist_profiles', t => {
    t.string('location')
    t.string('summary')
    t.string('influences')
    t.string('banner')
    t.string('email')
    t.string('facebook')
    t.string('soundcloud')
    t.string('bandcamp')
    t.string('instagram')
    t.json('members')
    t.json('gear')
    t.json('genres')
    t.integer('artist_id')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('artist_profiles')
};
