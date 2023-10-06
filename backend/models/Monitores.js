const mongoose = require('mongoose');

const monitorShema = new mongoose.Schema(
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

const Monitor = mongoose.model("Monitore", monitorShema, "monitores");

module.exports = Monitor;