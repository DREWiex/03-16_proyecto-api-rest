const express = require('express'); //* destructuring de la clase: const {Router()} = require('express');

const router = express.Router();

const {getIndex, getServicios, getProductos, getQuienesSomos, getContacto, getNav, getNavOtros} = require('../controllers/frontControllers'); //* destructuring de las funciones (solo el nombre –sin paréntesis–, no la invocación) que están en el archivo frontControllers.js en la ruta del controllers


//* INDEX
router.get('/', getIndex); //* paso la referencia de la función, no la invocación

//* SERVICIOS
router.get('/servicios', getServicios);

//* PRODUCTOS
router.get('/productos', getProductos);

//* QUIENESSOMOS
router.get('/quienessomos', getQuienesSomos);

//* CONTACTO
router.get('/contacto', getContacto);

//* NAV-INDEX
router.get('/templates/nav-index', getNav);

//* NAV-OTROS
router.get('/templates/nav-otros', getNavOtros);


module.exports = router; //* exporto el módulo para poder utilizarlo fuera de routerFront.js