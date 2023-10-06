const {model, Schema} = require('mongoose');

const usuarioShema = Schema(
    {
        nombreUsuario : {
            type : String,
            require : true,
            trim : true
        },
        cedula : {
            type : String,
            require : true,
            trim : true
        },
        nombre : {
            type : String,
            require : true,
            trim : true
        },
        apellido : {
            type : String,
            require : true,
            trim : true
        },
        correo : {
            type : String,
            require : true,
            unique : true
        },
        genero : {
            type : Schema.Types.ObjectId,
            ref : "Genero",
            require : true,
            trim : true
        },
        rol : {
            type :  Schema.Types.ObjectId,
            ref : "Role",
            require : true,
            trim : true
        },
    }
);

const Usuario = model("Usuario", usuarioShema, 'usuarios');

module.exports = Usuario;