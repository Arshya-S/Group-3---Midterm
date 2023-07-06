const express = require('express');
const router = express.Router();
const userAddTodo = require('../db/queries/getTodo');
const taskCheck = require('../category_decision');

router.post('/', (req, res) => {
  console.log('req body', req.body);
  if (!req.body.title) {
    return res.status(400).json({ error: 'An error occurred' });
  }
  taskCheck(req.body.title)
  .then((category_id) => {
    const task = {
      title: req.body.title,
      user_id: req.session.user.id,
      category_id: category_id
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
  })
  // const task = {
  //   title: req.body.title,
  //   user_id: req.session.user.id,
  //   category_id:
  // };
  // console.log('task:', task);
  // userAddTodo.getTodo(task)
  //   .then(data => {
  //     console.log('succesful insert, data: ', data);
  //     // res.redirect('/');
  //     res.status(201).send();
  //   })
  //   .catch(err => {
  //     console.log('error message: ', err);
  //     res.status(500).json({ error: 'An error occurred' });
  //   });
});

module.exports = router;
