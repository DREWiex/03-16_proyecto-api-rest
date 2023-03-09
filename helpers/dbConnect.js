//* manejar las bases de datos de mongo en node
//todo: importar el módulo mongoose
const mongoose = require('mongoose');

//* 
const connection = async () => {

    try {
        //* el método connect() retorna una promesa, por eso la función async/await
        const respuesta = await mongoose.connect(process.env.URI_CONNECT); //* URI_CONNECT (.env): variable de entorno donde especificamos la URI con el usuario, contraseña y nombre de la base de datos

        console.log('Conectado a la base de datos')
        return respuesta;
        
    } catch (error) {
        return {
            ok: false,
            msg: 'Error con la conexión',
            error
        }
    };
    
};

module.exports = {connection}; //* exportar la función para llamarla en app.js