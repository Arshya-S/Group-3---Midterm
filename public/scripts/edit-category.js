$(() => {
  const $container = $('#to-do-container');

  $container.on('click', '.edit-button', function(event) {
    event.preventDefault();
    const $listItem = $(this).closest('.list-item');
    const $button = $listItem.find('.edit-button');
    const $category = $listItem.find('.item-category');
    const $itemTitle = $listItem.find('.item-title').text().slice(7,);

    const $categoryChange = $(`
    <form id="new-category-form">
      <textarea name="new-category" id="category-input"></textarea>
      <button type="submit">Create</button>
    </form>
    `)


    $button.replaceWith($categoryChange);


    $categoryChange.on('submit', (event) => {
      event.preventDefault();

      const $userInput = $('#category-input').val();
      let categoryID = 0;

      if ($userInput == 'To Watch') {
        categoryID = 1;
      } else if ($userInput == 'To Eat') {
        categoryID = 2;
      } else if ($userInput == 'To Read') {
        categoryID = 3;
      } else if ($userInput == 'To Buy') {
        categoryID = 4;
      }


      $.ajax({
        url: '/lists',
        method: 'POST',
        data: {categoryID: categoryID, itemTitle: $itemTitle},
        success: (() => {
          console.log('ajax success');
        })


      })


      $category.text('Category: ' +  $userInput);
      $categoryChange.replaceWith($button)


    })
  });

});


