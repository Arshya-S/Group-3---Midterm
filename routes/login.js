const express = require('express');
const router = express.Router();
const loginQueries = require('../db/queries/login');

router.get('/', (req, res) => {
  return res.render('login', { user: req.session['user'] });
});

router.post('/', (req, res) => {

  loginQueries.getUserByEmailAndPassword(req.body).then(data => {
    const user = data[0];
    req.session = {
      user: {
        name: user.name,
        email: user.email,
        password: user.password
      }
    };
    res.redirect('/');
    res.render('index', { user: req.session['user'] });
    return;
  }).catch(error => {
    return res.status(404).send('Unable to login, please check email/password');
  });
});

module.exports = router;
