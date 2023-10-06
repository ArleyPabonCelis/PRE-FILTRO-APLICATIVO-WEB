const Usuario = require('../models/Usuarios.js');

const getUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find()
      .populate('genero', 'genero -_id') 
      .populate('rol', 'rol -_id');  
    
    const resultado = usuarios.map(item => ({
      _id: item._id,
      nombreUsuario: item.nombreUsuario,
      cedula: item.cedula,
      nombre: item.nombre,
      apellido: item.apellido,
      correo: item.correo,
      genero: item.genero.genero,
      rol: item.rol.rol,
    }));
    
    res.json(resultado);
    
  } catch (error) {
    res.status(500).json({ error: 'Not Found :C'});
  }
}

const addUsuario = async (req, res) => {
  const usuario = new Usuario(req.body);

  try {
    const newUser = await usuario.save();
    res.json(newUser)
  } catch (error) {
    res.status(500).json({ error: 'Not Agregate :C'});
  }
}

const deleteUsuario = async (req, res) => {
  try {
    await Usuario.deleteOne({_id:req.params.id});
    res.status(204).send();
    console.log('Usuario Eliminado');
  } catch (error) {
    res.status(404)
    res.send({error:"Usuario no existe"})
  }
}

const updateUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findOne({_id:req.params.id})

    if(req.body.nombreUsuario){
      usuario.nombreUsuario = req.body.nombreUsuario
    }

    if(req.body.cedula){
      usuario.cedula = req.body.cedula               
    }

    if(req.body.nombre){
      usuario.nombre = req.body.nombre              
    }

    if(req.body.apellido){
      usuario.apellido = req.body.apellido             
    }

    if(req.body.correo){
      usuario.correo = req.body.correo              
    }

    if(req.body.genero){
      usuario.genero = req.body.genero              
    }

    if(req.body.rol){
      usuario.rol = req.body.rol              
    }

    await usuario.save();
    res.send(usuario);

  } catch (error) {
    res.status(404);
    res.send({error: "Usuario no existe"})
  }
}


module.exports = {
    getUsuarios,
    addUsuario,
    deleteUsuario,
    updateUsuario
}