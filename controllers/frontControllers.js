const Servicio = require('../models/servicioModel'); //* en mayúscula porque es una clase

const Instalacion = require('../models/instalacionModel');

const getIndex = (req, res) => { 

    res.render('index', {
        title: 'Este es el título del index',
        text: 'Este es el párrafo del index.'
    });

}; //!FUNC-GETINDEX

const getServicios = async (req, res) => {

    try {

        const servicios = await Servicio.find();

        res.render('servicios',{
            title: 'Este es el título de servicios',
            text: 'Este es el párrafo de servicios.',
            servicios
        });
        
    } catch (error) {

        console.log(error);
        
    };

}; //!FUNC-GETSERVICIOS

const getProductos = (req, res) => {

    res.render('productos', {
        title: 'Este es el título de productos',
        text: 'Este es el párrafo de productos.',
    });

}; //!FUNC-GETPRODUCTOS

const getInstalaciones = async (req, res) => {

    try {

        const instalaciones = await Instalacion.find();

        res.render('instalaciones',{
            title: 'Este es el título de instalaciones',
            text: 'Este es el párrafo de instalaciones',
            instalaciones
        })
                
    } catch (error) {

        console.log(error);
        
    }

}; //!FUNC-GETINSTALACIONES

const getQuienesSomos = (req, res) => {

    res.render('quienessomos', {
        title: 'Este es el título de quiénes somos',
        text: 'Este es el párrafo de quiénes somos.',
    });

}; //!FUNC-GETQUIENESSOMOS

const getContacto = (req, res) => {

    res.render('contacto', {
        title: 'Este es el título de quiénes somos',
        text: 'Este es el párrafo de quiénes somos.',
    });

}; //!FUNC-GETCONTACTO

const getNav = (req, res) => {

    res.render('nav-index');

}; //!FUNC-GETNAV

const getNavOtros = (req, res) => {

    res.render('nav-otros');

}; //!FUNC-GETNAVOTROS


module.exports = {getIndex, getServicios, getProductos, getInstalaciones, getQuienesSomos, getContacto, getNav, getNavOtros};