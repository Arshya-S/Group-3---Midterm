const renderToWatch = (toWatchItems) => {
  const $container = $('#to-do-container').empty();

  for (const toWatchItem of toWatchItems) {
    const $item = $(`
    <div class="list-item">
      <h2>Title of movie: ${toWatchItem.title}</h2>
    </div>
  `);

  $container.append($item);
  }
}


$(() => {
  const toWatch = $('#to-watch');

  toWatch.on('click', () => {
    $.ajax({
      url: 'http://localhost:8080/lists/1/watch',
      type: 'GET',
      success: (data => {
        renderToWatch(data);
      })
    })

  });

});
