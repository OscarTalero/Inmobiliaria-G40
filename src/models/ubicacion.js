const mongoose = require('mongoose');

const UbicacionSchema = new mongoose.Schema({
    departamento: String,
    ciudad: String,
    zona: String,
    barrio: String,
    estrato: Number
});

module.exports = mongoose.model('Ubicacion', UbicacionSchema);