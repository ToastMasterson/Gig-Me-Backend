const {Model} = require('objection')
const knex = require('../db/knex')

Model.knex(knex)

class Request extends Model {
    static get tableName(){
        return 'requests'
    }

    static get relationMappings() {
        const Artist = require('./Artist')
        const Event = require('./Event')
        const Booker = require('./Booker')
        return {
            artist: {
                relation: Model.HasOneRelation,
                modelClass: Artist,
                join: {
                    from: 'requests.id',
                    to: 'artists.id'
                }
            },
            event: {
                relation: Model.HasOneRelation,
                modelClass: Event,
                join: {
                    from: 'requests.id',
                    to: 'events.id'
                }
            },
            booker: {
                relation: Model.HasOneRelation,
                modelClass: Booker,
                join: {
                    from: 'requests.id',
                    to: 'bookers.id'
                }
            }
        }
    }
    
}

module.exports = Request