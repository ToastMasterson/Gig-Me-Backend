// const express = require('express')
// const jwt = require('express-jwt')
// const jwksRsa = require('jwks-rsa')

// const app = express()

// const authConfig = {
//     domain: "gig-me.auth0.com",
//     audience: "http://localhost:3000/"
// }

// const checkJwt = jwt({
//     secret: jwksRsa.expressJwtSecret({
//       cache: true,
//       rateLimit: true,
//       jwksRequestsPerMinute: 5,
//       jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
//     }),
  
//     audience: authConfig.audience,
//     issuer: `https://${authConfig.domain}/`,
//     algorithm: ["RS256"]
//   });
  
// app.get('/api/external', checkJwt, (req, res) => {
//     res.send({
//         message: "Your Access Token was successfully validated!"
//     })
// })  

// app.listen(3001, () => console.log('API listening on 3001'))