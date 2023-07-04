const express = require('express');
const router  = express.Router();
const userListQueries = require('../db/queries/user-lists');
const userAddTodo = require('../db/queries/getTodo');

router.get('/lists', (req,res) => {
  userListQueries.getUserWatch(1)
    .then(data => {
      res.json(data);
    })

})

router.post('/lists', (req, res) => {
  userAddTodo.getTodo()
    .then(data => {
      res.json(data);
    })
})

module.exports = router;
