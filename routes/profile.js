const express = require('express');
const router = express.Router();
const userQueries = require('../db/queries/users');

router.get('/', (req, res) => {
  return res.render('profile', { user: req.session['user'] });
});




module.exports = router;
