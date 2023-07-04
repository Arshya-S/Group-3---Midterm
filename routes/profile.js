const express = require('express');
const router = express.Router();
const profileQueries = require('../db/queries/profile');

router.get('/', (req, res) => {
  return res.render('profile', { user: req.session['user'] });
});

router.post('/', (req, res) => {

  profileQueries.updateUserProfile(req.body).then(data => {
    const user = data[0];
    req.session = {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password
      }
    };
    res.render('index', { user: req.session['user'] });
  });
  setTimeout(() => {
    res.redirect('logout');
  }, 2000);
});



module.exports = router;
