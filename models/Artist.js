const {Model} = require('objection')
const knex = require('../db/knex')

Model.knex(knex)

class Artist extends Model {
    static get tableName(){
        return 'artists'
    }

    static get relationMappings() {
        const ArtistProfile = require('./ArtistProfile')
        const Event = require('./Event')
        const Request = require('./Request')
        const ArtistEvent = require('./ArtistEvent')
        return {
            artist_profile: {
                relation: Model.HasOneRelation,
                modelClass: ArtistProfile,
                join: {
                    from: 'artists.id',
                    to: 'artist_profiles.artist_id'
                }
            },
            events: {
                relation: Model.ManyToManyRelation,
                modelClass: Event,
                join: {
                    from: 'artists.id',
                        through: {
                            from: 'artists_events.artist_id',
                            to: 'artists_events.event_id'
                        },
                    to: 'events.id'
                }
            },
            requests: {
                relation: Model.HasManyRelation,
                modelClass: Request,
                join: {
                    from: 'artists.id',
                    to: 'requests.id'
                }
            },
            artists_events: {
                relation: Model.HasManyRelation,
                modelClass: ArtistEvent,
                join: {
                    from: 'artists.id',
                    to: 'artists_events.artist_id'
                }
            }
        }
    }
    
}

module.exports = Artist