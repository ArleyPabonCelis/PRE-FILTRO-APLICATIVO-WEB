const Memoria = require('../models/Memorias.js');

const getMemorias = async (req, res) => {
    try {
        const memorias = await Memoria.find();
        res.json(memorias);    
    } catch (error) {
        res.status(500).json({ error: 'Not Found :C'});
    }
}

const addMemoria = async (req, res) => {
    const memoria = new Memoria(req.body);
  
    try {
      const newMemoria = await memoria.save();
      res.json(newMemoria)
    } catch (error) {
      res.status(500).json({ error: 'Not Agregate :C'});
    }
}
  
const deleteMemoria = async (req, res) => {
    try {
        await Memoria.deleteOne({_id:req.params.id});
        res.status(204).send();
        console.log('Memoria Eliminado');
    } catch (error) {
        res.status(404)
        res.send({error:"Memoria no existe"})
    }
}
  
  const updateMemoria = async (req, res) => {
    try {
      const memoria = await Memoria.findOne({_id:req.params.id})
  
      if(req.body.marca){
        memoria.marca = req.body.marca
      }
  
      if(req.body.capacidad){
        memoria.capacidad = req.body.capacidad               
      }
  
      await memoria.save();
      res.send(memoria);
  
    } catch (error) {
      res.status(404);
      res.send({error: "Memoria no existe"})
    }
}


module.exports = {
    getMemorias,
    addMemoria,
    deleteMemoria,
    updateMemoria
}