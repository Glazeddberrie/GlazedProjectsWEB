const express = require('express');
const app = express();
const routesPublic = require('./routes/public.js')
const routesAuth = require('./routes/authentification.js')

app.use(routesAuth)
app.use(routesPublic)
const PORT = 2000;
app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en el puerto ${PORT}`)
});