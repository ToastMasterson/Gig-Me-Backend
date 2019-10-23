const express = require('express')
const router = express.Router()
const {transaction} = require('objection')

const Venue = require('../models/Venue')
const knex = Venue.knex()

router.get('/venues', (req, res) => {
    Venue.query().then(venues => res.json(venues))
})

module.exports = {
    router: router
}