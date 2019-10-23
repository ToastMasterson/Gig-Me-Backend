const {Model} = require('objection')
const knex = require('../db/knex')

Model.knex(knex)

class Event extends Model {
    static get tableName(){
        return 'events'
    }

    static get relationMappings() {
        const Booker = require('./Booker')
        const Artist = require('./Artist')
        const Venue = require('./Venue')
        const Request = require('./Request')
        const ArtistEvent = require('./ArtistEvent')
        return {
            booker: {
                relation: Model.BelongsToOneRelation,
                modelClass: Booker,
                join: {
                    from: 'events.booker_id',
                    to: 'bookers.id'
                }
            },
            venue: {
                relation: Model.BelongsToOneRelation,
                modelClass: Venue,
                join: {
                    from: 'events.venue_id',
                    to: 'venues.id'
                }
            },
            artists: {
                relation: Model.ManyToManyRelation,
                modelClass: Artist,
                join: {
                    from: 'events.id',
                        through: {
                            from: 'artists_events.event_id',
                            to: 'artists_events.artist_id'
                        },
                    to: 'artists.id'
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
                    from: 'events.id',
                    to: 'artists_events.event_id'
                }
            }
        }
    }
}

    module.exports = Event