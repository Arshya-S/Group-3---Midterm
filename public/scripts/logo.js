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

    let $todo = `
    <div class="list-item">
      <h3 class="item-title">Title: ${todoItem.title}</h3>
      <div>
        <i class="fa-regular fa-pen-to-square"></i>&#160&#160
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

