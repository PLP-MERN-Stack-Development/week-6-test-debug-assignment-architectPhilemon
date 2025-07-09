const express = require('express');
const router = express.Router();

router.get('/slow', async (req, res) => {
  await new Promise(resolve => setTimeout(resolve, 2000)); // 2 second delay
  res.json({ message: 'This took a while ⏳' });
});

module.exports = router;
