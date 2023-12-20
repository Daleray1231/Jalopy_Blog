const router = require('express').Router();
const { User, Car, Review } = require('../models');

// Render the homepage
router.get('/', async (req, res) => {
    try {
        res.render('home');
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// homepage displays the car results after the user makes a selection based on year, make, and model
router.get('/search', async (req, res) => {
    console.log("REQ", req.query);
    try {
        const carData = await Car.findAll({
            where: {
                year: req.query.year,
                make: req.query.make,
                model: req.query.model,
            },
        });
        const cars = carData.map((car) => car.get({ plain: true }));
        console.log("CARS", cars);
        res.json(cars);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
  
module.exports = router;
