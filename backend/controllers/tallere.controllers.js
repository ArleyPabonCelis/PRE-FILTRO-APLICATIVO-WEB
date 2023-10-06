const Taller = require('../models/Talleres.js');

const getTalleres = async (req, res) => {
  try {
    const talleres = await Taller.find()
      .populate('usuario', 'nombreUsuario -_id') 
      .populate('actividad', 'actividad')      
      .populate('tipo', 'tipo -_id');       
    
    const resultado = talleres.map(item => ({
      _id: item._id,
      usuario: item.usuario.nombreUsuario,
      actividad: item.actividad._id,
      tipo: item.tipo.tipo,
      fecha: item.fecha,
      origen: item.origen,
      localidad: item.localidad,
      proceso: item.proceso,
      descripcion: item.descripcion,
    }));
    
    res.json(resultado);
    
  } catch (error) {
    res.status(500).json({ error: 'Not Found :C'});
  }
}


const addTaller = async (req, res) => {
  const taller = new Taller(req.body);

  try {
    const newTaller = await taller.save();
    res.json(newTaller)
  } catch (error) {
    res.status(500).json({ error: 'Not Agregate :C'});
  }
}

const deleteTaller = async (req, res) => {
  try {
    await Taller.deleteOne({_id:req.params.id});
    res.status(204).send();
    console.log('Taller Eliminado');
  } catch (error) {
    res.status(404)
    res.send({error:"Taller no existe"})
  }
}

const updateTaller = async (req, res) => {
  try {
    const taller = await Taller.findOne({_id:req.params.id})

    if(req.body.usuario){
      taller.usuario = req.body.usuario
    }

    if(req.body.actividad){
      taller.actividad = req.body.actividad               
    }

    if(req.body.tipo){
      taller.tipo = req.body.tipo              
    }

    if(req.body.fecha){
      taller.fecha = req.body.fecha              
    }

    if(req.body.origen){
      taller.origen = req.body.origen             
    }

    if(req.body.localidad){
      taller.localidad = req.body.localidad              
    }

    if(req.body.proceso){
      taller.proceso = req.body.proceso              
    }

    if(req.body.descripcion){
      taller.descripcion = req.body.descripcion              
    }

    await taller.save();
    res.send(taller);

  } catch (error) {
    res.status(404);
    res.send({error: "Taller no existe"})
  }
}

module.exports = {
    getTalleres,
    addTaller,
    deleteTaller,
    updateTaller
}