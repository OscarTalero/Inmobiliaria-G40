const express = require('express');
const router = express.Router();

const Persona = require('../models/persona')

router.get('/persona', (req, res) => {
    res.render('nueva-persona');
});

router.post('/newperson', async (req, res) => {
    const {nombre, correo, telefono} = req.body;
    const newPersona = new Persona({ nombre, correo, telefono});
    await newPersona.save();
    console.log(newPersona);
    res.send('Registro guardado exitosamente');
});

router.get('/personas', async (req, res) => {
    const personas = await Persona.find();
    console.log(personas);
    res.render('personas', { personas });
})

module.exports = router;