const mongoose = require('mongoose');

const PersonaSchema = new mongoose.Schema({
    nombre: String,
    usuario: String,
    passwd: String,
    correo: String,
    telefono: String,
    rol: String,
});

module.exports = mongoose.model('Persona', PersonaSchema);