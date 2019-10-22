const {Model} = require('objection')
const knex = require('../db/knex')

Model.knex(knex)

class Artist extends Model {
    static get tableName(){
        return 'artists'
    }

    static get relationMappings() {
        const ArtistProfile = require('./ArtistProfile')
        return {
            artist_profile: {
                relation: Model.HasOneRelation,
                modelClass: ArtistProfile,
                join: {
                    from: 'artists.id',
                    to: 'artist_profiles.artist_id'
                }
            }
        }
    }
    
}

module.exports = Artist