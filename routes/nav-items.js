const express = require('express');
const router  = express.Router();
const userListQueries = require('../db/queries/user-lists');
const db = require('../db/connection');

router.get('/watch', (res,req) => {
  console.log('Route worked');
  // userListQueries.getUserWatch()
})

module.exports = router;
