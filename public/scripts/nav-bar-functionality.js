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
    });

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
    <div class="list-item" id="container">
      <div>
        <h3 class="item-title">Title: ${toWatchItem.title}</h3>
        <div class="category">
          <h3 class="item-category">Category: To Watch</h3>
          <button class="edit-button">Edit</button>
          </div>
      </div>

      <div>
        <input type="checkbox" id="checkbox" name="checkbox">
        <label name="checkbox"></label>
      </div>
    </div>
  `);

    $container.append($item);
  }
};

const renderToEat = (toEatItems) => {
  const $container = $('#to-do-container').empty();

  for (const toEatItem of toEatItems) {
    const $item = $(`
    <div class="list-item" id="container">
    <div>
      <h3 class="item-title">Title: ${toEatItem.title}</h3>
      <div class="category">
        <h3 class="item-category"> Category: To Eat</h3>
        <button class="edit-button">Edit</button>
      </div>
    </div>

    <div>
      <input type="checkbox" id="checkbox" name="checkbox">
      <label name="checkbox"></label>
    </div>
  </div>
  `);

    $container.append($item);
  }
};

const renderToRead = (toReadItems) => {
  const $container = $('#to-do-container').empty();

  for (const toReadItem of toReadItems) {
    const $item = $(`
    <div class="list-item" id="container">
    <div>
      <h3 class="item-title">Title: ${toReadItem.title}</h3>
      <div class="category">
        <h3 class="item-category"> Category: To Read</h3>
        <button class="edit-button">Edit</button>
      </div>
    </div>

    <div>
      <input type="checkbox" id="checkbox" name="checkbox">
      <label name="checkbox"></label>
    </div>
  </div>
    `);

    $container.append($item);
  }
};

const renderToBuy = (toBuyItems) => {
  const $container = $('#to-do-container').empty();

  for (const toBuyItem of toBuyItems) {
    const $item = $(`
    <div class="list-item" id="container">
    <div>
      <h3 class="item-title">Title: ${toBuyItem.title}</h3>
      <div class="category">
        <h3 class="item-category"> Category: To Buy</h3>
        <button class="edit-button">Edit</button>
      </div>
    </div>

    <div>
      <input type="checkbox" id="checkbox" name="checkbox">
      <label name="checkbox"></label>
    </div>
  </div>
    `);

    $container.append($item);
  }
};
