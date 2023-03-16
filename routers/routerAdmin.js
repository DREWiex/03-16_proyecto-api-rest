const express = require('express');
const router = express.Router();

const {mostrarServicios, formCrearServicio, crearServicio, formActualizarServicio, eliminarServicio} = require('../controllers/adminControllers');



//* MOSTRAR TODOS LOS SERVICIOS (INDEX DEL ADMIN)
router.get('/servicios', mostrarServicios);


//* MOSTRAR EL FORMULARIO (DESDE ADMIN)
router.get('/servicios/nuevo', formCrearServicio);


//* CREAR NUEVO SERVICIO (DESDE ADMIN)
router.post('/servicios/crear-servicio', crearServicio);


//* ACTUALIZAR SERVICIO
router.put('/servicios/editar/:id', formActualizarServicio); //! pendiente ruta


//* ELIMINAR SERVICIO
router.delete('/', eliminarServicio); //! pendiente ruta



module.exports = router;