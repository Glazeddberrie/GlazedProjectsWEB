const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Bienvenido a la pagina de inicio!');
});

app.get('/about', (req, res) => {
    res.send('Esta es la página "Acerca de"');
});

const PORT = 2000;
app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en el puerto ${PORT}`)
});