const Raton = require('../models/Ratones.js');

const getRatones = async (req, res) => {
    try {
        const ratones = await Raton.find();
        res.json(ratones);        
    } catch (error) {
        res.status(500).json({ error: 'Not Found :C'});
    }
}

const addRaton = async (req, res) => {
    const raton = new Raton(req.body);
  
    try {
      const newRaton = await raton.save();
      res.json(newRaton)
    } catch (error) {
      res.status(500).json({ error: 'Not Agregate :C'});
    }
}
  
const deleteRaton = async (req, res) => {
    try {
        await Raton.deleteOne({_id:req.params.id});
        res.status(204).send();
        console.log('Raton Eliminado');
    } catch (error) {
        res.status(404)
        res.send({error:"Raton no existe"})
    }
}
  
  const updateRaton = async (req, res) => {
    try {
      const raton = await Raton.findOne({_id:req.params.id})
  
      if(req.body.n_bien){
        raton.n_bien = req.body.n_bien
      }
  
      if(req.body.n_serie){
        raton.n_serie = req.body.n_serie               
      }
  
      if(req.body.marca){
        raton.marca = req.body.marca             
      }
  
      if(req.body.modelo){
        raton.modelo = req.body.modelo              
      }
  
      await raton.save();
      res.send(raton);
  
    } catch (error) {
      res.status(404);
      res.send({error: "Raton no existe"})
    }
}

module.exports = {
    getRatones,
    addRaton,
    deleteRaton,
    updateRaton
}