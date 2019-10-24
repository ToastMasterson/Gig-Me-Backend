exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('artists').del()
      .then(function () {
        // Inserts seed entries
        return knex('artists').insert([
            {
                username: "branchtoroot",
                email: "tylercmasterson@gmail.com",
                artist_name: "Branch to Root",
            },
            {
                username: "poormartha",
                email: "thetrainspotter1@gmail.com",
                artist_name: "Poor Martha",
            },
            
        ]);
      });
  };