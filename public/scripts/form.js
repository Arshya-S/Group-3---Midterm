$(() => {
  $('#task-submission').on('submit', (event) => {
    event.preventDefault();
    $.ajax({
      url: '/lists/new',
      method: 'POST',
      data: { title: $('#task-input').val() },
      success: () => {
        console.log('123');
        $('textarea').val('');
        $.ajax({
          url: '/lists',
          method: 'GET',
          success: (data => {
            renderTodoLists(data);
          })
        });
      }
    });
  });
});



const createNewTodoElement = function(todoItem) {
  const categories = ['To Watch', 'To Eat', 'To Read', 'To Buy'];
  const $container = $('#to-do-container');
  let $todo = `
    <div class="list-item" id="container">
      <div>
        <h3 class="item-title">Title: ${todoItem.title}</h3>
        <div class="category">
          <h3 class="item-category"> Category: ${categories[todoItem.category_id - 1]} </h3>
          <button class="edit-button">Edit</button>
        </div>
      </div>

      <div class="complete-checkbox">
        <label name="checkbox">Complete:&nbsp;</label>
        <input type="checkbox" class="checkbox" id="checkbox" name="checkbox">
      </div>
    </div>
  `;


  // takes return value and appends it to the tweets container
  $container.prepend($todo);


  //checkbox feature
  const checkbox = $('#checkbox');
  const container = $('#container');

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


const renderTodoLists = (todoItems) => {
  const $container = $('#to-do-container');
  $container.empty();

  for (const todoItem of todoItems) {
    createNewTodoElement(todoItem);
  }
};
