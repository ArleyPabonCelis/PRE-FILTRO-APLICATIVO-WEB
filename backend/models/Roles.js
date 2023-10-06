const mongoose = require('mongoose');

const rolShema = new mongoose.Schema(
    {
        rol : {
            type : String,
            require : true,
            trim : true
        }
    }
);

const Rol = mongoose.model("Role", rolShema);

module.exports = Rol;