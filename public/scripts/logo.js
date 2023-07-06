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
    <div class="list-item" id="container">
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



    const checkbox = $('#checkbox');
    const container = $('#container');
    const isChecked = todoItem.status;
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
          data: { title: todoItem.title, isComplete: true },
        });
        // If checkbox is checked, set the background color to gray
        container.css('background-color', 'gray');
      } else {
        $.ajax({
          url: '/lists/complete',
          method: 'POST',
          data: { title: todoItem.title, isComplete: false },
        });
        // If checkbox is unchecked, remove the background color
        container.css('background-color', '');
      }
    });


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

