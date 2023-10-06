const mongoose = require('mongoose')

const tipoShema = new mongoose.Schema(
    {
        tipo : {
            type : String,
            require : true,
        }
    }
);

const Tipo = mongoose.model("Tipo", tipoShema, 'tipos');

module.exports = Tipo;