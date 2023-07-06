const express = require('express');
const router = express.Router();
const markComplete = require('../db/queries/mark-completed');

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
  markComplete.taskCompleted(task)
    .then(() => {
      res.status(201).send();
    })
    .catch(err => {
      console.log('error message: ', err);
      res.status(500).json({ error: 'An error occurred' });
    });
});

module.exports = router;
