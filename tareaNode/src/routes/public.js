const { Router } = require ('express')
const route = Router()

route.get('/', (req, res) => {
    res.send("<h1> El Pepe </h1>")
})

route.get('/about', (req, res) => {
    res.send("<h1> El Pepe about </h1>")
})

route.get('/downloads', (req, res) => {
    res.send("<h1> El Pepe downloads </h1>")
})


module.exports = route
