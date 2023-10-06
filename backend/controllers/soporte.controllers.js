const Soporte = require('../models/Soportes.js');

const getSoportes = async (req, res) => {
  try {
    const soportes = await Soporte.find()
      .populate('usuario', 'nombreUsuario -_id') 
      .populate('actividad', 'actividad')      
      .populate('tipo', 'tipo -_id');       
    
    const resultado = soportes.map(item => ({
      _id: item._id,
      usuario: item.usuario.nombreUsuario,
      actividad: item.actividad._id,
      tipo: item.tipo.tipo,
      fecha: item.fecha,
      origen: item.origen,
      localidad: item.localidad,
      atencion: item.atencion,
      descripcion: item.descripcion,
      tiempo_solucion: item.tiempo_solucion,
      solucion: item.solucion
    }));
    
    res.json(resultado);
    
  } catch (error) {
    res.status(500).json({ error: 'Not Found :C'});
  }
}


const addSoporte = async (req, res) => {
  const soporte = new Soporte(req.body);

  try {
    const newSoporte = await soporte.save();
    res.json(newSoporte)
  } catch (error) {
    res.status(500).json({ error: 'Not Agregate :C'});
  }
}

const deleteSoporte = async (req, res) => {
  try {
    await Soporte.deleteOne({_id:req.params.id});
    res.status(204).send();
    console.log('Soporte Eliminado');
  } catch (error) {
    res.status(404)
    res.send({error:"Soporte no existe"})
  }
}

const updateSoporte = async (req, res) => {
  try {
    const soporte = await Soporte.findOne({_id:req.params.id})

    if(req.body.usuario){
      soporte.usuario = req.body.usuario
    }

    if(req.body.actividad){
      soporte.actividad = req.body.actividad               
    }

    if(req.body.tipo){
      soporte.tipo = req.body.tipo              
    }

    if(req.body.fecha){
      soporte.fecha = req.body.fecha              
    }

    if(req.body.origen){
      soporte.origen = req.body.origen             
    }

    if(req.body.localidad){
      soporte.localidad = req.body.localidad              
    }

    if(req.body.atencion){
      soporte.atencion = req.body.atencion              
    }

    if(req.body.descripcion){
      soporte.descripcion = req.body.descripcion              
    }

    if(req.body.tiempo_solucion){
      soporte.tiempo_solucion = req.body.tiempo_solucion              
    }

    if(req.body.solucion){
      soporte.solucion = req.body.solucion              
    }

    await soporte.save();
    res.send(soporte);

  } catch (error) {
    res.status(404);
    res.send({error: "Soporte no existe"})
  }
}

module.exports = {
    getSoportes,
    addSoporte,
    deleteSoporte,
    updateSoporte
}