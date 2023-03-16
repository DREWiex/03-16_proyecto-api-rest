const {consulta} = require('../helpers/fetchServicios');


// //* mostrar todos los servicios
const mostrarServicios = async (req, res) => {

    const url = 'servicios';
    const method = 'get';

    const respuesta = await consulta(url, method);

    const {data} = await respuesta.json()

    res.render('../views/admin/vista-servicios',{
        title: 'Servicios',
        text: 'Toma un café o diferentes infusiones calientes mientras esperas la hora de tu cita. También tienes una máquina recreativa y una mesa de ping pong. ¡Pásalo en grande!',
        servicios: data
    });

}; //!FUNC-MOSTRARSERVICIOS


//* mostrar el formulario
const formCrearServicio = async (req, res) => {

    //* desde el formulario de esta página le pasaré los datos a la página de crear el servicio
    //* llamar a la función crearServicio() y pasarle los argumentos correspondientes (body, method, url) desde aquí

    res.render('../views/admin/vista-nuevo-servicio.ejs');

}; //!FUNC-FORMCREARSERVICIO


//* crear un nuevo servicio
const crearServicio = async (req, res) => {

    const {servicio, descripcion} = req.body; //* a través del urlencoded (body-parser) capturo los valores de los atributos "name" del body (formulario)
    const body = {servicio, descripcion};

    const url = 'servicios'; //! para el put habría que añadir el id
    const method = 'post';

    const respuesta = await consulta(url, method, body);

    const {ok, data} = respuesta;


    res.redirect('/admin/servicios/nuevo');

}; //!FUNC-CREARSERVICIO


//* actualizar un servicio
const formActualizarServicio = async (req, res) => {

//* desde la ruta donde están todos los servicios (/admin/servicios), con un botón (<a href="url/editar">) "editar" me manda a una nueva ruta (/admin/servicios/editar/:id) donde se cargan todos los datos del servicio
//* pasar a esa otra url con el id del servicio, los valores que ya tiene en la bbdd (servicio, descripcion)

    try {

        const id = req.params.id; //? capturo el id de la url?

        res.render('../views/admin/vista-actualizar-servicio', {});
        
    } catch (error) {
        
    }

}; //!FUNC-FORMACTUALIZARSERVICIO


//* eliminar un servicio
const eliminarServicio = async (req, res) => {



}; //!FUNC-ELIMINARSERVICIO



module.exports = {
    mostrarServicios,
    formCrearServicio,
    crearServicio,
    formActualizarServicio,
    eliminarServicio
};