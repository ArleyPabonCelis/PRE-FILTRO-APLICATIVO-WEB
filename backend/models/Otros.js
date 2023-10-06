const mongoose = require('mongoose');

const otroShema = new mongoose.Schema(
    {
        dispositivo : {
            type : String,
            require : true,
            trim : true
        },
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

const Otro = mongoose.model("Otro", otroShema, "otros");

module.exports = Otro;