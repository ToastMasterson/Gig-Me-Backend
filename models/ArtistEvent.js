const {Model} = require('objection')
const knex = require('../db/knex')

Model.knex(knex)

class ArtistEvent extends Model {
    static get tableName(){
        return 'artists_events'
    }

    static get relationMappings() {
        const Artist = require('./Artist')
        const Event = require('./Event')
        return {
            artists: {
                relation: Model.HasManyRelation,
                modelClass: Artist,
                join: {
                    from: 'artists_events.artist_id',
                    to: 'artists.id'
                }
            },
            events: {
                relation: Model.HasManyRelation,
                modelClass: Event,
                join: {
                    from: 'artists_events.event_id',
                    to: 'events.id'
                }
            }
        }
    }
    
}

module.exports = ArtistEvent