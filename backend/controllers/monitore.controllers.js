const Monitor = require('../models/Monitores.js');

const getMonitores = async (req, res) => {
    try {
        const monitores = await Monitor.find();
        res.json(monitores);        
    } catch (error) {
        res.status(500).json({ error: 'Not Found :C'});
    }
}

const addMonitor = async (req, res) => {
    const monitor = new Monitor(req.body);
  
    try {
      const newMonitor = await monitor.save();
      res.json(newMonitor)
    } catch (error) {
      res.status(500).json({ error: 'Not Agregate :C'});
    }
}
  
const deleteMonitor = async (req, res) => {
    try {
        await Monitor.deleteOne({_id:req.params.id});
        res.status(204).send();
        console.log('Monitor Eliminado');
    } catch (error) {
        res.status(404)
        res.send({error:"Monitor no existe"})
    }
}
  
  const updateMonitor = async (req, res) => {
    try {
      const monitor = await Monitor.findOne({_id:req.params.id})
  
      if(req.body.n_bien){
        monitor.n_bien = req.body.n_bien
      }
  
      if(req.body.n_serie){
        monitor.n_serie = req.body.n_serie               
      }

      if(req.body.tipo){
        monitor.tipo = req.body.tipo               
      }
  
      if(req.body.marca){
        monitor.marca = req.body.marca             
      }
  
      if(req.body.modelo){
        monitor.modelo = req.body.modelo              
      }
  
      await monitor.save();
      res.send(monitor);
  
    } catch (error) {
      res.status(404);
      res.send({error: "Monitor no existe"})
    }
}


module.exports = {
    getMonitores,
    addMonitor,
    deleteMonitor,
    updateMonitor
}