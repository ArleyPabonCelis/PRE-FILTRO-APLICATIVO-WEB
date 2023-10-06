const Historial = require('../models/Historiales.js');

const getHistoriales = async (req, res) => {
    try {
        const historiales = await Historial.find({})
            .populate('actividad', 'tipo -_id')
            .populate('equipo', 'nombre -_id');

        const resultado = historiales.map(item => ({
            _id: item._id,
            actividad: item.actividad.tipo,
            equipo: item.equipo.nombre
        }));
        
        res.json(resultado);
        
    } catch (e) {
        res.status(500).json({ error: 'Not Found :C'});
        console.log(e);
    };
}

const addHistorial = async (req, res) => {
    const historial = new Historial(req.body);
  
    try {
      const newHistorial = await historial.save();
      res.json(newHistorial)
    } catch (error) {
      res.status(500).json({ error: 'Not Agregate :C'});
    }
}
  
const deleteHistorial = async (req, res) => {
    try {
        await Historial.deleteOne({_id:req.params.id});
        res.status(204).send();
        console.log('Historial Eliminado');
    } catch (error) {
        res.status(404)
        res.send({error:"Historial no existe"})
    }
}
  
  const updateHistorial = async (req, res) => {
    try {
      const historial = await Historial.findOne({_id:req.params.id})
  
      if(req.body.actividad){
        historial.actividad = req.body.actividad
      }
  
      if(req.body.equipo){
        historial.equipo = req.body.equipo               
      }
  
      await historial.save();
      res.send(historial);
  
    } catch (error) {
      res.status(404);
      res.send({error: "Historial no existe"})
    }
}


module.exports = {
    getHistoriales,
    addHistorial,
    deleteHistorial,
    updateHistorial
}
