const mongoose = require('mongoose');

const discoShema = new mongoose.Schema(
    {
        disco_duro : {
            type : String,
            require : true,
        }
    }
);

const Disco = mongoose.model("Disco", discoShema);

module.exports = Disco;