const express = require('express');

const router = express.Router();

const {check, body} = require('express-validator'); //! body no lo estoy usando todavía

const {getUsuarios, getUsuario, crearUsuario, actualizarUsuario, eliminarUsuario} = require('../controllers/usuarioControllers');

const {validarInputs} = require('../middleware/validateInputs');

//const Usuario = require('../models/usuarioModel');


router.get('/usuarios', getUsuarios);

router.get('/usuarios/:id', getUsuario);

router.post('/usuarios',[
    check('usuario', 'El usuario es obligatorio').not().isEmpty().trim(),
    check('email')
        .trim()
        .not().isEmpty()
        .withMessage('El e-mail es obligatorio')
        .isEmail()
        .withMessage('Debe introducir un e-mail válido'),
    check('password')
        .trim()
        .not().isEmpty()
        .withMessage('La contraseña es obligatoria')
        .isLength({min:4, max:10})
        .withMessage('La contraseña debe tener entre 4 y 10 caracteres'),
    validarInputs
],
crearUsuario);

router.put('/usuarios/:id',[
    check('usuario', 'El usuario es obligatorio').not().isEmpty().trim(),
    check('email')
        .trim()
        .not().isEmpty()
        .withMessage('El e-mail es obligatorio')
        .isEmail()
        .withMessage('Debe introducir un e-mail válido'),
    check('password')
        .trim()
        .not().isEmpty()
        .withMessage('La contraseña es obligatoria')
        .isLength({min:4, max:10})
        .withMessage('La contraseña debe tener entre 4 y 10 caracteres'),
    validarInputs
],
actualizarUsuario);

router.delete('/usuarios/:id', eliminarUsuario);


module.exports = router;