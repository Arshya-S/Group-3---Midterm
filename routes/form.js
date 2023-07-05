const express = require('express');
const router = express.Router();
const userAddTodo = require('../db/queries/getTodo');
const taskCheck = require('../category_decision');

router.post('/', (req, res) => {
  if (!req.body.title) {
    return res.status(400).json({ error: 'An error occurred' });
  }
  const task = {
    title: req.body.title,
    user_id: 1,
    category_id: taskCheck(req.body.title)
  };
  userAddTodo.getTodo(task)
    .then(data => {
      console.log('succesful insert, data: ', data);
      // res.redirect('http://localhost:8080/');
      res.status(201).send();
    })
    .catch(err => {
      console.log('error message: ', err);
      res.status(500).json({ error: 'An error occurred' });
    });
});

module.exports = router;
