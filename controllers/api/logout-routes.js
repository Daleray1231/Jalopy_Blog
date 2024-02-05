const router = require('express').Router();
const bcrypt = require('bcrypt');

router.get('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      console.log('User logged out');
      res.redirect('/');
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
