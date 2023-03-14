const {Schema, model} = require('mongoose');

const UsuarioSchema = new Schema({
    usuario: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    fecha: {
        type: Date,
        default: Date.now
    }
});


module.exports = model('Usuario', UsuarioSchema);