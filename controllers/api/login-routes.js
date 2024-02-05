const router = require('express').Router();
const { User } = require('../../models');
const bcrypt = require('bcrypt');

router.get('/login', (req, res) => {
  res.render('login', { errorMessage: req.session.errorMessage });
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { username: req.body.username },
    });

    console.log('login test', userData);
    if (!userData) {
      return res.redirect('/');
    }

    const validPassword = await bcrypt.compare(req.body.password, userData.password);

    console.log('login test', validPassword);
    if (!validPassword) {
      return res.redirect('/');
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.username = userData.username;
      req.session.logged_in = true;
      return res.redirect('/');
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;

