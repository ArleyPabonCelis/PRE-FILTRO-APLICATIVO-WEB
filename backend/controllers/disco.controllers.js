const Disco = require('../models/Discos.js');

const getDiscos = async (req, res) => {
    try {
        const discos = await Disco.find();
        res.json(discos);    
    } catch (error) {
        res.status(500).json({ error: 'Not Found :C'});
    }
}

const addDisco = async (req, res) => {
    const disco = new Disco(req.body);

    try {
        const newDisco = await disco.save();
        res.json(newDisco)
    } catch (error) {
        res.status(500).json({ error: 'Not Agregate :C'});
    }
}

const deleteDisco = async (req, res) => {
    try {
        await Disco.deleteOne({_id:req.params.id});
        res.status(204).send();
        console.log('Disco Eliminado');
    } catch (error) {
        res.status(404)
        res.send({error:"Disco no existe"})
    }
}
  
const updateDisco = async (req, res) => {
    try {
        const disco = await Disco.findOne({_id:req.params.id})

        if(req.body.disco_duro){
        disco_duro.disco_duro = req.body.disco_duro              
        }

        await disco.save();
        res.send(disco);

    } catch (error) {
        res.status(404);
        res.send({error: "Disco no existe"})
    }
}

module.exports = {
    getDiscos,
    addDisco,
    deleteDisco,
    updateDisco
}