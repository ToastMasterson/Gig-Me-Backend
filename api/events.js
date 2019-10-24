const express = require('express')
const router = express.Router()
const {transaction} = require('objection')

const Artist = require('../models/Artist')
const Event = require('../models/Event')
const Venue = require('../models/Venue')
const Booker = require('../models/Booker')
const Request = require('../models/Request')
const ArtistEvent = require('../models/ArtistEvent')

const knex = Event.knex()

router.get('/events', (req, res) => {
    Event.query().eager('[artists, booker, venue]').then(events => {res.json(events)})
})
router.get('/events/:id', (req, res) => {
    Event.query().where('id', req.params.id)
    .eager('[artists, booker, venue]')
    .then(events => {res.json(events)})
})

router.post('/events', (req, res) => {
    Event.query().insertAndFetch(req.body)
    .then(event => res.json(event))
})

router.patch('/events/:id', (req, res) => {
    console.log('patching...')
    console.log(req.body)
    Event.query().where('id', req.params.id)
    .patchAndFetchById(req.params.id, req.body)
    .then(event => res.json(event))
})

router.delete('/events/:id', async (req, res) => {
    await Event.query().deleteById(req.params.id)
    res.send({message: "Event successfully deleted from records"})
})

router.post('/events/:id/request', async (req, res) => {
    console.log(req.body)
    Request.query().insert({
        artist_id: req.body.artist_id,
        booker_id: req.body.booker_id,
        event_id: req.body.event_id,
        message: req.body.message
    }).then(request => res.json(request))
})

router.post('/events/:id/addArtist', async (req, res) => {
    console.log(req.body.artist_id, req.params.id)
    const addedArtist = await transaction(knex, async (trx) => {
        const event = await Event.query(trx).findById(req.params.id)
            // .eager('artists')
        const addedArtist = await event
        .$relatedQuery('artists_events', trx)
        .insert({artist_id: req.body.artist_id, event_id: req.params.id})
        return addedArtist
    })
    await Request.query().delete().where('event_id', req.params.id)
    res.send(addedArtist)
})

router.post('/deny/:id', async (req, res) => {
    await Request.query().delete().where('id', req.params.id)
    res.send({message: "Request Deleted"})
})

module.exports = {
    router: router
}