const db = require('../connection');

const addTodo = (list) => {
  const queryString = `INSERT INTO lists (title, user_id, category_id) VALUES ($1, $2, $3) RETURNING *;`;
  const queryParams = [list.title, list.user_id, list.category_id];
  console.log(queryString, queryParams);
  return db
    .query(queryString, queryParams)
    .then(data => {
      console.log(data.rows);
      return data.rows;
    });
};


module.exports = { addTodo };
