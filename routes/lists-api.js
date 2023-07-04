const express = require('express');
const router = express.Router();
const listQueries = require('../db/queries/lists');

router.post('/', (req, res) => {
  console.log(req.body);
  const testTask = {
    title: req.body.task,
    user_id: 1,
    category_id: 1,
    // user_id: check id and validate user,
    // category_id: auto categorize before sending to db,
  };
  listQueries.addTodo(testTask);
  return res.render('index', { user: req.session['user'] });
});


module.exports = router;
