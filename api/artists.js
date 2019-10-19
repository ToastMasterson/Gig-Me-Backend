const express = require('express')
const router = express.Router()
const {transaction} = require('objection')

const Artist = require('../models/Artist')
const ArtistProfile = require('../models/ArtistProfile')

router.get('/artists', (req, res) => {
    Artist.query().then(artists => {res.json(artists)})
})

router.get('/artists/:username', (req, res) => {
    let username = req.params.username
    console.log(username)
    Artist.query().where('username', username)
    .then(artist => { res.json(artist) })
})

router.post('/artists', (req, res) => {
    const newArtist = req.body
    Artist.query().insertAndFetch(newArtist)
    .then(artist => res.json(artist))
})

router.delete('/artists/:id', async (req, res) => {
    await Artist.query().deleteById(req.params.id)
    res.send({message: "Artist successfully deleted from records"})
})

module.exports = {
    router: router
}