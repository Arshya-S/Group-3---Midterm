$(() => {
  const $container = $('#to-do-container');

  $container.on('click', '.edit-button', function() {
    const $listItem = $(this).closest('.list-item');
    const $button = $listItem.find('.edit-button');
    const $category = $listItem.find('.item-category');

    const $categoryChange = $(`
    <form id="new-category-form">
      <textarea name="new-category" id="category-input"></textarea>
      <button type="submit">Create</button>
    </form>
    `)


    $button.replaceWith($categoryChange);

    $categoryChange.on('submit', (event) => {
      event.preventDefault();
      $category.text('Category: ' +  $('#category-input').val());
      $categoryChange.replaceWith($button)
    })
  });

});


