const express = require('express');

const {check} = require('express-validator');

const {getUsuarios, getUsuario, loginUsuario, crearUsuario, renew, actualizarUsuario, eliminarUsuario} = require('../controllers/usuarioControllers');

const {validarInputs} = require('../middleware/validateInputs');

const {validarJWT} = require('../middleware/validateJwt');

const router = express.Router();



//* obtener todos los usuarios de la bbdd
router.get('/', getUsuarios);

// router.get('/:id', getUsuario);

//* LOGIN
router.post('/',[ //? debería incluir la func middleware validarJWT?
    check('email')
        .isEmail()
        .withMessage('Debe introducir un e-mail válido'),
    check('password')
        .isLength({min:4, max:10})
        .withMessage('La contraseña debe tener entre 4 y 10 caracteres'),
    validarInputs
],
loginUsuario);

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


//* RENEW
router.get('/renew', validarJWT, renew);

// router.put('/:id',[
//     check('usuario', 'El usuario es obligatorio').not().isEmpty().trim(),
//     check('email')
//         .trim()
//         .not().isEmpty()
//         .withMessage('El e-mail es obligatorio')
//         .isEmail()
//         .withMessage('Debe introducir un e-mail válido'),
//     check('password')
//         .trim()
//         .not().isEmpty()
//         .withMessage('La contraseña es obligatoria')
//         .isLength({min:4, max:10})
//         .withMessage('La contraseña debe tener entre 4 y 10 caracteres'),
//     validarInputs
// ],
// actualizarUsuario);

router.delete('/:id', eliminarUsuario);


module.exports = router;