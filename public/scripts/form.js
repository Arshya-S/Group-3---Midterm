$(() => {
  // const data = [
  //   {
  //     "task": "Watch spider-man"
  //     }
  // ];

  const renderTasks = function(tasks) {
    const $task = $('#to-do-container');
    $task.empty();

    for (const task of tasks) {
      const $taskInfo = createTask(task);
      $task.prepend($taskInfo);
    };
  };

  const createTask = (data) => {
    const $task = $(`
    <div class="old-task">${data.task}</div>
    `);

    $task.find('.old-task').text(data.task);

    return $task;
  };

  $('.task-submission').on("submit", function(event) {
    event.preventDefault();
    console.log("successful input");
    if ($('#task-input').val() === "" || $('#task-input').val() === null) {
      alert(`Please type in a task`);
      return;
    }

    const data = $('.task-submission').serialize();

    $.ajax({
      url: '/lists/1/new',
      method: 'POST',
      data: data,
      success: () => {
        loadTasks();

        $('#task-input').val('');
        //$('.error').hide()
      }
    });
  });

  const loadTasks = () => {
    $.ajax({
      url: '/lists/1/new',
      method: 'GET',
      success: (data) => {
        renderTasks(data);
      }
    });
  };

  loadTasks();
  //$('.error').hide();
});
