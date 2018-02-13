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


app.post('/', (req, res, next) => {

  // TODO: 
  // grab the form data as JSON string (probably via chunking)
  // convert it to CSV
  // send it back as stringified CSV




  res.send([1,2,3]);
  next();
});

app.use(express.static('./client'));

app.listen(3000, () => console.log('...app listening on port 3000!'));