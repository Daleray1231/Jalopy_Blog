const express = require('express');
const router = express.Router();

router.get('/car/:carType', (req, res) => {
  const carType = req.params.carType;
  res.send(`Car Page - Type: ${carType}`);
});

module.exports = router;
