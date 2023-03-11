const express = require('express');

const router = express.Router();

const {getServicio, getServicios, crearServicio, actualizarServicio, eliminarServicio} = require('../controllers/api.Controllers');

//* obtener todos los productos
router.get('/servicios', getServicios);

//* obtener un producto
router.get('/servicios/:id', getServicio);

//* crear un producto
router.post('/servicios', crearServicio);

//* actualizar un producto
router.put('/servicios/:id', actualizarServicio);

//* eliminar un producto
router.delete('/servicios/:id', eliminarServicio);


module.exports = router;