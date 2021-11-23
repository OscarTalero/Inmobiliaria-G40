const mongoose = require('mongoose');

const PersonaSchema = mongoose.Schema({ 
    nombre: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    telefono: { 
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Persona', PersonaSchema);