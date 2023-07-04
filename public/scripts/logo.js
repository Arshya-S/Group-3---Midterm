$(() => {
  const $logo = $('#logo');

  $logo.on('click', () =>{
    $.ajax({
      url: 'http://localhost:8080/lists/1'


    });
  });







});
