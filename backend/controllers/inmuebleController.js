const inmueble = require('../models/inmueble');
const Inmueble = require('../models/inmueble')

exports.crearInmueble = async (req, res) => {
    try{
        let inmueble;

        //Creamos el inmueble
        inmueble = new Inmueble(req.body)

        await inmueble.save();
        res.send(inmueble);

    } catch(error){
        console.log(error);
        res.status(500).send('Error creando la inmueble');
    }
}

exports.obtenerInmuebles = async (req, res) => {
    try {

        const inmuebles = await Inmueble.find();
        res.json(inmuebles);

    } catch(error) {
        console.log(error);
        res.status(500).send('Error al obtener Personas');
    }
}

exports.actualizarInmuebles = async (req, res) => {

    try{
        const { tipo, precio, descripcion, ubicacion } = req.body;
        let inmueble = await Inmueble.findById(req.params.id);

        if(!inmueble) {
            res.status(404).json({msg: 'No existe la inmueble'})
        }

        inmueble.tipo = tipo;
        inmueble.precio = precio;
        inmueble.descripcion = descripcion;
        inmueble.ubicacion = ubicacion;

        inmueble = await Inmueble.findOneAndUpdate({ _id: req.params.id }, inmueble, { new: true})
        res.json();

    } catch(error){
        console.log(error);
        res.status(500).send('Error al actualizar Inmueble');
    }


}

exports.obtenerInmueble = async (req, res) => {
    try {
        let inmueble = await Inmueble.findById(req.params.id);

        if(!inmueble) {
            res.status(404).json({ msg: 'No existe el inmueble' })
        }

        res.json(inmueble);

    } catch(error){
        console.log(error);
        res.status(500).send('Error al obtener el Inmueble');
    }
}

exports.eliminarInmueble = async (req, res) => {
    try {
        let inmueble = await Inmueble.findById(req.params.id);

        if(!inmueble) {
            res.status(404).json({ msg: 'No existe la persona' })
        }

        await Inmueble.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Inmueble eliminado con exito'});

    } catch(error){
        console.log(error);
        res.status(500).send('Error al eliminar el Inmueble');
    }
}