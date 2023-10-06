const {mongoose, Schema} = require('mongoose');

const historialSchema = new mongoose.Schema(
  {
    actividad: {
      type: Schema.Types.ObjectId,
      ref: "Actividade",
      required: true,
      trim: true
    },
    equipo: {
      type: Schema.Types.ObjectId,
      ref : "Equipo",
      required: true,
      trim: true
    }
  });

const Historial = mongoose.model("Historiale", historialSchema, 'historiales');

module.exports = Historial;
