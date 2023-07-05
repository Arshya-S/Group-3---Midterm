// Function for rendering in HTML into container
const renderToWatch = (toWatchItems) => {
  const $container = $('#to-do-container').empty();

  for (const toWatchItem of toWatchItems) {
    const $item = $(`
    <div class="list-item">
      <h3 class="item-title">Title of movie: ${toWatchItem.title}</h3>
    </div>
  `);

  $container.append($item);
  }
}


$(() => {
  // To-Watch button behaviour
  const toWatch = $('#to-watch');
  toWatch.on('click', () => {
    $.ajax({
      url: '/lists/watch',
      type: 'GET',
      success: (data => {
        renderToWatch(data);
      })
    })

  });

  // // To-Eat button behaviour
  // const toEat = $('#to-eat');
  // toEat.on('click', () => {
  //   $.ajax({
  //     url: ''
  //   });
  // });

});
