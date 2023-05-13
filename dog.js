const mongoose = require('mongoose');

const dogSchema = new mongoose.Schema({
  raza: { type: String, required: true },
  estaturaMaxima: { type: Number, required: true },
  tiempoPromedioVida: { type: Number, required: true },
  paisOrigen: { type: String, required: true },
  imagen: { type: String, required: true },
});

const Dog = mongoose.model('Dog', dogSchema);

module.exports = Dog;
