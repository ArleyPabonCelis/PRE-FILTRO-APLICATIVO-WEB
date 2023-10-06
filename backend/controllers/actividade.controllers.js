const Actividad = require('../models/Actividades.js');

const getActividades = async (req, res) => {
    try {
        const actividades = await Actividad.find({})
            .populate('usuario', 'nombreUsuario -_id')
            .populate('tipo', 'tipo -_id')
            .populate('equipo', 'nombre -_id');

        const resultado = actividades.map(item => ({
            _id: item._id,
            usuario: item.usuario.nombreUsuario,
            tipo: item.tipo.tipo,
            equipo: item.equipo.nombre
        }));
        
        res.json(resultado);
        
    } catch (e) {
        res.status(500).json({ error: 'Not Found :C'});
        console.log(e);
    };
}

const addActividad = async (req, res) => {
    const actividad = new Actividad(req.body);

    try {
        const newActividad = await actividad.save();
        res.json(newActividad)
    } catch (error) {
        res.status(500).json({ error: 'Not Agregate :C'});
    }
}

const deleteActividad = async (req, res) => {
    try {
        await Actividad.deleteOne({_id:req.params.id});
        res.status(204).send();
        console.log('Actividad Eliminada');
    } catch (error) {
        res.status(404)
        res.send({error:"Actividad no existe"})
    }
}
  
const updateActividad = async (req, res) => {
    try {
        const actividad = await Actividad.findOne({_id:req.params.id})

        if(req.body.usuario){
            actividad.usuario = req.body.usuario              
        }

        if(req.body.tipo){
            actividad.tipo = req.body.tipo              
        }

        if(req.body.equipo){
            actividad.equipo = req.body.equipo              
        }

        await actividad.save();
        res.send(actividad);

    } catch (error) {
        res.status(404);
        res.send({error: "Actividad no existe"})
    }
}

module.exports = {
    getActividades,
    addActividad,
    deleteActividad,
    updateActividad
}
