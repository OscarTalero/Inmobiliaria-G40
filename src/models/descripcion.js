const mongoose = require('mongoose');

const DescripcionSchema = new mongoose.Schema({
    area: Number,
    habitaciones: Number,
    plantas: Number,
});

module.exports = mongoose.model('Descripcion', DescripcionSchema);