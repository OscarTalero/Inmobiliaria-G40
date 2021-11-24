const express = require('express');
const connectDb = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');

//Crear el servidor
const app = express();

//Conectar a la DB
connectDb();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
    extended: true
 }));
app.use('/persona', require('./routes/persona'));
app.use('/inmueble', require('./routes/inmueble'));
app.use('/ubicacion', require('./routes/ubicacion'));

app.listen(4000, () => {
    console.log('Servidor corriendo correctamente')
})