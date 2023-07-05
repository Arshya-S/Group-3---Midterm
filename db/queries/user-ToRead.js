const db = require('../connection');

// Query for getting specific user's To-Read items
const getUserRead = (id) => {
  return db.query(`
  SELECT * FROM lists
  WHERE user_id = $1
  AND category_id = $2`,[id,3])
    .then(data => {
      return data.rows;
    })
    .catch(err => {
      console.log('Query Error: ', err);
    })
}

module.exports = { getUserRead };
