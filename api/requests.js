const express = require('express')
const router = express.Router()
const {transaction} = require('objection')

const Request = require('../models/Request')

const knex = Request.knex()


router.delete('/requests/:id', async (req, res) => {
    console.log('here')
    await Request.query().deleteById(req.params.id)
})

module.exports = {
    router: router
}