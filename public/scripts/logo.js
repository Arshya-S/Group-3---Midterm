const renderTodoList = (todoItems) => {
  const $container = $('#to-do-container').empty();

  for (const todoItem of todoItems) {
    const $item = $(`
    <div class="list-item">
      <h2>Title: ${todoItem.title}</h2>
    </div>
    `);

    $container.append($item);
  }
}


$(() => {
  const $logo = $('#logo');

  $logo.on('click', () =>{
    $.ajax({
      url: 'http://localhost:8080/lists/1',
      type: 'GET',
      success: (data => {
        renderTodoList(data);
      })


    });
  });
});
