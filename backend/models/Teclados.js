const mongoose = require('mongoose');

const tecladoShema = new mongoose.Schema(
    {
        n_bien : {
            type : String,
            require : true,
            trim : true
        },
        n_serie : {
            type : String,
            require : true,
            trim : true
        },
        marca : {
            type : String,
            require : true,
            trim : true
        },
        modelo : {
            type : String,
            require : true,
        },
    }
);

const Teclado = mongoose.model("Teclado", tecladoShema, "teclados");

module.exports = Teclado;