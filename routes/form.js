const express = require('express');
const router = express.Router();
const userAddTodo = require('../db/queries/getTodo');

router.post('/', (req, res) => {
  console.log('req body', req.body);
  if (!req.body.title) {
    return res.status(400).json({ error: 'An error occurred' });
  }
  const task = {
    title: req.body.title,
    user_id: req.session.user.id,
    category_id: 1,
  };
  console.log('task:', task);
  userAddTodo.getTodo(task)
    .then(data => {
      console.log('succesful insert, data: ', data);
      // res.redirect('/');
      res.status(201).send();
    })
    .catch(err => {
      console.log('error message: ', err);
      res.status(500).json({ error: 'An error occurred' });
    });
});

module.exports = router;
