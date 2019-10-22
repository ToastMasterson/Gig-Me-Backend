const {Model} = require('objection')
const knex = require('../db/knex')

Model.knex(knex)

class ArtistProfile extends Model {
    static get tableName(){
        return 'artist_profiles'
    }

    static get relationMappings() {
        const Artist = require('./Artist')

        return {
            owner: {
                relation: Model.BelongsToOneRelation,
                modelClass: Artist,
                join: {
                    from: 'artist_profiles.artist_id',
                    to: 'artists.id'
                }
            }
        }
    }
}

module.exports = ArtistProfile