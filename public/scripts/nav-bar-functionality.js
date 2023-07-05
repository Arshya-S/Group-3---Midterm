$(() => {
  // To-Watch button behaviour
  const toWatch = $('#to-watch');
  toWatch.on('click', () => {
    $.ajax({
      url: '/lists/watch',
      type: 'GET',
      success: (data => {
        renderToWatch(data);
      })
    })

  });

  // To-Eat button behaviour
  const toEat = $('#to-eat');
  toEat.on('click', () => {
    $.ajax({
      url: '/lists/eat',
      type: 'GET',
      success: (data => {
        renderToEat(data);
      })
    });
  });

  // To-Read button behaviour
  const toRead = $('#to-read');
  toRead.on('click', () => {
    $.ajax({
      url: '/lists/read',
      type: 'GET',
      success: (data => {
        renderToRead(data);
      })
    });
  });

  // To-Read button behaviour
  const toBuy = $('#to-buy');
  toBuy.on('click', () => {
    $.ajax({
      url: '/lists/buy',
      type: 'GET',
      success: (data => {
        renderToBuy(data);
      })
    });
  });

});



// Functions for rendering in HTML into container

const renderToWatch = (toWatchItems) => {
  const $container = $('#to-do-container').empty();

  for (const toWatchItem of toWatchItems) {
    const $item = $(`
    <div class="list-item">
      <h3 class="item-title">To Watch Title: ${toWatchItem.title}</h3>
    </div>
  `);

  $container.append($item);
  }
}

const renderToEat = (toEatItems) => {
  const $container = $('#to-do-container').empty();

  for (const toEatItem of toEatItems) {
    const $item = $(`
    <div class="list-item">
      <h3 class="item-title">To Eat Title: ${toEatItem.title}</h3>
    </div>
  `);

  $container.append($item);
  }
}

const renderToRead = (toReadItems) => {
  const $container = $('#to-do-container').empty();

  for (const toReadItem of toReadItems) {
    const $item = $(`
    <div class="list-item">
      <h3 class="item-title">To Read Title: ${toReadItem.title}</h3>
    </div>
  `);

  $container.append($item);
  }
}

const renderToBuy = (toBuyItems) => {
  const $container = $('#to-do-container').empty();

  for (const toBuyItem of toBuyItems) {
    const $item = $(`
    <div class="list-item">
      <h3 class="item-title">To Buy Title: ${toBuyItem.title}</h3>
    </div>
  `);

  $container.append($item);
  }
}
