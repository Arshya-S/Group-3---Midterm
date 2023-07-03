const db = require('../connection');



// Query for getting specific user's To-Watch items
const getUserWatch = (id) => {
  return db.query(`
  SELECT * FROM lists
  WHERE user_id = $1
  AND category_id = $2`,[id,1])
    .then(data => {
      return data.rows[0];
    })
    .catch(err => {
      console.log(err);
    })
}


module.exports = { getUserWatch };
