const Feedback = require('../models/Feedbacks.js');

const getFeedbacks = async (req, res) => {
    try {
        const feedbacks = await Feedback.find()
            .populate('usuario', 'nombreUsuario -_id');
        
        const resultado = feedbacks.map(item => ({
            _id: item._id,
            usuario: item.usuario.nombreUsuario,
            comentarios: item.comentarios
        }));
        
        res.json(resultado);       
    } catch (error) {
        res.status(500).json({ error: 'Not Found :C'});  
    }
}

const addFeedback = async (req, res) => {
    const feedback = new Feedback(req.body);
  
    try {
      const newFeedback = await feedback.save();
      res.json(newFeedback)
    } catch (error) {
      res.status(500).json({ error: 'Not Agregate :C'});
    }
}
  
const deleteFeedback = async (req, res) => {
    try {
        await Feedback.deleteOne({_id:req.params.id});
        res.status(204).send();
        console.log('Feedback Eliminado');
    } catch (error) {
        res.status(404)
        res.send({error:"Feedback no existe"})
    }
}
  
const updateFeedback = async (req, res) => {
    try {
      const feedback = await Feedback.findOne({_id:req.params.id})
  
      if(req.body.usuario){
        feedback.usuario = req.body.usuario
      }
  
      if(req.body.comentarios){
        feedback.comentarios = req.body.comentarios               
      }
  
      await feedback.save();
      res.send(feedback);
  
    } catch (error) {
      res.status(404);
      res.send({error: "Feedback no existe"})
    }
}

module.exports = {
    getFeedbacks,
    addFeedback,
    deleteFeedback,
    updateFeedback
}