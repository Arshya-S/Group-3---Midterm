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
  const $container = $('#to-do-container');

  let $todo = `
    <div class="list-item">
    <div>
      <h3 class="item-title">Title: ${todoItem.title}</h3>
      <div class="category">
        <h3 class="item-category"> Category:  </h3>
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

const renderTodoLists = (todoItems) => {
  const $container = $('#to-do-container');
  $container.empty();

  for (const todoItem of todoItems) {
    createNewTodoElement(todoItem);
  }
};
