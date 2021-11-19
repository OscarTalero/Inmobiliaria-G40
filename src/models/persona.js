const mongoose = require('mongoose');

const PersonaSchema = new mongoose.Schema({
    nombre: {type: String, required: true},
//    usuario: String,
//    passwd: String,
    correo: String,
    telefono: String,
//    rol: String,
});

module.exports = mongoose.model('Persona', PersonaSchema);