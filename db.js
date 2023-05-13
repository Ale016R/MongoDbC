const mongoose = require('mongoose');

async function connectDB() {
  try {
    await mongoose.connect('mongodb+srv://ale016g:2016aleg@cluster0.iuefdov.mongodb.net/dogsDB?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conexión a la base de datos establecida.');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
}

module.exports = connectDB;
