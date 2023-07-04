const express = require('express');
const router  = express.Router();
const userListQueries = require('../db/queries/user-lists');
const userAddTodo = require('../db/queries/getTodo');

router.get('/', (req,res) => {
  userAddTodo.getTodo(req.body)
  .then(data => {
    res.json(data);
  })
  .catch(err => {
    res.status(500).json({ error: 'An error occurred' });
  });
})

router.post('/', (req, res) => {
  console.log("req.body", req.body)
  const test = {
    title: req.body,
    user_id: 1,
    category_id: 2,
  }
  userAddTodo.getTodo(test)
  // userListQueries.getUserWatch(1)
  .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(500).json({ error: 'An error occurred' });
    });
})

module.exports = router;
