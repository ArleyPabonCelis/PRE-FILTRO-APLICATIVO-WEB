const Torre = require('../models/Torres.js');

const getTorres = async (req, res) => {
    try {
        const torres = await Torre.find({})
            .populate('disco_duro', 'disco_duro -_id')
            .populate('memoria', 'capacidad -_id');

        const resultado = torres.map(item => ({
            _id: item._id,
            n_bien: item.n_bien,
            n_serie: item.n_serie,
            marca: item.marca,
            modelo: item.modelo,
            procesador: item.procesador,
            disco_duro: item.disco_duro.disco_duro,
            memoria: item.memoria.memoria,
        }));
        
        res.json(resultado);
        
    } catch (e) {
        res.status(500).json({ error: 'Not Found :C'});
        console.log(e);
    };
}

const addTorre = async (req, res) => {
    const torre = new Torre(req.body);
  
    try {
      const newTorre = await torre.save();
      res.json(newTorre)
    } catch (error) {
      res.status(500).json({ error: 'Not Agregate :C'});
    }
  }
  
  const deleteTorre = async (req, res) => {
    try {
      await Torre.deleteOne({_id:req.params.id});
      res.status(204).send();
      console.log('Torre Eliminada');
    } catch (error) {
      res.status(404)
      res.send({error:"Torre no existe"})
    }
  }
  
  const updateTorre = async (req, res) => {
    try {
      const torre = await Torre.findOne({_id:req.params.id})
  
      if(req.body.n_bien){
        torre.n_bien = req.body.n_bien
      }
  
      if(req.body.n_serie){
        torre.n_serie = req.body.n_serie               
      }
  
      if(req.body.tipo){
        torre.tipo = req.body.tipo              
      }
  
      if(req.body.marca){
        torre.marca = req.body.marca             
      }
  
      if(req.body.modelo){
        torre.modelo = req.body.modelo              
      }
  
      if(req.body.procesador){
        torre.procesador = req.body.procesador              
      }
  
      if(req.body.disco_duro){
        torre.disco_duro = req.body.disco_duro              
      }

      if(req.body.memoria){
        torre.memoria = req.body.memoria              
      }
  
      await torre.save();
      res.send(torre);
  
    } catch (error) {
      res.status(404);
      res.send({error: "Torre no existe"})
    }
  }

module.exports = {
    getTorres,
    addTorre,
    deleteTorre,
    updateTorre
}
