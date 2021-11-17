const persona = require('../models/persona');
const Persona = require('../models/persona')

exports.crearPersona = async (req, res) => {
    try{
        let persona;

        //Creamos la persona
        persona = new Persona(req.body)

        await persona.save();
        res.send(persona);

    } catch(error){
        console.log(error);
        res.status(500).send('Error creando la persona');
    }
}

exports.obtenerPersonas = async (req, res) => {
    try {

        const personas = await Persona.find();
        res.json(personas);

    } catch(error) {
        console.log(error);
        res.status(500).send('Error al obtener Personas');
    }
}

exports.actualizarPersonas = async (req, res) => {

    try{
        const { nombre, correo, telefono } = req.body;
        let persona = await Persona.findById(req.params.id);

        if(!persona) {
            res.status(404).json({msg: 'No existe la persona'})
        }

        persona.nombre = nombre;
        persona.correo = correo;
        persona.telefono = telefono;

        persona = await Persona.findOneAndUpdate({ _id: req.params.id }, persona, { new: true})
        res.json();

    } catch(error){
        console.log(error);
        res.status(500).send('Error al actualizar Personas');
    }


}