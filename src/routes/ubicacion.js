const express = require('express');
const router = express.Router();

const Ubicacion = require('../models/ubicacion')

router.get('/ubicacion', (req, res) => {
    res.render('nueva-ubicacion');
});

router.post('/newubicacion', async (req, res) => {
    const {departamento, ciudad, zona, barrio, estrato} = req.body;
    const newubicacion = new newubicacion({ departamento, ciudad, zona, barrio, estrato });
    await newubicacion.save();
    console.log(newubicacion);
    res.send('Registro guardado exitosamente');
});

module.exports = router;