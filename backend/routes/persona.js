//Rutas para persona
const express = require('express');
const router = express.Router();
const personaController = require('../controllers/personaController');

//api/personas
router.post('/', personaController.crearPersona);
router.get('/', personaController.obtenerPersonas);
router.put('/:id', personaController.actualizarPersonas);

module.exports = router;