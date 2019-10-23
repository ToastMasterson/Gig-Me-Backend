exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('bookers').del()
      .then(function () {
        // Inserts seed entries
        return knex('bookers').insert([
            {
                first_name: "Tyler",
                last_name: "Masterson",
                age: 28,
                phone: "732-887-7012",
                email: "tylermastersonfilm@gmail.com",
                summary: "Working hard to organize the DIY scene",
                avatar: "https://media.licdn.com/dms/image/C4D03AQEgnquHFQLQsg/profile-displayphoto-shrink_200_200/0?e=1577318400&v=beta&t=eh2FeP7Fa5pj6kwdWhDgpBp_aPSJjzGxdvvGU9rIKc0",
                years: 5,
                venues: "Hi-Dive, Seventh Circle"
            },
            {
                first_name: "Katie",
                last_name: "Miller",
                age: 30,
                phone: "732-XXX-XXXX",
                email: "katedressedup@gmail.com",
                summary: "Booking only the best for the best.",
                avatar: "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-1/p160x160/75105716_10157659211631796_8915378677928165376_n.jpg?_nc_cat=104&_nc_oc=AQmoUqhaV9-IWLpI5A3TRSUX4-b49rz_udRyL7aQMxxPbTovGKfcuSdLHEJRAQhcjtc&_nc_ht=scontent-dfw5-2.xx&oh=319a052d6f13f17dc0787a731dc59bd1&oe=5E2DF2F6",
                years: 7,
                venues: "Your Mom's House, Rinoceropolis"
            },
            {
                first_name: "Sawyer",
                last_name: "Bernath",
                age: 30,
                phone: "XXX-XXX-XXXX",
                email: "copperleaf@gmail.com",
                summary: "I'm just happy to be here.",
                avatar: "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-1/p160x160/50560836_10219212688287248_2865221353730998272_n.jpg?_nc_cat=101&_nc_oc=AQlLatzYfq9L1Ijbtvpr_p30j69nB8lhedSO4ENEH-Yy178xiIqi1oRGE9v_MiDJbZs&_nc_ht=scontent-dfw5-2.xx&oh=c2e6c215aa962dc9461390676df74784&oe=5E20BCD8",
                years: 2,
                venues: "Lost Lake, The Laughing Goat"
            }
        ]);
      });
  };