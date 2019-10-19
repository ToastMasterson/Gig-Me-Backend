const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const jwt = require('express-jwt')
const jwksRsa = require('jwks-rsa')
const cors = require('cors')
require('dotenv').config()

app.use(cors())

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/api', require('./api/artists').router)


const authConfig = {
    domain: process.env.DOMAIN,
    audience: process.env.AUDIENCE
}

const checkJwt = jwt({
    secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
    }),
  
    audience: authConfig.audience,
    issuer: `https://${authConfig.domain}/`,
    algorithm: ["RS256"]
  });
  
app.get('/api/external', checkJwt, (req, res) => {
    res.send({
        message: "Your Access Token was successfully validated!"
    })
}) 

module.exports = {
    checkJwt
}

const port = process.env.PORT || 3001
app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})