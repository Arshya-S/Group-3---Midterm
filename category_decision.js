const request = require('request');

const taskKeywordCheck = (task) => {
  const lowerCaseTask = task.toLowerCase();
  let category_id = null;
  // category_id = 1, to_watch;
  // category_id = 2, to_eat;
  // category_id = 3, to_read;
  // category_id = 4, to_buy;
  // category_id = 5, uncategorized

  if (lowerCaseTask.includes("film" || "movie" || "watch" || "tv" || "show")) {
    category_id = 1;
  } else if (lowerCaseTask.includes("dish" || "eat" || "food" || "recipe" || "vegetable" || "fruit" || "dairy" || "restaurant" || "cafe")) {
    category_id = 2;
  } else if (lowerCaseTask.includes("read" || "book" || "journal" || "textbook" || "novel")) {
    category_id = 3;
  } else if (lowerCaseTask.includes("buy" || "price" || "retail" || "store" || "purchase" || "new")) {
    category_id = 4;
  }
  return category_id;
};


const taskCheck = (task) => {
  return new Promise((resolve, reject) => {
    let category_id = null;
    category_id = taskKeywordCheck(task);
    if (category_id) {
      resolve(category_id);
    } else {
      const taskString = task.toString();

      // OTT details api (watch)
      const watch = {
        method: 'GET',
        url: 'https://ott-details.p.rapidapi.com/search',
        qs: {
          title: taskString,
          page: '1'
        },
        headers: {
          'X-RapidAPI-Key': '04e00cc54dmshdaa5f3cce6a7db8p118ebdjsn5c1a4e9c425f',
          'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
        }
      };

      request(watch, function(error, response, body) {
        if (error) throw new Error(error);

        if (body.includes("movie" || "film" || "tvseries")) {
          // console.log('watch', body);
          category_id = 1;
        }

        // Wikipedia api (read)
        const queryString = task.split(' ').join('%20');
        request(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${queryString}&format=json`, function(error, response, body) {
          if (error) throw new Error(error);
          // console.log(body);

          if (body.includes("book" || "ISBN" || "novel" || "published")) {
            // console.log('read', body);
            category_id = 3;
          }
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

          const eat = {
            method: 'GET',
            url: `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${queryString}&format=json`,
          };

          request(eat, function(error, response, body) {
            if (error) throw new Error(error);

            const data = JSON.parse(body);
            const searchList = data.query.search;
            const snippets = searchList.map(search => search.snippet);
            snippets.forEach(snippet => {
              if (snippet.includes("dish" || "eat" || "food" || "recipe" || "vegetable" || "fruit" || "dairy" || "restaurant" || 'cafe')) {
                category_id = 2;
              }
            });

            if (!category_id) {
              category_id = 4;
            }

            resolve(category_id);
            // request(buy, function(error, response, body) {
            //   if (error) throw new Error(error);

            //   // console.log(body);
            //   if (body.includes("price")) {
            //     // console.log('buy', body);
            //     category_id = 4;
            //   }

            //   });
          });

        });
      });
    };
  });
};
module.exports = taskCheck;




