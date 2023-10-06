const Equipo = require('../models/Equipos.js');

const getEquipos = async (req, res) => {
    try {
        const equipos = await Equipo.find({})
            .populate('estado', 'estado -_id')
            .populate('torre', 'modelo -_id')
            .populate('monitor', 'modelo -_id')
            .populate('teclado', 'modelo -_id')
            .populate('raton', 'modelo -_id')
            .populate('otro', 'dispositivo -_id');

        const resultado = equipos.map(item => ({
            _id: item._id,
            nombre: item.nombre,
            estado: item.estado.estado,
            torre: item.torre ? item.torre.modelo : null,
            monitor: item.monitor ? item.monitor.modelo : null,
            teclado: item.teclado ? item.teclado.modelo : null,
            raton: item.raton ? item.raton.modelo : null,
            otro: item.otro ? item.otro.dispositivo : null,
        }));
             
        res.json(resultado);
        
    } catch (e) {
        res.status(500).json({ error: 'Not Found :C'});
        console.log(e);
    };
}

const addEquipo = async (req, res) => {
    const equipo = new Equipo(req.body);

    try {
        const newEquipo = await equipo.save();
        res.json(newEquipo)
    } catch (error) {
        res.status(500).json({ error: 'Not Agregate :C'});
    }
}

const deleteEquipo = async (req, res) => {
    try {
        await Equipo.deleteOne({_id:req.params.id});
        res.status(204).send();
        console.log('Equipo Eliminado');
    } catch (error) {
        res.status(404)
        res.send({error:"Equipo no existe"})
    }
}
  
const updateEquipo = async (req, res) => {
    try {
        const equipo = await Equipo.findOne({_id:req.params.id})

        if(req.body.nombre){
            equipo.nombre = req.body.nombre              
        }

        if(req.body.estado){
            equipo.estado = req.body.estado              
        }

        if(req.body.torre){
            equipo.torre = req.body.torre              
        }

        if(req.body.monitor){
            equipo.monitor = req.body.monitor              
        }

        if(req.body.teclado){
            equipo.teclado = req.body.teclado              
        }

        if(req.body.raton){
            equipo.raton = req.body.raton              
        }

        if(req.body.otro){
            equipo.otro = req.body.otro              
        }

        await equipo.save();
        res.send(equipo);

    } catch (error) {
        res.status(404);
        res.send({error: "Equipo no existe"})
    }
}

module.exports = {
    getEquipos,
    addEquipo,
    deleteEquipo,
    updateEquipo
}
