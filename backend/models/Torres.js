const mongoose = require('mongoose');

const torreShema = new mongoose.Schema(
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
        tipo : {
            type : String,
            require : true,
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
        procesador : {
            type : String,
            require : true,
            trim : true
        },
        disco_duro : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Disco",
            require : true,
        },
        memoria : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Memoria",
            require : true,
        },
    }
);

const Torre = mongoose.model("Torre", torreShema, "torres");

module.exports = Torre;