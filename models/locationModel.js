const {Schema, model} = require('mongoose');

const LocationSchema = new Schema({ //? toma como referencia el nombre de la clase Schema (Instalacion) para asociarlo con el nombre de la colección en la db?
    pais: {
        type: String,
        required: true
    },
    ciudad: {
        type: String,
        required: true
    }
});

module.exports = model('Location', LocationSchema);