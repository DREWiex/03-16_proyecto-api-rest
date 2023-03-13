const {Schema, model} = require('mongoose');

const UsuarioSchema = new Schema({
    usuario: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        default: Date.now
    }
});


module.exports = model('Usuario', UsuarioSchema);