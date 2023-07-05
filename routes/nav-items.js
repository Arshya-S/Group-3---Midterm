const express = require('express');
const router  = express.Router();
const toWatchQuery = require('../db/queries/user-ToWatch');
const toDoQuery = require('../db/queries/user-ToDo');


// Route for /lists/1
router.get('/', (req, res) => {
  toDoQuery.getUserTODOList(1)
    .then(data => {
      res.json(data);
    })
})


// Route for /lists/1/watch
router.get('/watch', (req, res) => {
  toWatchQuery.getUserWatch(1)
    .then(data => {
      res.json(data);
    })
})

module.exports = router;
