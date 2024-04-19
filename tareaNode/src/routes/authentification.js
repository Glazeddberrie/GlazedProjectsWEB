const { Router } = require ('express')
const route = Router()

route.get('/auth', (req, res) => {
    res.send("<h1> El Pepe auth </h1>")
})

route.get('/profile', (req, res) => {
    res.send("<h1> El Pepe profile </h1>")
})

route.get('/dashboard', (req, res) => {
    res.send("<h1> El Pepe dash </h1>")
})
module.exports = route
