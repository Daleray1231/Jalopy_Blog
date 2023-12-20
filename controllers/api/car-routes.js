const express = require('express');
const router = express.Router();

// Car search route
router.get('/car/:carType', (req, res) => {
  const carType = req.params.carType;
  // Add your logic to retrieve and render information about the specified car type
  res.send(`Car Page - Type: ${carType}`);
});

module.exports = router;
