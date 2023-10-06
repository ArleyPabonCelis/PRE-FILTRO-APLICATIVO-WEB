const {mongoose, Schema} = require('mongoose');

const actividadSchema = new mongoose.Schema(
  {
    usuario: {
      type: Schema.Types.ObjectId,
      ref: "Usuario",
      required: true,
      trim: true
    },
    tipo: {
      type: Schema.Types.ObjectId,
      ref : "Tipo",
      required: true,
      trim: true
    },
    equipo: {
      type: Schema.Types.ObjectId,
      ref: "Equipo",
      required: true,
      trim: true
    }
  });

const Actividad = mongoose.model("Actividade", actividadSchema, 'actividades');

module.exports = Actividad;
