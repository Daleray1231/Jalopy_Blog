const router = require('express').Router();
const { User, Car, Review } = require('../../models');

const withAuth = (req, res, next) => {
  if (!req.session.user_id) {
    res.redirect('/login?message=Please log in to access the dashboard.');
  } else {
    next();
  }
};

router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const postReview = await Review.findAll({
      where: { user_id: req.session.user_id },
      include: [{ model: User, attributes: ['username'] }, { model: Car, attributes: ['year', 'make', 'model'] }],
    });

    const reviews = postReview.map((review) => review.get({ plain: true }));

    console.log(reviews);
    console.log(req.session.user_id);
    res.render('dashboard', { reviews, user: req.session.user_id });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
