//Rutas para ubicacion
const express = require('express');
const router = express.Router();
const ubicacionController = require('../controllers/ubicacionController');

//api/inmuebles
router.post('/', ubicacionController.crearUbicacion);
router.get('/', ubicacionController.obtenerUbicaciones);
router.put('/:id', ubicacionController.actualizarUbicaciones);
router.get('/:id', ubicacionController.obtenerUbicacion);
router.delete('/:id', ubicacionController.eliminarUbicacion);

module.exports = router;
