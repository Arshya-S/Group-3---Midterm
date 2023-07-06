const request = require('request');

const taskKeywordCheck = (task) => {
  const lowerCaseTask = task.toLowerCase();
  let category_id = null;
  // category_id = 1, to_watch;
  // category_id = 2, to_eat;
  // category_id = 3, to_read;
  // category_id = 4, to_buy;
  // category_id = 5, uncategorized

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
};


const taskCheck = (task) => {
  return new Promise((resolve, reject) => {
    let category_id = null;
    // category_id = taskKeywordCheck(task);
    // if (category_id) {
    //   return category_id;
    // } else {
    const taskString = task.toString();

    // OTT details api (watch)
    // const watch = {
    //   method: 'GET',
    //   url: 'https://ott-details.p.rapidapi.com/search',
    //   qs: {
    //     title: taskString,
    //     page: '1'
    //   },
    //   headers: {
    //     'X-RapidAPI-Key': '04e00cc54dmshdaa5f3cce6a7db8p118ebdjsn5c1a4e9c425f',
    //     'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
    //   }
    // };

    // request(watch, function (error, response, body) {
    //   if (error) throw new Error(error);

    //   if (body.includes("movie") ||
    //     body.includes("film") ||
    //     body.includes("tvseries")) {
    //       category_id = 1;
    //   }

    //   console.log('Category ID:', category_id);

    // });
    // });

    // return category_id;
    // });
    // }

    // Amazon api (buy)
    // const buy = {
    //   method: 'GET',
    //   url: 'https://amazon23.p.rapidapi.com/product-search',
    //   qs: {
    //     query: taskString,
    //     country: 'US'
    //   },
    //   headers: {
    //     'X-RapidAPI-Key': '04e00cc54dmshdaa5f3cce6a7db8p118ebdjsn5c1a4e9c425f',
    //     'X-RapidAPI-Host': 'amazon23.p.rapidapi.com'
    //   }
    // };

    // request(buy, function (error, response, body) {
    //   if (error) throw new Error(error);

    //   console.log(body);
    //   if (body.includes("price")) {
    //     category_id = 4;
    //   }

    //   console.log('Category ID:', category_id);
    //   return category_id;
    // });


    // Wikipedia api (read)
    const queryString = task.split(' ').join('%20');
    return request(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${queryString}&format=json`, function(error, response, body) {
      if (error) throw new Error(error);
      console.log(body);

      if (body.includes("book") ||
        body.includes("ISBN") ||
        body.includes("novel") ||
        body.includes("published")) {
        category_id = 3;
      }
      console.log('Category ID:', category_id);
      resolve(category_id);
    });

    // Yelp api (eat)

    // const eat = {
    //   method: 'GET',
    //   url: 'https://yelp-com.p.rapidapi.com/search/nearby/53.631611/-113.323975',
    //   qs: {
    //     radius: '40',
    //     term: 'Restaurants',
    //     offset: '0'
    //   },
    //   headers: {
    //     'X-RapidAPI-Key': '04e00cc54dmshdaa5f3cce6a7db8p118ebdjsn5c1a4e9c425f',
    //     'X-RapidAPI-Host': 'yelp-com.p.rapidapi.com'
    //   }
    // };

    // request(eat, function (error, response, body) {
    //   if (error) throw new Error(error);

    //   console.log(body);


    //   if (body.includes("task")) {
    //         category_id = 2;
    //       }
    //       console.log('Category ID:', category_id);

    // });
  });

  let category_id = null;
  // category_id = taskKeywordCheck(task);
  // if (category_id) {
  //   return category_id;
  // } else {
  const taskString = task.toString();

  // OTT details api (watch)
  // const watch = {
  //   method: 'GET',
  //   url: 'https://ott-details.p.rapidapi.com/search',
  //   qs: {
  //     title: taskString,
  //     page: '1'
  //   },
  //   headers: {
  //     'X-RapidAPI-Key': '04e00cc54dmshdaa5f3cce6a7db8p118ebdjsn5c1a4e9c425f',
  //     'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
  //   }
  // };

  // request(watch, function (error, response, body) {
  //   if (error) throw new Error(error);

  //   if (body.includes("movie") ||
  //     body.includes("film") ||
  //     body.includes("tvseries")) {
  //       category_id = 1;
  //   }

  //   console.log('Category ID:', category_id);

  // });
  // });

  // return category_id;
  // });
  // }

  // Amazon api (buy)
  // const buy = {
  //   method: 'GET',
  //   url: 'https://amazon23.p.rapidapi.com/product-search',
  //   qs: {
  //     query: taskString,
  //     country: 'US'
  //   },
  //   headers: {
  //     'X-RapidAPI-Key': '04e00cc54dmshdaa5f3cce6a7db8p118ebdjsn5c1a4e9c425f',
  //     'X-RapidAPI-Host': 'amazon23.p.rapidapi.com'
  //   }
  // };

  // request(buy, function (error, response, body) {
  //   if (error) throw new Error(error);

  //   console.log(body);
  //   if (body.includes("price")) {
  //     category_id = 4;
  //   }

  //   console.log('Category ID:', category_id);
  //   return category_id;
  // });


  // Wikipedia api (read)
  const queryString = task.split(' ').join('%20');
  return request(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${queryString}&format=json`, function(error, response, body) {
    if (error) throw new Error(error);
    console.log(body);

    if (body.includes("book") ||
      body.includes("ISBN") ||
      body.includes("novel") ||
      body.includes("published")) {
      category_id = 3;
    }
    console.log('Category ID:', category_id);
    return category_id;
  });

  // Yelp api (eat)

  // const eat = {
  //   method: 'GET',
  //   url: 'https://yelp-com.p.rapidapi.com/search/nearby/53.631611/-113.323975',
  //   qs: {
  //     radius: '40',
  //     term: 'Restaurants',
  //     offset: '0'
  //   },
  //   headers: {
  //     'X-RapidAPI-Key': '04e00cc54dmshdaa5f3cce6a7db8p118ebdjsn5c1a4e9c425f',
  //     'X-RapidAPI-Host': 'yelp-com.p.rapidapi.com'
  //   }
  // };

  // request(eat, function (error, response, body) {
  //   if (error) throw new Error(error);

  //   console.log(body);


  //   if (body.includes("task")) {
  //         category_id = 2;
  //       }
  //       console.log('Category ID:', category_id);

  // });
};
module.exports = taskCheck;




