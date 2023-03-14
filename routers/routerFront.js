//* importar express
const express = require('express'); //* otra opción destructurando la clase: const {Router()} = require('express');

//* llamar a la clase Router() de express
const router = express.Router();

const {getIndex, getServicios, getProductos, getLocations, getQuienesSomos, getContacto, getNav, getNavOtros} = require('../controllers/frontControllers'); //* destructuring de las funciones (solo el nombre –sin paréntesis–, no la invocación) que están en el archivo frontControllers.js en la ruta del controllers

const {searchGoogle} = require('../helpers/scrap')


//! crear las rutas:
//* INDEX
router.get('/', getIndex); //* paso la referencia de la función, no la invocación

//* SERVICIOS
router.get('/servicios', getServicios);

//* PRODUCTOS
router.get('/productos', searchGoogle, getProductos);

//* INSTALACIONES
router.get('/locations', getLocations);

//* QUIENESSOMOS
router.get('/quienessomos', getQuienesSomos);

//* CONTACTO
router.get('/contacto', getContacto);

//* NAV-INDEX
router.get('/templates/nav-index', getNav);

//* NAV-OTROS
router.get('/templates/nav-otros', getNavOtros);


module.exports = router; //* exportar el módulo router para llamarlo en app.js