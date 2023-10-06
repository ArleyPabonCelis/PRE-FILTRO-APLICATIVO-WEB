const mongoose = require('mongoose');

const generoShema = new mongoose.Schema(
    {
        genero : {
            type : String,
            require : true,
            trim : true
        }
    }
);

const Genero = mongoose.model("Genero", generoShema);

module.exports = Genero;