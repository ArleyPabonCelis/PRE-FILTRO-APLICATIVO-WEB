const mongoose = require('mongoose');

const memoriaShema = new mongoose.Schema(
    {
        marca : {
            type : String,
            require : true,
        },
        capacidad : {
            type : String,
            require : true
        }
    }
);

const Memoria = mongoose.model("Memoria", memoriaShema, "memorias");

module.exports = Memoria;