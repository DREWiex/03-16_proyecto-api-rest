const Usuario = require('../models/usuarioModel');

const bcrypt = require('bcryptjs');

const {generarJWT} = require('../helpers/jwt');



const getUsuarios = async (req, res) => {

    try {

        const usuarios = await Usuario.find();

        return res.status(200).json({
            ok: true,
            msg: 'Obtengo todos los usuarios.',
            data: usuarios
        });
        
    } catch (error) {

        return res.status(500).json({
            ok: false,
            msg: 'ERROR: no se están obteniendo todos los usuarios.'
        });
        
    };

}; //!FUNC-GETUSUARIOS


const getUsuario = async (req, res) => {

    // try {

    //     const id = req.params.id;
        
    //     const usuario = await Usuario.findById(id);

    //     return res.status(200).json({
    //         ok: true,
    //         msg: 'Obteniendo un usuario.',
    //         data: usuario
    //     });

    // } catch (error) {

    //     return res.status(500).json({
    //         ok: false,
    //         msg: 'ERROR: no existe ningún usuario con el id indicado.'
    //     });
        
    // };

};  //!FUNC-GETUSUARIO


const loginUsuario = async (req, res) => {

    const {email, password} = req.body;

    try {

        const user = await Usuario.findOne({email});

        const passwordOK = bcrypt.compare(password, user.password); //* compare es para async

        console.log(passwordOK);

        if(!user || passwordOK == false){
            return res.status(400).json({
                ok: false,
                msg: 'ERROR: contraseña o e-mail incorrecto.'
            });
        } else {

            const token = await generarJWT(user._id, user.usuario);

            return res.status(200).json({
                ok: true,
                msg: `E-mail y contraseña correctos. ¡Bienvenido!`,
                data:{
                    name: user.usuario,
                    email: email,
                    uid: user._id
                },
                token
            });
        };
        
    } catch (error) {
        
        return res.status(500).json({
            ok: false,
            msg: 'ERROR: contactar con el administrador.'
        });

    }

}; //!FUNC-LOGINUSUARIO


const crearUsuario = async (req, res) => {

    const {usuario, email, password} = req.body;

    const newUsuario = new Usuario(req.body);

    try {

        const user = await Usuario.findOne({email});

        if(user){

            return res.status(400).json({
                ok: false,
                msg: 'ERROR: el e-mail ya existe.'
            });

        }else{

            //* encriptar password
            let salt = bcrypt.genSaltSync(10);
            newUsuario.password = bcrypt.hashSync(password, salt);

            const newData = await newUsuario.save();

            //* generar token
            const token = await generarJWT(newData.id, usuario);

            return res.status(201).json({
                ok: true,
                msg: 'El usuario se ha creado correctamente.',
                data: newData,
                token
            });

        };

    } catch (error) {

        return res.status(500).json({
            ok: false,
            msg: 'ERROR: contacta con el administrador.'
        });
        
    };

}; //!FUNC-CREARUSUARIO


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


const actualizarUsuario = async (req, res) => {

    // try {
        
    //     const id = req.params.id;
    //     const body = req.body;

    //     const actUsuario = await Usuario.findByIdAndUpdate(id,{$set:body},{new:true});

    //     return res.status(200).json({
    //         ok: true,
    //         msg: 'El usuario se ha actualizado correctamente.',
    //         data: actUsuario
    //     });

    // } catch (error) {

    //     return res.status(500).json({
    //         ok: false,
    //         msg: 'ERROR: el usuario que intenta actualizar no existe.'
    //     });
        
    // };

}; //!FUNC-ACTUALIZARUSUARIO


const eliminarUsuario = async (req, res) => {

    try {

        const id = req.params.id;

        await Usuario.findByIdAndDelete(id);

        return res.status(200).json({
            ok: true,
            msg: 'Se ha eliminado el usuario correctamente.',
        });
        
    } catch (error) {
        
        return res.status(500).json({
            ok: false,
            msg: 'ERROR: el usuario que intenta eliminar no existe en la base de datos.'
        });

    };

}; //!FUNC-ELIMINARUSUARIO


module.exports = {getUsuarios, getUsuario, loginUsuario, crearUsuario, renew, actualizarUsuario, eliminarUsuario};