// serve up an index.html file and associateda assets via express
// recieve JSON data from client app, and send back CSV formatted response
// implement report generation logic on the server without external libraries

// create a package.json to store project dependencies

// assume the JSON data is regular. 
// flatten and map the JSON into a single line of CSV
  // assume child properties in JSON will be in property called children, assume no other props
   // any props besides children must be mapped to a column in CSV


const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use((req, res, next) => {
  console.log(`Received ${req.method} request to ${req.url}`);
  next();
})

app.use(bodyParser.json());

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

app.use(express.static('./client'));

app.listen(3000, () => console.log('...app listening on port 3000!'));