const express = require('express');

const router = express.Router();

const {getUsuarios, getUsuario, crearUsuario, actualizarUsuario, eliminarUsuario} = require('../controllers/usuarioControllers')


router.get('/usuarios', getUsuarios);

router.get('/usuarios/:id', getUsuario);

router.post('/usuarios', crearUsuario);

router.put('/usuarios/:id', actualizarUsuario);

router.delete('/usuarios/:id', eliminarUsuario);


module.exports = router;