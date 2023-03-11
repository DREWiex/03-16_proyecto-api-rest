const Servicio = require('../models/servicioModel');

//* función que obtenga todos los servicios
const getServicios = async (req, res) => {

    try {

        const servicios = await Servicio.find();
        return res.status(200).json({
            ok: true,
            msg: 'Obteniendo todos los servicios',
            data: servicios
        });

    } catch (error) {
        
        return res.status(500).json({
            ok: false,
            msg: 'Error obteniendo todos los servicios'
        });

    }

}; //!FUNC-GETSERVICIOS


//* función que obtenga un servicio
const getServicio = (req, res) => {



}; //!FUNC-GETSERVICIO


//* función que cree un servicio
const crearServicio = (req, res) => {



}; //!FUNC-CREARSERVICIO


//* función que actualice un servicio
const actualizarServicio = (req, res) => {



}; //!FUNC-ACTUALIZARSERVICIO


//* función que elimine un servicio
const eliminarServicio = (req, res) => {



}; //!FUNC-ELIMINARSERVICIO


module.exports = {getServicio, getServicios, crearServicio, actualizarServicio, eliminarServicio};