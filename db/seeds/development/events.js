exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('events').del()
      .then(function () {
        // Inserts seed entries
        return knex('events').insert([
            {
                title: "Thursday Throw Down",
                description: "Bringing you the four best thrash bands from Denver's underground.",
                lineup: "Scorch the Earth, End of Us, Grungle, Cataclysm",
                spots: 0,
                price: 10.00,
                flyer: "https://nice-assets-3.s3-accelerate.amazonaws.com/smart_templates/6c93a5e89ed7eb87679aa4dbfa4b9ce1/assets/preview_94b939e969e18c19f56f1b9b0fbc089b.jpg",
                accommodations: "Two free drinks for each band member.  Bands get 10% cut of ticket sales",
                time: "7:30 PM",
                date: "Nov 22 2019",
                soundcheck: "Load in at 7, soundcheck fifteen minutes before each set.",
                all_ages: false,
                venue_id: 1,
                booker_id: 1
            },
            {
                title: "Groovy Tuesday",
                description: "Monday blues? We got Tuesday Grooves.",
                lineup: "Chicken Biscuit, Flapdoodle",
                spots: 2,
                price: 8.00,
                flyer: "https://images.template.net/3125/Free-Party-Concert-Flyer-Template-440x570-1.jpg",
                accommodations: "Each band gets a $40 tab.",
                time: "8:00 PM",
                date: "Nov 15 2019",
                soundcheck: "Load in at 7:00, soundcheck in line-up order before start.",
                all_ages: true,
                venue_id: 2,
                booker_id: 2
            }
            
        ]);
      });
  };