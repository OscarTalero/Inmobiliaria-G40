const mongoose = require('mongoose');

const InmuebleSchema = new mongoose.Schema({
    tipo: String,
    precio: Number,
    ubicacion: String,
    descripcion: String,
});

module.exports = mongoose.model('Inmueble', InmuebleSchema);