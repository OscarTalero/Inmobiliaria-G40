//Rutas para inmueble
const express = require('express');
const router = express.Router();
const inmuebleController = require('../controllers/inmuebleController');

//api/inmuebles
router.post('/', inmuebleController.crearInmueble);
router.get('/', inmuebleController.obtenerInmuebles);
router.put('/:id', inmuebleController.actualizarInmuebles);
router.get('/:id', inmuebleController.obtenerInmueble);
router.delete('/:id', inmuebleController.eliminarInmueble);

module.exports = router;

