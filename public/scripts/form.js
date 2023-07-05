$(() => {
  $('.task-submission').submit( (event) => {
    event.preventDefault();
    $.ajax({
      url: '/lists/1/new',
      method: 'POST',
      dataType: "json",
      data: {title: $('#task-input').val()},
      success: function(data) {
        console.log('Successful AJAX request');
        window.location.reload();
      },
      error: function(error) {
        console.log('AJAX request error:', error);
      }
    });
  });
});
