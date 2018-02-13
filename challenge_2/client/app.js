// client app should be able to submit JSON data to the server and display the resulting CSV response on the page

// basic reqs: JSON data entry on client should be done using HTML form with single textarea input field
// also need a submit button which sends the data via POST to the server
// prevent page reloads via submit button

// jquery is OK for ajax requests, DOM manipulation, and event handling
// use nodemon, no CSS styling is necessary


$(document).ready(function () {

  var appendCSVToDom = function(csvArray) {
    var firstLine = csvArray[0];
    var rest = csvArray.slice(1);
    $('.csv').text(firstLine);
    $('.csv').append('<br/>');
    $('.csv').append(rest);
    
  }

  $('button').on('click', (e) => {
    e.preventDefault();

    // capture the current textarea field info
    // submit a post request to the server with that information
    var json = $('textarea').val();
    
    $.ajax({
      url: 'http://localhost:3000',
      method: "POST",
      data: json,
      contentType: 'application/json',
      success: (data) => {
        console.log('Received response from server!');
        console.log(data);
        appendCSVToDom(data);
      },
      error: () => {
        console.log('Received error from server :(');
      }
    })

  });

})