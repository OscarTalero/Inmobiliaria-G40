const mongoose = require('mongoose');

const UbicacionSchema = mongoose.Schema({ 
    departamento: {
        type: String,
        required: true
    },
    ciudad: {
        type: String,
        required: true
    },
    zona: { 
        type: String,
        required: true
    },
    estrato: { 
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Ubicacion', UbicacionSchema);
