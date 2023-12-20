const router = require('express').Router();
const { User, Car, Review } = require('../../models');

// Custom middleware to check if the user is logged in
const withAuth = (req, res, next) => {
  if (!req.session.user_id) {
    // If the user is not logged in, redirect to the login page with a message
    res.redirect('/login?message=Please log in to access the dashboard.');
  } else {
    next(); // If the user is logged in, proceed to the route
  }
};

// GET route for rendering the user's dashboard
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    // Fetch the user's reviews along with associated data
    const postReview = await Review.findAll({
      where: { user_id: req.session.user_id },
      include: [{ model: User, attributes: ['username'] }, { model: Car, attributes: ['year', 'make', 'model'] }],
    });

    // Serialize the data
    const reviews = postReview.map((review) => review.get({ plain: true }));

    // Render the dashboard, passing the user's posts
    console.log(reviews);
    console.log(req.session.user_id);
    res.render('dashboard', { reviews, user: req.session.user_id });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
