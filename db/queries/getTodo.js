const db = require('../connection');

const getTodo = (task) => {
  return db
    .query(`
    INSERT INTO lists
    (title, user_id, category_id)
    VALUES ($1, $2, $3) RETURNING *;`, [task.title, task.user_id, task.category_id])
    .then(data => {
      return data.rows;
    })
    .catch(err => {
      console.log('Query Error: ', err);
    });
};

module.exports = { getTodo };
