const db = require('../connection');

const getTodo = (list) => {
  return db
    .query(`
    INSERT INTO lists
    (title, user_id, category_id)
    VALUES ($1, $2, $3) RETURNING *;`, [list.title, list.user_id, list.category_id])
    .then(data => {
      return data.rows;
    })
    .catch(err => {
      console.log('Query Error: ', err);
    });
};

module.exports = { getTodo };
