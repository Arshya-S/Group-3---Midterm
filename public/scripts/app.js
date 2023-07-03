// Client facing scripts here
$(() => {
  const toWatch = $('#to-watch');

  toWatch.on('click', () => {
    $.ajax({
      url: 'http://localhost:8080/1/watch',
      type: 'GET'
    })
    .done((res) => {
      console.log('ajax response: ',res);
    })
  });

});
