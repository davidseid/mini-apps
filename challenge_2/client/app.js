
$(document).ready(function () {

  var csvReport;

  var appendCSVToDom = function(csvArray) {
    var firstLine = csvArray[0];
    var rest = csvArray.slice(1)[0];
    $('.csv').text(firstLine);
    $('.csv').append('<br/>');
    console.log(rest);
    
    for (var i = 0; i < rest.length; i++) {
      var values = rest[i];
      $('.csv').append(values.join(','));
      $('.csv').append('<br/>');
    }
  }

  $('button').on('click', (e) => {
    e.preventDefault();

    var json = $('textarea').val();
    
    $.ajax({
      url: 'http://localhost:3000',
      method: "POST",
      data: json,
      contentType: 'application/json',
      success: (data) => {
        console.log('Received response from server!');
        csvReport = data;
        appendCSVToDom(data);
      },
      error: () => {
        console.log('Received error from server :(');
      }
    })

  });

})