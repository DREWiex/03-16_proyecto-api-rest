const express = require('express');
const router = express.Router();

const {mostrarServicios, formCrearServicio, crearServicio, formEditarServicio, actualizarServicio, eliminarServicio} = require('../controllers/adminControllers');



//* MOSTRAR TODOS LOS SERVICIOS
router.get('/servicios', mostrarServicios);


//* MOSTRAR EL FORMULARIO DE CREAR SERVICIO
router.get('/servicios/nuevo', formCrearServicio);


//* CREAR NUEVO SERVICIO
router.post('/servicios/crear-servicio', crearServicio);


//* MOSTRAR EL FORMULARIO DE EDITAR SERVICIO
router.get('/servicios/editar/:id', formEditarServicio);


//* EDITAR UN SERVICIO
router.post('/servicios/actualizar/:id', actualizarServicio);


// //* ELIMINAR SERVICIO
router.get('/servicios/eliminar/:id', eliminarServicio);



module.exports = router;