const {Model} = require('objection')
const knex = require('../db/knex')

Model.knex(knex)

class Venue extends Model {
    static get tableName(){
        return 'venues'
    }

    static get relationMappings() {
        const Event = require('./Event')
        return {
            events: {
                relation: Model.HasManyRelation,
                modelClass: Event,
                join: {
                    from: 'venues.id',
                    to: 'events.venue_id'
                }
            }
        }
    }
    
}

module.exports = Venue