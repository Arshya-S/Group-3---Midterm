const request = require('request');


const taskCheck = (task) => {
  const lowerCaseTask = task.toLowerCase();
  let category_id = null;
  // category_id = 1, to_watch;
  // category_id = 2, to_eat;
  // category_id = 3, to_read;
  // category_id = 4, to_buy;

  if (
    lowerCaseTask.includes("film") ||
    lowerCaseTask.includes("movie") ||
    lowerCaseTask.includes("watch") ||
    lowerCaseTask.includes("tv") ||
    lowerCaseTask.includes("show")
  ) {
    category_id = 1;
  } else if (
    lowerCaseTask.includes("dish") ||
    lowerCaseTask.includes("eat") ||
    lowerCaseTask.includes("food") ||
    lowerCaseTask.includes("recipe") ||
    lowerCaseTask.includes("vegetables") ||
    lowerCaseTask.includes("fruit") ||
    lowerCaseTask.includes("dairy") ||
    lowerCaseTask.includes("restaurant") ||
    lowerCaseTask.includes("cafe")
  ) {
    category_id = 2;
  } else if (
    lowerCaseTask.includes("read") ||
    lowerCaseTask.includes("book") ||
    lowerCaseTask.includes("journal") ||
    lowerCaseTask.includes("textbook") ||
    lowerCaseTask.includes("novel")
  ) {
    category_id = 3;
  } else if (
    lowerCaseTask.includes("buy") ||
    lowerCaseTask.includes("price") ||
    lowerCaseTask.includes("retail") ||
    lowerCaseTask.includes("store") ||
    lowerCaseTask.includes("purchase") ||
    lowerCaseTask.includes("new")
  ) {
    category_id = 4;
  }


  return category_id;
}

module.exports = taskCheck;
