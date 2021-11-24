const ubicacion = require('../models/ubicacion');

exports.crearUbicacion = async (req, res) => {
    try{
        let ubicacion;

        //Creamos la ubicacion
        ubicacion = new Ubicacion(req.body)

        await ubicacion.save();
        res.send(ubicacion);

    } catch(error){
        console.log(error);
        res.status(500).send('Error creando la ubicacion');
    }
}

exports.obtenerUbicaciones = async (req, res) => {
    try {

        const ubicaciones = await Ubicacion.find();
        res.json(ubicaciones);

    } catch(error) {
        console.log(error);
        res.status(500).send('Error al obtener Ubicaciones');
    }
}

exports.actualizarUbicaciones = async (req, res) => {

    try{
        const { departamento, ciudad, zona, estrato } = req.body;
        let ubicacion = await Ubicacion.findById(req.params.id);

        if(!ubicacion) {
            res.status(404).json({msg: 'No existe la ubicacion'})
        }

        ubicacion.departamento = departamento;
        ubicacion.ciudad = ciudad;
        ubicacion.zona = zona;
        ubicacion.estrato = estrato;

        ubicacion = await Ubicacion.findOneAndUpdate({ _id: req.params.id }, ubicacion, { new: true})
        res.json();

    } catch(error){
        console.log(error);
        res.status(500).send('Error al actualizar Ubicacion');
    }


}

exports.obtenerUbicacion = async (req, res) => {
    try {
        let ubicacion = await Ubicacion.findById(req.params.id);

        if(!ubicacion) {
            res.status(404).json({ msg: 'No existe la ubicacion' })
        }

        res.json(ubicacion);

    } catch(error){
        console.log(error);
        res.status(500).send('Error al obtener la Ubicacion');
    }
}

exports.eliminarUbicacion = async (req, res) => {
    try {
        let ubicacion = await Ubicacion.findById(req.params.id);

        if(!ubicacion) {
            res.status(404).json({ msg: 'No existe la ubicacion' })
        }

        await Ubicacion.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Ubicacion eliminada con exito'});

    } catch(error){
        console.log(error);
        res.status(500).send('Error al eliminar la Ubicacion');
    }
}

