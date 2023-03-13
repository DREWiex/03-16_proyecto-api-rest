const Usuario = require('../models/usuarioModel');


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

    try {

        const id = req.params.id;
        
        const usuario = await Usuario.findById(id);

        return res.status(200).json({
            ok: true,
            msg: 'Obteniendo un usuario.',
            data: usuario
        });

    } catch (error) {

        return res.status(500).json({
            ok: false,
            msg: 'ERROR: no existe ningún usuario con el id indicado.'
        });
        
    };

};  //!FUNC-GETUSUARIO


const crearUsuario = async (req, res) => {

    const newUsuario = new Usuario(req.body);

    try {

        const newData = await newUsuario.save();

        return res.status(201).json({
            ok: true,
            msg: 'El usuario se ha creado correctamente.',
            data: newData
        });

    } catch (error) {

        return res.status(500).json({
            ok: false,
            msg: 'ERROR: no se ha podido crear el usuario.'
        });
        
    };

}; //!FUNC-CREARUSUARIO


const actualizarUsuario = async (req, res) => {

    try {
        
        const id = req.params.id;
        const body = req.body;

        const actUsuario = await Usuario.findByIdAndUpdate(id,{$set:body},{new:true});

        return res.status(200).json({
            ok: true,
            msg: 'El usuario se ha actualizado correctamente.',
            data: actUsuario
        });

    } catch (error) {

        return res.status(500).json({
            ok: false,
            msg: 'ERROR: el usuario que intenta actualizar no existe.'
        });
        
    };

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


module.exports = {getUsuarios, getUsuario, crearUsuario, actualizarUsuario, eliminarUsuario};