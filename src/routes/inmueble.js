const express = require('express');
const router = express.Router();

const Inmueble = require('../models/inmueble')

router.get('/inmueble', (req, res) => {
    res.render('nuevo-inmueble');
});

router.post('/newinmueble', async (req, res) => {
    const {tipo, precio, ubicacion, descripcion} = req.body;
    const newInmueble = new Inmueble({ tipo, precio, ubicacion, descripcion });
    await newInmueble.save();
    console.log(newInmueble);
    res.send('Registro guardado exitosamente');
});

module.exports = router;