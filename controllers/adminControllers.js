
//* mostrar el formulario
const mostrarNuevoServicio = (req, res) => {

    res.render('admin/vista-nuevo-servicio', {
        titulo: 'Título Admin Nuevo Servicio'
    })

}; //!FUNC-MOSTRARNUEVOSERVICIO

//* crear el servicio
const crearNuevoServicio = async (req, res) => {

    try {

        const {servicio, descripcion} = req.body;

        const body = {
            servicio,
            descripcion
        }

        const respuesta = await fetch('url', {
            method: 'post',
            body: JSON.stringify(body),
            headers:{
                'Content-Type': 'application/json'
            }
        })

        res.redirect('/admin/servicios/nuevo')
        
    } catch (error) {
        
    };

}; //!FUNC-CREARNUEVOSERVICIO


module.exports = {mostrarNuevoServicio, crearNuevoServicio};