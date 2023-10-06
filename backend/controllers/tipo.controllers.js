const Tipo = require('../models/Tipos.js');

const getTipos = async (req, res) => {
    try {
        const tipos = await Tipo.find();
        res.json(tipos);        
    } catch (error) {
        res.status(500).json({ error: 'Not Found :C'});
    }
}

const addTipo = async (req, res) => {
    const tipo = new Tipo(req.body);
  
    try {
      const newTipo = await tipo.save();
      res.json(newTipo)
    } catch (error) {
      res.status(500).json({ error: 'Not Agregate :C'});
    }
  }
  
  const deleteTipo = async (req, res) => {
    try {
      await Tipo.deleteOne({_id:req.params.id});
      res.status(204).send();
      console.log('Tipo Eliminado');
    } catch (error) {
      res.status(404)
      res.send({error:"Tipo no existe"})
    }
  }
  
  const updateTipo = async (req, res) => {
    try {
      const tipo = await Tipo.findOne({_id:req.params.id})
  
      if(req.body.tipo){
        tipo.tipo = req.body.tipo              
      }
  
      await tipo.save();
      res.send(tipo);
  
    } catch (error) {
      res.status(404);
      res.send({error: "Tipo no existe"})
    }
  }

module.exports = {
    getTipos,
    addTipo,
    deleteTipo,
    updateTipo
}