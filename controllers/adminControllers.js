const {consulta} = require('../helpers/fetchServicios');


//* mostrar todos los servicios
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


//* mostrar el formulario de crear un nuevo servicio
const formCrearServicio = async (req, res) => {

    res.render('../views/admin/vista-nuevo-servicio.ejs');

}; //!FUNC-FORMCREARSERVICIO


//* crear un nuevo servicio
const crearServicio = async (req, res) => {

    const {servicio, descripcion} = req.body; //* a través del urlencoded (body-parser) capturo los valores de los atributos "name" del body (formulario)
    const body = {servicio, descripcion};

    const url = 'servicios'; //! para el put habría que añadir el id
    const method = 'post';

    await consulta(url, method, body);


    res.redirect('/admin/servicios');

}; //!FUNC-CREARSERVICIO


//* mostrar el formulario de editar un servicio
const formEditarServicio = async (req, res) => {
    
    const id = req.params.id;

    const url = `servicios/${id}`;
    const method = 'get';

    const respuesta = await consulta(url, method);

    const {data} = await respuesta.json()


    res.render('../views/admin/vista-actualizar-servicio',{
        servicios: data
    });

}; //!FUNC-FORMEDITARSERVICIO


const actualizarServicio = async (req, res) => {

    const id = req.params.id;

    const url = `servicios/${id}`;
    const method = 'put';

    const {servicio, descripcion} = req.body;
    const body = {servicio, descripcion};

    await consulta(url, method, body);


    res.redirect('/admin/servicios');

}; //!FUNC-ACTUALIZARSERVICIO


//* eliminar un servicio
const eliminarServicio = async (req, res) => {

    const id = req.params.id;

    const url = `servicios/${id}`;
    const method = 'delete';

    const {servicio, descripcion} = req.body;
    const body = {servicio, descripcion};

    await consulta(url, method, body);


    res.redirect('/admin/servicios');

}; //!FUNC-ELIMINARSERVICIO



module.exports = {
    mostrarServicios,
    formCrearServicio,
    crearServicio,
    formEditarServicio,
    actualizarServicio,
    eliminarServicio
};