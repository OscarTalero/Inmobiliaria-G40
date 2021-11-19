const mongoose = require('mongoose');
require('dotenv').config({path: 'variables.env'});

const modeloPersona = require('../models/persona')
const modeloUser = require('../models/user')
const modeloDescripcion = require('../models/descripcion')
const modeloInmueble = require('../models/inmueble')
const modeloUbicacion = require('../models/ubicacion')

const connectDb = async () => { 

  try{
      await mongoose.connect(process.env.DB_MONGO, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
      })
      console.log('Conectado a MongoDB');
  } catch (error) {
      console.log(error);
      process.exit(1);
  }
}

module.exports = connectDb






//Conexion DB
mongoose.connect("mongodb+srv://oscar:427568@cluster0.jyurt.mongodb.net/Inmobiliaria?retryWrites=true&w=majority", {
  //useCreateIndex: true,
  useNewUrlParser: true,
  // useUnifiedTopology,
  // useFindAndModify: false
})
.then(db => console.log('DB is connect'))
.catch(err => console.error(err));