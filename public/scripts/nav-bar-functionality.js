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

const renderToWatch = (toWatchItems) => {

  const $container = $('#to-do-container').empty();

  for (const toWatchItem of toWatchItems) {
    const $item = $(`
    <div class="list-item" id="container-${toWatchItem.id}">
      <div>
        <h2 class="item-title">Title: ${toWatchItem.title}</h2>
        <div class="category">
          <h3 class="item-category">Category: To Watch</h3>
          <button class="edit-button">Edit</button>
          </div>
      </div>

      <div class="complete-checkbox">
        <label name="checkbox">Complete:&nbsp;</label>
        <input type="checkbox" class="checkbox" id="checkbox-${toWatchItem.id}" name="checkbox">
      </div>
    </div>
  `);

    $container.append($item);

    const checkbox = $(`#checkbox-${toWatchItem.id}`);
    const container = $(`#container-${toWatchItem.id}`);
    const isChecked = toWatchItem.status;

    if (isChecked) {
      checkbox.prop('checked', true);
      container.css('background-color', 'gray');
    }

    checkbox.on('change', function(event) {
      event.preventDefault();

      if (this.checked) {
        $.ajax({
          url: '/lists/complete',
          method: 'POST',
          data: { title: toWatchItem.title, isComplete: true },
        });
        container.css('background-color', 'gray');
      } else {
        $.ajax({
          url: '/lists/complete',
          method: 'POST',
          data: { title: toWatchItem.title, isComplete: false },
        });
        container.css('background-color', '');
      }
    });

  }
};

const renderToEat = (toEatItems) => {
  const $container = $('#to-do-container').empty();

  for (const toEatItem of toEatItems) {
    const $item = $(`
    <div class="list-item" id="container-${toEatItem.id}">
    <div>
      <h2 class="item-title">Title: ${toEatItem.title}</h2>
      <div class="category">
        <h3 class="item-category"> Category: To Eat</h3>
        <button class="edit-button">Edit</button>
      </div>
    </div>

    <div class="complete-checkbox">
      <label name="checkbox">Complete:&nbsp;</label>
      <input type="checkbox" class="checkbox" id="checkbox-${toEatItem.id}" name="checkbox">
    </div>
  </div>
  `);

    $container.append($item);

    const checkbox = $(`#checkbox-${toEatItem.id}`);
    const container = $(`#container-${toEatItem.id}`);
    const isChecked = toEatItem.status;

    if (isChecked) {
      checkbox.prop('checked', true);
      container.css('background-color', 'gray');
    }

    checkbox.on('change', function(event) {
      event.preventDefault();

      if (this.checked) {
        $.ajax({
          url: '/lists/complete',
          method: 'POST',
          data: { title: toEatItem.title, isComplete: true },
        });
        container.css('background-color', 'gray');
      } else {
        $.ajax({
          url: '/lists/complete',
          method: 'POST',
          data: { title: toEatItem.title, isComplete: false },
        });
        container.css('background-color', '');
      }
    });

  }
};

const renderToRead = (toReadItems) => {
  const $container = $('#to-do-container').empty();

  for (const toReadItem of toReadItems) {
    const $item = $(`
    <div class="list-item" id="container-${toReadItem.id}">
    <div>
      <h2 class="item-title">Title: ${toReadItem.title}</h2>
      <div class="category">
        <h3 class="item-category"> Category: To Read</h3>
        <button class="edit-button">Edit</button>
      </div>
    </div>

    <div class="complete-checkbox">
      <label name="checkbox">Complete:&nbsp;</label>
      <input type="checkbox" class="checkbox" id="checkbox-${toReadItem.id}" name="checkbox">
    </div>
  </div>
    `);

    $container.append($item);

    const checkbox = $(`#checkbox-${toReadItem.id}`);
    const container = $(`#container-${toReadItem.id}`);
    const isChecked = toReadItem.status;

    if (isChecked) {
      checkbox.prop('checked', true);
      container.css('background-color', 'gray');
    }

    checkbox.on('change', function(event) {
      event.preventDefault();

      if (this.checked) {
        $.ajax({
          url: '/lists/complete',
          method: 'POST',
          data: { title: toReadItem.title, isComplete: true },
        });
        container.css('background-color', 'gray');
      } else {
        $.ajax({
          url: '/lists/complete',
          method: 'POST',
          data: { title: toReadItem.title, isComplete: false },
        });
        container.css('background-color', '');
      }
    });
  }
};

const renderToBuy = (toBuyItems) => {
  const $container = $('#to-do-container').empty();

  for (const toBuyItem of toBuyItems) {
    const $item = $(`
    <div class="list-item" id="container-${toBuyItem.id}">
    <div>
      <h2 class="item-title">Title: ${toBuyItem.title}</h2>
      <div class="category">
        <h3 class="item-category"> Category: To Buy</h3>
        <button class="edit-button">Edit</button>
      </div>
    </div>

    <div class="complete-checkbox">
      <label name="checkbox">Complete:&nbsp;</label>
      <input type="checkbox" class="checkbox" id="checkbox-${toBuyItem.id}" name="checkbox">
    </div>
  </div>
    `);

    $container.append($item);
    const checkbox = $(`#checkbox-${toBuyItem.id}`);
    const container = $(`#container-${toBuyItem.id}`);
    const isChecked = toBuyItem.status;

    if (isChecked) {
      checkbox.prop('checked', true);
      container.css('background-color', 'gray');
    }

    checkbox.on('change', function(event) {
      event.preventDefault();

      if (this.checked) {
        $.ajax({
          url: '/lists/complete',
          method: 'POST',
          data: { title: toBuyItem.title, isComplete: true },
        });
        container.css('background-color', 'gray');
      } else {
        $.ajax({
          url: '/lists/complete',
          method: 'POST',
          data: { title: toBuyItem.title, isComplete: false },
        });
        container.css('background-color', '');
      }
    });
  }


};
