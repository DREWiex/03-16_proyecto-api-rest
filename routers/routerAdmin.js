const express = require('express');
const router = express.Router();

const {mostrarNuevoServicio, crearNuevoServicio} = require('../controllers/adminControllers');


//* CREAR NUEVO SERVICIO (DESDE ADMIN)
router.get('/servicios/nuevo', mostrarNuevoServicio);

//*
router.post('/servicios/crear-servicio', crearNuevoServicio);


module.exports = router;