const Servicio = require('../models/servicioModel'); //* en mayúscula porque es una clase

const Location = require('../models/locationModel');

const getIndex = (req, res) => { 

    res.render('index', {
        title: 'Bienvenido a Nuestro Club de Caballeros',
        text: 'Transfórmate en lo que quieres ser. Con un corte de cabello, un peinado moderno o un arreglo de barba te verás como siempre has querido. Luce impecable, con estilo masculino. Siéntete tan hombre como nunca antes. Ahora, y para siempre.'
    });

}; //!FUNC-GETINDEX

const getServicios = async (req, res) => {

    try {

        const servicios = await Servicio.find();

        res.render('servicios',{
            title: 'Servicios',
            text: 'Toma un café o diferentes infusiones calientes mientras esperas la hora de tu cita. También tienes una máquina recreativa y una mesa de ping pong. ¡Pásalo en grande!',
            servicios
        });
        
    } catch (error) {

        console.log(error);
        
    };

}; //!FUNC-GETSERVICIOS

const getProductos = (req, res) => {

    res.render('productos', {
        title: 'Productos',
        text: 'Este es el párrafo de productos.',
    });

}; //!FUNC-GETPRODUCTOS

const getLocations = async (req, res) => {

    try {

        const locations = await Location.find();

        res.render('locations',{
            title: 'Sucursales',
            text: 'Puedes reservar cita con nosotros en cualquiera de las siguientes ciudades:',
            locations
        })
                
    } catch (error) {

        console.log(error);
        
    }

}; //!FUNC-GETINSTALACIONES

const getQuienesSomos = (req, res) => {

    res.render('quienessomos', {
        title: 'Quiénes Somos',
        text: 'Este es el párrafo de quiénes somos.',
    });

}; //!FUNC-GETQUIENESSOMOS

const getContacto = (req, res) => {

    res.render('contacto', {
        title: 'Contacto',
        text: 'Este es el párrafo de contacto.',
    });

}; //!FUNC-GETCONTACTO

const getNav = (req, res) => {

    res.render('nav-index');

}; //!FUNC-GETNAV

const getNavOtros = (req, res) => {

    res.render('nav-otros');

}; //!FUNC-GETNAVOTROS


module.exports = {getIndex, getServicios, getProductos, getLocations, getQuienesSomos, getContacto, getNav, getNavOtros};