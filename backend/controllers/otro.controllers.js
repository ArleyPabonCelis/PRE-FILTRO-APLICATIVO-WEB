const Otro = require('../models/Otros.js');

const getOtros = async (req, res) => {
    try {
        const otros = await Otro.find();
        res.json(otros);        
    } catch (error) {
        res.status(500).json({ error: 'Not Found :C'});
    }
}

const addOtro = async (req, res) => {
    const otro = new Otro(req.body);
  
    try {
      const newOtro = await otro.save();
      res.json(newOtro)
    } catch (error) {
      res.status(500).json({ error: 'Not Agregate :C'});
    }
}
  
const deleteOtro = async (req, res) => {
    try {
        await Otro.deleteOne({_id:req.params.id});
        res.status(204).send();
        console.log('Otro Eliminado');
    } catch (error) {
        res.status(404)
        res.send({error:"Otro no existe"})
    }
}
  
  const updateOtro = async (req, res) => {
    try {
      const otro = await Otro.findOne({_id:req.params.id})
  
      if(req.body.dispositivo){
        otro.dispositivo = req.body.dispositivo
      }

      if(req.body.n_bien){
        otro.n_bien = req.body.n_bien
      }
  
      if(req.body.n_serie){
        otro.n_serie = req.body.n_serie               
      }
  
      if(req.body.marca){
        otro.marca = req.body.marca             
      }
  
      if(req.body.modelo){
        otro.modelo = req.body.modelo              
      }
  
      await otro.save();
      res.send(otro);
  
    } catch (error) {
      res.status(404);
      res.send({error: "Raton no existe"})
    }
}

module.exports = {
    getOtros,
    addOtro,
    deleteOtro,
    updateOtro
}