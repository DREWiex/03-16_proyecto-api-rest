const express = require('express');
const router = express.Router();

const { check } = require('express-validator');

const {
    crearUsuario,
    loginUsuario,
    renew
} = require('../controllers/usuarioControllers');

const { validarInputs } = require('../middleware/validateInputs');

const { validarJWT } = require('../middleware/validateJwt');



//* REGISTER
router.post('/registro',[
    check('usuario', 'El usuario es obligatorio').not().isEmpty().trim(),
    check('email')
        .isEmail()
        .withMessage('Debe introducir un e-mail válido'),
    check('password')
        .isLength({min:4, max:10})
        .withMessage('La contraseña debe tener entre 4 y 10 caracteres'),
    validarInputs
],
crearUsuario);

//* LOGIN
router.post('/',[
    check('email')
        .isEmail()
        .withMessage('Debe introducir un e-mail válido'),
    check('password')
        .isLength({min:4, max:10})
        .withMessage('La contraseña debe tener entre 4 y 10 caracteres'),
    validarInputs
],
loginUsuario);

//* RENEW
router.get('/renew', [
    validarJWT
], renew);



module.exports = router;