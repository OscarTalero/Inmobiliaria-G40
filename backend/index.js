const express = require('express');
const connectDb = require('./config/db');

//Crear el servidor
const app = express();

//Conectar a la DB
connectDb();


app.use('/persona', require('./routes/persona'));


app.listen(4000, () => {
    console.log('Servidor corriendo correctamente')
})