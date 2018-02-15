const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log(`${req.method} request received to ${req.url}`);
  next();
});

app.use(express.static('client'));





app.listen(3000, () => {console.log('App is listening to port 3000...')})

