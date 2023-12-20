const router = require('express').Router();
const { Review, Car, User } = require('../../models');

// GET all reviews
router.get('/review', async (req, res) => {
  try {
    const reviewData = await Review.findAll();
    const reviews = reviewData.map((review) =>
      review.get({ plain: true })
    );
    res.render('all-reviews', {
      reviews,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Get all reviews for one car
router.get('/reviews/:id', async (req, res) => {
  try {
    const reviewData = await Review.findAll({ where: { car_id: req.params.id } });
    let review;
    if (reviewData) {
      review = reviewData.map((review) =>
      review.get({ plain: true })
    )};
    console.log(review);
    res.render('review', { review, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/car/:id', async (req, res) => {
  try {
    const carData = await Car.findByPk(req.params.id);
    const car = carData.get({ plain: true });

    const reviewData = await Review.findAll({
      include: [{ model: Car }, { model: User }],
      where: { car_id: req.params.id },
    });

    const reviews = reviewData.map((review) =>
      review.get({ plain: true })
    );
    res.render('reviews', {
      reviews,
      car,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// POST a new review
router.post('/reviews', async (req, res) => {
  try {
      const newReview = await Review.create({
          title: req.body.title,
          body: req.body.body,
          user_id: req.session.user_id, // Assuming you store user ID in the session
          car_id: req.body.carId,
      });

      res.status(200).json(newReview);
  } catch (error) {
      console.error('Error creating review:', error);
      res.status(500).json({ error: 'Failed to create review' });
  }
});

module.exports = router;

