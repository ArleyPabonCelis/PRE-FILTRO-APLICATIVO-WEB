const Genero = require('../models/Generos.js');

const getGeneros = async (req, res) => {
    try {
        const generos = await Genero.find();
        res.json(generos);       
    } catch (error) {
        res.status(500).json({ error: 'Not Found :C'});  
    }
}



module.exports = {
    getGeneros
}