const {model, Schema} = require('mongoose');

const tallerShema = Schema(
    {
        usuario : {
            type : Schema.Types.ObjectId,
            ref : "Usuario",
            require : true,
            trim : true
        },
        actividad : {
            type : Schema.Types.ObjectId,
            ref : "Actividade",
            require : true,
            trim : true
        },
        tipo : {
            type : Schema.Types.ObjectId,
            ref : "Tipo",
            require : true,
            trim : true
        },
        fecha : {
            type : Schema.Types.Date,
            require : true,
            trim : true
        },
        origen : {
            type : String,
            require : true,
            trim : true
        },
        localidad : {
            type : String,
            require : true
        },
        proceso : {
            type : String,
            require : true,
            trim : true
        },
        descripcion : {
            type : String,
            require : true
        },
    }
);

const Taller = model("Tallere", tallerShema, 'talleres');

module.exports = Taller;