const getIndex = (req, res) => { 

    res.render('index', {
        title: 'Este es el título del index',
        text: 'Este es el párrafo del index.'
    });

}; //!FUNC-GETINDEX

const getServicios = (req, res) => {

    res.render('servicios', {
        title: 'Este es el título de servicios',
        text: 'Este es el párrafo de servicios.',
    });

}; //!FUNC-GETSERVICIOS

const getProductos = (req, res) => {

    res.render('productos', {
        title: 'Este es el título de productos',
        text: 'Este es el párrafo de productos.',
    });

}; //!FUNC-GETPRODUCTOS

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

};


module.exports = {getIndex, getServicios, getProductos, getQuienesSomos, getContacto, getNav, getNavOtros};