exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('venues').del()
      .then(function () {
        // Inserts seed entries
        return knex('venues').insert([
            {
                name: "Seventh Circle Music Collective",
                hours: "12:00PM - 2:00AM",
                image: "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/10501974_697547100327694_3248178952989729202_n.jpg?_nc_cat=100&_nc_oc=AQn6aEeft_z5RzL4FBz6q6d3KfTg899aSox0XpO6hThzYT_BLZz91Moo3WPadYVaDsk&_nc_ht=scontent-dfw5-2.xx&oh=30efb61c5c49976454bf1b1045c115bb&oe=5E173E2A",
                stage: "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/57160039_2248662528549469_8692520856527568896_o.jpg?_nc_cat=106&_nc_oc=AQmbRK040BsWQwmbfzfHgxXryIu_OwCcMTEe3_Nvt8hYQeT2MBTJ4WL__eiF0M_QjPE&_nc_ht=scontent-dfw5-2.xx&oh=8cc0fc8402ecc0209f3ad87825b3c6b0&oe=5E19F784",
                stage_plot: null
            },
            {
                name: "Your Mom's House",
                hours: "4:00PM - 2:00AM",
                image: "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/17424914_1677351845902689_6819943246201236381_n.jpg?_nc_cat=110&_nc_oc=AQlTe4GoBOIMcQxJ-PLDcmVzzr3NJtz7z-cygHhQVPn9c6h8y0KoxwYESKlV2ZlKHVo&_nc_ht=scontent-dfw5-2.xx&oh=1956edc3156cee151ec5c0771491a3f3&oe=5E5730BA",
                stage: "https://scontent-dfw5-2.xx.fbcdn.net/v/t31.0-8/16463060_1653640791607128_4043556197988923023_o.jpg?_nc_cat=102&_nc_oc=AQnbi8OlxSrGDXrsmY44Eq38nc2zxo3SW7NCzbuTTFA4VXoKNiYmwq6zELZqbO3tmFg&_nc_ht=scontent-dfw5-2.xx&oh=93e59e52dff47851224ce176c6f1890e&oe=5E169FBA",
                stage_plot: null
            },
            {
                name: "Hi-Dive",
                hours: "12:00PM - 2:00AM",
                image: "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/399154_391608044205566_1924220991_n.jpg?_nc_cat=101&_nc_oc=AQl7_xt6azW6XmLuNA_aziM24B5qJrxUn9Qh8jcAowGf_Rrv-I8tKZvsRyiJFkHm7cI&_nc_ht=scontent-dfw5-2.xx&oh=dcf8964d5da6ed5ae81fcc3bfe05786f&oe=5E1F0202",
                stage: "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/11885266_1020533774646320_2975668915059097063_n.jpg?_nc_cat=110&_nc_oc=AQmluX7kS_EtF4pVH_ADoImUbOaZKIZyCQoAHARpwArd8hoNCpNWlcgzRHfIFF5bf44&_nc_ht=scontent-dfw5-2.xx&oh=eced0435b438008f51797db3ff1ff24a&oe=5E22F314",
                stage_plot: null
            },
        ]);
      });
  };