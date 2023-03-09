const {Schema, model} = require('mongoose');

const InstalacionSchema = new Schema({ //? toma como referencia el nombre de la clase Schema (Instalacion) para asociarlo con el nombre de la colección en la db?
    instalacion: String,
    descripcion: String
});

module.exports = model('Instalacions', InstalacionSchema);