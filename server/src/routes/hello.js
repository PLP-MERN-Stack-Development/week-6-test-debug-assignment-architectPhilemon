const express = require('express');
const router = express.Router();

router.get('/hello', (req, res) => {
  res.status(200).json({ message: 'Hello from API' });
});

module.exports = router;

router.get('/crash', (req, res) => {
  throw new Error('Simulated crash!');
});

router.get('/crash', (req, res) => {
  throw new Error('Simulated crash!');
});
