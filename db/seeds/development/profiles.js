exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('artist_profiles').del()
      .then(function () {
        // Inserts seed entries
        return knex('artist_profiles').insert([
            {
                "avatar": "https://res.cloudinary.com/gigme/image/upload/v1571696872/fssfkwea9s5if0gcm7dh.jpg",
                "location": "Enter Location",
                "summary": "Stuff about the Fall",
                "influences": "Add some influences",
                "banner": "https://res.cloudinary.com/gigme/image/upload/v1571696910/alktwnhr4rvrkib7opfh.jpg",
                "email": "Add your most reliable email",
                "facebook": "",
                "soundcloud": "https://soundcloud.com/tylertheperson",
                "bandcamp": "https://tylertheband.bandcamp.com/releases",
                "instagram": "https://codeburst.io/4-four-ways-to-style-react-components-ac6f323da822",
                "members": "Tyler - Guitar and Vox, Dan - Bass, Tom - Drums",
                "gear": "2x12 Amp, 4x10 Amp, 6pc Drums",
                "genres": "Folk Rock, Indie",
                "artist_id": 1
            },
            {
                "avatar": "https://res.cloudinary.com/gigme/image/upload/v1571696872/fssfkwea9s5if0gcm7dh.jpg",
                "location": "Enter Location",
                "summary": "Stuff about the Fall",
                "influences": "Add some influences",
                "banner": "https://res.cloudinary.com/gigme/image/upload/v1571696910/alktwnhr4rvrkib7opfh.jpg",
                "email": "Add your most reliable email",
                "facebook": "",
                "soundcloud": "https://soundcloud.com/tylertheperson",
                "bandcamp": "https://tylertheband.bandcamp.com/releases",
                "instagram": "https://codeburst.io/4-four-ways-to-style-react-components-ac6f323da822",
                "members": "Rebecca - Vocals, Tyler - Guitar and Vocals, Tom - Drums, Taylor - Bass",
                "gear": "6pc Drumkit, 2x12 Amp, 1x10 Amp",
                "genres": "Hard Rock, Post-Rock",
                "artist_id": 2
            }
        ]);
      });
  };