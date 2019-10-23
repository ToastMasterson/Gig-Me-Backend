const express = require('express')
const router = express.Router()
const {transaction} = require('objection')

const Booker = require('../models/Booker')
const Request = require('../models/Request')
const knex = Booker.knex()

router.get('/bookers', (req, res) => {
    Booker.query().eager('[events, requests]').then(bookers => res.json(bookers))
})

router.get('/bookers/:email', (req, res) => {
    Booker.query().where('email', req.params.email).eager('[events, requests]').then(booker => res.json(booker))
})

router.get('/bookers/:id/requests', (req, res) => {
    Request.query().where('booker_id', req.params.id)
    .eager('[artist, event]').then(requests => res.json(requests))
})

module.exports = {
    router: router
}