const { Router } = require('express');
const persons = require('../../routes/merch.routes.js');

const rutas = Router();

rutas.use(merch);

module.exports = rutas;