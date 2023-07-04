const db = require('../connection');

const getUserByEmailAndPassword = (body) => {
  const queryString = `
  SELECT *
  FROM users
  WHERE email = $1
  AND password = $2;`;
  const queryParams = [body.email, body.password];
  // console.log(queryString, queryParams);
  return db
    .query(queryString, queryParams)
    .then(data => {
      return data.rows;
    });
  // .catch(error => {
  //   console.log(error);
  //   throw error;
  // });
};

module.exports = { getUserByEmailAndPassword };
