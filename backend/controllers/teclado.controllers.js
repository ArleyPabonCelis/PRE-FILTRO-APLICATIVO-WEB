const Teclado = require('../models/Teclados.js');

const getTeclados = async (req, res) => {
    try {
        const teclados = await Teclado.find();
        res.json(teclados);        
    } catch (error) {
        res.status(500).json({ error: 'Not Found :C'});
    }
}

const addTeclado = async (req, res) => {
    const teclado = new Teclado(req.body);
  
    try {
      const newTeclado = await teclado.save();
      res.json(newTeclado)
    } catch (error) {
      res.status(500).json({ error: 'Not Agregate :C'});
    }
  }
  
  const deleteTeclado = async (req, res) => {
    try {
      await Teclado.deleteOne({_id:req.params.id});
      res.status(204).send();
      console.log('Teclado Eliminada');
    } catch (error) {
      res.status(404)
      res.send({error:"Teclado no existe"})
    }
  }
  
  const updateTeclado = async (req, res) => {
    try {
      const teclado = await Teclado.findOne({_id:req.params.id})
  
      if(req.body.n_bien){
        teclado.n_bien = req.body.n_bien
      }
  
      if(req.body.n_serie){
        teclado.n_serie = req.body.n_serie               
      }
  
      if(req.body.marca){
        teclado.marca = req.body.marca             
      }
  
      if(req.body.modelo){
        teclado.modelo = req.body.modelo              
      }
  
      await teclado.save();
      res.send(teclado);
  
    } catch (error) {
      res.status(404);
      res.send({error: "Teclado no existe"})
    }
  }

module.exports = {
    getTeclados,
    addTeclado,
    deleteTeclado,
    updateTeclado
}