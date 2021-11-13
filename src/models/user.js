const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nombre: String,
    permiso: String
});

module.exports = mongoose.model('User', UserSchema);