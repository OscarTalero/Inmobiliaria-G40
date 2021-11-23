const mongoose = require('mongoose');

const InmuebleSchema = mongoose.Schema({ 
    tipo: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    descripcion: { 
        type: String,
        required: true
    },
    ubicacion: { 
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Inmueble', InmuebleSchema);