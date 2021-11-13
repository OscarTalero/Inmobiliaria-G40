const mongoose = require('mongoose');

const modeloPersona = require('./models/persona')
const modeloUser = require('./models/user')
const modeloDescripcion = require('./models/descripcion')
const modeloInmueble = require('./models/inmueble')
const modeloUbicacion = require('./models/ubicacion')

//Conexion DB
mongoose.connect("mongodb+srv://oscar:427568@cluster0.jyurt.mongodb.net/Inmobiliaria?retryWrites=true&w=majority", {
  //  useCreateIndex: true,
    useNewUrlParser: true,
   // useUnifiedTopology,
   // useFindAndModify: false
})
.then(db => console.log('DB is connect'))
.catch(err => console.error(err));