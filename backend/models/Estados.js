const mongoose = require('mongoose');

const estadoShema = new mongoose.Schema(
    {
        estado : {
            type : String,
            require : true,
        }
    }
);

const Estado = mongoose.model("Estado", estadoShema, "estados");

module.exports = Estado;