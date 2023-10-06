const {mongoose, Schema} = require('mongoose');

const equipoSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true,
        },
        estado: {
            type: Schema.Types.ObjectId,
            ref: "Estado",
            required: true
        },
        torre: {
            type: Schema.Types.ObjectId,
            ref : "Torre",
            required: true
        },
        monitor: {
            type: Schema.Types.ObjectId,
            ref: "Monitore",
            required: true,
        },
        teclado: {
            type: Schema.Types.ObjectId,
            ref: "Teclado",
            required: true,
        },
        raton: {
            type: Schema.Types.ObjectId,
            ref: "Ratone",
            required: true,
        },
        otro: {
            type: Schema.Types.ObjectId,
            ref: "Otro",
            required: true,
            trim: true
        },
    }
);

const Equipo = mongoose.model("Equipo", equipoSchema, 'equipos');

module.exports = Equipo;
