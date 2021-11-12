const mongoose = require('mongoose');

//Conexion DB
mongoose.connect("mongodb+srv://oscar:427568@cluster0.jyurt.mongodb.net/Inmobiliaria?retryWrites=true&w=majority")
.then(db => console.log('DB is connect'))
.catch(err => console.error(err));