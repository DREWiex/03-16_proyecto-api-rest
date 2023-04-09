const Usuario = require('../models/usuarioModel');

const bcrypt = require('bcryptjs');

const { generarJWT } = require('../helpers/jwt');



const crearUsuario = async (req, res) => {

    const nuevoUsuario = new User(req.body);

    try {

        // encriptar password
        let salt = bcrypt.genSaltSync(10);
        nuevoUsuario.password = bcrypt.hashSync(req.body.password, salt);

        const user = await nuevoUsuario.save();

        // generar token
        const token = generarJWT(user._id, user.name);

        return res.status(201).json({
            ok: true,
            uid: user._id,
            name: user.name,
            email: user.email,
            password: user.password,
            token
        });

    } catch (error) {
        
        console.log(`createUser controller error: ${error}`);
        
        return res.status(500).json({
            ok: false,
            msg: 'ERROR: contacte con el administrador.',
            error
        });

    };

}; //!FUNC-CREARUSUARIO


const loginUsuario = async (req, res) => {

    const { email, password } = req.body;

    try {

        const user = await Usuario.findOne( { email } );
        
        const pass = bcrypt.compareSync(password, user.password);

        if(user == null || !pass){

            return res.status(401).json({
                ok: false,
                msg: 'ERROR: e-maill o password incorrecto.'
            });

        } else {

            const token = generarJWT(user._id, user.name);

            return res.status(200).json({
                ok: true,
                msg: 'Credenciales correctas.',
                token
            });

        };

    } catch (error) {
        
        console.log(`createUser controller error: ${error}`);
        
        return res.status(500).json({
            ok: false,
            msg: 'ERROR: contacte con el administrador.',
            error
        });

    };

}; //!FUNC-LOGINUSUARIO


const renew = async (req, res) => {

    const {uid, usuario} = req;

    const token = await generarJWT(uid, usuario);

    return res.status(200).json({
        ok: true,
        msg: 'Renew JWT',
        user:{
            uid,
            usuario
        },
        token
    });

}; //!FUNC-RENEW



module.exports = {
    loginUsuario,
    crearUsuario,
    renew
};