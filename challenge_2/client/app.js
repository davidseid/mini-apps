// client app should be able to submit JSON data to the server and display the resulting CSV response on the page

// basic reqs: JSON data entry on client should be done using HTML form with single textarea input field
// also need a submit button which sends the data via POST to the server
// prevent page reloads via submit button

// jquery is OK for ajax requests, DOM manipulation, and event handling
// use nodemon, no CSS styling is necessary


$(document).ready(function () {

  $('button').on('click', (e) => {
    e.preventDefault();

    // capture the current textarea field info
    // submit a post request to the server with that information
    var textInput = $('textarea').val();
    var JSONifiedInput = JSON.stringify(textInput);
   
    $.post('/', JSONifiedInput, (data) => {
      console.log(data);
    });
  });

})