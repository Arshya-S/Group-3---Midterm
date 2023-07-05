$(() => {
  const $logo = $('#logo');

  $logo.on('click', () => {
    $.ajax({
      url: '/lists',
      type: 'GET',
      success: (data => {
        renderTodoLists(data);
      })
    });
  });

  const $checkbox = $('#checkbox');
  const $listItem = $('.list-item');
  $checkbox.change(function() {
    if ($checkbox.checked == true) {
      $listItem.css('background', 'gray');
    }
  });

  // Function to create new HTML element and prepend it
  const createNewTodoElement = function(todoItem) {
    const $container = $('#to-do-container');
    let category = '';
    if (todoItem.category_id === 1) {
      category = 'To Watch';
    } else if (todoItem.category_id === 2) {
      category = 'To Eat';
    } else if (todoItem.category_id === 3) {
      category = 'To Read';
    } else if (todoItem.category_id === 4) {
      category = 'To Buy';
    }

    let $todo = `
    <div class="list-item">
      <div>
        <h3 class="item-title">Title: ${todoItem.title}</h3>
        <div class="category">
          <h3 class="item-category"> Category: ${category} </h3>
          <button class="edit-button">Edit</button>
        </div>
      </div>

      <div>
        <input type="checkbox" id="checkbox" name="checkbox">
        <label name="checkbox"></label>
      </div>
    </div>
  `;

    // takes return value and appends it to the tweets container
    $container.prepend($todo);
  };


  // Function to render it into container
  const renderTodoLists = (todoItems) => {
    const $container = $('#to-do-container');
    $container.empty();

    for (const todoItem of todoItems) {
      createNewTodoElement(todoItem);
    }
  };

});

