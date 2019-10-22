const express = require('express')
const router = express.Router()
const {transaction} = require('objection')

const Artist = require('../models/Artist')
const ArtistProfile = require('../models/ArtistProfile')

const knex = Artist.knex()

router.get('/artists', (req, res) => {
    Artist.query().eager('artist_profile').then(artists => {res.json(artists)})
})

router.get('/artists/:username', (req, res) => {
    let username = req.params.username
    Artist.query().where('username', username)
    .eager('artist_profile')
    .then(artist => { res.json(artist) })
})

router.post('/artists', async (req, res) => {
    const newProfile = await transaction(knex, async (trx) => {
        const body = req.body
        const newArtist = await Artist
            .query(trx)
            .insertAndFetch(body)
        console.log(newArtist)
        const newProfile = await newArtist
            .$relatedQuery('artist_profile', trx)
            .insert({
                avatar: "https://uploads.scratch.mit.edu/users/avatars/41074063.png",
                location: "Enter Location",
                summary: "Add a Summary",
                influences: "Add some influences",
                banner: "https://wallpaperplay.com/walls/full/1/a/b/37693.jpg",
                email: "Add your most reliable email",
            })
        return newArtist
    })
    res.send(newProfile)
    
})

router.delete('/artists/:id', async (req, res) => {
    await Artist.query().deleteById(req.params.id)
    res.send({message: "Artist successfully deleted from records"})
})

router.get('/profiles/:id', (req, res) => {
    ArtistProfile.query().where('id', req.params.id)
    .then(profile => res.json(profile))
})

router.patch('/profiles/:id', (req, res) => {
    console.log('patching...')
    console.log(req.body)
    ArtistProfile.query().where('id', req.params.id)
    .patchAndFetchById(req.params.id, req.body)
    .then(profile => res.json(profile))
})

router.delete('/profiles/:id', async (req, res) => {
    await ArtistProfile.query().deleteById(req.params.id)
    res.send({message: "Profile successfully deleted from records"})
})

module.exports = {
    router: router
}