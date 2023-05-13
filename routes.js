const express = require('express');
const Dog = require('./dog');

const router = express.Router();

// CREATE
router.post('/dogs', async (req, res) => {
  try {
    const dog = new Dog(req.body);
    await dog.save();
    res.status(201).json(dog);
  } catch (error) {
    res.status(400).json({ error: 'No se pudo crear el perro.' });
  }
});

// READ (all dogs)
router.get('/dogs', async (req, res) => {
  try {
    const dogs = await Dog.find();
    res.json(dogs);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los perros.' });
  }
});

// READ (single dog by ID)
router.get('/dogs/:id', async (req, res) => {
  try {
    const dog = await Dog.findById(req.params.id);
    if (!dog) {
      return res.status(404).json({ error: 'Perro no encontrado.' });
    }
   res.json(dog);
} catch (error) {
  res.status(500).json({ error: 'Error al obtener el perro.' });
}
});

// UPDATE
router.put('/dogs/:id', async (req, res) => {
try {
  const dog = await Dog.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!dog) {
    return res.status(404).json({ error: 'Perro no encontrado.' });
  }
  res.json(dog);
} catch (error) {
  res.status(400).json({ error: 'No se pudo actualizar el perro.' });
}
});

// DELETE
router.delete('/dogs/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const dog = await Dog.findByIdAndDelete(id);
      if (!dog) {
        return res.status(404).json({ error: 'Perro no encontrado.' });
      }
      res.json({ message: 'Perro eliminado correctamente.' });
    } catch (error) {
      res.status(500).json({ error: 'No se pudo eliminar el perro.' });
    }
});
  
  

module.exports = router;

