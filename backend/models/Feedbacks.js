const mongoose = require('mongoose');

const feedbackShema = new mongoose.Schema(
    {
        usuario: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Usuario",
            required: true,
            trim: true
        },
        comentarios : {
            type : String,
            require : true,
        }
    }
);

const Feedback = mongoose.model("Feedback", feedbackShema, "feedbacks");

module.exports = Feedback;