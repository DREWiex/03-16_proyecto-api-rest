const Servicio = require('../models/servicioModel');

//* función que obtenga todos los servicios
const getServicios = async (req, res) => {

    try {

        const servicios = await Servicio.find();

        return res.status(200).json({
            ok: true,
            msg: 'Obteniendo todos los servicios.',
            data: servicios
        });

    } catch (error) {
        
        return res.status(500).json({
            ok: false,
            msg: 'ERROR: no se han podido obtener todos los servicios.'
        });

    }

}; //!FUNC-GETSERVICIOS


//* función que obtenga un servicio
const getServicio = async (req, res) => {

    try {

        const id = req.params.id; //* contiene los parámetros de la ruta, en este caso el ":id" del get (ver línea 11 de routerApi.js)
        
        const servicio = await Servicio.findById(id);

        return res.status(200).json({
            ok: true,
            msg: 'Obteniendo un servicio.',
            data: servicio
        });

    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'ERROR: el servicio no existe.'
        });
    };

}; //!FUNC-GETSERVICIO


//* función que cree un servicio
const crearServicio = async (req, res) => {

    try {

        const NewServicio = new Servicio(req.body);

        const newData = await NewServicio.save();
        
        return res.status(201).json({
                ok: true,
                msg: 'Servicio creado correctamente.',
                data: newData
            });

    } catch (error) {
        
        return res.status(500).json({
            ok: false,
            msg: 'ERROR: no se ha podido crear el servicio.'
        });

    }

}; //!FUNC-CREARSERVICIO


//* función que actualice un servicio
const actualizarServicio = async (req, res) => {

    try {

        const id = req.params.id;
        const servicio = req.body.servicio;
        const descripcion = req.body.descripcion;

        const servicioAct = await Servicio.findOneAndUpdate({_id:id},{$set:{servicio,descripcion}},{new:true}); //* {new:true} muestra la última act. en Postman (false mostraría el body con los keys/values originales, es decir, antes de act.)
        
        return res.status(200).json({
                ok: true,
                msg: 'Servicio actualizado correctamente.',
                data: servicioAct
            });        
        
    } catch (error) {
        
        return res.status(500).json({
            ok: false,
            msg: 'ERROR: no se ha encontrado el servicio que quiere actualizar.'
        });

    };

}; //!FUNC-ACTUALIZARSERVICIO


//* función que elimine un servicio
const eliminarServicio = async (req, res) => {

    try {

        const id = req.params.id;

        await Servicio.findOneAndDelete({_id:id});

        return res.status(200).json({
            ok: true,
            msg: 'Servicio eliminado correctamente.'
        });
        
    } catch (error) {
        
        return res.status(500).json({
            ok: false,
            msg: 'ERROR: el servicio que quiere eliminar no existe.'
        });

    }

}; //!FUNC-ELIMINARSERVICIO


module.exports = {getServicio, getServicios, crearServicio, actualizarServicio, eliminarServicio};