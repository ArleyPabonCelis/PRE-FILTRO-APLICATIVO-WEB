const Estado = require('../models/Estados.js');

const getEstados = async (req, res) => {
    try {
        const estados = await Estado.find();
        res.json(estados);       
    } catch (error) {
        res.status(500).json({ error: 'Not Found :C'});  
    }
}

const addEstado = async (req, res) => {
    const estado = new Estado(req.body);

    try {
        const newEstado = await estado.save();
        res.json(newEstado)
    } catch (error) {
        res.status(500).json({ error: 'Not Agregate :C'});
    }
}

const deleteEstado = async (req, res) => {
    try {
        await Estado.deleteOne({_id:req.params.id});
        res.status(204).send();
        console.log('Estado Eliminado');
    } catch (error) {
        res.status(404)
        res.send({error:"Estado no existe"})
    }
}
  
const updateEstado = async (req, res) => {
    try {
        const estado = await Estado.findOne({_id:req.params.id})

        if(req.body.estado){
        estado.estado = req.body.estado              
        }

        await estado.save();
        res.send(estado);

    } catch (error) {
        res.status(404);
        res.send({error: "Estado no existe"})
    }
}

module.exports = {
    getEstados,
    addEstado,
    deleteEstado,
    updateEstado
}