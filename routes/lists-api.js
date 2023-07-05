const express = require('express');
const router  = express.Router();
const toWatchQuery = require('../db/queries/user-ToWatch');
const toEatQuery = require('../db/queries/user-ToEat');
const toDoQuery = require('../db/queries/user-ToDo');



// Route for /lists/
router.get('/', (req, res) => {
  const userID = req.session.user.id;
  toDoQuery.getUserTODOList(userID)
    .then(data => {
      res.json(data);
    });
});


// Route for /lists/watch
router.get('/watch', (req, res) => {
  const userID = req.session.user.id;
  toWatchQuery.getUserWatch(userID)
    .then(data => {
      res.json(data);
    });
});


// Route for /lists/eat
router.get('/eat', (req, res) => {
  const userID = req.session.user.id;
  toEatQuery.getUserEat(userID)
    .then(data => {
      res.json(data);
    })

});

module.exports = router;
