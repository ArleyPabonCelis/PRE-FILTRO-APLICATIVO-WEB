const Rol = require('../models/Roles.js');

const getRoles = async (req, res) => {
    try {
        const roles = await Rol.find();
        res.json(roles);        
    } catch (error) {
        res.status(500).json({ error: 'Not Found :C'});
    }
}

const addRol = async (req, res) => {
    const rol = new Rol(req.body);

    try {
        const newRol = await rol.save();
        res.json(newRol)
    } catch (error) {
        res.status(500).json({ error: 'Not Agregate :C'});
    }
}
  
const deleteRol = async (req, res) => {
    try {
        await Rol.deleteOne({_id:req.params.id});
        res.status(204).send();
        console.log('Rol Eliminado');
    } catch (error) {
        res.status(404)
        res.send({error:"Rol no existe"})
    }
}
  
const updateRol = async (req, res) => {
    try {
        const rol = await Rol.findOne({_id:req.params.id})

        if(req.body.rol){
        rol.rol = req.body.rol              
        }

        await rol.save();
        res.send(rol);

    } catch (error) {
        res.status(404);
        res.send({error: "Rol no existe"})
    }
}


module.exports = {
    getRoles,
    addRol,
    deleteRol,
    updateRol
}