// user express to serve up an index.html file and associated assets
const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log(`${req.method} received to ${req.url}`);
  next();
});

app.use(express.static('client'));

app.listen(3000, () => {
  console.log('App is listening on port 3000');
});