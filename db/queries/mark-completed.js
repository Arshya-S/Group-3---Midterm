const db = require('../connection');

const taskCompleted = (body) => {
  const queryString = `
  UPDATE lists
  SET status = $1
  WHERE title = $2;`;
  const queryParams = [true, body.title];
  console.log('body:', body);
  return db
    .query(queryString, queryParams)
    .then(data => {
      return data.rows;
    });
};

const taskNotCompleted = (body) => {
  const queryString = `
  UPDATE lists
  SET status = $1
  WHERE title = $2;`;
  const queryParams = [false, body.title];
  console.log('body:', body);
  return db
    .query(queryString, queryParams)
    .then(data => {
      return data.rows;
    });
};


module.exports = { taskCompleted, taskNotCompleted };
