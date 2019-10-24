const {Model} = require('objection')
const knex = require('../db/knex')

Model.knex(knex)

class Booker extends Model {
    static get tableName(){
        return 'bookers'
    }

    static get relationMappings() {
        const Event = require('./Event')
        const Artist = require('./Artist')
        const Request = require('./Request')
        return {
            events: {
                relation: Model.HasManyRelation,
                modelClass: Event,
                join: {
                    from: 'bookers.id',
                    to: 'events.booker_id'
                }
            },
            artists: {
                relation: Model.ManyToManyRelation,
                modelClass: Artist,
                join: {
                    from: 'bookers.id',
                    through: {
                        from: 'bookers_artists.booker_id',
                        to: 'bookers_artists.artist_id',
                        extra: 'quantity'
                    },
                    to: 'artists.id'
                }
            },
            requests: {
                relation: Model.HasManyRelation,
                modelClass: Request,
                join: {
                    from: 'bookers.id',
                    to: 'requests.id'
                }
            }
        }
    }
}

    module.exports = Booker