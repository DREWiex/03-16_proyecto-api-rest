const urlBase = 'http://localhost:3000/api/v1'; //* url base de la api que solo varía al final de la misma 'servicios' (get y post) o 'servicios/id' (get, put y delete)


const consulta = async (url, method, body={}) => { //* spread operator para el body (reutilizable)

    let options = {}; //* son las opciones que van después de la url en el fetch(): method, body, headers // si no es 'post', 'put' o 'delete' (es decir, 'get'), se pasa un object vacío, ya que no se necesitan esos datos

    try {

        if(method == 'post' || method == 'put'){
            const data = {...body};
            options = {
                method: method,
                body: JSON.stringify(data), //* no podemos enviar el body como un object, sino como un string
                headers:{
                    'Content-Type': 'application/json'    
                }
            };
        };

        if(method == 'delete'){
            options = {
                method
            //! pendiente
            }
        };

        // if(method == 'get'){
        //     options = {
        //         method,
        //     //? authenticaton para el headers?
        //     }
        // };

        return await fetch(`${urlBase}/${url}`, options);

        //return respuesta;

        // if(respuesta.ok){
        //     return {
        //         ok: true,
        //         respuesta
        //     };
        // };
        
    } catch (error) {

        console.log(error);

        // return {
        //     ok: false,
        //     msg: 'Error en la conexión',
        //     error
        // };
    };
}; //!FUNC-CONSULTA


module.exports = {consulta};