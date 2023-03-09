const {Schema, model} = require('mongoose');

const ServicioSchema = new Schema({
    servicio: String,
    descripcion: {
        type: String,
        required: true,
        trim: true,
    }
});

module.exports = model('Servicio', ServicioSchema); //* parámetro uno: nombre / parámetro dos: el Schema

//* Primer parámetro/argumento: indicamos un nombre "x" para referenciar al modelo donde lo vayamos a utilizar. En este caso: "Servicio".
//* Segundo parámetro/argumento: exportamos la instancia del Schema (ServicioSchema) para poder trabajar con sus métodos y propiedades donde lo llamemos.
