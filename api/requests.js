const express = require('express')
const router = express.Router()
const {transaction} = require('objection')

const Request = require('../models/Request')

const knex = Request.knex()


router.get('/requests', (req, res) => {
    Request.query().eager('[artist, booker, event]').then(requests => res.json(requests))
})

router.delete('/requests/:id', async (req, res) => {
    console.log('here')
    await Request.query().deleteById(req.params.id)
})

module.exports = {
    router: router
}