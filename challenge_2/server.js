// *** Express Setup *** 
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// *** MiddleWare ***
app.use((req, res, next) => {
  console.log(`Received ${req.method} request to ${req.url}`);
  next();
})
app.use(bodyParser.json());


// *** Primary Post Request Handler ***
app.post('/', (req, res, next) => {

  var jsonData = req.body;
  var csvArray = [];
  var csvHeaders = ['id'];
  var csvValues = [];
  
  for (var key in jsonData) {
    if (key !== 'children') {
      csvHeaders.push(key);
    }
  }
  csvHeaders.push('parentId');
  
  var idIncrementer = 1;

  var recurse = function(obj, parentId) {
    var values = [];
    values.push(idIncrementer);
    idIncrementer++;

    for (var key in obj) {
      if (key !== 'children') {
        values.push(obj[key]);
      }
      if (key === 'children') {
        values.push(parentId);
        csvValues.push(values);
        if (obj[key].length > 0) {
          for (var i = 0; i < obj[key].length; i++) {
            var child = obj[key][i];
            recurse(child, parentId + 1);
          }
        }
      }
    }
  }

  recurse(jsonData, null);
  csvArray.push(csvHeaders);
  csvArray.push(csvValues);

  res.send(csvArray);
  next();
});

// *** Serve Up Index.html ***
app.use(express.static('./client'));

// *** Listen to Port ***
app.listen(3000, () => console.log('...app listening on port 3000!'));