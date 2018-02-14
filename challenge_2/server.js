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


  // CONVERT TO CSV
  // make a string to to hold everything
  // loop through the keys in the object
  // add each key, if not children, comma separated to the first line
  // for each key in the jsonObject, grab the associated values for each key
  // push them comma separated onto the string on their own line
  // recurse and do the same with every object in the children

  var csvArray = [];
  var csvHeaders = [];
  var csvValues = [];
  
  // Get headers
  for (var key in jsonData) {
    if (key !== 'children') {
      csvHeaders.push(key);
    }
  }
  
  var recurse = function(obj) {
    var values = [];
    for (var key in obj) {
      if (key !== 'children') {
        values.push(obj[key]);
      }
      console.log(values);
      if (key === 'children') {
        csvValues.push(values);
        if (obj[key].length > 0) {
          for (var i = 0; i < obj[key].length; i++) {
            var child = obj[key][i];
            recurse(child);
          }
        }
      }
    }
  }

  recurse(jsonData);
  
  // loop through the object
  // create an array of values
  // push each value to the array
  // for each object in children recurse



  // Get values from the first object and add underneath
  csvArray.push(csvHeaders);
  csvArray.push(csvValues);

  res.send(csvArray);
  next();
});

app.use(express.static('./client'));

app.listen(3000, () => console.log('...app listening on port 3000!'));