const express = require('express');
const router  = express.Router();
const userListQueries = require('../db/queries/user-lists');


router.get('/watch', (req,res) => {
  userListQueries.getUserWatch(1)
    .then(data => {
      res.json(data);
    })

})

module.exports = router;
