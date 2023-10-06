const mongoose = require('mongoose');

const ratonShema = new mongoose.Schema(
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

const Raton = mongoose.model("Ratone", ratonShema, "ratones");

module.exports = Raton;