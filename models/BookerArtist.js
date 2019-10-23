const {Model} = require('objection')
const knex = require('../db/knex')

Model.knex(knex)

class BookerArtist extends Model {
    static get tableName(){
        return 'bookers_artists'
    }

    static get relationMappings() {
        const Artist = require('./Artist')
        const Booker = require('./Booker')
        return {
            artists: {
                relation: Model.HasManyRelation,
                modelClass: Artist,
                join: {
                    from: 'bookers_artists_.artist_id',
                    to: 'artists.id'
                }
            },
            bookers: {
                relation: Model.HasManyRelation,
                modelClass: Booker,
                join: {
                    from: 'bookers_artists_.booker_id',
                    to: 'bookers.id'
                }
            }
        }
    }
    
}

module.exports = BookerArtist