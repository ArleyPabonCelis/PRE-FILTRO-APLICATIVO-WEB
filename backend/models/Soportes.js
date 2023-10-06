const {model, Schema} = require('mongoose');

const soporteShema = Schema(
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
        atencion : {
            type : String,
            require : true
        },
        descripcion : {
            type : String,
            require : true
        },
        tiempo_solucion : {
            type : String,
            require : true
        },
        solucion : {
            type : String,
            require : true
        }    
    }
);

const Soporte = model("Soporte", soporteShema, 'soportes');

module.exports = Soporte;