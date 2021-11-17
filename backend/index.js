const express = require('express');
const connectDb = require('./config/db');
const bodyParser = require('body-parser');

//Crear el servidor
const app = express();

//Conectar a la DB
connectDb();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
    extended: true 
 }));
app.use('/persona', require('./routes/persona'));


app.listen(4000, () => {
    console.log('Servidor corriendo correctamente')
})